import React from 'react';
import { render, fireEvent, cleanup} from '@testing-library/react';
import ContactForm from './ContactForm';
import ReactDOM from "react-dom"
// import renderer from "react-test-renderer"

afterEach(cleanup);
// it("matches snapshot",()=>{
//    const tree = renderer.create(<ContactForm/>).toJSON();
//    expect(tree).toMatchSnapshot();
// })

test('renders wihtout crashing', ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<ContactForm/>, div)
    ReactDOM.unmountComponentAtNode(div)
})
test("renders button correctly", ()=>{
    const {getByTestId} = render(<ContactForm/>)
   expect (getByTestId('button')).toHaveTextContent("save")   // Test Fail
})
test("renders button correctly", ()=>{
    const {getByTestId} = render(<ContactForm/>)
   expect (getByTestId('button')).toHaveTextContent("Submit!")
})
test('Form Label', () => {
  const { getByText } = render(<ContactForm />);

  getByText(/first name/i);
  getByText(/last name/i);
  getByText(/email/i);
  getByText(/message/i);
});

test('Form Input', () => {
  const { getByLabelText } = render(<ContactForm />);

  getByLabelText(/first name/i);
  getByLabelText(/last name/i);
  getByLabelText(/email/i);
  getByLabelText(/message/i);
});

test('Fill out form', () => {
  const { getByLabelText } = render(<ContactForm />);

  const firstName = getByLabelText(/first name/i);
  const lastName = getByLabelText(/last name/i);
  const email = getByLabelText(/email/i);
  const message = getByLabelText(/message/i);

  fireEvent.change(firstName, {target: {value: "Test First Name"}});
  fireEvent.change(lastName, {target: {value: "Test Last Name"}});
  fireEvent.change(email, {target: {value: "Test Email"}});
  fireEvent.change(message, {target: {value: "Test message"}});

  expect(firstName.value).toBe("Test First Name");
  expect(lastName.value).toBe("Test Last Name");
  expect(email.value).toBe("Test Email");
  expect(message.value).toBe("Test message");
});

