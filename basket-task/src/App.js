// import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <main className="background--grey">
      <div className="container fs-height ">
        <div className="row fs-height justify-content-center align-items-center">
          <section className="card__basket__container">
            <div className="card card__top pt-2 pb-3 p-4 background--off-white">
              <form className="card-body pb-0 pt-0">
                <div className="row pt-3 pb-3 card__item">
                  <div className="col-sm-7 justify-content-between d-flex align-items-center ps-0 pe-0">
                      <label for="product-id-1" className="">Mountain Dew</label>
                      <input type="text" className="card__total_quantity text-center" id="product-id-1" aria-describedby="product-id-1"/>
                  </div> 
                  <div className="col-sm-5 pe-0 ps-0 pt-2 pt-sm-0 d-flex align-items-center justify-content-sm-end justify-content-between">
                    <p className="pe-3 card__total_value">$19.33</p>
                    <button className="btn__cancel pe-sm-0"><FontAwesomeIcon icon={ faTimes } /></button>
                  </div>  
                </div>       
                <div className="row pt-3 pb-3 card__item">
                  <div className="col-sm-7 justify-content-between d-flex align-items-center ps-0 pe-0">
                      <label for="product-id-2" className="">Mountain Dew</label>
                      <input type="text" className="card__total_quantity text-center" id="product-id-2" aria-describedby="product-id-2"/>
                  </div> 
                  <div className="col-sm-5 pe-0 ps-0 pt-2 pt-sm-0 d-flex align-items-center justify-content-sm-end justify-content-between">
                    <p className="pe-3 card__total_value">$19.33</p>
                    <button className="btn__cancel pe-sm-0"><FontAwesomeIcon icon={ faTimes } /></button>
                  </div>  
                </div>       
                <div className="row pt-3 pb-3">
                  <div className="col-sm-7 justify-content-between d-flex align-items-center ps-0 pe-0">
                      <label for="product-id-3" className="">Mountain Dew</label>
                      <input type="text" className="card__total_quantity text-center" id="product-id-3" aria-describedby="product-id-3"/>
                  </div> 
                  <div className="col-sm-5 pe-0 ps-0 pt-2 pt-sm-0 d-flex align-items-center justify-content-sm-end justify-content-between">
                    <p className="pe-3 card__total_value">$19.33</p>
                    <button className="btn__cancel pe-sm-0 pb-0"><FontAwesomeIcon icon={ faTimes } /></button>
                  </div>  
                </div>       
              </form>     
            </div>
            <div className="background--light-grey card__bottom pe-4 ps-4 pt-3 pb-3">
              <div className="row">
                <div className="col-sm-5">
                    <p className="mb-0 pt-2 pb-2 card__total">$ 34.54</p>
                </div> 
                <div className="col-sm-7 card__totals__container">
                  <button className="pe-3 btn__clear">Clear</button>
                  <button className="btn__blue">Check Out  <FontAwesomeIcon icon={ faGreaterThan } /></button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
