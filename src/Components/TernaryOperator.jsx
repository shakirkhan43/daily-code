
import React, { useState } from 'react'
const TernaryOperator = () => {

  const [isLogin , setIsLogin] =  useState(false);

  return (
    <>
      <div className='bg-zinc-900 w-full h-screen'>

        <h1 className='text-white text-4xl p-5 text-center'>{isLogin ? "Welcome Shakir Khan " : "Please Login"}</h1>
<div className='text-center'>

        <button className='bg-green-500 px-3 py-1 rounded cursor-pointer mt-5 mx-5' onClick={() => setIsLogin(!isLogin)}> {isLogin ? "Logout" : "Login"}</button>
</div>

      </div>
    </>
  )
}

export default TernaryOperator;  