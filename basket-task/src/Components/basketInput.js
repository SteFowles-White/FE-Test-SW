import React, { useContext, useState } from "react";
import AppData from "../store/app-data";
import BasketInputField from "./basketInputField";

const BasketInput = (props) => {
  const [getTotalItem, setgetTotalItem] = useState(0);
  const userBasketData = useContext(AppData);
  const userOrders = userBasketData.appData.user.orderedProducts;

  const getTotal = (value) => {
      console.log(value)
  }

  return (
    <React.Fragment>
      {Object.values(userOrders).map((result, key) => {
        if (Object.values(userOrders).length - 1 > key) {
          return <BasketInputField result={result} getTotal={getTotal} lastone="false" />;
        } else {
          return <BasketInputField result={result} getTotal={getTotal} lastone="true" />;
        }
      })}

      {/* 

//lsat one 


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
      </div> */}
    </React.Fragment>
  );
};

export default BasketInput;
