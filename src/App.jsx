import { useEffect } from "react";
import { useState } from "react";
import classes from './styles.module.css';
import TodoItem from "./components/todo-item/index.jsx";
import TodoDetails from "./components/todo-details/index.jsx";
import { Skeleton } from "@mui/material";


function App() {
  const [todoList, setTodoList] = useState([]);
  const [pending, setPending] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  async function fetchListOfTodos() {
    try {
      setPending(true);
      const apiResponse = await fetch('https://dummyjson.com/todos');
      const result = await apiResponse.json();
      // console.log(result);
      setTodoList(result);

      if(result?.todos && result?.todos?.length > 0){
        setTodoList(result?.todos);
        setPending(false);
      } else {
        setTodoList([]);
        setErrorMsg("");
      }

    } catch(error){
      console.error(error);
      setErrorMsg("Some Error occured");
    }
  }
  async function fetchDetailsOfCurrentTodo(getCurrentTodoId) {
    // console.log(getCurrentTodoId);
    try {
      const apiResponse = await fetch(`https://dummyjson.com/todos/${getCurrentTodoId}`);
      const details = await apiResponse.json();
      // console.log(details);

      if (details) {
        setTodoDetails(details);
        setOpenDialog(true);
      } else {
        setTodoDetails(null);
        setOpenDialog(false);
      }
    } catch(error){
      console.error(error);
      setErrorMsg('Some Error occured');
    }
    
  }

  useEffect(() => {
    // setPending(true);
      fetchListOfTodos();
  }, [])

  if (pending) {
    return (
      <Skeleton variant="rectangular" width={650} height={650} />
    )
  }

  return (
    <>
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>
        TODO app using Material UI
      </h1>
      <div className={classes.todoListWrapper}>
        {
          todoList && todoList?.length > 0 ? 
          todoList.map(todoItem => <TodoItem todo={todoItem} fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo}/>) : null
        }
      </div>
      <TodoDetails 
        openDialog={openDialog} 
        todoDetails={todoDetails}
        setOpenDialog={setOpenDialog}
        setTodoDetails={setTodoDetails}/>
    </div>
    </>
  )
}

export default App
