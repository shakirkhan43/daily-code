import React, { useEffect } from 'react';
function EffectHook(){

//     const [seconds, setSeconds] = useState(0);
//  useEffect(() => {
//   // Side effect
//   const timer = setInterval(() => {
//     console.log("Timer running");
//     // alert("Timer is running every second"); 
//   }, 1000);

//   // Cleanup function
//   return () => {
//     clearInterval(timer); // timer hata diya
//     console.log("Cleanup function chala");
//     alert("Cleanup function executed");
//   };
// }, []);


useEffect(() => {
//   const timer = setInterval(() => {
//     console.log("Running...");
//   }, 1000);

  return () => {
    clearInterval(timer); 
    console.log("Component unmounted");
  };
}, []);





    return(
        <>
        
        </>
    )
}
export default EffectHook;