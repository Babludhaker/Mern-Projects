import React, { useState } from "react";

function Button({ text, color, onClick, disabled, size }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-2 rounded-lg font-medium transition-all duration-300  ${size === "small" ? "text-sm px-4 py-1" : ""} 
       ${size === "large" ? "text-lg px-8 py-3" : ""}
         ${color === "primary" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}
          ${color === "secondary" ? "bg-gray-500 hover:bg-gray-600 text-white" : ""}
           ${color === "danger" ? "bg-red-500 hover:bg-red-600 text-white" : ""}
            ${color === "success" ? "bg-green-500 hover:bg-green-600 text-white" : ""}
            
             ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {text}
    </button>
  );
}
function BasicProps() {
  const [clickCount, setClickCount] = useState(0);
  return (
    <section className="p-8 bg-gray rounded-xl shadow-2xl">
      <h2 className="text-2xl text-yellow-300">Basic Props</h2>
      <p>
        Lorem ipsum dolor sit amet, Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Nisi, modi?
      </p>
      <div className="space-y-4">
        <h3 className=" text-blue-600">Click Count : {clickCount}</h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text="Primary Button"
            color="primary"
            onClick={() => setClickCount(clickCount + 1)}
          ></Button>
          <Button
            text="Secondary"
            color="secondary"
            onClick={() => setClickCount(clickCount + 1)}
          ></Button>
          <Button
            text="danger"
            color="danger"
            onClick={() => setClickCount(clickCount + 1)}
          ></Button>
          <Button
            text="success"
            color="success"
            onClick={() => setClickCount(clickCount + 1)}
          ></Button>
        </div>
      </div>
    </section>
  );
}

export default BasicProps;
