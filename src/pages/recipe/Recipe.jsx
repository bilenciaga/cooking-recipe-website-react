import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import React from 'react'

function Recipe() {

  const {id} =  useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const { error, isPending, data:recipe} =  useFetch(url) 

  return (
    <div>
      {error && <p>{error}</p>}
      {isPending && <p>Loading....</p>}
      {recipe && (
        <div className='flex justify-center'>
          <div className='my-10 mx-20 p-5 border rounded-2xl shadow-md max-w-7xl text-center'>
            <h1 className='font-extrabold	text-2xl'>{recipe.title}</h1>
            <p className='font-semibold my-2 text-xl'>Take {recipe.cookingTime} to cook</p>
            <ul className='flex justify-center text-lg'>{recipe.ingredients.map(ing => (
              <li key={ing} className='mr-3'>{ing}</li>
            ))}
            </ul>
            <p className='p-5 text-base text-left'>{recipe.method}</p>
          </div>
        </div>
      )}
    </div>


  )
}

export default Recipe