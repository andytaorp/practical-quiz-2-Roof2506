import React from "react";

/**
 * Habit component that displays a habit, allows the user to toggle
 * the habit's completed state, and delete the habit.
 *
 * TODO: implement the Habit component here
 */
export default function Habit({habits,handleDeleteHabit,handleToggleHabit}) {
    return (
        <li>
          <input
            type="checkbox"
            checked={habits.completed}
            onChange={() => handleUpdateItem(habits.habitName)}
          />
          <span
            style={{
              textDecoration: habit.completed ? "line-through" : "none",
            }}
          >
          </span>
          <button onClick={() => handleDeleteItem(item.id)}>❌</button>
        </li>
      );
    }
}
