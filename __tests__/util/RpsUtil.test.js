import { RpsVO } from "../../valueobjects/RpsVO";
import RpsUtil from "../../utils/RpsUtil";
const { Rps } = RpsUtil();

/**
 * Test case for Rock-Paper-Scissors game logic.
 * 
 * This test checks the result when Player1 chooses 'Rock' and Player2 chooses 'Scissors'.
 */
test("Player1: Rock, Player2: Scissors", () => {
    // GIVEN
    const choice1 = 'Rock';
    const choice2 = 'Scissors';
    const expectedOutput = 'Win';
    // WHEN
    const actualOutput = Rps(choice1, choice2);
    // THEN
    expect(actualOutput).toStrictEqual(expectedOutput);
});

/**
 * Test case for Rock-Paper-Scissors game logic.
 * 
 * This test checks the result when Player1 chooses 'Rock' and Player2 chooses 'Paper'.
 */
test("Player1: Rock, Player2: Paper", () => {
    // GIVEN
    const choice1 = 'Rock';
    const choice2 = 'Paper';
    const expectedOutput = 'Lose';
    // WHEN
    const actualOutput = Rps(choice1, choice2);
    // THEN
    expect(actualOutput).toStrictEqual(expectedOutput);
});

/**
 * Test case for Rock-Paper-Scissors game logic.
 * 
 * This test checks the result when both Player1 and Player2 choose 'Rock'.
 */
test("Player1: Rock, Player2: Rock", () => {
    // GIVEN
    const choice1 = 'Rock';
    const choice2 = 'Rock';
    const expectedOutput = 'Draw';
    // WHEN
    const actualOutput = Rps(choice1, choice2);
    // THEN
    expect(actualOutput).toStrictEqual(expectedOutput);
});

/**
 * Test case for Rock-Paper-Scissors game logic.
 * 
 * This test checks the result when Player1 chooses 'Paper' and Player2 chooses 'Rock'.
 */
test("Player1: Paper, Player2: Rock", () => {
    // GIVEN
    const choice1 = 'Paper';
    const choice2 = 'Rock';
    const expectedOutput = 'Win';
    // WHEN
    const actualOutput = Rps(choice1, choice2);
    // THEN
    expect(actualOutput).toStrictEqual(expectedOutput);
});

/**
 * Test case for Rock-Paper-Scissors game logic.
 * 
 * This test checks the result when Player1 chooses 'Paper' and Player2 chooses 'Scissors'.
 */
test("Player1: Paper, Player2: Scissors", () => {
    // GIVEN
    const choice1 = 'Paper';
    const choice2 = 'Scissors';
    const expectedOutput = 'Lose';
    // WHEN
    const actualOutput = Rps(choice1, choice2);
    // THEN
    expect(actualOutput).toStrictEqual(expectedOutput);
});

/**
 * Test case for Rock-Paper-Scissors game logic.
 * 
 * This test checks the result when both Player1 and Player2 choose 'Paper'.
 */
test("Player1: Paper, Player2: Paper", () => {
    // GIVEN
    const choice1 = 'Paper';
    const choice2 = 'Paper';
    const expectedOutput = 'Draw';
    // WHEN
    const actualOutput = Rps(choice1, choice2);
    // THEN
    expect(actualOutput).toStrictEqual(expectedOutput);
});

/**
 * Test case for Rock-Paper-Scissors game logic.
 * 
 * This test checks the result when Player1 chooses 'Scissors' and Player2 chooses 'Paper'.
 */
test("Player1: Scissors, Player2: Paper", () => {
    // GIVEN
    const choice1 = 'Scissors';
    const choice2 = 'Paper';
    const expectedOutput = 'Win';
    // WHEN
    const actualOutput = Rps(choice1, choice2);
    // THEN
    expect(actualOutput).toStrictEqual(expectedOutput);
});

/**
 * Test case for Rock-Paper-Scissors game logic.
 * 
 * This test checks the result when Player1 chooses 'Scissors' and Player2 chooses 'Rock'.
 */
test("Player1: Scissors, Player2: Rock", () => {
    // GIVEN
    const choice1 = 'Scissors';
    const choice2 = 'Rock';
    const expectedOutput = 'Lose';
    // WHEN
    const actualOutput = Rps(choice1, choice2);
    // THEN
    expect(actualOutput).toStrictEqual(expectedOutput);
});

/**
 * Test case for Rock-Paper-Scissors game logic.
 * 
 * This test checks the result when both Player1 and Player2 choose 'Scissors'.
 */
test("Player1: Scissors, Player2: Scissors", () => {
    // GIVEN
    const choice1 = 'Scissors';
    const choice2 = 'Scissors';
    const expectedOutput = 'Draw';
    // WHEN
    const actualOutput = Rps(choice1, choice2);
    // THEN
    expect(actualOutput).toStrictEqual(expectedOutput);
});
