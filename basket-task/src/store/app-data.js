import React from 'react';

const AppData = React.createContext({
        appData: {
              user: {
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
        }, 
})

export default AppData;