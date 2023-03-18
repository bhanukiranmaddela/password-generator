import React, { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./card.css";

const Card = () => {
  const [val, setVal] = useState(10);
  const [nums, setNums] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [lower, setLower] = useState(false);
  const [upper, setUpper] = useState(false);
  const [pass, setPass] = useState("");
  const [cop, setCop] = useState("COPY");
  let total = 0;
  const ooo = (e) => {
    setVal(e.target.value);
  };
  let lowerAl = "abcdefghijklmnopqrstuvwxyz";
  let upperAl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numsAll = "1234567890";
  let symbol = "!@#$%^&*()";
  let cases = {
    all: lowerAl + upperAl + numsAll + symbol,
    lowerUpper: lowerAl + upperAl,
    lowerNums: lowerAl + numsAll,
    lowerSymbol: lowerAl + symbol,
    uppernums: upperAl + numsAll,
    upperSymbol: upperAl + symbol,
    numsSymbols: numsAll + symbol,
    lowUppNum: lowerAl + upperAl + numsAll,
    lowUppSym: lowerAl + upperAl + symbol,
    uppNumSym: upperAl + numsAll + symbol,
    lowNumSym: lowerAl + numsAll + symbol,
    low: lowerAl,
    upp: upperAl,
    sym: symbol,
    numm: numsAll,
  };
  const generatePassword = () => {
    let passSt = "";
    if (val && nums && lower && upper && symbols) {
      passSt = cases.all;
      let ind = "";
      for (let i = 0; i < val; i++) {
        let rand = Math.floor(Math.random() * (passSt.length - 0) + 0);
        ind += passSt[rand];
      }
      setPass(ind);
      setCop("COPY");
    } else if (val && nums && lower && upper && !symbols) {
      passSt = cases.lowUppNum;
      let ind = "";
      for (let i = 0; i < val; i++) {
        let rand = Math.floor(Math.random() * (passSt.length - 0) + 0);
        ind += passSt[rand];
      }
      setPass(ind);
      setCop("COPY");
    } else if (val && nums && lower && symbols && !upper) {
      passSt = cases.lowNumSym;
      let ind = "";
      for (let i = 0; i < val; i++) {
        let rand = Math.floor(Math.random() * (passSt.length - 0) + 0);
        ind += passSt[rand];
      }
      setPass(ind);
      setCop("COPY");
    } else if (val && upper && lower && symbols && !nums) {
      passSt = cases.lowUppSym;
      let ind = "";
      for (let i = 0; i < val; i++) {
        let rand = Math.floor(Math.random() * (passSt.length - 0) + 0);
        ind += passSt[rand];
      }
      setPass(ind);
      setCop("COPY");
    } else if (val && upper && nums && symbols && !lower) {
      passSt = cases.uppNumSym;
      let ind = "";
      for (let i = 0; i < val; i++) {
        let rand = Math.floor(Math.random() * (passSt.length - 0) + 0);
        ind += passSt[rand];
      }
      setPass(ind);
      setCop("COPY");
    } else if (nums && !symbols && !lower && !upper) {
      passSt = cases.numm;
      let ind = "";
      for (let i = 0; i < val; i++) {
        let rand = Math.floor(Math.random() * (passSt.length - 0) + 0);
        ind += passSt[rand];
      }
      setPass(ind);
      setCop("COPY");
    } else if (lower && !nums && !symbols && !upper) {
      passSt = cases.low;
      let ind = "";
      for (let i = 0; i < val; i++) {
        let rand = Math.floor(Math.random() * (passSt.length - 0) + 0);
        ind += passSt[rand];
      }
      setPass(ind);
      setCop("COPY");
    } else if (upper && !nums && !lower && !symbols) {
      passSt = cases.upp;
      let ind = "";
      for (let i = 0; i < val; i++) {
        let rand = Math.floor(Math.random() * (passSt.length - 0) + 0);
        ind += passSt[rand];
      }
      setPass(ind);
      setCop("COPY");
    } else if (symbols && !nums && !lower && !upper) {
      passSt = cases.sym;
      let ind = "";
      for (let i = 0; i < val; i++) {
        let rand = Math.floor(Math.random() * (passSt.length - 0) + 0);
        ind += passSt[rand];
      }
      setPass(ind);
      setCop("COPY");
    } else if (lower && upper && !nums && !symbols) {
      passSt = cases.lowerUpper;
      let ind = "";
      for (let i = 0; i < val; i++) {
        let rand = Math.floor(Math.random() * (passSt.length - 0) + 0);
        ind += passSt[rand];
      }
      setPass(ind);
      setCop("COPY");
    } else if (lower && !upper && nums && !symbols) {
      passSt = cases.lowerNums;
      let ind = "";
      for (let i = 0; i < val; i++) {
        let rand = Math.floor(Math.random() * (passSt.length - 0) + 0);
        ind += passSt[rand];
      }
      setPass(ind);
      setCop("COPY");
    } else if (!lower && upper && nums && !symbols) {
      passSt = cases.uppernums;
      let ind = "";
      for (let i = 0; i < val; i++) {
        let rand = Math.floor(Math.random() * (passSt.length - 0) + 0);
        ind += passSt[rand];
      }
      setPass(ind);
      setCop("COPY");
    } else if (!lower && upper && !nums && symbols) {
      passSt = cases.upperSymbol;
      let ind = "";
      for (let i = 0; i < val; i++) {
        let rand = Math.floor(Math.random() * (passSt.length - 0) + 0);
        ind += passSt[rand];
      }
      setPass(ind);
      setCop("COPY");
    } else if (!lower && !upper && nums && symbols) {
      passSt = cases.numsSymbols;
      let ind = "";
      for (let i = 0; i < val; i++) {
        let rand = Math.floor(Math.random() * (passSt.length - 0) + 0);
        ind += passSt[rand];
      }
      setPass(ind);
      setCop("COPY");
    }
  };

  const copy = () => {
    navigator.clipboard.writeText(pass);
    setCop("COPIED");
  };
  const ee = (e) => {
    return pass.includes(e);
  };
  if (pass.length > 0) {
    let lows = lowerAl.split("").some(ee);
    let upps = upperAl.split("").some(ee);
    let nus = numsAll.split("").some(ee);
    let sys = symbol.split("").some(ee);
    total = lows + upps + nus + sys;
  }
  return (
    <div className="bg">
      <div className="password-cont">
        <h1 className="password">{pass.length > 0 ? pass : "Create a one"}</h1>
        {pass.length > 0 && (
          <h1 onClick={copy} className="icon">
            {cop}
          </h1>
        )}
      </div>
      <div>
        <div className="character-length">
          <div className="title-length">
            <h1 className="title">Character Length</h1>
            <h1 className="length">{val}</h1>
          </div>
          <div>
            <input
              onChange={ooo}
              value={val}
              type="range"
              min="6"
              max="15"
              step="1"
            />
          </div>
          <div className="checkboxs">
            <div className="container">
              <label>
                Include Uppercase letters
                <input
                  type="checkbox"
                  onClick={() => setUpper(!upper)}
                  checked={upper}
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="container">
              <label>
                Include Lowercase letters
                <input
                  type="checkbox"
                  onClick={() => setLower(!lower)}
                  checked={lower}
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="container">
              <label>
                Include Numbers
                <input
                  type="checkbox"
                  onClick={() => setNums(!nums)}
                  checked={nums}
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="container">
              <label>
                Include Symbols
                <input
                  type="checkbox"
                  onClick={() => setSymbols(!symbols)}
                  checked={symbols}
                />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
          <div className="strength">
            <div className="s-title">STRENGTH</div>
            <div className="compare">
              {total == 4
                ? "HARD"
                : total == 3
                ? "STRONG"
                : total == 2
                ? "MEDIUM"
                : "WEAK"}
              <div className="ps">
                <div className={"p1" + (total >= 1 ? "p1 active" : "")}></div>
                <div className={"p1" + (total >= 2 ? "p1 active" : "")}></div>
                <div className={"p1" + (total >= 3 ? "p1 active" : "")}></div>
                <div className={"p1" + (total >= 4 ? "p1 active" : "")}></div>
              </div>
            </div>
          </div>
          <div className="generate">
            <button className="gen" onClick={generatePassword}>
              GENERATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
