import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoals) {
    if (!enteredGoals) {
      return setErrorMessage("please enter a goal");
    }
    setGoals((currentGoals) =>
      // [...currentGoals, enteredGoal]

      // adding unique keys to FlatList component to avoid errors on console
      [...currentGoals, { text: enteredGoals, id: Math.random().toString() }]
    );
    setErrorMessage("");
    endAddGoalHandler();
  };

  function deleteGoalHandler(deleteId) {
    setGoals((currentGoals) => {
      return currentGoals.filter((eachgoal) => eachgoal.id !== deleteId)
    })
  }

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#0064ba"
          onPress={startAddGoalHandler} />
        <GoalInput
          showModal={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
          errc={errorMessage} />

        <View style={styles.goalsContainer}>
          {/* <ScrollView>
          {goals.map((eachGoal) => (
            <View style={styles.goalItem} key={eachGoal}>
              <Text style={styles.goalText}>
                {eachGoal}
              </Text>
            </View>
          ))}
        </ScrollView> */}
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler} />
              )
            }}
            // keyExtractor is used to extract the unique key from API's
            keyExtractor={(item, index) => {
              return item.id
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    // backgroundColor: "#ced6e0"
  },
  goalsContainer: {
    flex: 5
  },
});
