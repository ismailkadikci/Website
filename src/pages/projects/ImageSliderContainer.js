import ImageSlider from "./ImageSlider";
import './ImageSliderContainer.css';

import image1 from "../../images/img-4.jpg";
import image2 from "../../images/img-2.jpg";
import image3 from "../../images/img-3.jpg";

const slides = [
    { url:  image1, title: "beach" },
    { url: image2, title: "beach" },
    { url: image3, title: "beach" },
  ];

function ImageSliderContainer()
{

    return(
        <div className="imageslidercontainer">
            <ImageSlider slides = {slides}/>
        </div>
    );

}

export default ImageSliderContainer;