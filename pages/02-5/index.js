import { 
    Wrapper,
    TitleWrapper,
    TitleImage,
    TitleImage2,
    Title,
    // Temp,
    SignUpWrapper,
    Email,
    Password,
    LogInButton,
} from '../../styles/02-5'

export default function ItsroadSignUpPage(){
        // javascript Zone

    return(
        // html Zone
        <Wrapper>
            <SignUpWrapper>
                <Email type='text' placeholder='이메일을 입력해주세요'></Email>
                <Password type='password' placeholder='비밀번호를 입력해주세요'></Password>
            </SignUpWrapper>

            <TitleWrapper>
                <TitleImage src={`img/titleimage.png`}></TitleImage>
                <TitleImage2 src={`img/titleimage2.png`}></TitleImage2>
                <LogInButton></LogInButton>
                <Title>잇츠로드</Title>
            </TitleWrapper>
        </Wrapper>
    )
}