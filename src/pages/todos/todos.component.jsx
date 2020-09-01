import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Header from "../../components/todos-header/todos-header.component";
import Form from "../../components/todos-form/todos-form.component";
import ToDoList from "../../components/todos-list/todos-list.component"

const useStyles = makeStyles({
	root: {
		textAlign: "center",
		height: "100%",
	},
});

function Todo() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Header />
            <Form />
            <ToDoList />
		</div>
	);
}

export default Todo;
