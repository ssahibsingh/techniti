import React from "react";
import img1 from "../files/carousel/img1.png";
import img2 from "../files/carousel/img2.png";
import img3 from "../files/carousel/img3.png";
import img4 from "../files/carousel/img4.png";

const FashionShow = () => {
  return (
    <div className="container">
      <div className="fashionshow">
        <h1 className="text-center">Fashion Show</h1>
        <div
          id="carouselExampleIndicators"
          class="carousel slide mt-4  carouselcss"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators bg-trans">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img1} class="d-block h-50 w-100" alt="img1" />
            </div>
            <div class="carousel-item">
              <img src={img2} class="d-block h-50 w-100" alt="img2" />
            </div>
            <div class="carousel-item">
              <img src={img3} class="d-block h-50 w-100" alt="img3" />
            </div>
            <div class="carousel-item">
              <img src={img4} class="d-block h-50 w-100" alt="img4" />
            </div>
          </div>
          <button
            class="carousel-control-prev "
            type="button "
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon " aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden ">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FashionShow;
