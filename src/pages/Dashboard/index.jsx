import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PeopleList from './components/PeopleList'

function Dashboard(props) {
  const { hiredPeople } = props
  const [people, setPeople] = useState([])

  useEffect(() => {
    async function fetchPeople() {
      const response = await fetch('https://randomuser.me/api/?results=50')
      const data = await response.json()
      setPeople(data.results)
    }
    fetchPeople()
  }, [])

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} isHired={false} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} isHired={true} />
      </section>
    </main>
  )
}

export default Dashboard
