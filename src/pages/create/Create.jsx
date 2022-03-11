import {useState, useRef, useEffect} from 'react'
import { projectFirestore } from '../../firebase/config'
import {  useNavigate } from 'react-router-dom'

function Create() {

  const [title,setTitle] = useState('');
  const [method,setMethod] = useState('');
  const [cookingTime,setCookingTime] = useState('');
  const [newIngredient,setNewIngredient] = useState('');
  const [ingredients,setIngredients] = useState([]);
  const ingredientInput = useRef(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const doc = { title, ingredients, method, cookingTime: cookingTime + ' minutes' }

    try {
      await projectFirestore.collection('recipes').add(doc)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  const handleAdd = (e) => {
    e.preventDefault()
    
    const ing = newIngredient.trim() // trim whitespace
    if ( ing && !ingredients.includes(ing)) {  // remove duplicates
     setIngredients(prevIngredients => [...prevIngredients, ing])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  }


  return (
    <>
      <h2 className='text-center text-5xl mt-10'>Add a new recipe</h2>
      <form className='mt-10 mx-auto p-2 max-w-3xl flex flex-col' onSubmit={handleSubmit}>

        <label>
          <span className='text-3xl block mb-2'>Recipe title:</span>
          <input className='border border-black p-3 rounded-md text-xl w-full' type='text' value={title}  required onChange={(e) => (
            setTitle(e.target.value)
          )}>
          </input>
        </label>

        <label>
          <span className='text-3xl block mt-2'>Recipe ingredients:</span>
          <div className='flex items-center mt-2'>
            <input className='border border-black p-3 rounded-md w-full text-xl' type='text' onChange={(e) => setNewIngredient(e.target.value)} value={newIngredient} ref={ingredientInput}></input>
            <button className=' bg-white border-2 border-red-300 p-3 rounded-md ml-2 mr-auto w-1/4 text-xl text-red-300 transition-colors focus:shadow-outline hover:bg-red-300 hover:text-white' onClick={handleAdd} >Add</button>
          </div>
        </label>
        <p>Current ingredients: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>

        <label>
          <span className='text-3xl my-2 block'>Recipe method:</span>
          <textarea className='border border-black p-3 rounded-md w-full text-xl' type='textarea' value={method} required onChange={(e) => (
            setMethod(e.target.value)
          )}>
          </textarea>
        </label>

        <label>
          <span className='text-3xl my-2 block'>Cooking time:</span>
          <input className='border border-black p-3 rounded-md w-full text-xl' type='number' value={cookingTime} required onChange={(e) => (
            setCookingTime(e.target.value)
          )}>
          </input>
        </label>

        <button className=' bg-white border-2 border-red-300 p-3 rounded-lg mx-auto my-5 text-xl text-red-300 transition-colors focus:shadow-outline hover:bg-red-300 hover:text-white'>Submit</button>
      </form>
    </>
  )
}

export default Create