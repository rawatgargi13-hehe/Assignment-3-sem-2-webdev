import { useState } from 'react'
import Header from './Components/Header'
import TopScorer from './Components/TopScorer'
import StudentStats from './Components/StudentStats'
import StudentTable from './Components/StudentTable'
import AddStudentForm from './Components/AddStudentForm'
import './App.css'

function App() {
  // ===== STATE: Store all students in the parent component =====
  const [students, setStudents] = useState([
    { id: 1, name: 'Aarav Sharma', score: 85 },
    { id: 2, name: 'Priya Patel', score: 35 },
    { id: 3, name: 'Rohan Gupta', score: 72 },
  ])

  // ===== HANDLER: Update a student's score =====
  // We find the student by id and create a NEW array (never mutate state directly!)
  const handleUpdateScore = (id, newScore) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, score: newScore } : student
      )
    )
  }

  // ===== HANDLER: Add a new student =====
  // Generate a unique id using Date.now()
  const handleAddStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name: name,
      score: score,
    }
    // Spread the old array and add the new student at the end
    setStudents((prevStudents) => [...prevStudents, newStudent])
  }

  // ===== HANDLER: Remove a student =====
  // Filter out the student with the matching id
  const handleRemoveStudent = (id) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id)
    )
  }

  return (
    <div className="app-container">
      <Header />
      <TopScorer students={students} />
      <StudentStats students={students} />
      <StudentTable
        students={students}
        onUpdateScore={handleUpdateScore}
        onRemoveStudent={handleRemoveStudent}
      />
      <AddStudentForm onAddStudent={handleAddStudent} />
    </div>
  )
}

export default App