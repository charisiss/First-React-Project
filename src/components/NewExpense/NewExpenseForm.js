import "./NewExpenseForm.css";
import { useState } from "react";

function NewExpenseForm(props) {
  const [enternedTitle, setEnternedTitle] = useState("");
  const [enternedAmount, setEnternedAmount] = useState("");
  const [enternedDate, setEnternedDate] = useState("");

  function titleChangeHandler(event) {
    setEnternedTitle(event.target.value);
  }
  function amountChangeHandler(event) {
    setEnternedAmount(event.target.value);
  }
  function dateChangeHandler(event) {
    setEnternedDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: enternedTitle,
      amount: +enternedAmount,
      date: new Date(enternedDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnternedTitle("");
    setEnternedAmount("");
    setEnternedDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enternedTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.10"
            step="0.10"
            value={enternedAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2022-12-31"
            value={enternedDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button
          type="submit"
          onClick={() => {
            return;
          }}
        >
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default NewExpenseForm;
