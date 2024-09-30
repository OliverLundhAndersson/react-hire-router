import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function EditPersonProfile({ hiredPeople, onEdit }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [person, setPerson] = useState(null)
  const [wage, setWage] = useState(0)

  useEffect(() => {
    const personToEdit = hiredPeople.find(p => p.email === id)
    if (personToEdit) {
      setPerson(personToEdit)
      setWage(personToEdit.wage)
    }
  }, [id, hiredPeople])

  if (!person) return <p>Loading...</p>

  function handleSubmit(event) {
    event.preventDefault();
    const updatedPerson = { ...person, wage }
    onEdit(updatedPerson)
    navigate('/')
  }

  return (
    <div>
      <h2>Edit {person.name.first} {person.name.last}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="wage">Wage</label>
        <input
          type="text"
          id="wage"
          value={wage}
          onChange={(e) => setWage(e.target.value)}
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  )
}

export default EditPersonProfile
