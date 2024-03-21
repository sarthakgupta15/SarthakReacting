import React from 'react'

function Products({age, data}) {
  return (
    <div className="text-white w-full h-screen bg-zinc-800">
        <h1>{age}</h1>
        <h2>{data.age}</h2>
        <h2>{data.name}</h2>
    </div>
  )
}

export default Products