import * as S from "./Style.jsx";

export default function Header() {
  return (
    <>
      <S.HeaderBox>
        <S.LogoBox>
          <S.Img
            width={"22vw"}
            height={"13.6vh"}
            border={"solid"}
            src="./LogoCartoon.png"
            alt=""
          />
        </S.LogoBox>
        <S.NavigationBox>
          <figure>
            <S.Img width={"5.5vw"} src="./JoyStick.png" alt="" />
            <figcaption>Jogos</figcaption>
          </figure>
          <figure>
            <S.Img width={"5.5vw"} src="./Relogio.png" alt="" />
            <figcaption>Programação</figcaption>
          </figure>
        </S.NavigationBox>
      </S.HeaderBox>
    </>
  );
}
