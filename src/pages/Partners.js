import React from "react";
import "../css/partners.css";
import "../css/flickity.css";

export function AddLibrary(urlOfTheLibrary) {
    const script = document.createElement("script");
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
}
function Partners() {
  return (
    <>
        <div className="partners-body">
            <div className="partners-heading">Our Partners</div>
            <div className="carousel partners-carousel" data-flickity='{"groupCells": 1,"autoPlay": 900,"pauseAutoPlayOnHover": false, "wrapAround": true,"prevNextButtons": false, "pageDots": false}'>
                <div className="carousel-cell partners-cell">
                    <img src="images/4.png"></img>
                </div>
                <div className="carousel-cell partners-cell">
                    <img src="images/4.png"></img>
                </div>
                <div className="carousel-cell partners-cell">
                    <img src="images/4.png"></img>
                </div>
                <div className="carousel-cell partners-cell">
                    <img src="images/4.png"></img>
                </div>
                <div className="carousel-cell partners-cell">
                    <img src="images/4.png"></img>
                </div>
                --------
            </div>
            
      </div>
      
      {AddLibrary("https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js")}
    </>
  );
}

export default Partners;
