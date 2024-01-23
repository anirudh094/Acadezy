import React from "react";
import "../css/products.css";
import StartFirebase from "./firebaseconfig_products";
import { ref, onValue } from "firebase/database";
import ContactUs from "./ContactUs";
const db = StartFirebase();

export class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      tableData: [],
    };
  }

  componentDidMount() {
    const dbref = ref(db, "Courses");

    onValue(dbref, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let keyName = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ key: keyName, data: data });
      });
      this.setState({ tableData: records });
    });
  }

  render() {
    return (
      <>
        <div className="courses-container">
          <div className="heading main-color">Courses We Offer</div>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {this.state.tableData.map((row, index) => {
              return (
                <a href={row.data.href} className="group course-group">
                  <div className="course-img">
                    <img src={row.data.imageSrc} alt={row.key} />
                  </div>
                  <div className="course-details">
                    <h3 className="course-name">{row.key}</h3>
                    <h4 className="course-author">{"By " + row.data.author}</h4>
                    <div className="rating-box">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="course-rating-star"
                        >
                          <path
                            fill="#FFD43B"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          />
                        </svg>
                      </div>
                      <div className="course-rating">{row.data.rating}</div>
                      <div className="course-duration">{`|  ${row.data.duration} weeks`}</div>
                    </div>
                    <div className="course-price-box">
                      <div className="course-price">
                        {"₹" + row.data.price}{" "}
                        <s className="price-cut">₹4990</s>
                      </div>
                      <div className="know-more-box">
                        <div className="know-more">Know more</div>
                        <svg
                          className="know-more-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          id="RightArrow"
                        >
                          <path
                            fill="#028cdc"
                            fill-rule="evenodd"
                            d="M8.306 18.694c.408.408 1.07.408 1.478 0l5.913-5.9A1.04 1.04 0 0 0 16 11.97a1.04 1.04 0 0 0-.306-.761l-5.91-5.904a1.046 1.046 0 0 0-1.478 0 1.043 1.043 0 0 0 0 1.476l5.227 5.22-5.227 5.217a1.042 1.042 0 0 0 0 1.475Z"
                            clip-rule="evenodd"
                            class="color000000 svgShape"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        <ContactUs />
      </>
    );
  }
}
