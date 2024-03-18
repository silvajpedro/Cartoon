import { useState, useEffect } from "react";
import * as S from "./Style";
import axios from "axios";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";


export default function NukaCarousel({ index }) {

  const [data, setData] = useState([]);
  const [hora, setHora] = useState(new Date().toLocaleTimeString("pt-BR"));

  const PullData = async () => {
    const Data = await axios.get(
      "https://api.sampleapis.com/cartoons/cartoons2D"
    );
    setData(Data.data);
  };

  useEffect(() => {
    PullData();
  }, []);

  const Carrosel = {
    width: "82vw",
    height: "78vh",
  };

   console.log(data)

  const configCarousel = {
    renderBottomCenterControls: false,
    slidesToShow: 1,
    style: Carrosel,
    wrapAround: true,
    slideIndex:index,
    speed: 900,
    defaultControlsConfig: {
      nextButtonText: <HiArrowCircleRight />,
      nextButtonStyle: {
        position: "relative",
        top: "-2vh",
        right: "-3vw",
        color: "#EDD820",
        fontSize: "8vw",
        backgroundColor: "transparent",
        height: "18vh",
      },
      prevButtonText:  <HiArrowCircleLeft />,
      prevButtonStyle: {
        position: "relative",
        top: "-2vh",
        right:"3vw",
        color: "#EDD820",
        fontSize: "8vw",
        backgroundColor: "transparent",
        height: "18vh",
      },
    },
  };

  const CartoonsData = (item) =>{
    
    let horas = ["08-09h","09-10h","10-11h","11-12h","12-13h","13-14h"]

    let imageUrl
    
    if(item.id === 1){
        imageUrl = "https://i.pinimg.com/564x/1c/d7/40/1cd740a6c3b144fc3ccac072cc9d1bc0.jpg"
    } else if(item.id === 2){
        imageUrl = "https://static.tvtropes.org/pmwiki/pub/images/ecd116cb2581fd85ce28d7ce21542c16.png"
    }else if(item.id === 6){
        imageUrl = "https://i.pinimg.com/originals/f0/0b/7b/f00b7b92269a56ba5c0c21a82759f1f4.jpg"
    } else if(item.id === 14){
        imageUrl = "https://m.media-amazon.com/images/I/71ANRSMnDsL._AC_UF1000,1000_QL80_.jpg"
    } else if(item.id === 22){
        imageUrl = "https://m.media-amazon.com/images/M/MV5BMmZjMjU1YmMtY2QwOC00ZjI1LWJlMjEtYTYxOWU1ZGIzOGUwXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg"
    } else{
        imageUrl = item.image
    }

    return(
        <S.CarroselBox>
        <S.CartoonsHour>
            <S.CardCartoon style={{backgroundImage:`url(${imageUrl})`}}>
            </S.CardCartoon>
          {/* <h1>{item.id}</h1>
          <h1>{item.title}</h1> */}
          <S.InfoCartoon>
            <S.LiveBox>
                {index+1 === item.id ? <img src="/live.gif" alt="" />: <p>{item.id + 1}h - {item.id + 2 === 25 ? "01":item.id+2}h</p>}
            </S.LiveBox>
          </S.InfoCartoon>
        </S.CartoonsHour>
      </S.CarroselBox>  
    )
  }


// 0, 2(substituir),5, 13, 21

  return (
    <S.Carrosel {...configCarousel}>
      {data.map((item) => (CartoonsData(item)))}
    </S.Carrosel>
  );
}
