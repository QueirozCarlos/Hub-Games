import React, { useState } from 'react'
// Usar imagem localizada em `public/assets/img/perfil.jpg` para que o
// Vite dev server a sirva diretamente. Copiei o arquivo original para:
// `site_games_react/public/assets/img/perfil.jpg`
const perfilImg = '/assets/img/perfil.jpg'

const experience = [
  {id:1, role:'Desenvolvedor full stack', company:'Viasoft', period:'2025 — presente', desc:'Desenvolvedor Full Stack na Viasoft, atuando no desenvolvimento de interfaces eficientes, integração robusta com APIs e otimização contínua de funcionalidades para garantir alta performance e melhor experiência do usuário.'},
  {id:2, role:'Analista de Sistemas', company:'Viacast Soluções', period:'2020 — 2025', desc:'Responsável pelo suporte técnico aos clientes da Viacast, atuando na análise, diagnóstico e solução de incidentes em sistemas Linux, streaming, transmissões ao vivo e infraestrutura. Garante a plena operação das emissoras de TV, assegurando estabilidade e alta disponibilidade dos serviços.'},
  {id:3, role:'Estágio Ti', company:'Dmae', period:'2022 — 2023', desc:'Atuação colaborativa em equipe, prestando suporte remoto aos usuários e garantindo atendimento eficiente. Focado na identificação e solução ágil de problemas técnicos para manter a continuidade operacional.'},
  {id:4, role:'Técnico de TI', company:'Dominium Informática', period:'2018 — 2022', desc:'Experiência com AnyDesk, redes de computadores e suporte remoto ao usuário, incluindo diagnóstico e resolução de problemas. Domínio em Microsoft Windows, formatação de PCs, instalação de softwares e configuração de impressoras.'}
]

const projects = [
  {id:1,title:'Shopsync - Loja',desc:'Sistema de gestão de estoque, vendas, clientes e relatórios.',img:'/assets/img/shopsync.jpeg', target:"_blank" ,link:'https://github.com/QueirozCarlos/Shopsync-Frontend'},
  {id:2,title:'Spiderette - Jogo',desc:'Jogo de cartas',img:'/assets/img/jogo.png',link:'https://github.com/QueirozCarlos/Jogo-Spiderette'}
]

