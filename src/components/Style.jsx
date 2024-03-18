import styled, { createGlobalStyle, css } from "styled-components";
import Carousel from "nuka-carousel";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    img{
        -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    }
    svg{
      &:hover{
        opacity: 0.5;
      }
    }
`;

const DisplayFlexCustom = ({ justify, align }) => css`
  display: flex;
  justify-content: ${justify || "center"};
  align-items: ${align || "center"};
`;

// ---------------- HEADER ----------------------//

export const HeaderBox = styled.header`
  ${DisplayFlexCustom({ justify: "space-between" })}
  background-color:#EDD820;
  height: 21vh;
`;
export const LogoBox = styled.figure`
  ${DisplayFlexCustom}
  width: 28vw;
  /* border: solid red; */
`;
export const NavigationBox = styled.nav`
  ${DisplayFlexCustom}
  width: 30vw;
  figure {
    ${DisplayFlexCustom}
    flex-direction: column;
    margin-left: 18px;
    margin-right: 18px;
    font-weight: bold;
    font-size: 1.7vw;
    &:hover {
      transform: scale(106%);
      cursor: pointer;
    }
  }
`;

export const Img = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border || "none"};
`;

// ---------------- MAIN -----------------------//

export const MainBox = styled.main``;

export const CharactersSection = styled.section`
  ${DisplayFlexCustom({ justify: "space-around" })}
  background-color: ${(props) => props.backColor};
  height: 35vh;
`;

export const CartoonsHourSection = styled.section`
  ${DisplayFlexCustom({ justify:"flex-start"})}
  flex-direction: column;
  background-color: #211921;
  height: 90vh;
`;

export const CartoonsTitle = styled.h2`
  color: #edd820;
  font-size: 2.8vw;
  margin-top: 5vh;
`;


// ---------------- Slider Carrosel--------------//

export const Carrosel = styled(Carousel)`
  /* border: solid red; */
`

export const CarroselBox = styled.section`
/* border: solid green; */
${DisplayFlexCustom}
`

export const CartoonsHour = styled.div`
${DisplayFlexCustom({justify:"space-evenly"})}
margin-top: 2vh;
background-color: #31303094;
height: 70vh;
width: 68vw;
border-radius: 20px;
outline: solid #edd820;
margin: 30px;
img{
  width: 30vw;
  height: 10vh;
}
`;

export const CardCartoon = styled.figure`
border: solid green;
height: 62vh;
width: 22vw;
background-size: 100% 100%;
background-repeat: no-repeat;
background-position: center;
border-radius: 20px;
border: solid #edd820;
outline: solid 5px #211921;
margin-top: 4vh;
margin-left: 3vw;
`
export const InfoCartoon = styled.div`
${DisplayFlexCustom({align:"flex-start"})}
  border:solid red;
  width: 34vw;
  height: 54vh;
`
export const LiveBox = styled.figure`
${DisplayFlexCustom}
margin-top: 2vh;
border: solid;
width: 16vw;
height: 7.5vh;
border-radius: 40px;
background-color: #191919;
img{
  width: 12vw;
}
`
// ---------------- FOOTER --------------------//
