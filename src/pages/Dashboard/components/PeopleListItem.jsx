import { Link } from 'react-router-dom'

function PeopleListItem(props) {
  const { person, isHired } = props

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <div>
        <Link to={`/view/${person.email}`} state={{ person }}>View Profile</Link>
      </div>
      <div>
        {isHired && <Link to={`/edit/${person.email}`}>   Edit</Link>}
      </div>
    </li>
  )
}

export default PeopleListItem
