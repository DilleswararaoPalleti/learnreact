/*
<div id="parent">
    <div id="child">
        <h1>this is the nested in react</h1>
        <h2>this is the h2 sibling 
    </div>
     <div id="child">
        <h1>this is the nested in react</h1>
        <h2>this is the h2 sibling 
    </div>

</div>
*/
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is the nested in react"),
    React.createElement("h2", {}, "this is the namaste in react"),
  ]),
  React.createElement("div", { id: "chil2" }, [
    React.createElement("h1", {}, "this is the nested in react"),
    React.createElement("h2", {}, "this is the nested in react"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);
