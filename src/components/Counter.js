import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main>
      <div className="position-relative">
        <div className="position-absolute top-0 start-50 translate-middle-x">
          <h1 className="text-capitalize text-light text-center">
            Simple react redux counter app
          </h1>
        </div>
      </div>
      <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-secondary">
        <div className="card p-5 border-0 shadow rounded-5">
          <div className="text-center mb-5 rounded-5 shadow bg-light border border-5">
            <p className="display-1 m-0 p-3 p-sm-5">{count}</p>
          </div>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-success px-5 rounded-4 mx-0 mx-sm-2 mb-3 mb-sm-0"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <button
              type="button"
              className="btn btn-danger px-5 rounded-4 mx-0 mx-sm-2"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Counter;
