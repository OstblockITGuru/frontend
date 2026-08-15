module.exports = {
    gameTypes: {
        1: {
            title: "X01",
            goal: "Reduce the selected starting score to exactly zero.",
            scoring: "Each visit reduces the remaining score.",
            winning: "Finish on exactly zero using the selected Any, Double or Master Out option.",
            specialRules: ["Invalid finishing or remainder situations bust according to KCApp X01 logic."]
        },
        2: {
            title: "9 Dart Shootout",
            goal: "Score as many points as possible with the normal 9-dart round.",
            scoring: "Each player gets 9 darts and the visit total is added to the score.",
            winning: "The highest total score wins.",
            specialRules: ["KCApp can use additional equal-length visits as a tie-break when the match mode requires it."]
        },
        3: {
            title: "X01 Handicap",
            goal: "Reduce the assigned starting score to exactly zero.",
            scoring: "The core scoring follows X01.",
            winning: "Finish on exactly zero using the selected outshot option.",
            specialRules: ["Players can start from different scores according to the configured handicap."]
        },
        4: {
            title: "Cricket",
            goal: "Close 15, 16, 17, 18, 19, 20 and Bull while finishing with the lowest score.",
            scoring: "Three marks close a target. Extra marks on a closed target score points for opponents who have not closed it.",
            winning: "Close all targets and have the lowest score under KCApp winner rules.",
            specialRules: ["KCApp uses Cut-Throat scoring, not normal high-score Cricket."]
        },
        5: {
            title: "Darts at X",
            goal: "Earn the highest mark total on the selected target during 99 darts.",
            scoring: "Singles, doubles and triples count as 1, 2 and 3 marks.",
            winning: "The highest final mark total wins.",
            specialRules: []
        },
        6: {
            title: "Around the World",
            goal: "Complete the sequence from 1 through 20 and then Bull.",
            scoring: "Only the current target scores in each round. Multipliers count as marks.",
            winning: "The highest score after the sequence wins.",
            specialRules: ["The game has 21 rounds: targets 1 to 20, then Bull."]
        },
        7: {
            title: "Shanghai",
            goal: "Score through targets 1 to 20.",
            scoring: "Only the current target scores in each round.",
            winning: "A single, double and triple of the current target in one visit wins immediately; otherwise the highest final score or mark total wins according to KCApp.",
            specialRules: []
        },
        8: {
            title: "Around the Clock",
            goal: "Progress through 1 to 20 and then Bull.",
            scoring: "A valid hit on the current target advances the sequence immediately.",
            winning: "Bull completes the sequence.",
            specialRules: ["For targets 1 to 20, multipliers do not advance extra steps. KCApp accepts its implemented Bull hit variants."]
        },
        9: {
            title: "Tic Tac Toe",
            goal: "Claim three fields in a row on the generated checkout board.",
            scoring: "Claim a field by matching its exact visit total with a valid finishing dart under the selected outshot rule.",
            winning: "Three claimed fields in a row win. A blocked board can finish as a draw.",
            specialRules: ["KCApp generates nine checkout target values for the board."]
        },
        10: {
            title: "Bermuda Triangle",
            goal: "Score as much as possible across KCApp's 13-target sequence.",
            scoring: "Valid hits add score.",
            winning: "The highest final score wins.",
            specialRules: ["A complete round scoring zero on the required target halves the player's current score."]
        },
        11: {
            title: "420",
            goal: "Reduce 420 through the configured sequence of 21 doubles.",
            scoring: "Only the current required double reduces the remaining score.",
            winning: "The lowest remaining score after the sequence wins.",
            specialRules: []
        },
        12: {
            title: "Kill Bull",
            goal: "Reduce the configured starting value to zero or below with Bulls.",
            scoring: "Outer and inner Bull reduce the score by 25 and 50.",
            winning: "Reaching zero or below completes the game according to KCApp.",
            specialRules: ["A visit without a Bull resets the player to the original starting value."]
        },
        13: {
            title: "Gotcha",
            goal: "Reach the configured target exactly.",
            scoring: "Players build score from zero toward the target.",
            winning: "Reach the target exactly; exceeding it busts the visit.",
            specialRules: ["Matching an opponent's current score exactly sends that opponent back to zero."]
        },
        14: {
            title: "JDC Practice",
            goal: "Score as highly as possible through KCApp's fixed JDC practice sequence.",
            scoring: "The sequence includes Shanghai and Double sections with KCApp's implemented bonuses.",
            winning: "The highest final score wins.",
            specialRules: ["Shanghai completion awards the implemented 100-point bonus. Double and Double Bull sections follow KCApp scoring."]
        },
        15: {
            title: "Knockout",
            goal: "Remain the last player with lives.",
            scoring: "After the opening visit, a player must equal or beat the immediately preceding visit score.",
            winning: "A lower visit costs a life. The last player with lives wins.",
            specialRules: []
        },
        16: {
            title: "Scam",
            goal: "Score the most points across the rotating stopper phases.",
            scoring: "The stopper closes numbers 1 to 20 with valid singles; other players score on numbers not yet closed.",
            winning: "After all stopper phases, the highest score wins.",
            specialRules: ["The stopper role rotates between players."]
        },
        17: {
            title: "170",
            goal: "Complete repeated 170 checkouts using Double Out.",
            scoring: "Each attempt has KCApp's 9-dart limit. A successful checkout awards one point and resets the player to 170.",
            winning: "The first player to reach the configured points-to-win wins.",
            specialRules: []
        }
    },

    matchModes: {
        1: {
            id: 1,
            title: "No sets / BO1",
            goal: "Decide the match in one leg.",
            scoring: "The selected game type supplies the leg rules.",
            winning: "The player who wins the leg wins the match.",
            specialRules: []
        },
        2: {
            id: 2,
            title: "First to win 2 / BO3",
            goal: "Win two legs before the opponent.",
            scoring: "Up to three legs can be played.",
            winning: "The first player to win two legs wins the match.",
            specialRules: []
        },
        3: {
            id: 3,
            title: "First to win 3 / BO5",
            goal: "Win three legs before the opponent.",
            scoring: "Up to five legs can be played.",
            winning: "The first player to win three legs wins the match.",
            specialRules: []
        },
        4: {
            id: 4,
            title: "Best of 2 / BO2",
            goal: "Play the configured two-leg match.",
            scoring: "Exactly two legs are played.",
            winning: "The player with more leg wins wins the match; an equal split can result in a draw.",
            specialRules: []
        },
        5: {
            id: 5,
            title: "Best of 4 / BO4",
            goal: "Play the configured four-leg match.",
            scoring: "Exactly four legs are played.",
            winning: "The player with more leg wins wins the match; an equal split can result in a draw.",
            specialRules: []
        },
        6: {
            id: 6,
            title: "First to win 4 / BO7",
            goal: "Win four legs before the opponent.",
            scoring: "Up to seven legs can be played.",
            winning: "The first player to win four legs wins the match.",
            specialRules: []
        },
        7: {
            id: 7,
            title: "Best of 2 (Shootout) / BO2-NDS",
            goal: "Decide the match through two legs and a possible shootout.",
            scoring: "Two legs are played; a split result uses the 9 Dart Shootout tie-break.",
            winning: "The winner of the two-leg result or shootout wins the match.",
            specialRules: ["This mode has a 9 Dart Shootout tie-break and does not allow a draw."]
        },
        8: {
            id: 8,
            title: "Best of 4 (Shootout) / BO4-NDS",
            goal: "Decide the match through four legs and a possible shootout.",
            scoring: "Four legs are played; a split result uses the 9 Dart Shootout tie-break.",
            winning: "The winner of the four-leg result or shootout wins the match.",
            specialRules: ["This mode has a 9 Dart Shootout tie-break and does not allow a draw."]
        },
        9: {
            id: 9,
            title: "First to win 5 / BO9",
            goal: "Win five legs before the opponent.",
            scoring: "Up to nine legs can be played.",
            winning: "The first player to win five legs wins the match.",
            specialRules: []
        },
        10: {
            id: 10,
            title: "First to win 6 / BO11",
            goal: "Win six legs before the opponent.",
            scoring: "Up to eleven legs can be played.",
            winning: "The first player to win six legs wins the match.",
            specialRules: []
        },
        11: {
            id: 11,
            title: "First to win 7 / BO13",
            goal: "Win seven legs before the opponent.",
            scoring: "Up to thirteen legs can be played.",
            winning: "The first player to win seven legs wins the match.",
            specialRules: []
        },
        12: {
            id: 12,
            title: "First to win 8 / BO15",
            goal: "Win eight legs before the opponent.",
            scoring: "Up to fifteen legs can be played.",
            winning: "The first player to win eight legs wins the match.",
            specialRules: []
        },
        13: {
            id: 13,
            title: "Best of 6 / BO6",
            goal: "Play the configured six-leg match.",
            scoring: "Exactly six legs are played.",
            winning: "The player with more leg wins wins the match; an equal split can result in a draw.",
            specialRules: []
        },
        14: {
            id: 14,
            title: "Kingslayer Challenge / KNGSLR-BO5",
            goal: "Win the configured Kingslayer challenge match.",
            scoring: "The mode is configured as a best-of-five match.",
            winning: "The first player to win three legs wins the match.",
            specialRules: ["This is a challenge mode in KCApp."]
        }
    }
};
