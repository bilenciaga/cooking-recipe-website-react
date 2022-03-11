import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { projectFirestore } from '../../firebase/config'


function Recipe() {

  const {id} = useParams()

  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    setIsPending(true)

    projectFirestore.collection('recipes').doc(id).get().then(doc => {
      if (doc.exists) {
        setIsPending(false)
        setRecipe(doc.data())
      } else {
        setIsPending(false)
        setError(`Could not find that recipe`)
      }
    })

  }, [id])

  return (
    <div>
      {error && <p>{error}</p>}
      {isPending && <p>Loading....</p>}
      {recipe && (
        <div className='flex justify-center'>
          <div className='my-10 mx-20 p-5 border rounded-2xl shadow-md max-w-7xl text-center'>
            <h1 className='font-extrabold	text-2xl'>{recipe.title}</h1>
            <p className='font-semibold my-5 text-xl'>Take {recipe.cookingTime} to cook</p>
            <ul className='flex justify-center text-lg'>{recipe.ingredients.map(ing => (
              <li key={ing} className='mx-3 w-full'>{ing}</li>
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