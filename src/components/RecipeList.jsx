import React from 'react'
import {Link} from 'react-router-dom'
import { AiOutlineDelete } from 'react-icons/ai'
import { projectFirestore } from "../firebase/config"

function RecipeList( {recipes} ) {

  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete()
  }

  return (

    <div className='grid grid-cols-3 my-20 mx-auto gap-10 max-w-screen-xl'>
        {recipes.map(recipe => (
            <div key={recipe.id} className='p-5 rounded-2xl shadow-2xl hover:scale-110 flex flex-col items-center relative'>
                <h1 className='font-extrabold text-2xl my-2 text-center'>{recipe.title}</h1>
                <p className='my-2 text-xl'>{recipe.cookingTime} to make.</p>
                <div className='m-auto'>{recipe.method.substring(0, 150)}</div>
                <Link to = {`/recipes/${recipe.id}`}>
                    <button className=' bg-white border-2 border-red-300 p-2 rounded-lg mt-3 '>Cook This</button>
                </Link>
              
                <AiOutlineDelete className='absolute top-3 right-3 w-5 h-5 cursor-pointer hover:fill-red-300 hover:scale-110'
                                 onClick={() => handleClick(recipe.id)} />
                
            </div>
        ))}

    </div>

  )
}

export default RecipeList