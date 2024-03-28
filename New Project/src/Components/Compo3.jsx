import React from "react";
import Compo4 from "./Compo4";
const Compo3 = () => {
    return (
        <>
            <div style={{ background: "green" }}>
                Component3
                <Compo4 />
            </div>
        </>
    );
}
export default Compo3;