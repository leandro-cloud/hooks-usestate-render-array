import { useState } from 'react'
import { Person } from './Person'

export const Persons = ({ persons, setPersons }) => {

  const [editId, setEditId] = useState(null)
  const [editedPerson, setEditedPerson] = useState({
    name: '',
    role: '',
    img: ''
  })
  const [isEditing, setIsEditing] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setEditedPerson(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleEdit = (id) => {
    setEditId(id)
    setIsEditing(true)
    const personToEdit = persons.find(person => person.id === id)
    setEditedPerson({...personToEdit})
  }

  const handleSave = () => {
    setPersons(persons.map(person => person.id === editId ? editedPerson : person))
    setEditId(null)
    setEditedPerson({
      name: '',
      role: '',
      img: ''
    })
    setIsEditing(false)
  }

  return (
    <div>
      <h2>IT Team</h2>
      <div className='container d-flex justify-content-center'>
        <div className='d-flex flex-row'>
          {persons.map( person => (
          <div key={person.id}>
           <Person key={person.id} name={person.name} role={person.role} img={person.img} handleEdit={() => handleEdit(person.id)} />
          </div>
            ))}
        </div>
      </div>
      <div className='mt-4'>
          <h2>Modificar datos</h2>
          <div className='d-flex flex-column'>
            <input className='form-control mb-2' type='text' name='name' value={editedPerson.name} onChange={handleChange} placeholder='Nombre' />
            <input className='form-control mb-2' type='text' name='role' value={editedPerson.role} onChange={handleChange} placeholder='Rol'/>
            <input className='form-control mb-2' type='text' name='img' value={editedPerson.img} onChange={handleChange} placeholder='URL de la imagen'/>
            <div className='mt-2'>
              <button className='btn btn-primary' onClick={handleSave}>Guardar</button>
            </div>
          </div>

        </div>     
    </div>
  )
}
