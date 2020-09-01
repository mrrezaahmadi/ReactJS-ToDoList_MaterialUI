import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
	selectTodosTitle,
	selectTodosError,
	selectTodosEdit,
} from "../../redux/todos/todos.selectors";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

import {
	setTitle,
	addItem,
	editItem,
	setError,
} from "../../redux/todos/todos.actions";

const useStyles = makeStyles({
	root: {
		marginTop: 16,
		marginBottom: 16,
		padding: 16,
		boxShadow:
			"0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
	},
	button: {
        marginTop: 16,
	},
});

const Form = ({
	title,
	edit,
	error,
	setTitle,
	addItem,
	editItem,
	setError,
}) => {
    const classes = useStyles();
    
	const handleChange = (event) => {
		const title = event.target.value;

		setTitle(title);
		if (title.trim().length === 0) {
			setError("Please enter title");
		} else {
			setError("");
		}
	};

	const handleClick = () => {
		if (title.trim().length === 0) {
			setError("Please enter title");
			return;
		}
		edit ? editItem() : addItem();
	};

	return (
		<Container maxWidth="sm" className={classes.root}>
			<Grid container alignItems="center">
				<Grid item md={12} sm={12} xs={8}>
					<TextField
						value={title}
						onChange={handleChange}
						error={!!error}
						helperText={error}
						id="outlined-basic"
						fullWidth
						label="What You Want To Do?!"
						multiline
						variant="outlined"
					/>
				</Grid>
				<Grid item md={12} sm={12} xs={4}>
					<Button
						className={classes.button}
						variant="contained"
						color="primary"
						onClick={handleClick}
					>
						{edit ? <EditIcon /> : <AddIcon />}
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
};

const mapStateToProps = createStructuredSelector({
	title: selectTodosTitle,
	edit: selectTodosEdit,
	error: selectTodosError,
});


export default connect(mapStateToProps, {
	setTitle,
	setError,
	addItem,
	editItem,
})(Form);
