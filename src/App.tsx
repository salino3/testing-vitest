import React from 'react';
import {Accordion} from './components/accordion/accordion.component';

export const App: React.FC = () => {
  return (
    <>
      <div>More info</div>
      <Accordion >
        Content!
      </Accordion>
    </>
  );
}
