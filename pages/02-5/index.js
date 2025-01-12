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
    MenuWrapper,
    SignUp,
    SearchEmail,
    SearchPassword,
    MenuDivider,
    KakaoLogInButton,
    KakaoIcon,
} from '../../styles/02-5.js'

export default function ItsroadSignUpPage(){
        // javascript Zone

    return(
        // html Zone
        <Wrapper>
            <KakaoLogInButton>
                <KakaoIcon src={'img/KakaoIcon.png'}></KakaoIcon>
                카카오톡으로 로그인
            </KakaoLogInButton>
            
            <MenuWrapper>
                <SearchEmail>이메일찾기</SearchEmail>
                <MenuDivider></MenuDivider>
                <SearchPassword>비밀번호찾기</SearchPassword>
                <MenuDivider></MenuDivider>
                <SignUp>회원가입</SignUp>
            </MenuWrapper>

            <SignUpWrapper>
                <Email type='text' placeholder='이메일을 입력해주세요'></Email>
                <Password type='password' placeholder='비밀번호를 입력해주세요'></Password>
                <LogInButton>로그인</LogInButton>
            </SignUpWrapper>

            <TitleWrapper>
                <TitleImage src={`img/titleimage.png`}></TitleImage>
                <TitleImage2 src={`img/titleimage2.png`}></TitleImage2>
                <Title>잇츠로드</Title>
            </TitleWrapper>
        </Wrapper>
    )
}