import './App.css';
import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, iscomplete, updateTodo } from './actions/action';
// import { Edit } from './componants/Edit';
import { Todo } from './componants/Todo';

const App = () => {
  const storeState = useSelector(state => state.AddTodoData);
  const dispatch = useDispatch();

  const [state, setState] = useState({});
  const [toggle, setToggle] = useState(true);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    console.log("submit h ru;n ");
    e.preventDefault();
    dispatch(addTodo(state))
    setState({ title: '', discription: "", isComplete: false })
  }

  const edit = (curr) => {
    setState(curr)
    setToggle(!toggle)
  }

  const update = () => {
    console.log("update h ru;n ");

    dispatch(updateTodo(state));
    setState({ title: '', discription: "", isComplete: false })
    setToggle(!toggle)
  }

  // console.log("state", state);

  return <> <div className="main">
    <div className="box">

      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="title" value={state.title} onChange={handleChange} placeholder="  title" />
          {toggle ? <button type="submit"> ADD </button> : <span onClick={update} >UPDATE</span>}

          {/* <p onClick={update} >UPDATE</p> */}
        </div>
        <textarea name="discription" value={state.discription} onChange={handleChange} placeholder="  Discription" > </textarea>
      </form>

      {storeState.map((curr, index) => (

        <div className="list" key={index} >
          <div className="todo">
            <input type="checkbox" onChange={() => dispatch(iscomplete(curr.id))} checked={curr.isComplete} />
            <h3 className={curr.isComplete ? "complete" : ""}>{curr.title}</h3>

            <button className="edit" disabled={curr.isComplete} onClick={() => edit(curr)}>Edit</button>

            <button className="delete" onClick={() => dispatch(deleteTodo(curr.id))} >Delete</button>
          </div>
          <div className="details">
            <p className={curr.isComplete ? "complete" : ""}>{curr.discription}</p>
          </div>
        </div>
      ))}

    </div>
  </div>

  </>
}


export default App;
