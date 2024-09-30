import { useState, useEffect } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import HireForm from './components/HireForm'

function PersonProfile({ onHire }) {
  const [person, setPerson] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setPerson(location.state.person)
    
  }, [id, location.state])

  if (!person) return <p>Loading...</p>

  function handleHire(wage) {
    const hiredPerson = { ...person, wage }
    onHire(hiredPerson)
    navigate('/')
  }

  return (
    <article>
      <h2>{person.name.first} {person.name.last}</h2>
      <HireForm person={person} onHire={handleHire} />
    </article>
  );
}

export default PersonProfile
