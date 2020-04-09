import React from "react";

export default function ImageItem({images}) {
    return(<div className="gallery__image-wrapper">
        {images.map(item => <img className="gallery__image" src={item} alt="" />)}
    </div>   )
}
