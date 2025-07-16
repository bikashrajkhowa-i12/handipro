export const coreMarkets = [
  "1X2",
  "double_chance",
  "handicap",
  "over/under",
  "btts",
  "correct_score",
  "corners",
  "cards",
];

// export const markets = [
//   {
//     category: "Main Match Outcome",
//     items: [
//       {
//         key: "1x2",
//         name: "1 X 2",
//         emoji: "🥇",
//         description:
//           "Predict if the home team wins (1), the match ends in a draw (X), or the away team wins (2).",
//       },
//       {
//         key: "double_chance",
//         name: "Double Chance",
//         emoji: "🔁",
//         description:
//           "Cover two possible outcomes in a single match, such as 1X, X2, or 12.",
//       },
//       {
//         key: "handicap",
//         name: "Handicap",
//         emoji: "⚖️",
//         description:
//           "Predict outcomes adjusted by goal differences to balance team strength.",
//       },
//       {
//         key: "half_time_full_time",
//         name: "Half Time / Full Time",
//         emoji: "⏱️",
//         description:
//           "Predict the result at both half time and full time of the match.",
//       },
//       {
//         key: "either_half_wins",
//         name: "Either Half Wins",
//         emoji: "🕓",
//         description:
//           "Predict if a team will win at least one half of the match.",
//       },
//     ],
//   },
//   {
//     category: "Goals",
//     items: [
//       {
//         key: "over_under",
//         name: "Over/Under",
//         emoji: "📉",
//         description:
//           "Predict whether the total number of goals will be over or under a given line.",
//       },
//       {
//         key: "btts",
//         name: "BTTS",
//         emoji: "🎯",
//         description: "Predict whether both teams will score at least one goal.",
//       },
//       {
//         key: "exact_goals",
//         name: "Exact Goals",
//         emoji: "🔢",
//         description:
//           "Predict the exact total number of goals scored in the match.",
//       },
//       {
//         key: "team_goals",
//         name: "Team Goals",
//         emoji: "⚽",
//         description:
//           "Predict how many goals a specific team will score in the match.",
//       },
//     ],
//   },
//   {
//     category: "Time-Based",
//     items: [
//       {
//         key: "first_half_result",
//         name: "First Half Result",
//         emoji: "🕐",
//         description:
//           "Predict the outcome of the match at the end of the first half.",
//       },
//       {
//         key: "second_half_result",
//         name: "Second Half Result",
//         emoji: "🕑",
//         description:
//           "Predict the outcome of the second half only, ignoring the first.",
//       },
//       {
//         key: "goal_in_both_halves",
//         name: "Goal in Both Halves",
//         emoji: "⏳",
//         description:
//           "Predict whether a team will score in both halves of the match.",
//       },
//       {
//         key: "first_team_to_score",
//         name: "First Team to Score",
//         emoji: "🚀",
//         description:
//           "Predict which team will score the opening goal of the match.",
//       },
//     ],
//   },
//   {
//     category: "Stats-Based",
//     items: [
//       {
//         key: "corners",
//         name: "Corners",
//         emoji: "🚩",
//         description:
//           "Predict the total number of corner kicks during the match.",
//       },
//       {
//         key: "cards",
//         name: "Cards",
//         emoji: "🟨",
//         description:
//           "Predict the number of yellow or red cards shown in the match.",
//       },
//       {
//         key: "shots_on_target",
//         name: "Shots on Target",
//         emoji: "🎯",
//         description:
//           "Predict the total number of shots on target by both teams.",
//       },
//       {
//         key: "possession",
//         name: "Possession",
//         emoji: "📊",
//         description:
//           "Predict which team will have higher possession, or by how much.",
//       },
//     ],
//   },
//   {
//     category: "Advanced",
//     items: [
//       {
//         key: "correct_score",
//         name: "Correct Score",
//         emoji: "🧠",
//         description: "Predict the exact final scoreline of the match.",
//       },
//       {
//         key: "winning_margin",
//         name: "Winning Margin",
//         emoji: "📐",
//         description: "Predict the goal difference by which a team will win.",
//       },
//       {
//         key: "clean_sheet",
//         name: "Clean Sheet",
//         emoji: "🧼",
//         description:
//           "Predict whether a team will prevent the opponent from scoring.",
//       },
//       {
//         key: "player_to_score",
//         name: "Player to Score",
//         emoji: "👟",
//         description:
//           "Predict if a specific player will score during the match.",
//       },
//       {
//         key: "multi_outcomes",
//         name: "Multi Outcomes",
//         emoji: "🧩",
//         description:
//           "Combine two or more predictions like 'Team A to Win + Over 2.5 Goals'.",
//       },
//     ],
//   },
// ];

