import React from "react";
import { useDispatch } from "react-redux";

const Compo1 = () => {
    const dispatch = useDispatch();
    const add = () => {
        dispatch({
            type: "INCREMENT"
        })
    }
    const add1 = () => {
        dispatch({
            type: "INCREMENT_VALUE",
            payload: 5,
        })
    }
    return (
        <>
            <div style={{background: "red"}}>
                Component1
                <button onClick={add}>+</button>
                <button onClick={(add1)}>+?</button>
            </div>
        </>
    );
}
export default Compo1;