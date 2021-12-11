import Styled from "styled-components";
const defaultStyle={
    textDecoration:"none !important",
    color:"#000",
    fontSize:"14px",
    cursor:"pointer",
}
export const LinkStcStyle1=Styled.a`
    ${defaultStyle};
    ${(props) => props.MonStyle || ""};
`;