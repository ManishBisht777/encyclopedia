import React from "react";
import "./style.css";

const Slide = ({ data }) => {
  console.log(data.type);

  return (
    <main>
      <div className="slider">
        <div className="logo">Adventure</div>
        <div className="slidebg">
          <img src={data.type.background} alt="not found" />
        </div>
        <div className="slideinfo">
          <h1>{data.type.title}</h1>
        </div>
        <div className="slidestats">
          <div className="box">
            <div className="slideStatTitle">
              <h2>{data.type.title}</h2>
              <p>Into the Wild</p>
            </div>
            <article className="">{data.type.description}</article>
          </div>
          <div className="box2">
            <p>
              <span> {data.type.total}</span> Things to do in wild
            </p>
            <p>
              <span> {data.type.endangered}</span> Places to visit
            </p>
            <p>
              <span> {data.type.extinct}</span> Total hehe ok
            </p>
          </div>
          <button>Next</button>
        </div>
      </div>
    </main>
  );
};

export default Slide;
