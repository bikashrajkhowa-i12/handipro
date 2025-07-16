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

export const markets = [
  {
    category: "Main Match Outcome",
    items: [
      {
        key: "1x2",
        name: "1 X 2",
        emoji: "🥇",
        description:
          "Predict if the home team wins (1), the match ends in a draw (X), or the away team wins (2).",
      },
      {
        key: "double_chance",
        name: "Double Chance",
        emoji: "🔁",
        description:
          "Cover two possible outcomes in a single match, such as 1X, X2, or 12.",
      },
      {
        key: "handicap",
        name: "Handicap",
        emoji: "⚖️",
        description:
          "Predict outcomes adjusted by goal differences to balance team strength.",
      },
      {
        key: "half_time_full_time",
        name: "Half Time / Full Time",
        emoji: "⏱️",
        description:
          "Predict the result at both half time and full time of the match.",
      },
      {
        key: "either_half_wins",
        name: "Either Half Wins",
        emoji: "🕓",
        description:
          "Predict if a team will win at least one half of the match.",
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
        description:
          "Predict whether the total number of goals will be over or under a given line.",
      },
      {
        key: "btts",
        name: "BTTS",
        emoji: "🎯",
        description: "Predict whether both teams will score at least one goal.",
      },
      {
        key: "exact_goals",
        name: "Exact Goals",
        emoji: "🔢",
        description:
          "Predict the exact total number of goals scored in the match.",
      },
      {
        key: "team_goals",
        name: "Team Goals",
        emoji: "⚽",
        description:
          "Predict how many goals a specific team will score in the match.",
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
        description:
          "Predict the outcome of the match at the end of the first half.",
      },
      {
        key: "second_half_result",
        name: "Second Half Result",
        emoji: "🕑",
        description:
          "Predict the outcome of the second half only, ignoring the first.",
      },
      {
        key: "goal_in_both_halves",
        name: "Goal in Both Halves",
        emoji: "⏳",
        description:
          "Predict whether a team will score in both halves of the match.",
      },
      {
        key: "first_team_to_score",
        name: "First Team to Score",
        emoji: "🚀",
        description:
          "Predict which team will score the opening goal of the match.",
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
        description:
          "Predict the total number of corner kicks during the match.",
      },
      {
        key: "cards",
        name: "Cards",
        emoji: "🟨",
        description:
          "Predict the number of yellow or red cards shown in the match.",
      },
      {
        key: "shots_on_target",
        name: "Shots on Target",
        emoji: "🎯",
        description:
          "Predict the total number of shots on target by both teams.",
      },
      {
        key: "possession",
        name: "Possession",
        emoji: "📊",
        description:
          "Predict which team will have higher possession, or by how much.",
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
        description: "Predict the exact final scoreline of the match.",
      },
      {
        key: "winning_margin",
        name: "Winning Margin",
        emoji: "📐",
        description: "Predict the goal difference by which a team will win.",
      },
      {
        key: "clean_sheet",
        name: "Clean Sheet",
        emoji: "🧼",
        description:
          "Predict whether a team will prevent the opponent from scoring.",
      },
      {
        key: "player_to_score",
        name: "Player to Score",
        emoji: "👟",
        description:
          "Predict if a specific player will score during the match.",
      },
      {
        key: "multi_outcomes",
        name: "Multi Outcomes",
        emoji: "🧩",
        description:
          "Combine two or more predictions like 'Team A to Win + Over 2.5 Goals'.",
      },
    ],
  },
];
