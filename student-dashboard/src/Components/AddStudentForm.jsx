import { useState } from 'react'
import './AddStudentForm.css'

// AddStudentForm: A form component to add a new student
// Props:
//   - onAddStudent: function called with (name, score) when form is submitted
function AddStudentForm({ onAddStudent }) {
  // Separate state for each form field (controlled inputs)
  const [name, setName] = useState('')
  const [score, setScore] = useState('')

  // Handle form submission
  const handleSubmit = (e) => {
    // Prevent the browser from refreshing the page
    e.preventDefault()

    // Basic validation: name must not be empty
    if (name.trim() === '') {
      alert('Please enter a student name.')
      return
    }

    // Convert score to number and validate
    const numericScore = parseInt(score, 10)
    if (isNaN(numericScore) || numericScore < 0 || numericScore > 100) {
      alert('Please enter a valid score between 0 and 100.')
      return
    }

    // Call the parent's function to add the student
    onAddStudent(name.trim(), numericScore)

    // Clear form fields after successful submission
    setName('')
    setScore('')
  }

  return (
    <div className="form-wrapper">
      <h2 className="form-title">➕ Add New Student</h2>
      <form className="add-student-form" onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="form-group">
          <label htmlFor="student-name">Student Name</label>
          <input
            type="text"
            id="student-name"
            placeholder="e.g. Ananya Singh"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Score Input */}
        <div className="form-group">
          <label htmlFor="student-score">Score (0–100)</label>
          <input
            type="number"
            id="student-score"
            placeholder="e.g. 75"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            min="0"
            max="100"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Add Student
        </button>
      </form>
    </div>
  )
}

export default AddStudentForm