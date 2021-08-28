import React, { useState, useEffect }from 'react';
import BasketInputField from "./basketInputField";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
   
const appData = {
    orderedProducts: [
      {
        productId: "product-id-1",
        productName: "Mountain Dew",
        productQuantity: 2,
        costPerProduct: 1.80,
        totalCost: 3.60 
      },
      {
        productId: "product-id-2",
        productName: "Desperados",
        productQuantity: 6,
        costPerProduct: 2.58,
        totalCost: 15.48
      },
      {
        productId: "product-id-3",
        productName: "Jack Daniels",
        productQuantity: 4,
        costPerProduct: 3.35,
        totalCost: 13.40
      }
    ]
}

const BasketForm = () => {
    const [getTotal, setGetTotal] = useState(appData.orderedProducts);
    const [totalCost, settotalCost] = useState();
 

    const formDataHandler = (data) => {
        let updatedArr = [];
        getTotal.map(result => {
        
            if(data.productId === result.productId){
                return updatedArr.push(data);
            }else {
                return updatedArr.push(result)
            }
        })
        setGetTotal(updatedArr)
    }


    useEffect(() => {
        const getTotalValue = () => {
            let sum = [];
            getTotal.forEach(result => {
                if(isNaN(parseFloat(result.totalCost).toFixed(2))){
                }else{
                    sum.push(result.totalCost);
                }
            })
            const total = sum.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
            settotalCost(total.toFixed(2));
        }
        getTotalValue()
    }, [getTotal])


    // console.log((Object.values(appData.orderedProducts).length - 1) > 2)
    return(

    <section className="card__basket__container">
        <div className="card card__top pt-2 pb-3 p-4 background--off-white">
        {/* assuming data will be sent to an API to update user account */}
          <form id="basketForm" action="" className="card-body pb-0 pt-0">
          {appData.orderedProducts.map((result, key) => {

                if (Object.values(appData.orderedProducts).length - 1 > key) {
                return <BasketInputField key={key} result={result} getTotal={formDataHandler} lastone="true" />;
                } else {
                return <BasketInputField key={key} result={result} getTotal={formDataHandler} lastone="false" />;
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
                <button type="button" className="pe-3 btn__clear">Clear</button>
                <button form="basketForm" type="submit" value="submit" className="btn__blue">Check Out  <FontAwesomeIcon icon={ faGreaterThan } /></button>
            </div>
        </div>
        </div>
    </section>
    )
}

export default BasketForm;