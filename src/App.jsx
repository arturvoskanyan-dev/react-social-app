import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUsersThunk } from './store/action/usersAction';
import './App.css'

function App() {
  const {users} = useSelector((state) => state.usersPage)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunk())
  }, [])

  return (
    <section>
      
    </section>
  )
}

export default App
