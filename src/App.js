import './App.css';
import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, iscomplete, updateTodo } from './actions/action';
import {Edit} from './componants/Edit';

const App = () => {
  const storeState = useSelector(state => state.AddTodoData);
  const dispatch = useDispatch();

  const [state, setState] = useState({});
  const [toggle, setToggle] = useState(true);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.name != "" && state.discription != "") {
      dispatch(addTodo(state))
    }
    setState({ title: '', discription: "", isComplete: false })
  }

  const update = () => {
    dispatch(updateTodo(state));
    setState({ title: '', discription: "", isComplete: false })
    setToggle(!toggle)
  }

  return <div className="main">
    <div className="box">

      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="title" value={state.title} onChange={handleChange} placeholder="title" />
         {toggle ? <button type="submit"> ADD </button> : <button onClick={update} >UPDATE</button> }
          
        </div>
        <textarea name="discription" value={state.discription} onChange={handleChange} placeholder="Discription" > </textarea>
      </form>

      {storeState ? storeState.map((curr, index) => (

        <div className="list" key={index} >
          <div className="todo">
            <input type="checkbox" onChange={() => dispatch(iscomplete(index))} checked={curr.isComplete} />
            <h3 className={curr.isComplete ? "complete" : ""}>{curr.title}</h3>

            <Edit curr={curr}/>

            <button className="delete" onClick={() => dispatch(deleteTodo(index))} >Delete</button>
          </div>
          <div className="detilas">
            <p className={curr.isComplete ? "complete" : ""}>{curr.discription}</p>
          </div>
        </div>
      )) : ""}

    </div>
  </div>
}


export default App;