export const markets = [
  {
    category: "Main Match Outcome",
    items: [
      {
        key: "1x2",
        name: "1 X 2",
        emoji: "🥇",
        info: "Predict if the home team wins (1), the match ends in a draw (X), or the away team wins (2).",
        description:
          "This is the most common type of prediction. You select whether the home team (1), the away team (2), or a draw (X) will be the final outcome. For example, if Manchester United is playing Chelsea, and you think Manchester United will win, you choose '1'. If you expect a tie, choose 'X'. If Chelsea is your pick to win, select '2'. This forecast is based on the result after 90 minutes plus injury time.",
      },
      {
        key: "double_chance",
        name: "Double Chance",
        emoji: "🔁",
        info: "Cover two possible outcomes in a single match, such as 1X, X2, or 12.",
        description:
          "This prediction format allows you to select two possible match outcomes, improving your chances of success. The options are: 1X (home win or draw), X2 (away win or draw), or 12 (either team wins). For example, selecting 1X in a match between Liverpool and Arsenal means you expect Liverpool to either win or draw.",
      },
      {
        key: "handicap",
        name: "Handicap",
        emoji: "⚖️",
        info: "Predict outcomes adjusted by goal differences to balance team strength.",
        description:
          "Handicap scenarios simulate a level playing field by virtually adjusting the score before the match begins. For example, if Manchester City is much stronger than Burnley, Burnley might be given a +1.5 goal head start. Choosing Manchester City -1.5 means they must win by 2 or more goals for your prediction to be correct.",
      },
      {
        key: "half_time_full_time",
        name: "Half Time / Full Time",
        emoji: "⏱️",
        info: "Predict the result at both half time and full time of the match.",
        description:
          "Here, you forecast the match result at both halftime and full time. For example, selecting 'Draw / Home' means the match is expected to be tied at halftime and the home team will lead at full time. All combinations are possible (e.g., Home/Home, Draw/Draw, Away/Home), offering a more advanced level of outcome prediction.",
      },
      {
        key: "either_half_wins",
        name: "Either Half Wins",
        emoji: "🕓",
        info: "Predict if a team will win at least one half of the match.",
        description:
          "You forecast that a team will outperform the opponent in at least one of the two halves. For instance, if you choose Team A and they score more than Team B in the second half (even if they lose overall), your prediction is accurate.",
      },
    ],
  },
  {
    category: "Goals",
    items: [
      {
        key: "over_under",
        name: "Over/Under",
        emoji: "📉",
        info: "Predict whether the total number of goals will be over or under a given line.",
        description:
          "You forecast whether the combined number of goals scored by both teams will exceed (over) or stay below (under) a specific number. For example, predicting Over 2.5 goals means you expect at least 3 total goals in the match. If the match ends 2-1, your prediction is successful.",
      },
      {
        key: "btts",
        name: "BTTS",
        emoji: "🎯",
        info: "Predict whether both teams will score at least one goal.",
        description:
          "BTTS stands for Both Teams To Score. You are forecasting whether each team will score at least once. For example, if the match ends 1-1, 2-1, or 3-2, the prediction is correct. If either team fails to score, it's incorrect.",
      },
      {
        key: "exact_goals",
        name: "Exact Goals",
        emoji: "🔢",
        info: "Predict the exact total number of goals scored in the match.",
        description:
          "You predict the exact number of total goals in a match. For example, if you forecast '3 goals', and the game ends 2-1, your prediction is correct. Any other total would not match.",
      },
      {
        key: "team_goals",
        name: "Team Goals",
        emoji: "⚽",
        info: "Predict how many goals a specific team will score in the match.",
        description:
          "You forecast the number of goals a particular team will score. For example, predicting that Barcelona will score Over 2.5 means they need to score at least 3 goals, regardless of the opponent’s score.",
      },
    ],
  },
  {
    category: "Time-Based",
    items: [
      {
        key: "first_half_result",
        name: "First Half Result",
        emoji: "🕐",
        info: "Predict the outcome of the match at the end of the first half.",
        description:
          "You predict the score status at halftime. For example, selecting 'Home' means you expect the home team to be leading at the halfway point, regardless of the final score.",
      },
      {
        key: "second_half_result",
        name: "Second Half Result",
        emoji: "🕑",
        info: "Predict the outcome of the second half only, ignoring the first.",
        description:
          "This forecast is based solely on the performance in the second half. For example, if a match is 0-1 at halftime and ends 2-1, the second half result is 2-0 for the home team.",
      },
      {
        key: "goal_in_both_halves",
        name: "Goal in Both Halves",
        emoji: "⏳",
        info: "Predict whether a team will score in both halves of the match.",
        description:
          "You forecast that a team will score at least once in each half. For example, if Team A scores once in the first half and again in the second, your prediction is accurate.",
      },
      {
        key: "first_team_to_score",
        name: "First Team to Score",
        emoji: "🚀",
        info: "Predict which team will score the opening goal of the match.",
        description:
          "This market lets you forecast which team will score first. For example, if Team B scores the first goal—even if they later lose—the prediction is correct. If no goals are scored, the selection may be void or considered unsuccessful depending on the platform.",
      },
    ],
  },
  {
    category: "Stats-Based",
    items: [
      {
        key: "corners",
        name: "Corners",
        emoji: "🚩",
        info: "Predict the total number of corner kicks during the match.",
        description:
          "You forecast how many corner kicks will occur during the match. For instance, predicting ‘Over 9.5 corners’ means you expect 10 or more corners in total, across both teams.",
      },
      {
        key: "cards",
        name: "Cards",
        emoji: "🟨",
        info: "Predict the number of yellow or red cards shown in the match.",
        description:
          "This market involves forecasting the number of disciplinary cards shown. For example, selecting 'Over 3.5 cards' means you expect at least 4 yellow or red cards combined.",
      },
      {
        key: "shots_on_target",
        name: "Shots on Target",
        emoji: "🎯",
        info: "Predict the total number of shots on target by both teams.",
        description:
          "You predict the total number of shots that would score if not saved. For example, if you select ‘Over 7.5 shots on target’, and the match features 8 or more such shots, your outcome is correct.",
      },
      {
        key: "possession",
        name: "Possession",
        emoji: "📊",
        info: "Predict which team will have higher possession, or by how much.",
        description:
          "You forecast which team will control more of the ball. For example, predicting that Team A will have over 55% possession means you expect them to control most of the match.",
      },
    ],
  },
  {
    category: "Advanced",
    items: [
      {
        key: "correct_score",
        name: "Correct Score",
        emoji: "🧠",
        info: "Predict the exact final scoreline of the match.",
        description:
          "You forecast the exact final score. For example, predicting 2-1 means the match must end exactly 2-1. Any other score will not match your forecast.",
      },
      {
        key: "winning_margin",
        name: "Winning Margin",
        emoji: "📐",
        info: "Predict the goal difference by which a team will win.",
        description:
          "You forecast the difference in goals between the winning and losing teams. For instance, if you choose 'Win by 2 goals' and the match ends 3-1, your prediction is successful.",
      },
      {
        key: "clean_sheet",
        name: "Clean Sheet",
        emoji: "🧼",
        info: "Predict whether a team will prevent the opponent from scoring.",
        description:
          "This market involves forecasting that a team will not concede any goals. For example, predicting that Team A keeps a clean sheet means their opponent must score 0 goals.",
      },
      {
        key: "player_to_score",
        name: "Player to Score",
        emoji: "👟",
        info: "Predict if a specific player will score during the match.",
        description:
          "You select a specific player you expect to score. For example, forecasting that Erling Haaland will score means he must get at least one goal during the match for your prediction to be correct.",
      },
      {
        key: "multi_outcomes",
        name: "Multi Outcomes",
        emoji: "🧩",
        info: "Combine two or more predictions like 'Team A to Win + Over 2.5 Goals'.",
        description:
          "You combine multiple conditions into one prediction. For example, selecting ‘Team A to win and Over 2.5 goals’ means both must occur. If either part fails, the overall forecast is unsuccessful.",
      },
    ],
  },
];
