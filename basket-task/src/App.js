

import BasketForm from './Components/basketForm'

function App() {

  let product = {
    "product-1": {
      id: "product-id-1",
      productName: "Mountain Dew",
      costPerProduct: 1.80
    },
    "product-2": {
      id: "product-id-2",
      productName: "Desperados",
      costPerProduct: 2.58
    },
    "product-3": {
      id: "product-id-3",
      productName: "Jack Daniels",
      costPerProduct: 3.35
    }
  }

  let user = {
    orderedProducts: [
      {
        productId: "product-id-1",
        productName: "Mountain Dew",
        productQuantity: 2,
      },
      {
        productId: "product-id-2",
        productName: "Desperados",
        productQuantity: 6,
      },
      {
        productId: "product-id-3",
        productName: "Jack Daniels",
        productQuantity: 4,
      }
    ]
  }


  return (
    <main className="background--grey">
      <div className="container fs-height ">
        <div className="row fs-height justify-content-center align-items-center">
          <BasketForm/>
        </div>
      </div>
    </main>
  );
}

export default App;
