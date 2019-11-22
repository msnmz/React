import React from "react";
import "./guarantee.css";

export function Guarantee(props) {
  return (
    <div className="guarantee">
      <img className="guarantee-img" src={props.img} alt={props.title} />
      <h2 className="guarantee-title">{props.title}</h2>
      <p className="guarantee-description">{props.description}</p>
    </div>
  );
}

function GuaranteeList(props) {
  return (
    <div className="guarantee-container">
      {props.guaranties.map((guarantee, idx) => (
        <Guarantee
          img={guarantee.img}
          title={guarantee.title}
          description={guarantee.description}
          key={"guarantee_" + idx}
        />
      ))}
    </div>
  );
}

export default GuaranteeList;
