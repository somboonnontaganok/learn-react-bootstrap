import "./VideoCarousel.js";
import React from "react";
import { Carousel } from "react-bootstrap";
import Vid1 from "./videos/IMG_2486.MOV";
import Vid2 from "./videos/IMG_2832.MOV";
import Vid3 from "./videos/IMG_2852.MOV";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";

const VideoCarousel = () => {
    const videoProperties = [
        {
            id: 1,
            title: "Video for fun",
            src: Vid1,
            credit: "Video by me",
        },
        {
            id: 2,
            title: "Video for fun",
            src: Vid2,
            credit: "Video by me",
        },
        {
            id: 3,
            title: "Video for fun",
            src: Vid3,
            credit: "Video by me",
        },
    ];
    return <div className="App">
        <Carousel>
            {videoProperties.map((videoObj) => {
                return (
                    <Carousel.Item key={videoObj.id}>
                        <ReactPlayer 
                            url={videoObj.src}
                            width="100%"
                            // height="auto"
                            pip={true}
                            controls={true}
                            playing={true}
                        />
                        <Carousel.Caption>
                            <h3>{videoObj.title}</h3>
                            <p>{videoObj.credit}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    </div>
}

export default VideoCarousel;