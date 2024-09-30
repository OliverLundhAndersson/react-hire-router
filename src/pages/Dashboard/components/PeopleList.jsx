import PeopleListItem from './PeopleListItem'

function PeopleList({ people, isHired }) {
  return (
    <ul>
      {people.map((person) => (
        <PeopleListItem key={person.email} person={person} isHired={isHired} />
      ))}
    </ul>
  )
}

export default PeopleList

