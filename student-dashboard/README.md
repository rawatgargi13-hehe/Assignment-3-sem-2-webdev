# Student Dashboard

A React-based web application for tracking and managing student performance. This application provides a simple interface to view, add, update, and remove students from a scoreboard.

## Features

*   **View All Students:** Displays a comprehensive list of students with their current scores and pass/fail status.
*   **Top Scorer Highlight:** Automatically calculates and prominently displays the student with the highest score.
*   **Student Statistics:** Provides a quick overview of the total number of students, the number of passing students, and the number of failing students.
*   **Add New Students:** Includes a form to easily add new students to the dashboard by providing their name and score.
*   **Update Scores:** Allows direct editing of student scores within the table, updating the overall statistics and top scorer dynamically.
*   **Remove Students:** Provides functionality to remove individual students from the list.

## Technologies Used

*   React
*   Vite
*   Vanilla CSS

## Getting Started

Follow these steps to run the application locally.

### Prerequisites

Ensure you have Node.js and npm installed on your system.


4.  Open your browser and navigate to the local URL provided in the terminal (usually http://localhost:5173).

## Project Structure

The project components are located in the `src/Components` directory:

*   `App.jsx`: Main application container managing state and component composition.
*   `Header.jsx`: Displays the application title and subtitle.
*   `TopScorer.jsx`: Calculates and presents the highest scoring student.
*   `StudentStats.jsx`: Shows aggregated data (total, passed, failed).
*   `StudentTable.jsx`: Renders the table holding all student records.
*   `StudentRow.jsx`: Represents a single row in the student table, handling individual score updates and removals.
*   `AddStudentForm.jsx`: A form component for inputting new student data.
