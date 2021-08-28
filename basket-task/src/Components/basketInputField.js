import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import AppData from "../store/app-data";

const BasketInputField = (props) => {

    console.log(props)

  const calculateTotalItemPriceHandler = (numberOfProducts, costOfProducts) => {
    let number = 0;
    let cost = 0;

    //I will add testing later
    // console.log(typeof numberOfProducts === 'number')
    // if (typeof numberOfProducts === 'number') {
    //     number = numberOfProducts;
    // }else if (typeof numberOfProducts === 'string'){

    // }
    return parseFloat(numberOfProducts * costOfProducts).toFixed(2);
  }


  return (
    <div className="row pt-3 pb-3 card__item">
        <div className="col-sm-7 justify-content-between d-flex align-items-center ps-0 pe-0">
            <label htmlFor={props.result.productId} className="">
                {props.result.productName}
            </label>
            <input
                type="text"
                className="card__total_quantity text-center"
                id={props.result.productId}
                aria-describedby={props.result.productId}
                value={props.result.productQuantity}
            />
        </div>
        <div className="col-sm-5 pe-0 ps-0 pt-2 pt-sm-0 d-flex align-items-center justify-content-sm-end justify-content-between">
            <p className="pe-3 card__total_value">$ {calculateTotalItemPriceHandler(props.result.costPerProduct, props.result.productQuantity)}</p>
            <button
                type="button"
                aria-label="Remove items"
                className="btn__cancel pe-sm-0"
            >
                <FontAwesomeIcon icon={faTimes} />
            </button>
        </div>
    </div>
  );
};

export default BasketInputField;
