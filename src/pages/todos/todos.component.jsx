import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Header from "../../components/todos-header/todos-header.component";
import Form from "../../components/todos-form/todos-form.component";

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
		</div>
	);
}

export default Todo;
