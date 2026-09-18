import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased selection:bg-cyan-500 selection:text-zinc-950">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
