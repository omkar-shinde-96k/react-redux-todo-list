import "./App.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, iscomplete, updateTodo } from "./actions/action";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

const App = () => {
  const storeState = useSelector((state) => state.AddTodoData);
  const dispatch = useDispatch();
  console.log(storeState);
  const [state, setState] = useState({});
  const [toggle, setToggle] = useState(true);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(state));
    setState({ title: "", discription: "", isComplete: false });
  };

  const edit = (curr) => {
    setState(curr);
    setToggle(!toggle);
  };

  const update = () => {
    dispatch(updateTodo(state));
    setState({ title: "", discription: "", isComplete: false });
    setToggle(!toggle);
  };

  return (
    <>
      <div className="main">
        <div className="box">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="title"
                value={state.title}
                onChange={handleChange}
                placeholder="  title"
              />
              {toggle ? (
                <button type="submit">
                  
                  <AddIcon />
                </button>
              ) : (
                <span onClick={update}>UPDATE</span>
              )}
            </div>
            <textarea
              name="discription"
              value={state.discription}
              onChange={handleChange}
              placeholder="  Discription"
            ></textarea>
          </form>

          {storeState.map((curr, index) => (
            <div className="list" key={index}>
              <div className="todo">
                <input
                  type="checkbox"
                  onChange={() => dispatch(iscomplete(curr.id))}
                  checked={curr.isComplete}
                />
                <h3 className={curr.isComplete ? "complete" : ""}>
                  {curr.title}
                </h3>
                {!curr.isComplete ? (
                  <EditIcon className="edit" onClick={() => edit(curr)} />
                ) : (
                  <div className="edit"></div>
                )}

                <DeleteIcon
                  className="delete"
                  onClick={() => dispatch(deleteTodo(curr.id))}
                />
              </div>
              <div className="details">
                <p className={curr.isComplete ? "complete" : ""}>
                  {curr.discription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
