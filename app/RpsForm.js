import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Button} from 'react-native';
import useRockPaperScissors from '../hooks/useRps';
import { Stack as MaterialStack, Text } from "@react-native-material/core";


/**
 * Component for rendering the Rock-Paper-Scissors form.
 * 
 * This component allows the player to choose between Rock, Paper, or Scissors by pressing on images.
 * It displays the player's choice, the computer's choice, and the result of the game.
 * 
 * @component
 * @returns {JSX.Element} The rendered RpsForm component.
 */
export default function RpsForm() {
    const { playerChoice, computerChoice, playGame, playerWins, computerWins, resetScores } = useRockPaperScissors();

    return (
        <View style={styles.container}>
            {/* Scoreboard Section */}
            <View style={styles.scoreboardContainer}>
                <View style={styles.scoreBox}>
                    <Text style={styles.scoreLabel}>Player Wins</Text>
                    <Text style={styles.score}>{playerWins}</Text>
                </View>
                <View style={styles.scoreBox}>
                    <Text style={styles.scoreLabel}>Computer Wins</Text>
                    <Text style={styles.score}>{computerWins}</Text>
                </View>
            </View>

            {/* Game Input Section */}
            <View style={styles.inputContainer}>
                <Text style={styles.fieldLabel}>Choose your move:</Text>
                <MaterialStack direction="row" spacing={4}>
                    <TouchableOpacity onPress={() => playGame('Rock')}>
                        <Image source={require('../assets/Rock.png')} style={styles.choiceImage} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => playGame('Paper')}>
                        <Image source={require('../assets/Paper.png')} style={styles.choiceImage} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => playGame('Scissors')}>
                        <Image source={require('../assets/Scissors.jpeg')} style={styles.choiceImage} />
                    </TouchableOpacity>
                </MaterialStack>
            </View>
            {/* Result Section */}
            <View style={styles.resultContainer}>
                <Text style={styles.resultLabel}>Your choice: {playerChoice}</Text>
                <Text style={styles.resultLabel}>Computer's choice: {computerChoice}</Text>
            </View>
            {/* Reset Button */}
            <Button
                title="Reset Scores"
                style={styles.resetButton}
                onPress={resetScores}
            />
        </View>
    );
}

/**
 * Styles for the RpsForm component.
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
        padding: 40,
    },
    scoreboardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#e6e6e6',
        borderRadius: 10,
    },
    scoreBox: {
        alignItems: 'center',
    },
    score: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2196F3',
    },
    inputContainer: {
        marginTop: 20,
        marginRight: 10,
        marginLeft: 10,
        fontSize: 15,
    },
    resultContainer: {
        backgroundColor: '#f0f0f0',
        padding: 15,
        width: '100%',
        alignItems: 'center',
        marginTop: 30, 
        marginBottom: 40,
        borderRadius: 10,
    },
    fieldLabel: {
        color: '#666666',
    },
    resultLabel: {
        color: '#333',
        fontSize: 16,
        fontWeight: 'bold',
    },
    choiceImage: {
        width: 80,
        height: 80,
        marginHorizontal: 10,
        resizeMode: 'contain',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ccc',
    },
});
