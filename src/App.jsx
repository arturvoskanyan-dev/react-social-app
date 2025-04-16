import { UsersPage, UserProfile, HomePage } from './pages';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import './App.css'

function App() {

  return (
    <section className="w-7xl m-auto px-5">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/user/:id' element={<UserProfile />} />
        </Route>
      </Routes>
    </section>
  )
}

export default App
