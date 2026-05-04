import './TopScorer.css'

// TopScorer: Displays the student with the highest score
// Props:
//   - students: array of student objects
function TopScorer({ students }) {
  // If no students exist, don't render anything
  if (students.length === 0) {
    return null
  }

  // Find the student with the maximum score
  // reduce() compares each student and keeps the one with the higher score
  const topStudent = students.reduce((best, current) =>
    current.score > best.score ? current : best
  )

  return (
    <div className="top-scorer-card">
      <div className="top-scorer-icon">🏆</div>
      <div className="top-scorer-info">
        <p className="top-scorer-label">Top Scorer</p>
        <h3 className="top-scorer-name">{topStudent.name}</h3>
        <p className="top-scorer-score">{topStudent.score} / 100</p>
      </div>
      {/* Animated progress ring */}
      <div className="score-ring">
        <svg viewBox="0 0 80 80">
          <circle
            className="ring-bg"
            cx="40"
            cy="40"
            r="34"
          />
          <circle
            className="ring-fill"
            cx="40"
            cy="40"
            r="34"
            style={{
              strokeDasharray: `${(topStudent.score / 100) * 213.6} 213.6`,
            }}
          />
        </svg>
        <span className="ring-text">{topStudent.score}%</span>
      </div>
    </div>
  )
}

export default TopScorer