export default function Contato(){
  const [status, setStatus] = useState(null)

  function handleSubmit(e){
    e.preventDefault()
    const name = e.target.name.value.trim()
    const email = e.target.email.value.trim()
    if(!name || !email){
      setStatus({type:'error', text:'Por favor preencha nome e email.'})
      return
    }
    setStatus({type:'loading', text:'Enviando...'})
    setTimeout(() => {
      setStatus({type:'success', text:`Obrigado, ${name}. Mensagem recebida (simulação).`})
      e.target.reset()
    }, 900)
  }

  return (
    <section className="space-y-8">
      {/* Hero - resume header */}
      <div className="bg-gradient-to-r from-slate-900 to-gray-900 rounded-lg p-6">
        <div className="container flex flex-col md:flex-row items-center gap-6">
          <img src={perfilImg} alt="Avatar" className="w-40 h-40 rounded-lg object-cover border border-gray-700" />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-extrabold">Carlos Queiroz</h1>
              <span className="inline-block w-3 h-3 rounded-full bg-emerald-400 animate-pulse" aria-hidden />
            </div>
            <p className="text-indigo-300 mt-1">Desenvolvedor Back-end | Java | Spring | Linux | MySQL | AWS | Docker</p>
            <p className="text-gray-300 mt-3 max-w-2xl">Desenvolvedor Back-end com 1 ano de experiência, atualmente atuando na Viacast com foco em PHP, Python e JavaScript em sistemas embarcados Linux. Cursando Análise e Desenvolvimento de Sistemas pela Universidade de Uberaba (campus Uberlândia), possuo conhecimento intermediário em inglês e experiência em diversas tecnologias de desenvolvimento web, nas quais me aperfeiçoei ao longo do tempo.</p>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" className="px-4 py-2 bg-indigo-600 rounded-md font-semibold">Download CV (PDF)</a>
              <a href="#contato-form" className="px-4 py-2 border border-gray-700 rounded-md text-gray-200">Contratar</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container grid md:grid-cols-3 gap-6">
        <div className="md:col-span-3 space-y-6">
          {/* Skills */}
          <div className="bg-gray-800 p-5 rounded">
            <h3 className="text-xl font-semibold">Skills</h3>
            <div className="mt-3">
              <div className="overflow-x-auto">
                <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 gap-4 items-center justify-items-center">
                  {[
                    {k:'React', img:'https://techstack-generator.vercel.app/react-icon.svg'},
                    {k:'Python', img:'https://techstack-generator.vercel.app/python-icon.svg'},
                    {k:'JavaScript', img:'https://techstack-generator.vercel.app/js-icon.svg'},
                    {k:'Docker', img:'https://techstack-generator.vercel.app/docker-icon.svg'},
                    {k:'RESTful APIs', img:'https://techstack-generator.vercel.app/restapi-icon.svg'},
                    {k:'MySQL', img:'https://techstack-generator.vercel.app/mysql-icon.svg'},
                    {k:'TypeScript', img:'https://techstack-generator.vercel.app/ts-icon.svg'},
                    {k:'Java', img:'https://techstack-generator.vercel.app/java-icon.svg'},
                    {k:'FastAPI', img:'https://skillicons.dev/icons?i=fastapi'},
                    {k:'C', img:'https://skillicons.dev/icons?i=c'},
                    {k:'GitHub', img:'https://techstack-generator.vercel.app/github-icon.svg'},
                    {k:'Git', img:'https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png'},
                    {k:'Bash', img:'https://skillicons.dev/icons?i=bash'},
                    {k:'HTML5', img:'https://skillicons.dev/icons?i=html'},
                    {k:'CSS', img:'https://skillicons.dev/icons?i=css'},
                    {k:'Debian', img:'https://img.icons8.com/color/48/debian.png'},
                    {k:'Tailwind', img:'https://skillicons.dev/icons?i=tailwind'},
                    {k:'Spring Boot', img:'https://img.icons8.com/color/48/spring-logo.png'},
                    {k:'Go', img:'https://skillicons.dev/icons?i=go'},
                    {k:'Node.js', img:'https://skillicons.dev/icons?i=nodejs'},
                    {k:'IntelliJ', img:'https://skillicons.dev/icons?i=idea'},
                    {k:'VSCode', img:'https://skillicons.dev/icons?i=vscode'},
                    {k:'Flask', img:'https://skillicons.dev/icons?i=flask'},
                    {k:'Linux', img:'https://skillicons.dev/icons?i=linux'},
                    {k:'Postman', img:'https://skillicons.dev/icons?i=postman'},
                    {k:'Ubuntu', img:'https://skillicons.dev/icons?i=ubuntu'},
                    {k:'PostgreSQL', img:'https://skillicons.dev/icons?i=postgres'}
                  ].map(s => (
                    <div key={s.k} className="text-center">
                      <img src={s.img} alt={s.k} width="48" height="48" className="mx-auto" />
                      <div className="text-xs text-gray-300 mt-2">{s.k}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-gray-800 p-6 rounded">
            <h3 className="text-xl font-semibold">Experiência</h3>
            <div className="mt-4 space-y-6">
              {experience.map(exp => (
                <div key={exp.id} className="flex gap-6 items-start">
                  <div className="w-32 text-sm text-gray-400 text-right mt-1">{exp.period}</div>
                  <div className="flex-1 pl-4 border-l border-gray-700">
                    <div className="font-semibold">{exp.role} <span className="text-indigo-300">@ {exp.company}</span></div>
                    <div className="text-gray-300 text-sm mt-2">{exp.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="bg-gray-800 p-6 rounded">
            <h3 className="text-xl font-semibold">Projetos</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {projects.map(p => (
                <article key={p.id} className="bg-gray-900 rounded overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-36 object-cover" />
                  <div className="p-3">
                    <div className="font-semibold">{p.title}</div>
                    <p className="text-sm text-gray-400 mt-1">{p.desc}</p>
                    <div className="mt-3">
                      <a href={p.link} className="text-indigo-400 text-sm">Veja projeto</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-800 p-4 rounded h-80">
            <h4 className="font-semibold p-2">Resumo</h4>
            <p className="text-md text-gray-300">
              Sou desenvolvedor Back-end com experiência em PHP, Python e JavaScript, atuando no
              desenvolvimento de soluções para sistemas embarcados Linux. Minha trajetória começou em 2018, na
              área de infraestrutura e suporte, onde construí uma base sólida em sistemas operacionais, redes,
              Linux e monitoramento.
            </p>

            <p className="text-md text-gray-300 mt-3">
              Domino tecnologias como Java (Spring), Python (FastAPI), JavaScript/TypeScript, React.js,
              TailwindCSS, além de bancos de dados como PostgreSQL, MySQL, SQL Server e SQLite. Trabalho com
              princípios de arquitetura e boas práticas, incluindo Design Patterns, Clean Code, SOLID,
              MVC/MVVM, Clean Architecture, DDD e TDD.
            </p>

            <p className="text-md text-gray-300 mt-3">
              Minha vivência com broadcast, encoders/decoders e operações de streaming complementa meu perfil
              técnico, permitindo atuar em ambientes complexos, de alta disponibilidade e orientados à
              performance.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h4 className="font-semibold p-2">Em aprendizado contínuo</h4>
            <span>
              Atualmente dedico meus esforços ao aprofundamento em Java e Spring Boot para desenvolvimento back-end, 
              ao mesmo tempo em que aprimoro minhas competências em Docker, SQL e serviços AWS, consolidando uma base 
              sólida em infraestrutura e bancos de dados.
            </span>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h4 className="font-semibold p-2">Educação</h4>
            <p className="text-gray-300 text-sm mt-2">Análise e Desenvolvimento de Sistemas (ADS) — Universidade de Uberaba (2022 — 2025)</p>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h4 className="font-semibold p-2">Contato rápido</h4>
              <p className="text-sm text-gray-300 mt-2">Email: <a href="mailto:carlos.aqrodrigues@hotmail.com" className="text-indigo-400">carlos.aqrodrigues@hotmail.com</a></p>
              <p className="text-sm text-gray-300">Local: Uberlândia / Remoto | Presencial</p>
              <div className="mt-3 flex gap-3 text-gray-300">
                <a href="#" className="hover:text-white">GitHub</a>
                <a href="#" className="hover:text-white">LinkedIn</a>
              </div>
          </div>
          
          </div>
      </div>

      {/* Contact form */}
      <div id="contato-form" className="container">
        <div className="bg-gray-800 p-6 rounded">
          <h3 className="text-xl font-semibold">Fale comigo</h3>
          <form onSubmit={handleSubmit} className="mt-4 grid md:grid-cols-2 gap-4">
            <input name="name" placeholder="Nome" className="p-2 rounded bg-gray-900 border border-gray-700" />
            <input name="email" type="email" placeholder="Email" className="p-2 rounded bg-gray-900 border border-gray-700" />
            <input name="subject" placeholder="Assunto" className="p-2 rounded bg-gray-900 border border-gray-700 md:col-span-2" />
            <textarea name="message" rows="6" placeholder="Mensagem" className="p-2 rounded bg-gray-900 border border-gray-700 md:col-span-2" />
            <div className="md:col-span-2 flex items-center gap-4">
              <button type="submit" className="px-4 py-2 bg-indigo-600 rounded">Enviar mensagem</button>
              {status && status.type==='loading' && <span className="text-gray-300">{status.text}</span>}
              {status && status.type==='success' && <span className="text-green-400">{status.text}</span>}
              {status && status.type==='error' && <span className="text-red-400">{status.text}</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
