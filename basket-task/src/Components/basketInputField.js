import React, { useState, useEffect } from "react";
import  "./basketInputField.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const BasketInputField = (props) => {
    const [getTotal, setgetTotal] = useState(parseFloat(props.result.totalCost).toFixed(2))
    const [getQuantity, setgetQuantity] = useState(props.result.productQuantity)
    const isLastOne = (props.lastone === "true");

    
    useEffect(() => {
      return () => {
        //reset the quantity of products if the props passed in change
        setgetQuantity(props.result.productQuantity)
        setgetTotal(parseFloat(props.result.totalCost).toFixed(2))
      };
    }, [props])

    
    //chnage quantity when input value changes, change total value and update the dataset that is used
    const totalAmountHandler = (e) => {
        setgetQuantity(e.target.value);
        setgetTotal(calculateTotalItemPrice(e.target.value, props.result.costPerProduct))
        //create and send new object based on new values via props
        props.getTotal(
            {
                productId: props.result.productId,
                productName: props.result.productName,
                productQuantity: parseInt(e.target.value),
                costPerProduct: props.result.costPerProduct,
                totalCost: parseFloat(e.target.value * props.result.costPerProduct).toFixed(2)
            }
        )
    }
    // clear product items data for only this product
    const clearProductHandler = () => {
        //create and send new object based on new values via props
        props.getTotal(
            {
                productId: props.result.productId,
                productName: props.result.productName,
                productQuantity: 0,
                costPerProduct: props.result.costPerProduct,
                totalCost: 0
            }
        )
    }

    //calcuate the total price of the products quant * price for specific product on list
    const calculateTotalItemPrice = (numberOfProducts, costOfProducts) => {
        return parseFloat(numberOfProducts * costOfProducts).toFixed(2);
    }


  return (
      <React.Fragment>
          { props.lastone && 
            <div className={`row pt-3 ${isLastOne ? "card__item pb-3" : "pb-1"}`}>
                <div className="col-sm-7 justify-content-between d-flex align-items-center ps-0 pe-0">
                    <label htmlFor={props.result.productId} className="">
                        {props.result.productName}
                    </label>
                    <input
                        type="text"
                        className="card__total_quantity text-center"
                        id={props.result.productId}
                        aria-describedby={props.result.productId}
                        value={isNaN(getQuantity) ? 0 : getQuantity}
                        onChange={totalAmountHandler}
                    />
                </div>
                <div className="col-sm-5 pe-0 ps-0 pt-2 pt-sm-0 d-flex align-items-center justify-content-sm-end justify-content-between">
                    <p className="pe-3 card__total_value">$ {getTotal}</p>
                    <button
                        type="button"
                        aria-label="Remove items"
                        className="btn__cancel pe-sm-0"
                        onClick={clearProductHandler}
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
