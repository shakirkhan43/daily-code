import Data from "./myjosn.json"
function NewJson(){

  

    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold col-span-3 text-center">Indian Player's</h1>
            {Data.map( (player) => {
                return (
                    <div key={player.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer">
                        <h1 className="text-2xl font-bold">{player.name}</h1>
                        <img src={player.image} alt={player.name} className="w-full h-48 object-contain rounded-lg" />
                        <a className="text-blue-500 hover:text-blue-700 mt-2 block text-center" target="_blank" href={player.image}> View Full Image</a>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default NewJson;