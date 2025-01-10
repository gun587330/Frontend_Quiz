import { useState } from "react"

export default function SignUpPage() {
        //javascript Zone

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [passwordCheck, setPasswordCheck] = useState("");

        const [emailError, setEmailError] = useState("");
        const [passwordError, setPasswordError] = useState("");
        const [passwordCheckError, setPasswordCheckError] = useState("");

        const onChangeEmail = (event) => {
            setEmail(event.target.value);
            if (event.target.value){
                setEmailError("");
            }
        }

        const onChangePassword = (event) => {
            setPassword(event.target.value);
            if (event.target.value){
                setPasswordError("");
            }
        }

        const onChangePasswordCheck = (event) => {
            setPasswordCheck(event.target.value);
            if (event.target.value){
                setPasswordCheckError("");
            }
        }

        const onClickButton = () => {
            if (!email.includes("@")){
                setEmailError("이메일을 다시 입력해주세요.");
            }
            // if (){
            //     // setPasswordError("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            //     // setPasswordCheckError("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            // }
            if (!email){
                setEmailError("이메일을 입력하세요");
            }
            if (!password || !(password === passwordCheck)){
                setPasswordError("비밀번호를 입력하세요");
            }
            if (!passwordCheck || !(password === passwordCheck)){
                setPasswordCheckError("비밀번호 확인을 입력하세요");
            }
            else { alert("가입을 축하합니다");}
            // if (email && password && passwordCheck){
            //     alert("가입을 축하합니다");
            // }
        }

    return(
        // html Zone
        <div>
            <input type="text" placeholder="이메일" onChange={onChangeEmail}/>
            <div>{emailError}</div>
            <input type="password" placeholder="비밀번호" onChange={onChangePassword}/>
            <div>{passwordError}</div>
            <input type="password" placeholder="비밀번호 확인" onChange={onChangePasswordCheck}/>
            <div>{passwordCheckError}</div>
            <button onClick={onClickButton}>가입하기</button>
        </div>

    )
}