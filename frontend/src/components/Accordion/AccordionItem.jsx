import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types';

const AccordionItem = ({type, id, amount, effectiveDate}) => {
    // Hooks
    // - Ref
    const accordionContent = useRef(null);

    // - State
    const [active, setActive] = useState(false);
    const [height, setHeight] = useState("0px");

    return ( 
        <div
            className={`accordion-item  ${active ? 'accordion-item--state-active' : ''} p-4`}
        >
            {/* Header */}
            <div className="accordion-item__header d-flex justify-content-between align-items-center">
                <div className="accordion-item__header-info d-flex justify-content-between pr-5">
                    <h2 className="accordion-item__header-title mr-3 text-capitalize">{type}</h2>
                    <h3>{amount}</h3>
                </div>

                <button className="accordion-item__expand btn">Expand</button>
            </div>

            <div
                className="accordion-item__body"
                ref={accordionContent}
                style={{maxHeight: `${height}`}}
            >
                <ul>
                    <li className="accordion-item__list mb-3">Transaction Id: {id}</li>
                    <li className="accordion-item__list mb-3">Type: {type}</li>
                    <li className="accordion-item__list mb-3">Amount: {amount}</li>
                    <li className="accordion-item__list">Effective Date: {effectiveDate}</li>
                </ul>
            </div>
        </div>
     );
}

AccordionItem.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    effectiveDate: PropTypes.string.isRequired
};

export default AccordionItem;