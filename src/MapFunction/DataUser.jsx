
import User from "./UserData.json"

function DataUser(){
    return(
        <>
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 style={{color:"green"}} className="text-3xl font-bold text-center pt-5 mb-5 text-green-800">My User Data : - </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {User.map((data) => {
                    return (
                        <div key={data.id} className="bg-white rounded-lg border border-gray-200 shadow-md">
                            <div className="p-4">
                                <h1 className="text-2xl font-semibold">{data.name}</h1>
                                <p className="text-gray-600">{data.username}</p>
                                <p className="text-gray-600">{data.email}</p>
                                <p className="text-gray-600">{data.mobile}</p>
                                <p className="font-bold mt-2">Address :</p>
                                <p className="text-gray-600">{data.address.street}</p>
                                <p className="text-gray-600">{data.address.city}</p>
                                <p className="text-gray-600">{data.address.zipcode}</p>
                                <p className="font-bold mt-2">Geo :</p>
                                <p className="text-gray-600">{data.address.geo.lat}</p>
                                <p className="text-gray-600">{data.address.geo.lng}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        </>
    )
}

export default DataUser