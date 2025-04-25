import { useEffect, useState } from "react";
function CountEffect() {
    const [count, setCount] = useState(0);
    const [name , setName] = useState('Shakir');

    useEffect(() => {
        document.title = `Count :  ${count} times`;
    } , [count])

    useEffect(() => {
        console.log(name);
        
    })
    return (
      <>
      <div className="text-center text-4xl w-full h-screen bg-zinc-900 text-white pt-5 m-auto flex flex-col items-center justify-center">
        <h1 >useEffect Challnage</h1>
        <p className="text-2xl mt-5 bg-zinc-600 p-2 rounded ">
            Count : <span> {count} </span>
        </p>
        <button onClick={() => setCount(count + 1)}>Incriment</button>
        <p className="text-2xl mt-5 bg-zinc-600 p-2 rounded ">
            Name : <span> {name}</span>
        </p>
        <input
         className="text-2xl mt-5 bg-zinc-600 p-2 rounded "
           placeholder="Enter your name"
           value={name}
           onChange={(e) => setName(e.target.value)}
            type="text" />
      </div>

      </>
    );
}   
export default CountEffect;