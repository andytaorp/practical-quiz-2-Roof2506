import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");
  function handleAddName(e) {
    setHabitName(e.target.value);
  }
  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();
    if (habitName.trim() === "") {
      alert("Habit name cannot be empty!");
      return;
    }
    const newHabit={
      id: Date.now(), 
      habitName,
      completed: false,
    };
    onAddHabit(newHabit);
    setHabitName("");
  };

  return (
    //TODO: add a form to add a new habit
    <form className="add-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        onChange={handleAddName} 
        value={habitName} 
        placeholder="New Habit"
      />
      <button>Add Habit</button>
    </form>
  );
}
