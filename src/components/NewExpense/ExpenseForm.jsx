import React, { useState } from "react";

import "./ExpenseForm.css";

export const ExpenseForm = (props) => {
	//NOTE - most common way is using multiple useState instead of a single object as seen below
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");

	//NOTE - using an object inside useState to manege all states at once
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: "",
	// 	enteredAmount: "",
	// 	enteredDate: "",
	// });

	const titleChangeHandler = (e) => {
		setEnteredTitle(e.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredTitle: e.target.value,
		// });
		//NOTE - whenever your state depends on the previous state (this case) use this function form
		//where prevState is the previous state snapshot
		// setUserInput((prevState) => {
		//     return { ...prevState, enteredTitle: e.target.value };
		// })
	};

	const amountChangeHandler = (e) => {
		setEnteredAmount(e.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredAmount: e.target.value,
		// });
	};

	const dateChangeHandler = (e) => {
		setEnteredDate(e.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredDate: e.target.value,
		// });
	};

	const submitHandler = (e) => {
		//NOTE - prevent the page to reload on submit
		e.preventDefault();
		//NOTE - colecting and storing the data colected in an object
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};
		//NOTE -function recieved through props from NewExpense component to add the data input received from the user
		props.onSaveExpenseData(expenseData);
		//NOTE - setting the form back to empty string after submition
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};
