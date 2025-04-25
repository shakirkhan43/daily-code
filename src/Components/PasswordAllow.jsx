import React, { useCallback } from 'react'
import { useState } from 'react'
function PasswordAllow(){

    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passwordGenerator = useCallback( () => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (charAllowed) str += "!@#$%^&*()_+~`|}{[]?/";
        if (numberAllowed) str  += "0123456789"; 

        for (let i = 1; i <= array.length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);

            pass = str.charAt(char);
        }
        setPassword(pass);
    },  
    [length, numberAllowed, charAllowed , setPassword])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-center text-white'>Password Generator</h1>
            <div className='flex shadow rounded-lg overflow-hidden mb-4 my-3'>
    <input type="text"
    value={password}
    className='outline-none w-full py-1 px-3'
    placeholder='Password'
    />
            </div>

     </div>
    </>
  )
}

export default PasswordAllow;
