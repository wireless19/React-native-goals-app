import { StyleSheet, Text, View, Pressable } from 'react-native';

function GoalItem(props) {
    // function deleteTry() {
    //     props.onDeleteItem(props.id);
    // }
    return (

        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: "#000000" }}
                onPress={props.onDeleteItem.bind(this, props.id)}
                // note: the style prop is used to add the android_ripple effect to Iphones
                style={({ pressed }) => pressed && styles.pressedItem}>
                {/* <Pressable onPress={deleteTry}> */}
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>

    )
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#0064ba",
    },
    pressedItem: {
        opacity: 0.5
    },
    goalText: {
        color: '#ffffff',
        padding: 8
    }
});