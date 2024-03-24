import styled, { createGlobalStyle, css } from "styled-components";
import { IoCloseCircle } from "react-icons/io5";
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
  
      height: 13vh;
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
  ${DisplayFlexCustom({ justify: "flex-start" })}
  flex-direction: column;
  background-color: #211921;
  height: 95vh;
`;

export const CartoonsTitle = styled.h2`
  color: #edd820;
  font-size: 2.85vw;
  margin-top: 4.5vh;
  font-family: "Fredoka", sans-serif;
  letter-spacing: 2px;
  font-weight: 700;
`;

// ---------------- Slider Carrosel--------------//

export const Carrosel = styled(Carousel)`
  /* border: solid red; */
  font-family: "Nunito", sans-serif;
`;

export const CarroselBox = styled.section`
  /* border: solid green; */
  ${DisplayFlexCustom}
`;

export const CartoonsHour = styled.div`
  ${DisplayFlexCustom({ justify: "space-evenly" })}
  margin-top: 2vh;
  background-color: #191919;
  height: 74vh;
  width: 68vw;
  border-radius: 20px;
  outline: solid #edd820;
  margin: 30px;
  img {
    width: 30vw;
    height: 10vh;
  }
`;

export const CardCartoon = styled.figure`
  height: 68vh;
  width: 22vw;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 20px;
  outline: solid 5px #000000;
  margin-top: 1vh;
  margin-left: 3vw;
`;
export const InfoCartoon = styled.div`
  ${DisplayFlexCustom({ align: "center", justify: "flex-start" })}
  flex-direction: column;
  border: solid black;
  background-color: #302e30;
  border-radius: 20px;
  width: 30vw;
  height: 69vh;
  p {
    font-size: 1.8vw;
    color: #edd820;
  }
`;

export const LiveBox = styled.figure`
  ${DisplayFlexCustom}
  margin-top: 2vh;
  border: solid;
  width: 16vw;
  height: 7.5vh;
  border-radius: 40px;
  background-color: #191919;
  img {
    width: 12vw;
  }
`;

export const CartoonInfoText = styled.p`
  margin-top: 4vh;
  background-color: #191919;
  padding: 13px;
  border-radius: 30px;
  width: 90%;
  border: solid 3px black;
`;
export const WatchButton = styled.button`
  margin-top: 4vh;
  width: 12vw;
  height: 7vh;
  font-size: 1.8vw;
  text-decoration: none;
  color: #edd820;
  ${DisplayFlexCustom}
  background-color: #191919;
  border: solid black;
  border-radius: 20px;
  cursor: ${(props) => props.pointer};
  opacity: ${(props) => props.opacity};
  &:hover {
    opacity: 0.5;
  }
`;

export const IframeCartoon = styled.iframe`
  position: absolute;
  width: 67vw;
  height: 73vh;
  border-radius: 20px;
  border: none;
`;
export const BoxCloseButton = styled.div`
  position: absolute;
  top: -1.2vh;
  ${DisplayFlexCustom({align:"flex-start", justify: "flex-end" })}
  width: 73vw;
`;

export const CloseButton = styled(IoCloseCircle)`
width: 5.4vw;
color:   #000000;
cursor: pointer;
background-image: url("https://i.pinimg.com/736x/2b/34/02/2b3402b56e906915d61f69671986dce3.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: 35%;
`;

// ---------------- FOOTER --------------------//
