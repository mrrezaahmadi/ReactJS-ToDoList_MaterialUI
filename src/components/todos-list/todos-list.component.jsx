import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";

import {
	selectTodosEdit,
	selectTodosList,
} from "../../redux/todos/todos.selectors";

import {
	setTitle,
	setItem,
	setEdit,
	deleteItem,
	setStatus,
} from "../../redux/todos/todos.actions";

const useStyles = makeStyles({
	container: {
		padding: 16,
	},
	listItemTextChecked: {
		textDecoration: "line-through",
	},
	listItemTextUnchecked: {
		textDecoration: "none",
	},
});

function TodoList({
	todosList,
	setTitle,
	setItem,
	setEdit,
	deleteItem,
	setStatus,
}) {
	const classes = useStyles();

	const handleEdit = (item) => {
		setTitle(item.value);
		setEdit();
		setItem(item);
	};

	const handleDelete = (item) => {
		setItem(item);
		deleteItem();
	};

	const handleStatus = (item) => {
		setItem(item);
		setStatus();
	};
	return (
		<Container className={classes.container} maxWidth="md">
			{!todosList.length ? (
				<Typography variant="h6" color="error">
					There is nothing to do!!!
				</Typography>
			) : (
				<List>
					{todosList.map((item) => {
						return (
							<Grid container>
								<ListItem key={item.id} button>
									<Grid item xs={2}>
										<ListItemIcon>
											<Checkbox
												checked={item.status}
												onClick={() => handleStatus(item)}
											/>
										</ListItemIcon>
									</Grid>
									<Grid item xs={6}>
										<ListItemText
											primary={item.value}
											className={
												item.status
													? classes.listItemTextChecked
													: classes.listItemTextUnchecked
											}
										/>
									</Grid>
									<Grid item xs={4}>
										<ListItemSecondaryAction>
											<IconButton
												edge="end"
												aria-label="edit"
												onClick={() => handleEdit(item)}
											>
												<EditIcon />
											</IconButton>
											<IconButton
												edge="end"
												aria-label="delete"
												onClick={() => handleDelete(item)}
											>
												<DeleteIcon />
											</IconButton>
										</ListItemSecondaryAction>
									</Grid>
								</ListItem>
							</Grid>
						);
					})}
				</List>
			)}
		</Container>
	);
}

const mapStateToProps = createStructuredSelector({
	todosList: selectTodosList,
	edit: selectTodosEdit,
});

export default connect(mapStateToProps, {
	setTitle,
	setItem,
	deleteItem,
	setEdit,
	setStatus,
})(TodoList);
