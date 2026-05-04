import './Header.css'

// Header component - displays the app title
// This is a "functional component" — a plain JS function that returns JSX
function Header() {
  return (
    <header className="header">
      <h1>🎓 Student Scoreboard</h1>
      <p className="header-subtitle">Track and manage student performance</p>
    </header>
  )
}

// We export so other files (like App.jsx) can import and use it
export default Header