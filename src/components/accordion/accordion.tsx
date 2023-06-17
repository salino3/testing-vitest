import React from 'react';

type AccordionProps = {
    title: string;
    children: JSX.Element | JSX.Element[];
};


export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};
