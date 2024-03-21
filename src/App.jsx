import React, { useState } from 'react'

function App() {
  var [a,b] = useState(1);
  return (
    <div className='w-full h-screen bg-zinc-900 text-white p-5'>
      <h1>{a}</h1>
      <button onclick={()=>b(a+1)} className='px-3 py-1 bg-green-500 rounded-md text-xs'>Click</button>
    </div>
  )
}

export default App