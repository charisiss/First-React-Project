import { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  function saveSaveExpenseDataHandler(enternedExpenseData) {
    const expenseData = {
      ...enternedExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }

  function startEditingHandler() {
    setIsEditing(true);
  }
  function stopEditingHandler() {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <NewExpenseForm
          onSaveExpenseData={saveSaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
