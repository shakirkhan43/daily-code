import photos from "./photos.json"; // Import your JSON data

function PhotoGallery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Photo Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {photos.map((photo) => (
          <div key={photo.id} className="card bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{photo.title}</h2>
              <a
                href={photo.url}
                target="_blank"
                className="text-blue-500 hover:text-blue-700"
              >
                View Full Image
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;
