import React, { createElement } from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom"
import App from "./App";


test("renders App without crashing", () => {
  const div= document.createElement("div")
  ReactDOM.render(<App/>, div)
 });

test("Testing test",()=>{
  expect(true).toBeTruthy();
})

