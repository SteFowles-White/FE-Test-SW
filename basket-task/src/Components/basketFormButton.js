import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

const basketFormButton = () => {

    return(
        <div className="row">
            <div className="col-sm-5">
                <p className="mb-0 pt-2 pb-2 card__total">$ 34.54</p>
            </div> 
            <div className="col-sm-7 card__totals__container">
                <button type="button" className="pe-3 btn__clear">Clear</button>
                <button form="basketForm" type="submit" value="submit" className="btn__blue">Check Out  <FontAwesomeIcon icon={ faGreaterThan } /></button>
            </div>
        </div>
    )
}

export default basketFormButton;