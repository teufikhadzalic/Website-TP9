import { useState } from "react"
import strengthSvg from "./assets/strength.svg"
import hypertrophySvg from "./assets/hypertrophy.svg"
import enduranceSvg from "./assets/endurance.svg"

const CardGrid = ({ posts }) => {
  const [popupImage, setPopupImage] = useState(null)

  const getImage = (title) => {
    if (title.includes("Strength")) return strengthSvg
    if (title.includes("Hypertrophy")) return hypertrophySvg
    if (title.includes("Endurance")) return enduranceSvg
    return "https://picsum.photos/500" // Default image
  }

  const handleImageClick = (image) => {
    setPopupImage(image)
  }

  const closePopup = () => {
    setPopupImage(null)
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-full h-48 overflow-hidden flex items-center justify-center bg-gray-100">
              <img
                src={getImage(post.title)}
                alt={post.title}
                className="w-full h-full object-contain cursor-pointer"
                onClick={() => handleImageClick(getImage(post.title))}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.body}</p>
            </div>
          </div>
        ))}
      </div>

      {popupImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src={popupImage} alt="Popup" className="max-w-full max-h-[80vh] rounded-lg" />
          </div>
        </div>
      )}
    </div>
  )
}

export default CardGrid