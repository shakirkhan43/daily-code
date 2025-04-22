import { useState } from 'react'
import './App.css'
import 'tailwindcss/index.css';
import StudentProfile from './Components/StudentProfile';
import SimpleForm from './Components/SimpleForm';
import MultiInputForm from './Components/MultiInputForm';
// import { Swiper } from 'swiper/types';
// import { SwiperSlide } from 'swiper/react';
// import Product from './Components/Product';



function App() {

  // const [a , b ] = useState(0);
  const [a , b ] = useState(true);

  // const [count, setCount] = useState(21);
  // const [a , b] =  useState(true);



//  const handleClick = () => {
//   setCount(count + 1)
//  }


// const Inc = () => {
//   b(a + 1)
// }

// const Dec = () => {
//   b(a - 1)
// }


  return (
    <>
    <MultiInputForm />
    {/* <SimpleForm /> */}
  {/* <StudentProfile /> */}
    <div className="w-full h-screen  text-center bg-zinc-900 text-white text-3xl p-25">

      {/* <h1 className={`${a ? "text-white-500 border-2 border-red-500 py-25" : "text-green-500"}`}>{a ? "Hello" : "Hey"}</h1> */}

      {/* <h1>{a}</h1> */}
      {/* <button className='px-3 py-1 rounded mt-5 bg-green-500 cursor-pointer border-2 border-white-500' onClick={() => b(a + 1)}>Click</button> */}
   {/* <div className='mx-5'>
   <button className='mx-5 cursor-pointer' onClick={Inc}>Incriment</button>
   <button className='mx-5 cursor-pointer' onClick={Dec}>Decriment</button> */}
   </div>
      {/* <h1 className={`${a ? "text-red-500" : "text-green-500"}`}>{a ? "Hello" : "Hey"}</h1> */}
     {/* <Product  age = "25"  data = {{name : "Shakir khan" , age : "25"}} /> */}
     {/* <h1>{count}</h1>
     <button className='px-3 py-1 rounded mt-5 bg-green-500 cursor-pointer border-2 border-white-500' onClick={() => setCount(count + 1)}>Click</button> */}
     {/* <button onClick={handleClick}  className='px-3 py-1 rounded mt-5 bg-green-500 cursor-pointer'>Click</button> */}
     {/* <button onClick={() => setCount(25)} className='px-3 py-1 rounded mt-5 bg-green-500 cursor-pointer'>Click</button> */}
    
    </>
  )
}

export default App;













// import DarkLight from "./Components/DarkLight";
// import LikeButton from "./Components/LikeButton"
// import TernaryOperator from "./Components/TernaryOperator";
// function App() {
//   return (
//     <>
//     <TernaryOperator />
//     <DarkLight />
//       <LikeButton />
  
//     </>
//   )
// } 
// export default App;



