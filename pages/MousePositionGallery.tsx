import React, { useEffect } from "react";
import Image from "next/image";

import MousePositionGalleryRectangle from "../components/mousePositionGallery/MousePositionGalleryRectangle";
import MousePositionGalleryWrapper from "../components/mousePositionGallery/MousePositionGalleryWrapper";
import BodyWrapper from "../components/wrappers/BodyWrapper";

import homepic from "../media/homepic.jpg";
import alucard from "../media/alucard.jpg";
import chihiro from "../media/chihiro.jpg";
import moovingC from "../media/moovingCastle.jpg";
import music from "../media/MUZIK.jpg";
import wallpaper1 from "../media/wallpaper1.jpg";
import wallpaper3 from "../media/wallpaper3.jpg";
import wallpaper4 from "../media/wallpaper4.jpg";

const MousePositionGallery = () => {
  useEffect(() => {
    // Script allowing the screen to translate depending on the mouse position:
    const gallery = document.getElementById("gallery");
    window.onmousemove = (e) => {
      const mouseX = e.clientX,
        mouseY = e.clientY;

      const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;

      const maxX = gallery.offsetWidth - window.innerWidth,
        maxY = gallery.offsetHeight - window.innerHeight;

      const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;

      gallery.animate(
        {
          transform: `translate(${panX}px, ${panY}px)`,
        },
        {
          duration: 4000,
          fill: "forwards",
          easing: "ease",
        }
      );
    };

    // Return a cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  }, []); // Run only once after the initial render

  return (
    <BodyWrapper>
      <MousePositionGalleryWrapper id="gallery">
        <div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        <a href="/">
          <MousePositionGalleryRectangle
            color="rgb(255, 238, 88)"
            height="14%"
            width="20%"
            left="5%"
            top="5%"
          >
            <Image
              className="image"
              src={homepic}
              alt={"myHomePic"}
              fill={true}
              style={{ objectFit: "cover" }}
            />
            <h1>HELLO THERE !</h1>
          </MousePositionGalleryRectangle>
        </a>

        <a href="/m">
          <MousePositionGalleryRectangle
            color="rgb(66, 165, 245)"
            height="24%"
            width="14%"
            left="42%"
            top="12%"
          >
            <Image
              className="image"
              src={chihiro}
              alt={"myHomePic"}
              fill={true}
              style={{ objectFit: "cover" }}
            />
            <h1>MOVIES</h1>
          </MousePositionGalleryRectangle>
        </a>

        <a href="/circleCards">
          <MousePositionGalleryRectangle
            color="rgb(239, 83, 80)"
            height="18%"
            width="16%"
            left="12%"
            top="34%"
          >
            <Image
              className="image"
              src={alucard}
              alt={"myHomePic"}
              fill={true}
              style={{ objectFit: "cover" }}
            />
            <h1>ANIME</h1>
          </MousePositionGalleryRectangle>
        </a>

        <a href="/">
          <MousePositionGalleryRectangle
            color="rgb(102, 187, 106)"
            height="14%"
            width="12%"
            left="45%"
            top="48%"
          >
            <Image
              className="image"
              src={music}
              alt={"myHomePic"}
              fill={true}
              style={{ objectFit: "cover" }}
            />
            <h1>MUSIC</h1>
          </MousePositionGalleryRectangle>
        </a>

        <a href="/">
          <MousePositionGalleryRectangle
            color="rgb(171,71,188)"
            height="16%"
            width="32%"
            left="8%"
            top="70%"
          >
            <Image
              className="image"
              src={moovingC}
              alt={"myHomePic"}
              fill={true}
              style={{ objectFit: "cover" }}
            />
            <h1>PAINTING</h1>
          </MousePositionGalleryRectangle>
        </a>

        <a href="/">
          <MousePositionGalleryRectangle
            color="rgb(255,167,38)"
            height="24%"
            width="24%"
            left="68%"
            top="8%"
          >
            <Image
              className="image"
              src={wallpaper1}
              alt={"myHomePic"}
              fill={true}
              style={{ objectFit: "cover" }}
            />
            <h1>RELAXATION</h1>
          </MousePositionGalleryRectangle>
        </a>

        <a href="/">
          <MousePositionGalleryRectangle
            color="rgb(63,881,181)"
            height="16%"
            width="20%"
            left="50%"
            top="74%"
          >
            <Image
              className="image"
              src={wallpaper3}
              alt={"myHomePic"}
              fill={true}
              style={{ objectFit: "cover" }}
            />
            <h1>ADVENTURE</h1>
          </MousePositionGalleryRectangle>
        </a>
        <a href="/">
          <MousePositionGalleryRectangle
            color="rgb(141,110,99)"
            height="24%"
            width="18%"
            left="72%"
            top="42%"
          >
            <Image
              className="image"
              src={wallpaper4}
              alt={"myHomePic"}
              fill={true}
              style={{ objectFit: "cover" }}
            />
            <h1>TECH</h1>
          </MousePositionGalleryRectangle>
        </a>
      </MousePositionGalleryWrapper>
    </BodyWrapper>
  );
};

export default MousePositionGallery;
