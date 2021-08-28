import React from 'react';
import BasketFormButton from './basketFormButton';
import BasketInput from './basketInput';

const BasketForm = () => {

    return(

    <section className="card__basket__container">
        <div className="card card__top pt-2 pb-3 p-4 background--off-white">
        {/* assuming data will be sent to an API to update user account */}
          <form id="basketForm" action="" className="card-body pb-0 pt-0">
            <BasketInput/>
          </form>     
        </div>
        <div className="background--light-grey card__bottom pe-4 ps-4 pt-3 pb-3">
            <BasketFormButton/>
        </div>
    </section>
    )
}

export default BasketForm;