import {  useEffect, useState } from "react";
function Effect(){
 
    const [date, setDate] = useState(0);
    const[count, setCount] = useState(0);
    useEffect(() => {
        console.log("Count is " + count);
      }, []);

    // useEffect(() => {

    //     setInterval(() => {
    //         const updateDate =new Date();
    //         setDate(updateDate.toLocaleString());
    //     }, 5000);

    
     
    // }, [])

    // useEffect(() => {

    //     setInterval(() => {
    //         const updateDate = new Date();
    //         setDate(updateDate.toLocaleString())
    //     }, 5000)

      

    // } , [])
    return(

        <>
        {/* <h1 className="text-4xl w-full text-center h-screen bg-zinc-900 text-white pt-5">Date: {date}</h1> */}
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}

export default Effect;