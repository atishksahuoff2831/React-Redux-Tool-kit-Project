import React from "react";
import { useSelector } from "react-redux";
const Compo4 = () => {
    const value = useSelector(state => state.INC_DEC.count)
    return (
        <>
            <div style={{ background: "yellow", margin: "10px" }}>
                Component4
                <p>{value}</p>
            </div>
        </>
    );
}
export default Compo4;