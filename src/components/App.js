import React, { useState } from "react";
import AddHabitForm from "./AddHabitForm";
import HabitList from "./HabitList";
import Habit from "./Habit";

function App() {
  const [habits, setHabits] = useState([]);

  const handleAddHabit = (habitName) => {
    // TODO: write code to add a new habit here
    const AddHabit = [habitName,...habits]
    setHabits(AddHabit)
  };

  const handleToggleHabit = (id) => {
    // TODO: write code to toggle a habit's status
    const updatedHabits = habits.map((habits) =>
    habits.id === id ? { ...habits, completed: !habits.completed } : habits
  );
  setItems(updatedHabits);
  };

  const handleDeleteHabit = (id) => {
    // TODO: write code to delete a habit
    const DeleteHabit = habits.filter((habits) => habits.id !== id);
    setItems(DeleteHabit);
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
      {/*TODO: add a form to add a new habit*/}
      <AddHabitForm onAddHabit={handleAddHabit} />
      {/*TODO: add a list of habits*/}
      <HabitList  / >
    </div>
  );
}

export default App;
