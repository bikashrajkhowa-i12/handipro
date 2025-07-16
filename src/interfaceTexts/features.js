export const markets = {
  main_match_outcome: [
    "1X2",
    "double_chance",
    "handicap",
    "half_time/full_time",
    "either_half_wins",
  ],
  goals: ["over/under", "btts", "exact_goals", "team_goals"],
  time_based: [
    "first_half_result",
    "second_half_result",
    "goal_in_both_halves",
    "first_team_to_score",
  ],
  stats_based: ["corners", "cards", "shots_on_target", "possession"],
  advanced: [
    "correct_score",
    "winning_margin", //Home to win by 1 goal
    "clean_sheet",
    "player_to_score",
    "multi_bets", // 1 + over2.5
  ],
};
