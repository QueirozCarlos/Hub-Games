import React from 'react'
import Slider from '../components/Slider'
import { Link } from 'react-router-dom'

const slides = [
  '/assets/img/red-dead-redemption-2-1.jpg',
  '/assets/img/Read_Dead_Redemption_4k.png',
  '/assets/img/horizon-forbidden-west.webp',
  '/assets/img/God-Of-War-Ragnar2.jpg',
  '/assets/img/God-Of-War-Ragnar.jpg',
  '/assets/img/the-last-of-us-part-2.jpg',
  '/assets/img/Marvel_Spider_Man.jpg',
  '/assets/img/Spider_Man_Miles_Morales_Venom.jpg'
]

const featuredGames = [
  { id: 1, title: 'Red Dead Redemption 2', tag: 'ação-aventura', img: '/assets/img/red-dead-redemption-2-1.jpg', rating: '9.2' },
  { id: 2, title: 'Grand Theft Auto V', tag: 'Ação, Aventura e Mundo Aberto', img: '/assets/img/gta-5.jpg', rating: '8.8' },
  { id: 3, title: 'God of War Ragnarök  ', tag: 'Simulação', img: '/assets/img/God-Of-War-Ragnar2.jpg', rating: '8.5' },
  { id: 4, title: 'The Last of Us II', tag: 'ação-aventura', img: '/assets/img/the-last-of-us-part-2.jpg', rating: '9.0' }
]

const latestPosts = [
  { id:1, title:'Como dominar jogos de estratégia', img:'/assets/img/League_Of_Legends.jpg' },
  { id:2, title:'Top 10 jogos de 2025', img:'/assets/img/battlefield-redsec.jpg' },
  { id:3, title:'Montando um PC para jogos', img:'/assets/img/pc_gamer.avif' }
]

export default function Home(){
  return (
    <section className="space-y-8">
      {/* Hero */}
      <div className="relative rounded-lg overflow-hidden">
        <Slider images={slides} heightClass={'h-96 md:h-[520px]'} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute inset-0 flex items-center p-5">
          <div className="container">
            <div className="max-w-2xl text-white">
              <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">Bem-vindo ao <span className="text-indigo-400">Site Games</span></h2>
              <p className="mt-4 text-gray-300">Reviews, notícias e guias sobre os melhores jogos — conteúdo independente e objetivo para você aproveitar o universo gamer.</p>
              <div className="mt-6 flex gap-3">
                <Link to="/blog" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-md font-medium">Ver artigos</Link>
                <a href="#featured" className="px-4 py-2 border border-gray-600 rounded-md text-gray-200 hover:bg-gray-800">Ver lançamentos</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured games */}
      <div id="featured" className="container">
        <h3 className="text-2xl font-bold mb-4">Destaques</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGames.map(g => (
            <article key={g.id} className="bg-gray-800 rounded-lg overflow-hidden hover:scale-[1.02] transition-transform shadow-sm">
              <img src={g.img} alt={g.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{g.title}</h4>
                  <span className="text-sm text-yellow-300 font-medium">{g.rating}</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">{g.tag}</p>
                <div className="mt-3">
                  <a href="#" className="text-sm text-indigo-400 hover:underline">Ver detalhes</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Latest posts */}
      <div className="container">
        <h3 className="text-2xl font-bold mb-4">Últimas do blog</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map(p => (
            <article key={p.id} className="bg-gray-800 rounded overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-sm text-gray-400 mt-2">Resumo curto do artigo para despertar interesse e levar o usuário a ler mais no blog.</p>
                <div className="mt-3">
                  <Link to="/blog" className="text-indigo-400 hover:underline text-sm">Ler mais</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container">
        <div className="bg-gradient-to-r from-indigo-800 to-slate-800 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-bold">Quer lançar seu jogo ou aparecer aqui?</h4>
            <p className="text-gray-300">Entre em contato e veja como podemos ajudar a divulgar seu projeto para nossa comunidade.</p>
          </div>
          <div>
            <a href="/contato" className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-md">Fale conosco</a>
          </div>
        </div>
      </div>
    </section>
  )
}
