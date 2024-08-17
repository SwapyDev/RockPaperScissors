import { RpsVO } from "../valueobjects/RpsVO";

/**
 * Utility functions for Rock-Paper-Scissors game logic.
 * 
 * @returns {Object} An object containing the Rps function.
 */
const RpsUtil = () => {
    /**
     * Determines the result of a Rock-Paper-Scissors game.
     * 
     * @param {string} choice1 - The first player's choice ('Rock', 'Paper', or 'Scissors').
     * @param {string} choice2 - The second player's choice ('Rock', 'Paper', or 'Scissors').
     * @returns {string} The result of the game: 'Win', 'Lose', 'Draw', or 'invalid choice'.
     */
    function Rps(choice1, choice2) {
        switch (choice1) {
            case 'Rock':
                switch (choice2) {
                    case 'Rock':
                        return 'Draw';
                    case 'Paper':
                        return 'Lose';
                    case 'Scissors':
                        return 'Win';
                    default:
                        return 'invalid choice';
                }
            case 'Scissors':
                switch (choice2) {
                    case 'Rock':
                        return 'Lose';
                    case 'Paper':
                        return 'Win';
                    case 'Scissors':
                        return 'Draw';
                    default:
                        return 'invalid choice';
                }
            case 'Paper':
                switch (choice2) {
                    case 'Rock':
                        return 'Win';
                    case 'Paper':
                        return 'Draw';
                    case 'Scissors':
                        return 'Lose';
                    default:
                        return 'invalid choice';
                }
            default:
                return 'invalid choice';
        }
    }

    return { Rps };
}

/**
 * Generates a random choice for the computer in a Rock-Paper-Scissors game.
 * 
 * @returns {string} The computer's choice: 'Rock', 'Paper', or 'Scissors'.
 */
export function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

export default RpsUtil;
