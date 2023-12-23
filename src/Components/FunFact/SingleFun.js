import React from "react";

const SingleFun = ({ funfacts }) => {
    console.log(funfacts.title)
  return (
    <>
      <div className="single-fun">
              <i className={`icofont ${funfacts.icon}`} />
        <div className="content">
          <span className="counter">{funfacts.count}</span>
          <p>{funfacts.title}</p>
        </div>
      </div>
    </>
  );
};

export default SingleFun;
