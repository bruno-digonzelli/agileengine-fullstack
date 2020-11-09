import React, {useRef, useState, useLayoutEffect} from 'react'
import PropTypes from 'prop-types';

const AccordionItem = ({type, id, amount, effectiveDate}) => {
    // Hooks
    // - Ref
    const accordionContent = useRef(null);

    // - State
    const [active, setActive] = useState(false);
    const [height, setHeight] = useState("0px");

    // Handlers
    const handleAccordion = () => {
        setActive(prev => !prev);
    }

    useLayoutEffect(() => {
        setHeight(
            active ? `${accordionContent.current.scrollHeight}px` : '0px'
        );        
    }, [active])

    return ( 
        <div
            className={`accordion-item  ${active ? 'accordion-item--state-active' : ''} ${type === 'credit' ? 'accordion-item--type-credit' : 'accordion-item--type-debit'} p-4 mb-5`}
        >
            {/* Header */}
            <div className="accordion-item__header d-flex justify-content-between align-items-center">
                <div className="accordion-item__header-info d-flex justify-content-between pr-5">
                    <h2 className="accordion-item__header-title mr-3 text-capitalize">Type: {type}</h2>
                    <h3>Amount: {amount}</h3>
                </div>

                <button className="accordion-item__expand btn" onClick={handleAccordion}>{active ? 'Collapse' : 'Expand'}</button>
            </div>

            <div
                className="accordion-item__body overflow-hidden"
                ref={accordionContent}
                style={{maxHeight: `${height}`}}
            >
                <ul>
                    <li className="accordion-item__list mb-2">Transaction Id: {id}</li>
                    <li className="accordion-item__list mb-2">Type: {type}</li>
                    <li className="accordion-item__list mb-2">Amount: {amount}</li>
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