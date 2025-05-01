function MyJson(){
    const Data = [
        {
            id: 1,
            name: 'KL. Rahul',
            image : "https://documents.iplt20.com/ipl/IPLHeadshot2025/19.png"
        },

        {
            id: 2,
            name: 'Virat Kohali',
            image : "https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png"
        },

        {
            id: 3,
            name: 'Rohit Sharma',
            image : "https://images.indianexpress.com/2024/07/Rohit-Sharma.jpg"
        }

    ]
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {Data.map( (criketer) => {
                return (
                    <div key={criketer.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer">
                        <h1 className="text-2xl font-bold">{criketer.name}</h1>
                        <img src={criketer.image} alt={criketer.name} className="w-full h-48 object-contain rounded-lg" />
                        <a className="text-blue-500 hover:text-blue-700 mt-2 block text-center" target="_blank" href={criketer.image}>View Full Image</a>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default MyJson




// import { useState } from "react";

// function MyJson() {
//   const [search, setSearch] = useState("");

//   const Data = [
//     {
//       id: 1,
//       name: "KL. Rahul",
//       image: "https://documents.iplt20.com/ipl/IPLHeadshot2025/19.png",
//     },
//     {
//       id: 2,
//       name: "Virat Kohali",
//       image: "https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png",
//     },
//     {
//       id: 3,
//       name: "Rohit Sharma",
//       image: "https://images.indianexpress.com/2024/07/Rohit-Sharma.jpg",
//     },
//   ];

//   // Filter logic
//   const filteredData = Data.filter((player) =>
//     player.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="p-6 min-h-screen bg-gray-100">
//       <h1 className="text-3xl font-bold text-center mb-6">Search Cricketer</h1>

//       <input
//         type="text"
//         placeholder="Type a name like Rohit..."
//         className="w-full max-w-md block mx-auto mb-8 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//         {filteredData.length > 0 ? (
//           filteredData.map((criketer) => (
//             <div
//               key={criketer.id}
//               className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
//             >
//               <h2 className="text-xl font-semibold mb-2">{criketer.name}</h2>
//               <img
//                 src={criketer.image}
//                 alt={criketer.name}
//                 className="w-full h-52 object-contain rounded-md"
//               />
//             </div>
//           ))
//         ) : (
//           <p className="col-span-3 text-center text-gray-600">
//             No cricketer found!
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default MyJson;
