import React, { useContext } from 'react';
import AppData from './store/app-data';
import BasketForm from './Components/basketForm'


function App() {


  const userBasketData = useContext(AppData);
   console.log(userBasketData)
  
  

  return (
    <main className="background--grey">
      <div className="container fs-height ">
        <div className="row fs-height justify-content-center align-items-center">
            <AppData.Provider value={userBasketData}>
              <BasketForm/>
            </AppData.Provider>
        </div>
      </div>
    </main>
  );
}

export default App;
