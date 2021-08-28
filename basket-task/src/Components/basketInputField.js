import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const BasketInputField = (props) => {
    const [getTotal, setgetTotal] = useState(parseFloat(props.result.totalCost).toFixed(2))
    const [getQuantity, setgetQuantity] = useState(props.result.productQuantity)
    const isLastOne = props.lastone
     console.log(isLastOne)

    const totalAmountHandler = (e) => {
        setgetQuantity(e.target.value);
        setgetTotal(calculateTotalItemPriceHandler(e.target.value, props.result.costPerProduct))
        props.getTotal(
            {
                productId: props.result.productId,
                productName: "Mountain Dew",
                productQuantity: parseInt(e.target.value),
                costPerProduct: props.result.costOfProducts,
                totalCost: parseFloat(e.target.value * props.result.costPerProduct).toFixed(2)
            }
        )
    }

    const calculateTotalItemPriceHandler = (numberOfProducts, costOfProducts) => {
        return parseFloat(numberOfProducts * costOfProducts).toFixed(2);
    }


  return (
      <React.Fragment>
          { props.lastone && 
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
                        value={getQuantity}
                        onChange={totalAmountHandler}
                    />
                </div>
                <div className="col-sm-5 pe-0 ps-0 pt-2 pt-sm-0 d-flex align-items-center justify-content-sm-end justify-content-between">
                    <p className="pe-3 card__total_value">$ {getTotal}</p>
                    <button
                        type="button"
                        aria-label="Remove items"
                        className="btn__cancel pe-sm-0"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
            </div>
        }     
      </React.Fragment>

  );
};

export default BasketInputField;
