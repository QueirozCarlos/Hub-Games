import React, { useEffect, useState, useRef } from 'react'

export default function Slider({images=[], interval=4000, heightClass='h-64'}){
  const [idx, setIdx] = useState(0)
  const timer = useRef(null)

  useEffect(() => {
    timer.current = setInterval(() => setIdx(i => (i+1)%images.length), interval)
    return () => clearInterval(timer.current)
  }, [images.length, interval])

  if(!images.length) return null

  return (
    <div className={`relative w-full rounded-lg overflow-hidden ${heightClass} bg-black`}>
      {images.map((src,i) => (
        <img key={i} src={src} alt={`slide-${i}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i===idx? 'opacity-100':'opacity-0'}`} />
      ))}
      <div className="absolute left-2 top-1/2 -translate-y-1/2">
        <button onClick={() => setIdx((idx-1+images.length)%images.length)} className="bg-black/50 text-white px-3 py-1 rounded">&#171;</button>
      </div>
      <div className="absolute right-2 top-1/2 -translate-y-1/2">
        <button onClick={() => setIdx((idx+1)%images.length)} className="bg-black/50 text-white px-3 py-1 rounded">&#187;</button>
      </div>
    </div>
  )
}
