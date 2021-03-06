import React, {useEffect, useContext, useMemo} from 'react'
import GlobalContext from '../../context/Global/globalContext';
import AccordionItem from './AccordionItem';

const Accordion = () => {
    // Hooks
    // - Content
    const { transactions, getTransactions} = useContext(GlobalContext);

    // - Effect
    useEffect(() => {
        getTransactions();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // - Memo
    const transactionsMemo = useMemo(() => transactions, [transactions]);

    return (
        transactions && (
        <section className="accordion align-items-center d-flex flex-column">
            {
                transactionsMemo.map((transaction) => {
                    const {type, amount, id, effectiveDate} = transaction;

                    return (
                        <AccordionItem
                            type={type}
                            amount={amount}
                            id={id}
                            effectiveDate={effectiveDate}
                            key={id}
                        />
                    )
                })
            }
        </section>
        ) 
     );
}
 
export default Accordion;