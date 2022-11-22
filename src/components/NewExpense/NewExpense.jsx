import React, { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";

import "./NewExpense.css";

export const NewExpense = (props) => {
	const [isEditing, setIsEdiring] = useState(false);

	//NOTE - will be executed on a differnt component(ExpenseForm)
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
		setIsEdiring(false);
	};

	const startEditingHandler = () => {
		setIsEdiring(true);
	};

	const endEditingHandler = () => {
		setIsEdiring(false);
	};

	return (
		<div className="new-expense">
			{!isEditing && (
				<button onClick={startEditingHandler}>Add new expense</button>
			)}
			{isEditing && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={endEditingHandler}
				/>
			)}
		</div>
	);
};
