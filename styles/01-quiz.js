import styled from "@emotion/styled"

export const Wrapper = styled.div`
    width: 640px;
    background-color: white;
    padding-top: 40px;
    // padding-left: 40px;
    // padding-right: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    // 가시적으로 보기 위해서 화면에서 떨어트려놓음.
    margin-top: 100px;
    margin-left : 80px;
`;

export const InputWrapper = styled.div`
    width: 560px;
    // learn in Portfolio reference Code
    padding-top: 40px;
    // border: 1px solid green;
`;

export const Search = styled.div`
    // width: 560px;
    border: 1px solid gray;
    border-radius: 15px;
    display: flex;
    flex-direction:row;
    // 우선 화면만 구성하면 되니까..
    justify-content: flex-end;
`;

export const SearchIcon = styled.img`
    width: 23px;
    height: 23px;
`;

export const ProfileWrapper = styled.div`
    display: flex;
    flex direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 40px;
    font-weight: bold;
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.img`
    width: 60px;
    height: 60px;
    margin-right: 13px;
`;

export const Name = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 24px;
    font-weight: bold;
    margin-right: 8px;
`;

export const Label = styled.img`
    width: 17px;
    height: 17px;
`;

export const SubtitleWrapper = styled.div`
    display: flex;
    flex-direction: row;

`;

export const Subtitle = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
    font-weight: bold;
    margin-right: 50px;
    color: #CACACA;
`;

export const Divider = styled.div`
    width: 100%;
    margin-top: 50px;
    border-bottom: 1px solid #CACACA;
`

export const ContentsWrapper = styled.div`
    padding-bottom: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Contents = styled.div`
`

export const Number = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    color: #CACACA;
`

export const Subject = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 24px;
    color: black:
    margin-top: 5px;
`

export const ContentsLabel = styled.img`
    width: 23px;
    height: 23px;
`

export const MenuWrapper = styled.div`
    padding-top: 14px;
    padding-bottom: 14px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const Menu = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MenuIcon = styled.img`
    width: 45px;
    height: 44px;
`

export const MenuLabel = styled.div`
    padding-top: 9px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: #ADADAD;

`