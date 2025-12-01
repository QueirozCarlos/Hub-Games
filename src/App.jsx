import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import QuemSomos from './pages/QuemSomos'
import FAQ from './pages/FAQ'
import Contato from './pages/Contato'
import Header from './components/Header'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col app-header-offset">
      <Header />
      <main className="container flex-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/quem-somos" element={<QuemSomos/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/contato" element={<Contato/>} />
        </Routes>
      </main>
      <footer className="bg-gray-800 text-gray-400 text-center py-4">&copy; 2025 Hub Games</footer>
    </div>
  )
}
