import React from "react";
import "./Card.css";
function Card({ inf }) {
  console.log();
  return (
    <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      <img
        src={inf.formats["image/jpeg"]}
        className="db w-100 br2 br--top"
        alt="of a kitten looking menacing."
      />
      <div className="pa2 ph3-ns pb3-ns">
        <div className="dt w-100 mt1">
          <div className="dtc">
            <h1 className="f5 f4-ns mv0">{inf.title}</h1>
          </div>
          <div className="dtc tr">
            <h2 className="f5 mv0">{inf.id}</h2>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Card;
