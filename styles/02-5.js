import styled from "@emotion/styled"
import { KnownArgumentNamesOnDirectivesRule } from "graphql/validation/rules/KnownArgumentNamesRule"


export const Wrapper = styled.div`
    margin-left: 80px;
    margin-top: 50px;
    width: 640px;
    height: 1138px;
    border: 1px solid red;
    background-image: url('/img/02-5-background.png');
    display: flex;
    flex-direction: column-reverse;
    // justify-content: center;
    align-items: center;
`

export const TitleWrapper = styled.div`
    width: 540px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TitleImage = styled.img`
    width: 67px;
    height: 82px;
    // background-color: white;
    margin-bottom: -10px;
`

export const TitleImage2 = styled.img`
    width: 72px;
    height: 24px;
    // background-color: white;
`

export const Title = styled.div`
    font-size: 60px;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    margin-top: 40px;
`

// export const Temp = styled.div`
//     width: 540px;
//     height: 200px;
// `

export const SignUpWrapper = styled.div`
    width: 540px;
`

export const Email = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px solid #7D7D7D;
    background-color: transparent;
    font-size: 24px;
    margin-bottom: 40px;
    color: white;
`

export const Password = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px solid #7D7D7D;
    background-color: transparent;
    font-size: 24px;
    color: white;
    margin-bottom: 60px;
`

export const LogInButton = styled.button`
    width: 100%;
    height: 76px;
    background-color: rgba(255, 27, 109, 0.5);
    font-size: 26px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: white;
    border-radius: 38px;
    border: none;
`

export const MenuWrapper = styled.div`
    width: 540px;
    display: flex;
    flex-direction: row;
    // align-items: center;
    justify-content: space-around;
    margin-top: 50px;
`

export const SignUp = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: white;
`

export const MenuDivider = styled.div`
    border-right: 2px solid #9F9F9F;
`

export const SearchEmail = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: white;
`

export const SearchPassword = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: white;
`

export const KakaoLogInButton = styled.button`
    width: 540px;
    height: 76px;
    border-radius: 38px;
    border-color: #FAE100;
    background: none;
    font-size: 26px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #FAE100;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 85px;
    margin-top: 70px;
`

export const KakaoIcon = styled.img`
    padding-right: 40px;
`