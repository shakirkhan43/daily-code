// import React from 'react'
// import { useEffect } from 'react'
// const UseEffect = () => {
//     useEffect(() => {
//         alert("Component mount hua (page load)");
//         console.log("Component mount hua (page load)");
//       }, []);
//   return (
//     <div>
//     <h1>Hello Students!</h1>
//   </div>
//   )
// }

// export default UseEffect


// import React, { useState, useEffect } from 'react';

// function UseEffect() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     alert('Component mounted');
//     console.log(`Count badla: ${count}`)
//   }, [count]); 

 
//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }

// export default UseEffect;


// import React, { useState, useEffect } from 'react';

// function UseEffect() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     alert('Component mounted');
//     console.log(`Count badla: ${count}`);
//   }, []); // Component mount hone par chalega

//   useEffect(() => {
//     if (count !== 0) {
//       alert(`Count badla: ${count}`);
//       console.log(`Count badla: ${count}`);
      
//     }
//   }, [count]); // Jab count badlega tab chalega

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }

// export default UseEffect; 
  
// import React, { useState, useEffect, use } from 'react';
// function UseEffect() {
//   const [count, setCount] = useState(0);
// const [name, setName] = useState("Shakir");

// useEffect(() => {
//   console.log(`Count: ${count}, Name: ${name}`);
// }, [count, name])
//     return (
//       <div>
//         <h1>UseEffect</h1>

//         <h2>Count: {count}</h2>
//         <button onClick={() => setCount(count + 1)}>Increment</button>

//        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
//         <button>Submit</button>
//       </div>
//     );
//   }
  
//   export default UseEffect;

// useEffect((() => {
//   console.log("Component mounted");
// },[]))