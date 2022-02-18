import React from 'react'
import {Link} from 'react-router-dom'

function RecipeList( {recipes} ) {
  return (

    <div className='grid grid-cols-3 my-20 mx-auto gap-10 max-w-screen-xl'>
        {recipes.map(recipe => (
            <div key={recipe.id} className='p-5 rounded-2xl shadow-2xl hover:scale-110 flex flex-col items-center'>
                <h1 className='font-extrabold text-2xl my-2 text-center'>{recipe.title}</h1>
                <p className='my-2 text-xl'>{recipe.cookingTime} to make.</p>
                <div className='m-auto'>{recipe.method.substring(0, 150)}</div>
                <Link to = {`/recipes/${recipe.id}`}>
                    <button className=' bg-white border-2 border-red-300 p-2 rounded-lg mt-auto'>Cook This</button>
                </Link>

                
            </div>
        ))}

    </div>

  )
}

export default RecipeList