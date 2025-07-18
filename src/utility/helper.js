export const calculateCoreMarket = (inputData) => {
  const {
    homeScore = 0,
    awayScore = 0,
    result = null, // e.g., "1", "X", "2", "1X", "12", "X2", "yes", "no", "over", "under"
    stake = 100,
    odds = 1,
    name = "", // e.g., "1x2", "double_chance", "btts", "over_under"
  } = inputData || {};

  const stakeAmount = parseFloat(stake);
  const decimalOdds = parseFloat(odds);
  let outcome = "Loss";
  let profit = -stakeAmount;

  // Helper function to calculate profit
  const calculateProfit = (won) => {
    if (won) {
      profit = stakeAmount * (decimalOdds - 1);
      outcome = "Win";
    } else {
      profit = -stakeAmount;
      outcome = "Loss";
    }
  };

  // Main logic
  if (name === "1x2") {
    const winner =
      homeScore > awayScore ? "1" : homeScore < awayScore ? "2" : "X";
    calculateProfit(winner === result);
  } else if (name === "double_chance") {
    const winner =
      homeScore > awayScore ? "1" : homeScore < awayScore ? "2" : "X";
    const validResults = result.split(""); // e.g., "1X" => ["1", "X"]
    calculateProfit(validResults.includes(winner));
  } else if (name === "btts") {
    const bothScore = homeScore > 0 && awayScore > 0;
    const prediction = result.toLowerCase(); // "yes" or "no"
    calculateProfit(
      (prediction === "yes" && bothScore) || (prediction === "no" && !bothScore)
    );
  } else if (name === "over_under") {
    const totalGoals = homeScore + awayScore;
    const [type, thresholdStr] = result.toLowerCase().split("_"); // e.g., "over_2.5"
    const threshold = parseFloat(thresholdStr);

    if (type === "over") calculateProfit(totalGoals > threshold);
    else if (type === "under") calculateProfit(totalGoals < threshold);
    else calculateProfit(false); // invalid input
  } else {
    outcome = "Invalid market";
    profit = 0;
  }

  return {
    outcome,
    profit: parseFloat(profit.toFixed(2)),
    payout: parseFloat(stake) + parseFloat(profit.toFixed(2)),
  };
};

export const calculateHandicap = (inputData) => {
  const {
    homeScore = 0,
    awayScore = 0,
    stake = 100,
    handicap = 0,
    odds = 1,
  } = inputData || {};

  const hcp = parseFloat(handicap);
  const stakeAmount = parseFloat(stake);
  const decimalOdds = parseFloat(odds);

  const isQuarter = Math.abs(hcp % 1) === 0.25;

  const applyHcp = (hcpPart) => {
    const adjustedHome = homeScore + hcpPart;
    if (adjustedHome > awayScore) return "win";
    if (adjustedHome === awayScore) return "draw";
    return "loss";
  };

  if (isQuarter) {
    const firstPart = Math.floor(hcp * 2) / 2;
    const secondPart = firstPart + 0.5;
    const halfStake = stakeAmount / 2;

    const res1 = applyHcp(firstPart);
    const res2 = applyHcp(secondPart);

    let totalProfit = 0;

    [res1, res2].forEach((r) => {
      if (r === "win") {
        totalProfit += halfStake * (decimalOdds - 1);
      } else if (r === "draw") {
        totalProfit += 0; // stake returned
      } else {
        totalProfit -= halfStake;
      }
    });

    let outcome = "Loss";
    if (totalProfit === stakeAmount * (decimalOdds - 1)) outcome = "Win";
    else if (totalProfit === (stakeAmount * (decimalOdds - 1)) / 2)
      outcome = "Half Win";
    else if (totalProfit === 0) outcome = "Push";
    else if (totalProfit === -stakeAmount / 2) outcome = "Half Loss";

    return {
      outcome,
      profit: parseFloat(totalProfit.toFixed(2)),
    };
  }

  // Full or half handicaps
  const result = applyHcp(hcp);
  let profit = 0;

  if (result === "win") {
    profit = stakeAmount * (decimalOdds - 1);
  } else if (result === "draw") {
    profit = 0;
  } else {
    profit = -stakeAmount;
  }

  const outcomeMap = {
    win: "Win",
    draw: "Push",
    loss: "Loss",
  };

  return {
    outcome: outcomeMap[result],
    profit: parseFloat(profit.toFixed(2)),
    payout: parseFloat(stake) + parseFloat(profit.toFixed(2)),
  };
};
