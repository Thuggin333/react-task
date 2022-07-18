import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
  return React.createElement(
    "div",
    { className: "App" },
    React.createElement(
      "header",
      { className: "App-header" },

      React.createElement("img", {
        src: logo,
        className: "App-logo",
        alt: "logo"
      }),
      React.createElement("p", null, `Helo World`),
      React.createElement(
        "a",
        {
          className: "App-link",
          href: "https://reactjs.org",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        "Learn React"
      )
    )
  );
}
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>Hello World</p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
// test 
export default App;


