import { useState, useEffect } from "react";
import * as S from "./Style.jsx";
import NukaCarousel from "./NukaCarousel.jsx";

// export default function Main() {
//   const [hora, setHora] = useState(new Date().toLocaleTimeString('pt-BR').slice(0,5));

//   useEffect(() => {

//     setTimeout(() => {
//       setHora(new Date().toLocaleTimeString('pt-BR').slice(0,5));
//     }, 1000);

//     FiltragemDesenhos()

// }, [hora])

//   const [desenhos, setDesenhos] = useState([
//     { hora: 7, nome: "O LABORATÓRIO DE DEXTER" },
//     { hora: 8, nome: "A VACA E O FRANGO" },
//     { hora: 9, nome: "DU, DUDU E EDU" },
//     { hora: 10, nome: "CORAGEM, O CÃO COVARDE" },
//     { hora: 11, nome: "IRMÃO DO JOREL" },
//     { hora: 12, nome: "TURMA DA MÔNICA JOVEM" },
//     { hora: 13, nome: "STEVEN UNIVERSO" },
//     { hora: 14, nome: "BILLY E MANDY" },
//   ]);

//   const [desenhosFiltrados, setDesenhosFiltrados] = useState([])

//   const FiltragemDesenhos = () =>{
//     setDesenhosFiltrados(desenhos.filter((item)=>{
//         if(item.hora > hora.slice(0,2)){
//             return item
//         }
//     }))
//   }

//   return (
//     <>
//       <h1>{hora}</h1>
//       {desenhosFiltrados.map((item)=>(
//         <div>
//             <p>{item.nome}</p>
//             <p>{`${item.hora}:00`}</p>
//         </div>
//       ))}

//     </>
//   );
// }

export default function Main() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString("pt-BR"));
  const [indexCartoon, setIndexCartoon] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setHora(new Date().toLocaleTimeString("pt-BR"));
    }, 60000);

    setTimeout(() => {
      switch (hora.slice(0, 2)) {
        case "03":
          setIndexCartoon(1);
          break;
        case "04":
          setIndexCartoon(2);
          break;
        case "05":
          setIndexCartoon(3);
          break;
        case "06":
          setIndexCartoon(4);
          break;
        case "07":
          setIndexCartoon(5);
          break;
        case "08":
          setIndexCartoon(6);
          break;
        case "09":
          setIndexCartoon(7);
          break;
        case "10":
          setIndexCartoon(8);
          break;
        case "11":
          setIndexCartoon(9);
          break;
        case "12":
          setIndexCartoon(10);
          break;
        case "13":
          setIndexCartoon(11);
          break;
        case "14":
          setIndexCartoon(12);
          break;
        case "15":
          setIndexCartoon(13);
          break;
        case "16":
          setIndexCartoon(14);
          break;
        case "17":
          setIndexCartoon(15);
          break;
        case "18":
          setIndexCartoon(16);
          break;
        case "19":
          setIndexCartoon(17);
          break;
        case "20":
          setIndexCartoon(18);
          break;
        case "21":
          setIndexCartoon(19);
          break;
        case "22":
          setIndexCartoon(20);
          break;
        case "23":
          setIndexCartoon(21);
          break;
        default:
          setIndexCartoon(22);
      }
    }, 1000);
  }, [hora, indexCartoon]);

  const [characters, setCharacters] = useState([
    "./ScoobyDoo.png",
    "./Ben10.png",
    "./LooneyToones.png",
    "./SuperPoderosas.png",
    "./Gumball.png",
    "./TomJerry.png",
  ]);

  return (
    <>
      <S.MainBox>
        <S.CharactersSection backColor={"#211921"}>
          {characters.slice(0, 3).map((item) => (
            <S.Img
              width={"32vw"}
              height={"24vh"}
              src={item}
              alt="imagem desenho da cartoon"
            />
          ))}
        </S.CharactersSection>
        <S.CharactersSection backColor={"#EDD820"}>
          {characters.slice(3, 6).map((item) => (
            <S.Img
              width={"28vw"}
              height={"33vh"}
              src={item}
              alt="imagem desenho da cartoon"
            />
          ))}
        </S.CharactersSection>
        <S.CartoonsHourSection>
          <S.CartoonsTitle>
            Programação ao Vivo {hora.slice(0, 2)}h -{" "}
            {Number(hora.slice(0, 2)) + 1}h
          </S.CartoonsTitle>
          <NukaCarousel index={indexCartoon} />
        </S.CartoonsHourSection>
      </S.MainBox>
    </>
  );
}