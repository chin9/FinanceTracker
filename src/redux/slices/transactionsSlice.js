import { createSlice } from "@reduxjs/toolkit";
import data from "../../resources/data.json";
import { v4 as uuid } from 'uuid'

const DEFAULT_STATE = {
  transactions: data
};

export const transactionsSlice = createSlice({
	name: "transactions",
	initialState: DEFAULT_STATE,
	reducers: {
		addTransaction: (state, action) => {
			console.log("Adding transaction " + action.payload);
			action.payload.id = uuid();
			state.transactions = [...state.transactions, action.payload];
		},
		updateTransaction: (state, action) => {
			console.log("Updating transaction " + action.payload);
			state.transactions = state.transactions.map((trans) =>
				trans.id === action.payload.id ? action.payload : trans
			);
		},
		deleteTransaction: (state, action) => {
      console.log("Deleting transaction " + Object.values(action.payload));
      state.transactions = state.transactions.filter(
				(trans) => trans.id !== action.payload.id
			);
		},
	},
	// TODO: Async Reducers placed below here:
	// extraReducers: (builder) => {
	// },
});

export const { addTransaction, updateTransaction, deleteTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;
