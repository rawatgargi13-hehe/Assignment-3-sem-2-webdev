import StudentRow from './StudentRow'
import './StudentTable.css'

// StudentTable: Displays all students in a styled table
// Props:
//   - students: array of student objects
//   - onUpdateScore: function to update a student's score
//   - onRemoveStudent: function to remove a student
function StudentTable({ students, onUpdateScore, onRemoveStudent }) {
  return (
    <div className="table-wrapper">
      <table className="student-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over each student and render a StudentRow */}
          {students.map((student) => (
            <StudentRow
              key={student.id}
              student={student}
              onUpdateScore={onUpdateScore}
              onRemoveStudent={onRemoveStudent}
            />
          ))}
        </tbody>
      </table>

      {/* Show a message if no students exist */}
      {students.length === 0 && (
        <p className="empty-message">No students yet. Add one below! 👇</p>
      )}
    </div>
  )
}

export default StudentTable