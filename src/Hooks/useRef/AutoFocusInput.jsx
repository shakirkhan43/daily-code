// import React, { useRef } from 'react';

// function AutoFocusInput() {
//   const inputRef = useRef(null); // input element ka ref

//   const handleFocus = () => {
//     inputRef.current.focus(); // DOM par focus
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" placeholder="Type here..." />
//       <button onClick={handleFocus}>Focus Input</button>
//     </div>
//   );
// }

// export default AutoFocusInput;

import React, { useRef } from 'react';
function AutoFocusInput(){
 
    const myRef = useRef(null);

    const handelClck = () => {
        myRef.current.focus();
        myRef.current.placeholder = "Focus me";
        myRef.current.style.color = "red";
        myRef.current.select();
    
    }

 const inputRef = useRef(null);
console.log(inputRef); // { current: null }


    return(
        <>
        <input ref={myRef} value={"Shakir"} style={{border:"1px solid black", borderRadius:"5px", padding:"5px", marginTop:"10px"}} type="text" />
        <button onClick={handelClck}>Focus</button>

   
        </>
    )
}

export default AutoFocusInput;

