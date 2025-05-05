import Data from "./SearchData.json";

function SearchData() {

    

  return (

    <>

    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Explore Our Products
      </h1>
 

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {Data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-60 w-full object-contain p-5 bg-gray-50"
            />
            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
                {item.title}
              </h2>
              <p className="text-green-600 text-xl font-bold mb-1">${item.price}</p>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {item.description}
              </p>
              <p className="text-xs text-blue-600 mb-2 capitalize">{item.category}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>⭐ {item.rating.rate}</span>
                <span>{item.rating.count} reviews</span>
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    </>
  );
}

export default SearchData;
