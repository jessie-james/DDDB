import React from "react";
import { withGlobalProvider } from "../GlobalProvider";
import { Link } from "react-router-dom";
import "./storeFront.css";

const StoreFront = props => {
  return (
    <div className="store-front-container">
      <div>
        <h1>Choose your time line</h1>
        <p>Your box will be selected from Theme choices</p>
      </div>
      <div className="subscription-price-box">
        <div
          className={
            props.subscriptOption.lenght === "1 month"
              ? "subsciption-box-option-selected"
              : "subsciption-box-option"
          }
          onClick={() => {
            props.savedSubscription({ lenght: "1 month", price: 34.99 });
          }}
        >
          <h3> 1 Month</h3>
          <h1> 34.99</h1>
          <p>a month</p>
        </div>

        <div
          className={
            props.subscriptOption.lenght === "3 months"
            ? "subsciption-box-option-selected"
            : "subsciption-box-option"
          }
          onClick={() => {
            props.savedSubscription({ lenght: "3 months", price: 29.99 });
          }}
        >
          <h3> 3 Months</h3>
          <h1>29.99</h1>
          <p>a month</p>
        </div>

        <div
          className={
            props.subscriptOption.lenght === "6 months"
            ? "subsciption-box-option-selected"
            : "subsciption-box-option"
          }
          onClick={() => {
            props.savedSubscription({ lenght: "6 months", price: 24.99 });
          }}
        >
          <h3> 6 Months</h3>
          <h1>24.99</h1>
          <p>a month</p>
        </div>

        <div
          className={
            props.subscriptOption.lenght === "12 months"
            ? "subsciption-box-option-selected"
            : "subsciption-box-option"
          }
          onClick={() => {
            props.savedSubscription({ lenght: "12 months", price: 19.99 });
          }}
        >
          <h3>12 Months</h3>
          <h1>19.99</h1>
          <p>a month</p>
        </div>
      </div>
      <Link to="/cart">
        <button className="subsciption-box-option-button">Checkout</button>
      </Link>
    </div>
  );
};

export default withGlobalProvider(StoreFront);
