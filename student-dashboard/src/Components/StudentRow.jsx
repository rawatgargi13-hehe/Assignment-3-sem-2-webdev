import { useState, useEffect } from 'react'
import './StudentRow.css'

// StudentRow: A reusable component that renders ONE student as a table row
// Props:
//   - student: an object { id, name, score }
//   - onUpdateScore: a function to call when the score changes
//   - onRemoveStudent: a function to remove this student
function StudentRow({ student, onUpdateScore, onRemoveStudent }) {
  // Local string state for the input — prevents leading zero issues
  const [inputValue, setInputValue] = useState(String(student.score))

  // Sync local state if parent score changes (e.g. from another source)
  useEffect(() => {
    setInputValue(String(student.score))
  }, [student.score])

  // Determine pass/fail status based on score
  const isPassing = student.score >= 40
  const status = isPassing ? 'Pass' : 'Fail'

  // Handle score input change
  const handleScoreChange = (e) => {
    const raw = e.target.value

    // Allow empty field (user is clearing to retype)
    if (raw === '') {
      setInputValue('')
      onUpdateScore(student.id, 0)
      return
    }

    // Parse and update only if valid number
    const newScore = parseInt(raw, 10)
    if (!isNaN(newScore) && newScore >= 0 && newScore <= 100) {
      setInputValue(String(newScore)) // removes leading zeros
      onUpdateScore(student.id, newScore)
    }
  }

  // On blur, if field is empty show "0"
  const handleBlur = () => {
    if (inputValue === '') {
      setInputValue('0')
    }
  }

  return (
    <tr className="student-row">
      {/* Student Name */}
      <td className="student-name">{student.name}</td>

      {/* Editable Score Input */}
      <td>
        <input
          type="number"
          className="score-input"
          value={inputValue}
          onChange={handleScoreChange}
          onBlur={handleBlur}
          min="0"
          max="100"
        />
      </td>

      {/* Pass/Fail Status Badge — conditional styling */}
      <td>
        <span className={`status-badge ${isPassing ? 'pass' : 'fail'}`}>
          {status}
        </span>
      </td>

      {/* Remove Button */}
      <td>
        <button
          className="remove-btn"
          onClick={() => onRemoveStudent(student.id)}
          title="Remove student"
        >
          ✕
        </button>
      </td>
    </tr>
  )
}

export default StudentRow