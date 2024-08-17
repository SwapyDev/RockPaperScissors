import { useState } from 'react';
import RpsUtil from '../utils/RpsUtil.js';
import { RpsVO } from '../valueobjects/RpsVO.js';
import { getComputerChoice } from '../utils/RpsUtil.js';
import { Alert } from 'react-native';

/**
 * Custom hook to manage the state and logic for a Rock-Paper-Scissors game.
 * 
 * @returns {Object} An object containing the player's choice, computer's choice, the result of the game, and the function to play the game.
 */
const useRockPaperScissors = () => {
    const [playerChoice, setPlayerChoice] = useState('');
    const [computerChoice, setComputerChoice] = useState('');
    const [playerWins, setPlayerWins] = useState(0);
    const [computerWins, setComputerWins] = useState(0);
    const [result, setResult] = useState('');
    const { Rps } = RpsUtil();

    /**
     * Executes the Rock-Paper-Scissors game logic based on the player's selection.
     * 
     * @param {string} playerSelection - The player's choice ('Rock', 'Paper', or 'Scissors').
     */
    function playGame(playerSelection) {
        const computerSelection = getComputerChoice();
        setPlayerChoice(playerSelection);
        setComputerChoice(computerSelection);
        const newRps = new RpsVO(playerSelection, computerSelection);
        const gameResult = Rps(newRps.choice1, newRps.choice2);
        setResult(gameResult);
        Alert.alert('Round', gameResult)

        if (gameResult === 'Win') {
            setPlayerWins(prevWins => prevWins + 1);
        } else if (gameResult === 'Lose') {
            setComputerWins(prevWins => prevWins + 1);
        }
        /**
     * Resets the scores for both player and computer.
     */
    }
    function resetScores() {
        setPlayerWins(0);
        setComputerWins(0);
    }
    return { playerChoice, computerChoice, result, playGame, playerWins, computerWins, resetScores };
}

export default useRockPaperScissors;
