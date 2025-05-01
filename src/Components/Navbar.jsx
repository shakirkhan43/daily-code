import React, { useEffect } from 'react'

const Navbar = ({color}) => {

    useEffect ( () => {
        alert("Color was Changed")
    }, [color])
  return (
    <div>
      I am Navbar of {color} here ... 
    </div>
  )
}

export default Navbar;
