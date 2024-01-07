import React from "react";
import "../css/testimonials.css";
import "../css/flickity.css";

export function AddLibrary(urlOfTheLibrary) {
    const script = document.createElement("script");
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
}
function Testimonials() {
  return (
    <>
        <div className="testimonials-body">
            <div className="testimonial-heading">Our Students Testimonials</div>
            <div className="carousel" data-flickity='{"groupCells": 1,"autoPlay": 900,"pauseAutoPlayOnHover": false, "wrapAround": true,"prevNextButtons": false }'>
                <div className="carousel-cell">
                    <img src="images/3.png"></img>
                    <p className="testimonial-comment">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.</p>
                    <div className="testimonial-comment-name">Richard McClintock,Hampden-Sydney College</div>
                </div>
                <div className="carousel-cell">
                    <img src="images/3.png"></img>
                    <p className="testimonial-comment">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.</p>
                    <div className="testimonial-comment-name">Richard McClintock,Hampden-Sydney College</div>
                </div>
                <div className="carousel-cell">
                    <img src="images/3.png"></img>
                    <p className="testimonial-comment">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.</p>
                    <div className="testimonial-comment-name">Richard McClintock,Hampden-Sydney College</div>
                </div>
                <div className="carousel-cell">
                    <img src="images/3.png"></img>
                    <p className="testimonial-comment">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                    </p>
                    <div className="testimonial-comment-name">Richard McClintock,Hampden-Sydney College</div>
                </div>
                <div className="carousel-cell">
                    <img src="images/3.png"></img>
                    <p className="testimonial-comment">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.</p>
                    <div className="testimonial-comment-name">Richard McClintock,Hampden-Sydney College</div>
                </div>
            </div>
            <br></br><br></br>
      </div>
      
      {AddLibrary("https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js")}
    </>
  );
}

export default Testimonials;
