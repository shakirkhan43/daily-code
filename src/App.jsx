import { useState } from 'react'
import './App.css'
import 'tailwindcss/index.css';
import StudentProfile from './Components/StudentProfile';
import SimpleForm from './Components/SimpleForm';
import MultiInputForm from './Components/MultiInputForm';
import MyForm from './Components/MyForm';
import ShowPassword from './Components/ShowPassword';
import ShowMore from './Components/ShowMore';
import StyledForm from './Components/StyledForm ';
import ReadMore from './Components/ReadMore';
import PasswordAllow from './Components/PasswordAllow';
// import UseEffect from './Components/UseEffect';
// import Counter from './Components/Counter';
import DarkLight from './Components/DarkLight';
import Effect from './Hooks/Effect';
// import { Swiper } from 'swiper/types';
// import { SwiperSlide } from 'swiper/react';
// import Product from './Components/Product';

import CountEffect from './Hooks/CountEffect';
import Counter from './Hooks/Counter';
import TernaryOperator from './Components/TernaryOperator';
import BasicMap from './MapFunction/BasicMap';
import UserData from './MapFunction/UserData';
import SubjectList from './MapFunction/SubjectList';
import StyledUserList from './MapFunction/StyledUserList';
import FormBuilder from './MapFunction/FormBuilder';


function App() {

  // const [a , b ] = useState(0);
  // const [a , b ] = useState(true);

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

    {/* map  */}

    {/* <BasicMap /> */}
    {/* <UserData /> */}
    {/* <SubjectList /> */}
    {/* <StyledUserList /> */}
    <FormBuilder />



    {/* <TernaryOperator /> */}
    {/* <Effect /> */}
    {/* <CountEffect /> */}
    {/* <Counter /> */}
    {/* <DarkLight /> */}
    {/* <SimpleForm /> */}
    {/* <MultiInputForm /> */}
  {/* <StudentProfile /> */}
  {/* <ShowPassword /> */}
  {/* <ShowMore /> */}
  {/* <MyForm /> */}
  {/* <StyledForm /> */}
  {/* <ReadMore /> */}
  {/* <Counter /> */}
  {/* <PasswordAllow /> */}
  {/* <UseEffect /> */}
    <div className="">

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



