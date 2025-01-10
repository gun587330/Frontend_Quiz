import { useState } from 'react'

export default function HelloPrintPage(){
        //javascript Zone

        // for 1-1 Task code
        // const ChangeWords = () => {
        //     document.getElementById("ChangeHello").innerText = "반갑습니다";
        // };

        // for 1-2 Task code
        const [words, setWords] = useState("안녕하세요");

        const ChangeWords = () => {
            setWords("반갑습니다");
        };

    return(
        //html Zone

        // for 1-1 Task code
        // <div>
        //     <button id="ChangeHello" onClick={ChangeWords}>안녕하세요</button>
        // </div>

        // for 1-2 Task code
        <div>
            <button onClick={ChangeWords}>{words}</button>
        </div>
    )
}