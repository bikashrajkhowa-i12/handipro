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
    stake,
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
    team = "home",
  } = inputData || {};

  const isHomeTeam = team.toLowerCase() === "home";
  const teamScore = isHomeTeam ? homeScore : awayScore;
  const opponentScore = isHomeTeam ? awayScore : homeScore;

  const hcp = parseFloat(handicap);
  const stakeAmount = parseFloat(stake);
  const decimalOdds = parseFloat(odds);

  const applyHandicap = (hcpVal) => {
    const adjusted = teamScore + hcpVal;
    if (adjusted > opponentScore) return "win";
    if (adjusted < opponentScore) return "loss";
    return "draw";
  };

  let profit = 0;
  let outcome = "Loss";

  // Handle quarter handicaps (like -0.25, +0.75)
  if (Math.abs(hcp % 0.5) === 0.25) {
    const halfStake = stakeAmount / 2;
    const low = hcp > 0 ? Math.floor(hcp * 2) / 2 : Math.ceil(hcp * 2) / 2;
    const high = low + (hcp > 0 ? 0.25 : -0.25);

    const res1 = applyHandicap(low);
    const res2 = applyHandicap(high);

    let totalReturn = 0;

    [res1, res2].forEach((res) => {
      if (res === "win") totalReturn += halfStake * decimalOdds;
      else if (res === "draw") totalReturn += halfStake;
      // loss returns nothing
    });

    profit = totalReturn - stakeAmount;

    if (res1 === "win" && res2 === "win") outcome = "Win";
    else if ([res1, res2].includes("win") && [res1, res2].includes("draw"))
      outcome = "Half Win";
    else if (res1 === "draw" && res2 === "draw") outcome = "Push";
    else if ([res1, res2].includes("loss") && [res1, res2].includes("draw"))
      outcome = "Half Loss";
    else outcome = "Loss";
  } else {
    // For full or half handicaps
    const result = applyHandicap(hcp);
    if (result === "win") {
      outcome = "Win";
      profit = stakeAmount * (decimalOdds - 1);
    } else if (result === "draw") {
      if (hcp % 1 === 0) {
        outcome = "Push";
        profit = 0;
      } else {
        outcome = "Loss";
        profit = -stakeAmount;
      }
    } else {
      outcome = "Loss";
      profit = -stakeAmount;
    }
  }

  const payout =
    profit > 0 ? stakeAmount + profit : profit === 0 ? stakeAmount : 0;

  return {
    outcome,
    stake: stakeAmount,
    profit: +profit.toFixed(2),
    payout: +payout.toFixed(2),
  };
};
