# Todo List Application

A feature-rich Todo List application built with React, TypeScript, Chakra UI, and Express.

## Overview

This Todo List application provides a user-friendly interface for managing tasks efficiently. It features a responsive design that adapts to different screen sizes, offering a seamless experience across devices.

### Key Features:
- Create, edit, and delete tasks
- Mark tasks as complete
- Categorize tasks (Due Soon, Important, Completed, Removed)
- Search functionality using url parameters
- Expandable task cards with detailed view
- Dark/Light mode toggle
- Responsive design with collapsible navigation
- Data persistence using a dummy JSON file

## System Design

### Frontend:
- **React**: Used for building the user interface
- **TypeScript**: Ensures type safety and improved developer experience
- **Chakra UI**: Provides accessible and customizable UI components
- **React Hook Form with Zod**: Handles form validation

### Backend:
- **Express**: Serves as the backend framework

### Data Storage:
- Uses a dummy JSON file to store and retrieve task data

### Architecture:
- The application follows a client-server architecture
- Frontend communicates with the backend API to perform CRUD operations on tasks
- State management is handled using React hooks
- Search functionality utilizes URL parameters

## Implementation Details

### Components:
1. **Navbar**: Contains the app title, search bar, and color mode toggler
2. **SidePanel**: Provides navigation options for different task categories
3. **TaskCard**: Displays individual task information with options to mark as done, edit, and delete
4. **TaskDrawer**: Shows detailed task information when expanded
5. **AddTaskModal**: Modal for adding new tasks
6. **EditTaskModal**: Modal for editing existing tasks

### Responsive Design:
- Navbar collapses to search bar and hamburger menu on smaller screens
- Sidebar transforms into a compact menu below the lg breakpoint

### Task Management:
- Tasks are categorized and can be filtered based on status (incomplete, due soon, important, completed, removed)
- Task order is maintained based on insertion time or due date

### Search Functionality:
- Utilizes URL query parameters to handle search queries
- Example: `http://localhost:3000/?search=taskname`

### Form Validation:
- React Hook Form with Zod ensures proper validation of task input fields

### Data Persistence:
- Task data is stored and retrieved from a dummy JSON file
- Simulates database operations without requiring a full database setup

## Setup and Running the Application

### Prerequisites:
- Node.js (v14 or later)
- npm or yarn

### Installation:

1. Clone the repository:
```
git clone https://github.com/lsb22/ToDoListApp.git
cd todo-list-app
```
3. Install dependencies:
```
npm install
```
### Running the Application:
- Move to backend folder and start the backend
```
cd ./backend/
npm start 
```
- In a new terminal, start the frontend development server:
```
npm run dev
```
