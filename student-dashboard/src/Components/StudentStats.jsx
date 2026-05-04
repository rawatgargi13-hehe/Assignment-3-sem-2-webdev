import './StudentStats.css'

function StudentStats({ students }) {
  const total = students.length
  const passed = students.filter((s) => s.score >= 40).length
  const failed = total - passed

  return (
    <div className="stats-container">
      <div className="stat-box total-box">
        <span className="stat-label">Total Students</span>
        <span className="stat-value">{total}</span>
      </div>
      <div className="stat-box pass-box">
        <span className="stat-label">Passed</span>
        <span className="stat-value">{passed}</span>
      </div>
      <div className="stat-box fail-box">
        <span className="stat-label">Failed</span>
        <span className="stat-value">{failed}</span>
      </div>
    </div>
  )
}

export default StudentStats