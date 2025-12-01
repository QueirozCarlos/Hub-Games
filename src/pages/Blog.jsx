import React, { useState, useMemo } from 'react'

const posts = [
  {id:1,title:'Como dominar jogos de estratégia',img:'/assets/img/League_Of_Legends.jpg',date:'10/11/2025',tags:['estratégia','dicas'],excerpt:'Dicas práticas para melhorar seu desempenho em jogos de estratégia.',body:`Em ambientes competitivos, a vantagem vem da preparação. Estude mapas, aprenda padrões inimigos e pratique rotinas de abertura. Trabalhe em decisões por turno, priorizando objetivos que maximizem ganho de recursos. Combine isso com revisão de partidas gravadas para identificar erros recorrentes e acelerar sua curva de aprendizado.`},
  {id:2,title:'Top 10 jogos de 2025',img:'/assets/img/battlefield-redsec.jpg',date:'05/11/2025',tags:['lista','2025'],excerpt:'Uma lista com os destaques do ano.',body:`O ano trouxe uma mistura de títulos AAA e indies que surpreenderam. Entre os destaques, vemos inovações em narrativa emergente e experiências multiplayer mais inclusivas. Esta lista considera inovação, execução técnica e impacto da comunidade.`},
  {id:3,title:'Montando um PC para jogos',img:'/assets/img/pc_gamer.avif',date:'01/11/2025',tags:['hardware','guide'],excerpt:'Componentes e recomendações para diferentes orçamentos.',body:`Escolher componentes depende do objetivo: 1080p com alto FPS, 1440p balanceado ou 4k com qualidade máxima. Priorize GPU e CPU conforme o tipo de jogo; invista em um SSD NVMe para reduzir tempos de carregamento e escolha uma fonte com eficiência comprovada.`},
  {id:4,title:'Indies que você precisa jogar',img:'/assets/img/inside.jpg',date:'28/10/2025',tags:['indie','recomendações'],excerpt:'Pequenos estúdios com ideias grandes.',body:`Indies continuam sendo um celeiro de criatividade. Jogos com mecânicas experimentais e narrativas pessoais provaram que orçamento reduzido não limita impacto. Aqui selecionamos projetos que chamaram atenção por design e originalidade.`}
]

export default function Blog(){
  const [q, setQ] = useState('')
  const [openId, setOpenId] = useState(null)

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase()
    if(!term) return posts
    return posts.filter(p => p.title.toLowerCase().includes(term) || p.excerpt.toLowerCase().includes(term) || (p.tags && p.tags.join(' ').includes(term)))
  }, [q])

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Blog</h2>
          <p className="text-gray-400">Artigos recentes e recomendações.</p>
        </div>
        <div className="max-w-sm w-full">
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Buscar artigos..." className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map(p => (
          <article key={p.id} className="bg-gray-800 rounded overflow-hidden shadow-sm">
            <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{p.title}</h3>
                <span className="text-sm text-gray-400">{p.date}</span>
              </div>
              <p className="mt-2 text-gray-300">{p.excerpt}</p>
              <div className="mt-3 flex items-center gap-3">
                <button onClick={() => setOpenId(openId===p.id?null:p.id)} className="text-indigo-400 hover:underline text-sm">{openId===p.id? 'Fechar' : 'Ver postagem'}</button>
                <div className="text-sm text-gray-500">{p.tags && p.tags.map(t => <span key={t} className="inline-block bg-gray-900 px-2 py-1 rounded text-xs mr-2">{t}</span>)}</div>
              </div>
              {openId===p.id && (
                <div className="mt-4 text-gray-300 bg-gray-900 p-3 rounded">{p.body}</div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
