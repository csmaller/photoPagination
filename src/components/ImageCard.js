import React from 'react';

const ImageCard = props => {

  const src = "PhotoGallery/"+props.image;
  return (
    <div className="col-sm-6  country-card">
      <div className="country-card-container h-100 mx-2 my-2 d-flex flex-row align-items-center p-0 ">
          <img src={src} loading="lazy" alt="bagman charters"/>
      </div>
    </div>
  )
}


export default ImageCard;
