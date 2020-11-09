import { render, screen, fireEvent } from '@testing-library/react';
import AccordionItem from '../components/Accordion/AccordionItem';

describe('AccordionItem', () => {
  const exampleItem = () => {
    const values = {
      type: 'credit',
      id: '844b85eb-1e79-4dd8-990c-b8ad7ec09213',
      amount: 13,
      effectiveDate: '2020-11-09T01:44:12.431Z'
    };

    return (
      render(<AccordionItem
        type={values.type}
        id={values.id}
        amount={values.amount}
        effectiveDate={values.effectiveDate}
      />)
    )
  };

  test('Accordion renders with values', () => {
    const accordion = exampleItem();

    expect(accordion).toMatchSnapshot();
  });

  test('Button changes text when clicked', () => {
    exampleItem();

    const buttonElement = screen.getByText('Expand');

    fireEvent.click(buttonElement);

    expect(buttonElement.innerHTML).toBe('Collapse');
  });
});
