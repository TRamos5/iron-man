import React, { useState, useEffect } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FooterImg } from "../styles"
import "./comicList.css"

const md5 = require('md5');

const ComicList = (props) => {

   const { privateKey, publicKey, id } = props;

   const [comicList, setComicList] = useState(null);

   const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5.1,
    initialSlide: 0,
    slidesToScroll: 2,
    swipeToSlide: true,
    responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 4.1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2.1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1.1,
          }
        }
      ]
  };

   useEffect(() => {
    async function fetchComicReults() {
      try {

          if (id !== undefined) {
            const ts = Date.now();
            const comicResult = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}/comics?`  + new URLSearchParams({
                limit: 10,
                offset: 10,
                ts: ts,
                apikey: publicKey,
                hash: md5(ts + privateKey + publicKey)
            }));
            const comicJson = await comicResult.json();
            setComicList(comicJson.data.results);
          }
          
      } catch (e) {
        console.error(e);
      }
    };

    fetchComicReults();
  }, [id, privateKey, publicKey]);

   return (
       <Slider {...settings}>
           {comicList ? comicList.map((comic, i) => (
               <FooterImg key={i} src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
           )) : <div>Loading</div>}
       </Slider>
   )
}

export default ComicList;