import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'
import EditPersonProfile from './pages/EditPersonProfile'
import './App.css'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  function handleHire(person) {
    setHiredPeople(prevHires => [...prevHires, person])
  }

  function handleEdit(updatedPerson) {
    setHiredPeople(prevHires =>
      prevHires.map(p => (p.login.uuid === updatedPerson.login.uuid ? updatedPerson : p))
    )
  }

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople} />} />
        <Route path="/view/:id" element={<PersonProfile onHire={handleHire} />} />
        <Route path="/edit/:id" element={<EditPersonProfile hiredPeople={hiredPeople} onEdit={handleEdit} />} />
      </Routes>
    </>
  )
}
