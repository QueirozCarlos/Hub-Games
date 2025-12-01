import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(){
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed top-1 left-0 right-0 z-50">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="absolute -top-8 left-0 right-0 h-24 rounded-2xl pointer-events-none"></div>

          <div className="relative z-10 -mt-6">
            <div className="flex items-center justify-between bg-black/60 border border-gray-800 rounded-full px-4 md:px-8 py-3 shadow-md backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
              <div className="flex items-center gap-3">
                <img src="https://picsum.photos/seed/logo/48/48" alt="logo" className="w-10 h-10 rounded-md" />
                <div>
                  <h1 className="text-lg font-semibold text-white">Hub Games</h1>
                  <div className="text-xs text-gray-300">Jogos · Reviews · Notícias</div>
                </div>
              </div>

              <nav className="flex-1 mx-4">
                {/* Desktop menu */}
                <ul className="hidden md:flex gap-6 justify-center text-sm">
                  <li><NavLink to="/" className={({isActive}) => isActive? 'text-white font-semibold':'text-gray-300'}>Início</NavLink></li>
                  <li><NavLink to="/quem-somos" className={({isActive}) => isActive? 'text-white font-semibold':'text-gray-300'}>Quem somos</NavLink></li>
                  <li><NavLink to="/blog" className={({isActive}) => isActive? 'text-white font-semibold':'text-gray-300'}>Blog</NavLink></li>
                  <li><NavLink to="/faq" className={({isActive}) => isActive? 'text-white font-semibold':'text-gray-300'}>FAQ</NavLink></li>
                  <li><NavLink to="/contato" className={({isActive}) => isActive? 'text-white font-semibold':'text-gray-300'}>Contato</NavLink></li>
                </ul>

                {/* Mobile hamburger */}
                <div className="md:hidden flex justify-center">
                  <button aria-expanded={open} onClick={() => setOpen(v => !v)} className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} /></svg>
                  </button>
                </div>
              </nav>

              <div className="flex items-center gap-3">
                <a href="https://github.com/QueirozCarlos" target="_blank" title="GitHub" className="text-gray-300 hover:text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.9.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.52.11-3.17 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99.01 1.99.13 2.92.39 2.22-1.5 3.2-1.18 3.2-1.18.63 1.65.23 2.87.11 3.17.75.81 1.2 1.84 1.2 3.1 0 4.44-2.7 5.42-5.28 5.7.42.36.8 1.08.8 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
                  </svg>
                </a>
                <a href="https://github.com/QueirozCarlos" target="_blank" title="linkedin" className="text-gray-300 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>

                <button title="Idioma" className="text-gray-300 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-languages-icon lucide-languages"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>
                </button>

                <a href="/contato" className="ml-2 inline-flex items-center gap-2 bg-gray-900 text-gray-100 px-3 py-1 rounded-full border border-gray-700 hover:bg-gray-800 shadow-sm hover:shadow-md transition">
                  Contato
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-90"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>

            {/* Mobile menu panel */}
            {open && (
              <div className="md:hidden mt-3 bg-black/70 border border-gray-800 rounded-lg p-3 shadow-lg backdrop-blur-sm">
                <ul className="flex flex-col gap-2 text-sm">
                  <li><NavLink onClick={() => setOpen(false)} to="/" className={({isActive}) => isActive? 'text-white font-semibold':'text-gray-300'}>Início</NavLink></li>
                  <li><NavLink onClick={() => setOpen(false)} to="/quem-somos" className={({isActive}) => isActive? 'text-white font-semibold':'text-gray-300'}>Quem somos</NavLink></li>
                  <li><NavLink onClick={() => setOpen(false)} to="/blog" className={({isActive}) => isActive? 'text-white font-semibold':'text-gray-300'}>Blog</NavLink></li>
                  <li><NavLink onClick={() => setOpen(false)} to="/faq" className={({isActive}) => isActive? 'text-white font-semibold':'text-gray-300'}>FAQ</NavLink></li>
                  <li><NavLink onClick={() => setOpen(false)} to="/contato" className={({isActive}) => isActive? 'text-white font-semibold':'text-gray-300'}>Contato</NavLink></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
