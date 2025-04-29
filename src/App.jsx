import Navbar from "./navbar"
import CardGrid from "./card-grid"
import GigaCounter from "./giga-counter"
import AboutMe from "./about-me"
import Contact from "./Contact"
import "./App.css"

function App() {
  const response = {
    page: 1,
    results: [
      { id: 1, title: "🦍 Strength", body: "Do 1-10 reps!", image: "https://picsum.photos/500" },
      { id: 2, title: "🐶 Hypertrophy", body: "Do 10-20 reps!", image: "https://picsum.photos/500" },
      { id: 3, title: "🦅 Endurance", body: "Do 20-30 reps!", image: "https://picsum.photos/500" },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div id="home" className="max-w-screen-xl mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-center mb-8">Welcome to Giga Counter, do your reps!</h2>
        <GigaCounter />
        <div className="my-12">
          <h2 className="text-3xl font-bold mb-6 text-center">TYPES OF REPS</h2>
          <CardGrid posts={response.results} />
        </div>
      </div>
      <div id="about" className="my-12 max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <AboutMe />
      </div>
      <div id="contact" className="my-12 max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
        <Contact />
      </div>
    </div>
  )
}

export default App
