import React from 'react'

export const Edit = (props) => {
    console.log("props", props);

    const edit = (curr) => {
        console.log("hello", curr);
        // setState(curr)
        // setToggle(!toggle)
    }
    return (
        <button className="edit" disabled={props.curr.isComplete} onClick={() => edit(props.curr)}>Edit</button>
    )
}
