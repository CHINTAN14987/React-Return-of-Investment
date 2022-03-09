import React, { useState } from "react";
import { balance, buttonDays, tier } from "./Data";
import Form from "react-bootstrap/Form";
import { IoIosArrowDown } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { BiPencil } from "react-icons/bi";

const App = () => {
  const [details, setDetails] = useState(false);
  const [input, setInput] = useState("2.10000 CAKE");
  const [currentRate, setCurrentRate] = useState("100.0 USD");
  const [hover, setHover] = useState(false);
  const clickHandler = () => {
    setDetails(!details);
    console.log(details);
  };

  const focus = () => {
    setHover(!hover);
  };
  return (
    <div className="mainContainer">
      <div className="container">
        <div className="containerHeading">
          {details ? (
            <h3 className="heading"> ROI Calculator</h3>
          ) : (
            <h3 className="heading">Calculator</h3>
          )}
          <div className="Cancelbutton">
            <img src="././cancel.png" alt="cancel" />
          </div>
          <div className="switchIcon">
            <div>
              {" "}
              <img src="././cakeIcon.png" alt="cake" />
              <span>Cake</span>
            </div>
            <div className="headingSwitch">
              <Form>
                <Form.Check
                  classsName="mySwitch"
                  type="switch"
                  id="custom-switch-one"
                  label=""
                />
              </Form>
              <span>USD</span>
            </div>
          </div>
        </div>
        <div className="firstInputContainer">
          <input
            id="firstInput"
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
        <div className="buttonContainer">
          {balance.map((item, index) => {
            return (
              <button className={`button${index}`} key={index}>
                {item}
              </button>
            );
          })}

          <span>~$20.62</span>
        </div>
        <h3 className="timeFrame">Timeframe</h3>
        <div className="days">
          {buttonDays.map((item, index) => {
            return (
              <button key={index} className={`buttonDays${index}`}>
                {item}
              </button>
            );
          })}
        </div>
        <div className="acceleratedPay">
          <h3>Enable Acclerated Pay</h3>

          <Form>
            <Form.Check type="switch" id="custom-switch-two" label="" />
          </Form>
        </div>
        <h4 className="selectTier">Select Tier</h4>
        <div className="tierSelect">
          {tier.map((item, index) => {
            return (
              <button key={index} className={`tier${index}`}>
                {item}
              </button>
            );
          })}
        </div>

        <h6 className="currentRateHeading">ROI at Current Rates</h6>

        <div className="secondInput">
          <input
            value={currentRate}
            type="text"
            onChange={(e) => {
              setCurrentRate(e.target.value);
            }}
            onFocus={focus}
            id="myInput"
          />
          {hover ? <TiTick className="icon" /> : <BiPencil className="icon" />}
        </div>
        <div className="currentRateConversion">
          <h6>- 3CAKE +10DON</h6>
        </div>
        <div className="buttonFinal">
          <button className="apply">Apply</button>
          <button className="cancel">Cancel</button>
        </div>
        <div className="showDetails" onClick={clickHandler}>
          {details ? "Hide Details" : "Show Details"} <IoIosArrowDown />
        </div>
        {details && (
          <div className="showContent">
            <div className="headLine">
              <h5 id="apy">APY</h5>
              <h5 className="percentage">63.34%</h5>
            </div>
            <ul>
              <li>Calculated Rates on current rates </li>{" "}
              <li>
                All Figures are estimates provided for your convinence only and
                by no means represent guaranteed returns{" "}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
