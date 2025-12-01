import React, { useState, useMemo } from 'react'

const faqs = [
  {q:'Como faço um pedido?', a:'Você pode navegar pelos produtos, adicionar ao carrinho e finalizar pelo formulário de checkout (exemplo).',tags:['pedido','compra']},
  {q:'Qual o prazo de entrega?', a:'O prazo varia conforme a região — normalmente entre 5 e 12 dias úteis.',tags:['entrega','logística']},
  {q:'Posso solicitar reembolso?', a:'Políticas de reembolso dependem do produto; entre em contato para verificarmos o caso.',tags:['reembolso']}
]

export default function FAQ(){
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase()
    if(!t) return faqs
    return faqs.filter(f => f.q.toLowerCase().includes(t) || f.a.toLowerCase().includes(t) || f.tags.join(' ').includes(t))
  }, [q])

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Perguntas Frequentes (FAQ)</h2>
          <p className="text-gray-400">Dúvidas comuns sobre pedidos, pagamentos e entrega.</p>
        </div>
        <div className="max-w-sm w-full">
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Buscar na FAQ..." className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2" />
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map((f,i) => (
          <details key={i} className="bg-gray-800 p-3 rounded">
            <summary className="cursor-pointer font-medium">{f.q}</summary>
            <p className="mt-2 text-gray-300">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
