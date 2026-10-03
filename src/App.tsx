import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ListaArticulos from './components/ListaArticulos'

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased selection:bg-cyan-500 selection:text-zinc-950">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main>
        <Hero />
        <ListaArticulos searchQuery={searchQuery} />
      </main>
      
      {/* Footer DEV */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-8 text-center text-xs font-mono text-zinc-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="flex items-center gap-1">
            <span className="text-cyan-400">&lt;/&gt;</span>
            <span>Desarrollado con React + TypeScript + Tailwind CSS</span>
          </p>
          <p>
            &copy; 2026 Fernando. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
