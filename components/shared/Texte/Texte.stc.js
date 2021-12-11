import Styled from "styled-components";
const defaultStyle={
    color:"#000",
    fontSize:" 14px",
    letterSpacing: "-0.9px;",
}

 const TexteStc=Styled.p`
    ${defaultStyle};
    ${(props) => props.MonStyle || ""};
`;
export default TexteStc;