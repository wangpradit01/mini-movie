import React from 'react'
import Thumbnail from './Thumbnail'
import FlipMove from 'react-flip-move'

function Resultes({ results }) {
  return (
    <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3'> 
        {results.map((result) => (
            <Thumbnail 
           key={result.id} 
           result={result}/>
        ))}
    </FlipMove>
  )
}

export default Resultes