import React, { useState, useEffect } from "react";
import "./basketForm.css";
import BasketInputField from "./basketInputField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const appData = {
  orderedProducts: [
    {
      productId: "product-id-1",
      productName: "Mountain Dew",
      productQuantity: 2,
      costPerProduct: 1.8,
      totalCost: 3.6,
    },
    {
      productId: "product-id-2",
      productName: "Desperados",
      productQuantity: 6,
      costPerProduct: 2.58,
      totalCost: 15.48,
    },
    {
      productId: "product-id-3",
      productName: "Jack Daniels",
      productQuantity: 4,
      costPerProduct: 3.35,
      totalCost: 13.4,
    },
  ],
};

const BasketForm = () => {
  const [getData, setData] = useState(appData.orderedProducts);
  const [totalCost, settotalCost] = useState();

  // function passed into basketInputField - takes the data and then resets the data used
  const formDataHandler = (data) => {
    let updatedArr = [];

    if(typeof data === 'object'){
        getData.map((result) => {
            if (data.productId === result.productId) {
              return updatedArr.push(data);
            } else {
              return updatedArr.push(result);
            }
          });
          setData(updatedArr);
    }
    
  };

  //clears all the items in the basket data (set all quanty and total cost to $0)
  const clearBasketHandler = () => {
    const result = appData.orderedProducts.map((result) => {
      return {
        productId: result.productId,
        productName: result.productName,
        productQuantity: 0,
        costPerProduct: 3.35,
        totalCost: 0,
      };
    });
    setData(result);
  };

  // when getData is changed rerender the component and calculate the Total cost of all components
  useEffect(() => {
    const getTotalValue = () => {
      let sum = [];
      getData.forEach((result) => {
        if (isNaN(parseFloat(result.totalCost).toFixed(2))) {
        } else {
          sum.push(result.totalCost);
        }
      });
      const total = sum.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
      settotalCost(total.toFixed(2));
    };
    getTotalValue();
  }, [getData]);

  // console.log((Object.values(appData.orderedProducts).length - 1) > 2)
  return (
    <section className="card__basket__container">
      <div className="card card__top pt-2 pb-3 p-4 background--off-white">
        {/* assuming data will be sent to an API to update user account order information on checkout button been pressed
        however information could be send/gathered from a localStorage/sessionStorage as well*/}
        <form id="basketForm" action="" className="card-body pb-0 pt-0">
        {/* need to check the last item in basket is false for a dynamic class */}
          {getData.map((result, key) => {
            if (Object.values(appData.orderedProducts).length - 1 > key) {
              return (
                <BasketInputField
                  key={key}
                  result={result}
                  getTotal={formDataHandler}
                  lastone="true"
                />
              );
            } else {
              return (
                <BasketInputField
                  key={key}
                  result={result}
                  getTotal={formDataHandler}
                  lastone="false"
                />
              );
            }
          })}
        </form>
      </div>
      <div className="background--light-grey card__bottom pe-4 ps-4 pt-3 pb-3">
        {/* <BasketFormButton data={getTotal}/> */}
        <div className="row">
          <div className="col-sm-5">
            <p className="mb-0 pt-2 pb-2 card__total">$ {totalCost}</p>
          </div>
          <div className="col-sm-7 card__totals__container">
            <button
              type="button"
              onClick={clearBasketHandler}
              className="pe-3 btn__clear"
            >
              Clear
            </button>
            <button
              form="basketForm"
              type="submit"
              value="submit"
              className="btn__blue"
            >
              Check Out <FontAwesomeIcon icon={faGreaterThan} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasketForm;
