import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";

const basketInput = () => {
  return (
    <React.Fragment>
      <div className="row pt-3 pb-3 card__item">
        <div className="col-sm-7 justify-content-between d-flex align-items-center ps-0 pe-0">
          <label htmlFor="product-id-1" className="">
            Mountain Dew
          </label>
          <input
            type="text"
            className="card__total_quantity text-center"
            id="product-id-1"
            aria-describedby="product-id-1"
          />
        </div>
        <div className="col-sm-5 pe-0 ps-0 pt-2 pt-sm-0 d-flex align-items-center justify-content-sm-end justify-content-between">
          <p className="pe-3 card__total_value">$19.33</p>
          <button
            type="button"
            aria-label="Remove items"
            className="btn__cancel pe-sm-0"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
      <div className="row pt-3 pb-3 card__item">
        <div className="col-sm-7 justify-content-between d-flex align-items-center ps-0 pe-0">
          <label htmlFor="product-id-2" className="">
            Mountain Dew
          </label>
          <input
            type="text"
            className="card__total_quantity text-center"
            id="product-id-2"
            aria-describedby="product-id-2"
          />
        </div>
        <div className="col-sm-5 pe-0 ps-0 pt-2 pt-sm-0 d-flex align-items-center justify-content-sm-end justify-content-between">
          <p className="pe-3 card__total_value">$19.33</p>
          <button
            type="button"
            aria-label="Remove items"
            className="btn__cancel pe-sm-0"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
      <div className="row pt-3 pb-3">
        <div className="col-sm-7 justify-content-between d-flex align-items-center ps-0 pe-0">
          <label htmlFor="product-id-3" className="">
            Mountain Dew
          </label>
          <input
            type="text"
            className="card__total_quantity text-center"
            id="product-id-3"
            aria-describedby="product-id-3"
          />
        </div>
        <div className="col-sm-5 pe-0 ps-0 pt-2 pt-sm-0 d-flex align-items-center justify-content-sm-end justify-content-between">
          <p className="pe-3 card__total_value">$19.33</p>
          <button
            type="button"
            aria-label="Remove items"
            className="btn__cancel pe-sm-0 pb-0"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default basketInput;
