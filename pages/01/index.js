
import { 
    Wrapper,
    InputWrapper,
    Search,
    SearchIcon,
    ProfileWrapper,
    Title,
    Profile,
    Photo,
    Name,
    Label,
    SubtitleWrapper,
    Subtitle,
    Divider,
    ContentsWrapper,
    Contents,
    Subject,
    Number,
    ContentsLabel,
    MenuWrapper,
    Menu,
    MenuIcon,
    MenuLabel,
    // MenuLabel,
} from "../../styles/01-quiz";

export default function SectionQuizFAQ_Page(){
        //JavaScript Zone

    return(
        //html Zone
        <Wrapper>
            <InputWrapper>
                <Search>
                    {/* Q) 이미지는 public에만 담을 수 있는가? -> 아닐 것 같긴한데.. */}
                    <SearchIcon src={`img/Group@2x.png`}></SearchIcon>
                </Search>
            </InputWrapper>

            <InputWrapper>
                <ProfileWrapper>
                    <Title>마이</Title>
                    <Profile>
                        <Photo src={`img/Photo.png`}></Photo>
                        <Name>임정아</Name>
                        <Label src={`img/ToggleLabel.png`}></Label>
                    </Profile>
                </ProfileWrapper>
            </InputWrapper>

            <InputWrapper>

                {/* reject Tage name to Subtitle */}
                <SubtitleWrapper>
                    <Subtitle>공지사항</Subtitle>
                    <Subtitle>이벤트</Subtitle>
                    <Subtitle>FAQ</Subtitle>
                    <Subtitle>Q&A</Subtitle>
                </SubtitleWrapper>
            </InputWrapper>

            <Divider></Divider>

            <InputWrapper>
                <ContentsWrapper>
                    <Contents>
                        <Number>Q. 01</Number>
                        <Subject>리뷰 작성은 어떻게 하나요?</Subject>
                    </Contents>
                    <ContentsLabel src={`img/ContentsLabel.png`}></ContentsLabel>
                </ContentsWrapper>

                <ContentsWrapper>
                    <Contents>
                        <Number>Q. 02</Number>
                        <Subject>리뷰 수정/삭제는 어떻게 하나요?</Subject>
                    </Contents>
                    <ContentsLabel src={`img/ContentsLabel.png`}></ContentsLabel>
                </ContentsWrapper>

                <ContentsWrapper>
                    <Contents>
                        <Number>Q. 03</Number>
                        <Subject>아이디/비밀번호를 잊어버렸어요</Subject>
                    </Contents>
                    <ContentsLabel src={`img/ContentsLabel.png`}></ContentsLabel>
                </ContentsWrapper>

                <ContentsWrapper>
                    <Contents>
                        <Number>Q. 04</Number>
                        <Subject>회원탈퇴를 하고싶어요</Subject>
                    </Contents>
                    <ContentsLabel src={`img/ContentsLabel.png`}></ContentsLabel>
                </ContentsWrapper>

                <ContentsWrapper>
                    <Contents>
                        <Number>Q. 05</Number>
                        <Subject>출발지 설정은 어떻게 하나요?</Subject>
                    </Contents>
                    <ContentsLabel src={`img/ContentsLabel.png`}></ContentsLabel>
                </ContentsWrapper>

                <ContentsWrapper>
                    <Contents>
                        <Number>Q. 06</Number>
                        <Subject>비밀번호를 변경하고 싶어요</Subject>
                    </Contents>
                    <ContentsLabel src={`img/ContentsLabel.png`}></ContentsLabel>
                </ContentsWrapper>
            </InputWrapper>

            <Divider></Divider>

            <MenuWrapper>
                <Menu>
                    <MenuIcon src={`img/Home.png`}></MenuIcon>
                    <MenuLabel>홈</MenuLabel>
                </Menu>
                <Menu>
                    <MenuIcon src={`img/Itsroad.png`}></MenuIcon>
                    <MenuLabel>잇츠로드</MenuLabel>
                </Menu>
                <Menu>
                    <MenuIcon src={`img/Myzzim.png`}></MenuIcon>
                    <MenuLabel>마이찜</MenuLabel>
                </Menu>
                <Menu>
                    <MenuIcon src={`img/My.png`}></MenuIcon>
                    <MenuLabel>마이</MenuLabel>
                </Menu>
            </MenuWrapper>
        </Wrapper>
    )
};