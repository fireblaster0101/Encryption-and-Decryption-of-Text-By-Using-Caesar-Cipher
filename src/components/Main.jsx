import React, { useState } from "react";
import "./Main.css";
// const Main = () => {
//   let ptext, shf;
//   const [data, setData] = useState(null);
//   const [shift, setShift] = useState(null);
//   const [print, setPrint] = useState(false);

//   function getPdata(val) {
//     setData(val.target.value);
//     setPrint(false);
//     ptext = val.target.value;
//     console.log(ptext);
//   }
//   function getShift(val) {
//     setShift(val.target.value);
//     console.log(val.target.value);
//   }
//   function encrypt(sh, string) {
//     let resultArray = [];
//     for (let i = 0; i < string.length; i++) {
//       let code = string.charCodeAt(i) + sh;
//       while (code > 90) {
//         code = code - 90 + 64;
//       }
//       resultArray.push(String.fromCharCode(code));
//     }
//     //return resultArray.join("");
//     console.log(resultArray.join(""));
//   }
const Main = () => {
  const [str, setStr] = useState("");
  const [shift, setShift] = useState(1);
  const [genText, setGenText] = useState("");

  const caesarCipher = (e) => {
    e.preventDefault();
    let resultArray = [];
    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i) + shift;
      while (code > 90) {
        code = code - 90 + 64;
      }
      resultArray.push(String.fromCharCode(code));
    }
    setGenText(resultArray.join(""));
  };
  return (
    <>
      <div className="layout">
        <div className="main">
          <h1>Ceaser Cipher</h1>
          <div className="container">
            <form>
              <div class="mb-3">
                <label for="ptext" className="form-label">
                  {" "}
                  <h4>Enter the Text </h4>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={str}
                  onChange={(e) => setStr(e.target.value)}
                />
              </div>
              <br />
              <br />
              <div class="mb-3">
                <label for="shift" className="form-label">
                  {" "}
                  <h4>Enter number of Shift </h4>
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={shift}
                  onChange={(e) => setShift(e.target.value)}
                />
              </div>
              <br />
              <br />

              <button
                type="submit"
                className="btn btn-primary "
                onClick={caesarCipher}
              >
                Encrypt Text
              </button>

              <br />
              <br />

              <div class="">
                <label for="etext" className="form-label">
                  {" "}
                  <h4>Generated Text </h4>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={genText}
                  disabled={true}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
