import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, [
//   React.createElement("div", { id: "h2" }, "this is h2"),
//   React.createElement("p", { id: "para" }, "this is paragraph"),
// ]);
const headcomonent = <h1 className="jsx">this is react using jsx </h1>;
const Headcomponent = () => (
  <div className="container">
    {headcomonent}
    <h1>this is first react functional component</h1>
  </div>
);
const elem = <span>this is span tag</span>;
const Headcomponent2 = () => {
  return (
    <div className="container">
      <Headcomponent />
      {elem}
      <h1>this is first react functional component2</h1>
    </div>
  );
};
//jsx =>React.creatElement=>ReactElement-js obj=>HTML element

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headcomponent2 />);
// root.render(headcomonent);
