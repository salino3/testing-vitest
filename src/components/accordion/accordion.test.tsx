import {Accordion} from './accordion.component';
import { render, screen, fireEvent } from "@testing-library/react";


describe('Accordion', () => {

    beforeEach(() => {
           render(
             <Accordion title="Title">
               <h3>Hello World</h3>
               <p>some content</p>
             </Accordion>
           );
    });



    test("should show title al the time", () => {
        expect(screen.getByText("Title")).toBeDefined();
    });

    test("should not show the content at the start", () => {
        expect(screen.queryByText(/content/i)).toBeNull();

    });

    test('should show the content when title is clicked', () => {
        const button = screen.getByText(/open/i);
        fireEvent.click(button);
        expect(screen.queryByText(/content/i)).toBeDefined();

    });

    test('should hide the content when title is clicked', () => {
        const button = screen.getByText(/open/i);
        fireEvent.click(button);
        fireEvent.click(button);
        expect(screen.queryByText(/content/i)).toBeNull();
    }); 
});





