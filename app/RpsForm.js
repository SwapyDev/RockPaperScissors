import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import useRockPaperScissors from '../hooks/useRps';
import { Button, Stack as MaterialStack, Text, TextInput } from "@react-native-material/core";

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
    const { playerChoice, computerChoice, result, playGame } = useRockPaperScissors();

    return (
        <View style={styles.container}>
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

            <View style={styles.resultContainer}>
                <Text style={styles.resultLabel}>Your choice: {playerChoice}</Text>
                <Text style={styles.resultLabel}>Computer's choice: {computerChoice}</Text>
            </View>
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
        padding: 20,
    },
    headline: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
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
        marginBottom: 20, 
    },
    buttonContainer: {
        marginTop: 20,
        marginRight: 80,
        marginLeft: 80,
    },
    fieldLabel: {
        color: '#666666',
    },
    resultLabel: {
        color: '#333',               
        fontSize: 16,                
        fontWeight: 'bold', 
    },
    formButton: {
        shadowOffset: 0,
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
