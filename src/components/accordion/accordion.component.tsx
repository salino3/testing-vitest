import React from 'react';

type AccordionProps = {
    title: string;
    children: JSX.Element | JSX.Element[];
};

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div>
      <h3>{title}</h3>
      <button onClick={() => setOpen(!open)}>
        {open ? "Close" : "Open"}
      </button>
     {open && <div>{children}</div>}
    </div>
  );
};
