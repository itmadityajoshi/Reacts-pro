import { useState } from "react";
import { BiClipboard } from "react-icons/bi";
import app from "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [passwordlength, setPasswordlength] = useState(20);

  return (
    <>
      <div className="container mx-auto max-w-[300px] bg-cyan-600 mt-[150px] rounded-md shadow-lg shadow-black  ">
        <div className="header text-center  text-white font-bold text-3xl p-4  ">
          <h3>Password Generator</h3>
        </div>

        <div className="password-generator flex justify-between mx-10  px-2  items-center bg-gray-600 w-56 h-8">
          <h2 className=" ">{password}</h2>
          <button>
            <BiClipboard className="bg-blue-500 h-6 w-4 -mr-1" />{" "}
          </button>
        </div>

        <div className=" mx-4 py-5 ">
          <div className="form-group flex justify-between my-2">
            <label htmlFor="{password}-length">Password length</label>
            <input
            defaultValue={passwordlength}
              type="number"
              name="password-length"
              id="password-length"
              max="20"
              min="10"
            />
          </div>

          <div className="form-group flex justify-between my-2">
            <label htmlFor="Inlclude-uppercase">Include Uppercase</label>
            <input
              type="checkbox"
              name="Inlclude-uppercase"
              id="Inlclude-uppercase"
            />
          </div>

          <div className="form-group flex justify-between my-2">
            <label htmlFor="Inlclude-lowercase">Include Lowercase</label>
            <input
              type="checkbox"
              name="Inlclude-lowercase"
              id="Inlclude-lowercase"
            />
          </div>

          <div className="form-group flex justify-between my-2">
            <label htmlFor="Inlclude-number">Include Number</label>
            <input
              type="checkbox"
              name="Inlclude-number"
              id="Inlclude-number"
            />
          </div>

          <div className="form-group flex justify-between my-2">
            <label htmlFor="Inlclude-symbol">Include Symbol</label>
            <input
              type="checkbox"
              name="Inlclude-symbol"
              id="Inlclude-symbol"
            />
          </div>
        </div>

        <div className="mx-24 py-4">
          <button className="bg-gray-600 font-bold text-white rounded-lg w-24 h-8 ">
            Generate
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
