import gigachadSvg from "./assets/Gigachad.svg"

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
      <img src={gigachadSvg} alt="Gigachad" className="w-24 h-24 mb-4" />
      <h2 className="text-xl font-bold">Teufik Ali Hadzalic</h2>
      <h3 className="text-lg font-semibold mb-2">Muscle enthusiast. For more info contact me.</h3>
    </div>
  )
}

export default AboutMe