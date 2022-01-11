// import React, { useState } from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import { addTodo, deleteTodo, iscomplete, updateTodo } from './actions/action';
// export const Todo = () => {

//     const storeState = useSelector(state => state.AddTodoData);
//     const dispatch = useDispatch();
    
//     return (
//         <>
//             <div className="main">
//                 <div className="box">

//                     <form onSubmit={handleSubmit}>
//                         <div>
//                             <input type="text" name="title" value={state.title} onChange={handleChange} placeholder="title" />
//                             {toggle ? <button type="submit"> ADD </button> : <button onClick={update} >UPDATE</button>}
//                         </div>
//                         <textarea name="discription" value={state.discription} onChange={handleChange} placeholder="Discription" > </textarea>
//                     </form>

//                     {storeState ? storeState.map((curr, index) => (

//                         <div className="list" key={index} >
//                             <div className="todo">
//                                 <input type="checkbox" onChange={() => dispatch(iscomplete(curr.id))} checked={curr.isComplete} />
//                                 <h3 className={curr.isComplete ? "complete" : ""}>{curr.title}</h3>

//                                 <button className="edit" disabled={curr.isComplete} onClick={() => edit(curr)}>Edit</button>

//                                 <button className="delete" onClick={() => dispatch(deleteTodo(curr.id))} >Delete</button>
//                             </div>
//                             <div className="detilas">
//                                 <p className={curr.isComplete ? "complete" : ""}>{curr.discription}</p>
//                             </div>
//                         </div>
//                     )) : ""}

//                 </div>
//             </div>
//         </>
//     )
// }
