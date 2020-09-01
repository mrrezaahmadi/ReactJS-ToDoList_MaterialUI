const addNewItemToList = (todosList, title) => {
    const newItem = {
        id: Date.now(),
        value: title,
        status: false
    }

    return [...todosList, newItem]
}

const copyListAndManipulate = (instruction, ...args) => {
    const [todosList, item, otherArgs] = args
    let todosListCopy = [...todosList];
    let index = todosListCopy.indexOf(item);

    if (index > -1) {
        instruction(todosListCopy, index, otherArgs)
        return todosListCopy
    } else {
        return todosList
    }
}

const editItemOfList = (todosListCopy, index, title) => {
    todosListCopy[index].value = title;
}

const deleteItemOfList = (todosListCopy, index) => {
    todosListCopy.splice(index, 1);
}

const changeStatusOfItemOfList = (todosListCopy, index) => {
    todosListCopy[index].status = !todosListCopy[index].status
}




export { addNewItemToList, editItemOfList, deleteItemOfList, changeStatusOfItemOfList, copyListAndManipulate }