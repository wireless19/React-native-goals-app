import { useState } from 'react';
import { StyleSheet, View, Button, Text, TextInput, Modal, Image } from 'react-native';

function GoalInput(props) {

    const [enteredGoal, setEnteredGoal] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <>
            <Modal visible={props.showModal} animationType="slide">
                <View style={styles.inputContainer}>
                    <Image style={styles.image} source={require("../assets/images/goal.png")} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Your Course Goal!"
                        onChangeText={goalInputHandler}
                        value={enteredGoal}
                    />
                    <Text style={styles.errColor}>{props.errc}</Text>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button
                                title="Add Goal"
                                onPress={addGoalHandler}
                                color="#ff4000"
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                title="Cancel"
                                onPress={props.onCancel} color="#000000" />
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#0064ba"
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    errColor: {
        color: "red",
        paddingTop: 5

    },
    textInput: {
        borderWidth: 1,
        borderColor: "#ffffff",
        backgroundColor: "#ffffff",
        color: "#0064ba",
        borderRadius: 6,
        width: "100%",
        padding: 16
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row"
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
});