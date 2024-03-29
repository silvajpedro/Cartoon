import { useState, useEffect } from "react";
import * as S from "./Style";
import axios from "axios";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import cartoons_info from "./cartoons.json";

export default function NukaCarousel({ index }) {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [openButton, setOpenButton] = useState(false);

  const PullData = async () => {
    const Data = await axios.get(
      "https://api.sampleapis.com/cartoons/cartoons2D"
    );
    setData(Data.data);
  };

  useEffect(() => {
    PullData();
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setOpenButton(!openButton);
      }, 1000);
    }
  }, [isOpen]);

  const Carrosel = {
    width: "82vw",
    height: "82vh",
  };

  console.log(data);

  const configCarousel = {
    renderBottomCenterControls: false,
    slidesToShow: 1,
    style: Carrosel,
    wrapAround: true,
    slideIndex: index,
    speed: 900,
    defaultControlsConfig: {
      nextButtonText: <HiArrowCircleRight />,
      nextButtonStyle: {
        position: "relative",
        top: "-1vh",
        right: "-3vw",
        color: "#EDD820",
        fontSize: "8vw",
        backgroundColor: "transparent",
      },
      prevButtonText: <HiArrowCircleLeft />,
      prevButtonStyle: {
        position: "relative",
        top: "-1vh",
        right: "3vw",
        color: "#EDD820",
        fontSize: "8vw",
        backgroundColor: "transparent",
      },
    },
  };

  const CartoonsData = (item) => {
    let imageUrl;

    if (item.id === 1) {
      imageUrl =
        "https://i.pinimg.com/564x/1c/d7/40/1cd740a6c3b144fc3ccac072cc9d1bc0.jpg";
    } else if (item.id === 3) {
      imageUrl =
        "https://static.tvtropes.org/pmwiki/pub/images/ecd116cb2581fd85ce28d7ce21542c16.png";
    } else if (item.id === 6) {
      imageUrl =
        "https://i.pinimg.com/originals/f0/0b/7b/f00b7b92269a56ba5c0c21a82759f1f4.jpg";
    } else if (item.id === 14) {
      imageUrl =
        "https://m.media-amazon.com/images/I/71ANRSMnDsL._AC_UF1000,1000_QL80_.jpg";
    } else if (item.id === 22) {
      imageUrl =
        "https://m.media-amazon.com/images/M/MV5BMmZjMjU1YmMtY2QwOC00ZjI1LWJlMjEtYTYxOWU1ZGIzOGUwXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg";
    } else {
      imageUrl = item.image;
    }

    return (
      <>
        <S.CarroselBox>
          <S.CartoonsHour>
            <S.CardCartoon
              style={{ backgroundImage: `url(${imageUrl})` }}
            ></S.CardCartoon>
            <S.InfoCartoon>
              <S.LiveBox>
                {index + 1 === item.id ? (
                  <img src="/live.gif" alt="" />
                ) : (
                  <p>
                    {item.id + 1}h - {item.id + 2 === 25 ? "01" : item.id + 2}h
                  </p>
                )}
              </S.LiveBox>
              <S.CartoonInfoText>
                "{item.title}"- {cartoons_info[item.id - 1]?.cartoon_sinopse}
              </S.CartoonInfoText>
              <S.WatchButton
                onClick={() => setIsOpen(!isOpen)}
                opacity={index + 1 === item.id ? 1 : 0.6}
                disabled={index + 1 === item.id ? false:true}
                pointer={index + 1 === item.id ? "pointer":"not-allowed"}
              >
                Watch Now
              </S.WatchButton>
            </S.InfoCartoon>
            {isOpen && index + 1 === item.id ? (
              <S.IframeCartoon
                src={cartoons_info[item.id - 1]?.cartoon_iframe}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></S.IframeCartoon>
            ) : (
              ""
            )}
          </S.CartoonsHour>

          {openButton && isOpen && index + 1 === item.id ? (
            <S.BoxCloseButton>
              <S.CloseButton
                onClick={() => {
                  setIsOpen(!isOpen);
                  setOpenButton(!openButton);
                }}
              />
            </S.BoxCloseButton>
          ) : (
            ""
          )}
        </S.CarroselBox>
      </>
    );
  };

  return (
    <S.Carrosel {...configCarousel}>
      {data.map((item) => CartoonsData(item))}
    </S.Carrosel>
  );
}
