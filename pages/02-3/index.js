import { useState } from "react";

export default function AuthNumPage(){
        //javascript Zone

        const [randomNum, setRandomNum] = useState("000000");

        const AuthNumChange = () => {

            // for 1-1 task code
            // document.getElementById("num").innerText 
            // = String(Math.floor(Math.random()*1000000)).padStart(6, "0");

            // for 1-2 task code
            setRandomNum(String(Math.floor(Math.random()*1000000)).padStart(6, "0"));
        }
    return(
        // html Zone
        <div>
            {/* for 1-1 task code */}
            {/* <div id='num'>000000</div> */}

            {/* for 1-2 task code */}
            <div>{randomNum}</div>
            <button onClick={AuthNumChange}>인증번호전송</button>
        </div>
    )
}