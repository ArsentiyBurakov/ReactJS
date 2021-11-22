import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const myName = "Arsentiy";
const myLastName = "Burakov";

const MessageComponent = () => {
  return <span>{myLastName}</span>;
};

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        My First React App
        <h3>
          Hello, {props.name} <MessageComponent />
        </h3>
      </header>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App name={myName} />
  </React.StrictMode>,
  document.getElementById("root")
);
