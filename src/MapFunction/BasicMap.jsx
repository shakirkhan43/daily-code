// function BasicMap() {
//    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// //    console.log(data);
   
 
//     return (
//         <div className="bg-zinc-900 w-full h-screen text-white text-center pt-5 m-auto flex flex-col items-center justify-center">
//             <h1>BasicMap</h1>
//             { data.map( (num) => {
//                 return <ul>
//                     <li>
//                         {num * 2}
//                     </li>
//                 </ul>
//             }) }
//         </div>
//     );
    
// }

// export default BasicMap;

// function BasicMap() {
//    const fruits = ["Apple" , "Banana" , "Orange", "Grapse"];
// //    console.log(fruits[2]);
   
//     return (
//       <div>
//         { fruits.map( (frute , index) => {
//             return <h1 key={index}>{frute}</h1>
//         })}
//       </div>
//     )
// }

// export default BasicMap;

function BasicMap() {
    const fruits = ['Apple', 'Banana', 'Mango'];

    
    
     
     return (
        fruits.map((item, index) => {
            console.log('Fruit:', item);    // Apple, Banana, Mango
            console.log('Index:', index);   // 0, 1, 2
          })
     );
   }
   
   export default BasicMap;


// function BasicMap(){

//     const number = [1,2,3,4,5,6]
//     return(
//         <>
//          {number.map( ( num ) => num *2 ).map( (num, index) => {
//             return <h1 key={index}>{num + 1}</h1>})}
//         </>
//     )
// }
// export default BasicMap;
