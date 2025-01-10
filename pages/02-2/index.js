import { useState } from "react";

export default function CountUpPage(){

    // for 1-1 task code
    const [count, setCount] = useState("0");
    
    const CountUp = () => {

        // for 1-1 task code
        // const number = Number(document.getElementById("Counter").innerText) + 1;
        // document.getElementById("Counter").innerText = number;
        
        // for 1-2 task code
        setCount(Number(count)+1);

    };

    return(
        <div>
            {/* for 1-1 task code */}
            {/* <div id='Counter'>0</div> */}


            {/* for 1-2 task code  */}
            <div>{count}</div>
            <button onClick={CountUp}>카운트증가</button>
        </div>
    )
};