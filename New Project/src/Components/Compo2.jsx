import React from "react";
import { useDispatch } from "react-redux";
const Compo2 = () => {
    const dispatch = useDispatch();
    const sub = () => {
        dispatch({
            type: "DECREMENT"
        })
    }
    return (
        <>
            <div style={{ background: "blue" }}>
                Component2
                <button onClick={sub}>-</button>
            </div>
        </>
    );
}
export default Compo2;