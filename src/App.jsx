import { useState } from "react";
import { BiClipboard } from "react-icons/bi";
import app from "./App.css";
import  {Uppercase,Lowercase,numbers,symbols} from './character'

function App() {
  const [password, setPassword] = useState("");
  const [passwordlength, setPasswordlength] = useState(20);
  const [includeuppercase, setIncludeuppercase] = useState(false);
  const [includelowercase, setInlcudelowercase] = useState(false);
  const [includenumber, setInlcudenumber] = useState(false);
  const [includesymbol, setInlcudesymbol] = useState(false);


  const handlegenerator = (e) => {
    let characterlist = ''

    if (includelowercase){
      characterlist = characterlist + Lowercase
    }

    if(includeuppercase){
      characterlist += Uppercase
    }

    if(includenumber){
      characterlist+= numbers
    }
    if(includesymbol) {
      characterlist += symbols
    }

    setPassword(characterlist)
  }


  const generatePassword = (characterlist) =>{
    

  }

  return (
    <>
      <div className="container mx-auto max-w-[400px] bg-cyan-600 mt-[150px] rounded-md shadow-lg shadow-black  ">
        <div className="header text-center  text-black font-bold text-3xl p-4  ">
          <h3>Password Generator</h3>
        </div>

        <div className="password-generator flex justify-between mx-4 rounded-sm  px-2  items-center bg-gray-600  h-10">
          <h2 className=" ">{password}</h2>
          <button>
            <BiClipboard className="bg-blue-500 h-7 w-6 rounded-sm -mr-1" />{" "}
          </button>
        </div>

        <div className=" mx-4 py-5 ">
          <div className="form-group flex justify-between my-2">
            <label htmlFor="{password}-length">Password length</label>
            <input
              defaultValue={passwordlength}
              onChange={(e) => setPasswordlength(e.target.value)}
              type="number"
              name="password-length"
              id="password-length"
              max="20"
              min="10"
              className="w-8 border-none outline-none"
            />
          </div>

          <div className="form-group flex justify-between my-2">
            <label htmlFor="Inlclude-uppercase">Include Uppercase</label>
            <input
              checked={includeuppercase}
              onChange={(e) => setIncludeuppercase(e.target.checked)}
              type="checkbox"
              name="Inlclude-uppercase"
              id="Inlclude-uppercase"
            />
          </div>

          <div className="form-group flex justify-between my-2">
            <label htmlFor="Inlclude-lowercase">Include Lowercase</label>
            <input
              checked={includelowercase}
              onChange={(e) => setInlcudelowercase(e.target.checked)}
              type="checkbox"
              name="Inlclude-lowercase"
              id="Inlclude-lowercase"
            />
          </div>

          <div className="form-group flex justify-between my-2">
            <label htmlFor="Inlclude-number">Include Number</label>
            <input
              checked={includenumber}
              onChange={(e) => setInlcudenumber(e.target.checked)}
              type="checkbox"
              name="Inlclude-number"
              id="Inlclude-number"
            />
          </div>

          <div className="form-group flex justify-between my-2">
            <label htmlFor="Inlclude-symbol">Include Symbol</label>
            <input
              checked={includesymbol}
              onChange={(e) => setInlcudesymbol(e.target.checked)}
              type="checkbox"
              name="Inlclude-symbol"
              id="Inlclude-symbol"
            />
          </div>
        </div>

        <div className="mx-20">
          <button onClick={handlegenerator} className="bg-indigo-600 font-bold text-black  rounded-lg w-52 p-2 m-4   ">
             Generate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
