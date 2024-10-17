"use client"
import React, { useState,useCallback } from "react";

export default function Home() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [Password, setPassword] = useState(""); 

  const PasswordGenerator = useCallback(() =>{
    let pass= ""
    let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAllowed) str+= "0123456789"
    if(charAllowed) str+= "@#$%^&*(){}"

    for(i=1; i<= array.length; i++ ){
        let char =Math.floor(Math.random() * str.length + 1)
        pass =str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])
  
  return (
    <> 
    <div className="w-full  max-w-lg mx-auto shadow-md rounded-lg 
    px-6 py-4 my-12 text-orange-500 bg-gray-800">
    
    <h1 className="text-white text-center my-3 font-bold">Password</h1>
    <div className="flex shadow-lg rounded-lg overflow-hidden mb-4">
    <input
    type="text"
    value={Password}
    className="outline-none w-full py-1 px-3 "
    placeholder="password"
    readOnly
    />
    <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
    Copy</button>
    </div>
    
    <div className="flex items-center text-sm gap-x-1">
    <input
       type="range"
       min={6}
       max={25}
       value={length}
       className="cursor-pointer"
       onChange={(e) => {setLength(e.target.value)}}
    />
    <label>Length: {length}</label>&nbsp;&nbsp;&nbsp;&nbsp;
    
    <div className="flex items-center gap-x-1">
    <input
        type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={() =>{setNumberAllowed((prev) => !prev);

      }}
    />
    <label>Number {numberAllowed}</label>&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
       <div className="flex items-center gap-x-1">
       <input
       type="checkbox"
       defaultChecked={charAllowed}
       id="characterInput"
    
       onChange={() =>{setNumberAllowed((prev) => !prev);

      }}
      />
      <label>Special Character {charAllowed}</label>
      </div>
      </div>
      <img className="mt-2 rounded-md" src="password image.png" 
      alt="" width="100%" height="100%"/>
     </div>
     </>
  );
}