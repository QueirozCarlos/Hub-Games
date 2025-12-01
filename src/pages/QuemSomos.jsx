import React from 'react'

export default function QuemSomos(){
  return (
    <section className="space-y-8">
      <header className="bg-gradient-to-r from-slate-900 via-gray-900 to-black rounded-lg p-8">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-extrabold text-white">Quem somos</h2>
            <p className="mt-3 text-gray-300">Somos uma equipe multidisciplinar apaixonada por games — produzimos reviews, guias, e conteúdo que conecta jogadores, desenvolvedores e estúdios.</p>
          </div>
        </div>
      </header>

      <div className="container grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold">Nossa missão</h3>
            <p className="mt-2 text-gray-300">Trazer análises honestas, guias práticos e nove perspectivas sobre jogos, apoiando tanto jogadores quanto criadores com conteúdo imparcial e útil.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="font-semibold">Visão</h4>
              <p className="text-sm text-gray-300 mt-2">Ser referência em conteúdo gamer de qualidade e confiança.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="font-semibold">Valores</h4>
              <p className="text-sm text-gray-300 mt-2">Transparência, independência editorial e foco na comunidade.</p>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded">
            <h4 className="font-semibold">Como trabalhamos</h4>
            <ol className="list-decimal list-inside text-gray-300 mt-2">
              <li>Pesquisa e testes práticos.</li>
              <li>Entrevistas e colaborações com desenvolvedores.</li>
              <li>Publicação com revisão editorial para qualidade.</li>
            </ol>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-800 to-slate-800 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-white">Linha do tempo</h4>
            <ul className="mt-3 space-y-3 text-gray-200">
              <li><strong className="text-indigo-300">2022</strong> - Início com pequenos reviews e podcasts.</li>
              <li><strong className="text-indigo-300">2023</strong> - Crescimento do canal e equipe.</li>
              <li><strong className="text-indigo-300">2024</strong> - Lançamento da plataforma de artigos e parceria com estúdios.</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-4 rounded">
            <h4 className="font-semibold">Contato rápido</h4>
            <p className="text-sm text-gray-300 mt-2">Para parcerias, imprensa ou divulgação de jogos, entre em contato via formulário.</p>
            <a href="/contato" className="inline-block mt-3 px-3 py-2 bg-indigo-600 rounded-md text-sm font-medium">Fale conosco</a>
          </div>
        </aside>
      </div>

      <div className="container">
        <h3 className="text-2xl font-bold mb-4">Nossa equipe</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <img src="https://picsum.photos/seed/team1/240/240" alt="" className="mx-auto w-28 h-28 rounded-lg object-cover" />
            <h4 className="mt-3 font-semibold">Ana Silva</h4>
            <p className="text-sm text-gray-400">Editor Chefe — curadoria e editorial</p>
            <div className="mt-3 flex items-center justify-center gap-3 text-gray-300">
              <a href="#" aria-label="Twitter" className="hover:text-white">T</a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">in</a>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <img src="https://picsum.photos/seed/team2/240/240" alt="" className="mx-auto w-28 h-28 rounded-lg object-cover" />
            <h4 className="mt-3 font-semibold">Carlos Queiroz</h4>
            <p className="text-sm text-gray-400">Desenvolvedor — frontend e Backend</p>
            <div className="mt-3 flex items-center justify-center gap-3 text-gray-300">
              <a href="https://github.com/QueirozCarlos" aria-label="GitHub" className="hover:text-white">GH</a>
              <a href="https://www.linkedin.com/in/carlos-queiroz27/" aria-label="LinkedIn" className="hover:text-white">in</a>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <img src="https://picsum.photos/seed/team3/240/240" alt="" className="mx-auto w-28 h-28 rounded-lg object-cover" />
            <h4 className="mt-3 font-semibold">Mariana Rocha</h4>
            <p className="text-sm text-gray-400">Marketing — comunidade e social</p>
            <div className="mt-3 flex items-center justify-center gap-3 text-gray-300">
              <a href="#" aria-label="Instagram" className="hover:text-white">ig</a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">in</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="bg-gradient-to-r from-slate-800 to-gray-900 rounded-lg p-6 mt-6 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h4 className="text-xl font-bold">Trabalhe conosco</h4>
            <p className="text-gray-300">Se você é desenvolvedor, jornalista ou criador e quer colaborar, envie uma mensagem.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="/contato" className="px-4 py-2 bg-indigo-600 rounded-md font-semibold">Enviar proposta</a>
          </div>
        </div>
      </div>
    </section>
  )
}
