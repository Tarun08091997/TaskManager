# Task Manager (React , node.js , Tailwind)

Task Manager is a simple and interactive task management application built with React. It allows users to create, move, and delete tasks dynamically on the screen, with the positions of tasks being preserved across sessions using `localStorage`.

## Features

- **Add Tasks**: Users can add new tasks using a simple input form.
- **Move Tasks**: Tasks can be dragged and repositioned anywhere within the viewport.
- **Delete Tasks**: Users can delete tasks with a single click.
- **Persistent Storage**: Tasks and their positions are saved in the browser's `localStorage`, ensuring that they are preserved even after the browser is closed and reopened.
- **Overlap Detection**: The application detects overlapping tasks and prevents them from being placed on top of each other or the task bar.

## Advantages

- **User-Friendly Interface**: The drag-and-drop functionality and straightforward task creation make it easy to manage tasks.
- **Persistence**: By leveraging `localStorage`, the application ensures that tasks are not lost between sessions.
- **Dynamic Positioning**: Tasks can be moved freely, providing a flexible and interactive user experience.
- **Responsive Design**: The application adapts to different screen sizes, ensuring a consistent experience across devices.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Tarun08091997/TaskManager.git
   ```
2. Navigate to the project directory:
   ```bash
   cd TaskManager
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
### Running the Application
To start the application, run:
    ```bash
    npm start
    ```
This will start the development server and open the application in your default web browser.


## Project Structure

- **App.jsx**: The main component that contains the logic for managing tasks, including creating, updating, and deleting tasks.
- **TaskCard.jsx**: A component representing individual task cards, which can be dragged and deleted.
- **AddTask.jsx**: A component for adding new tasks via an input form.
- **App.css**: The main stylesheet for the application.

## Basic Functionality

### Adding a Task

1. Enter a task description in the input field located at the top of the screen.
2. Click the "Create" button to add the task.
3. The task will appear on the screen at a random, non-overlapping position.

### Moving a Task

1. Click and hold the task card.
2. Drag it to the desired position.
3. Release the mouse button to drop the task at the new position.

### Deleting a Task

1. Click the delete icon (`MdDelete`) on the task card.
2. The task will be removed from the screen and `localStorage`.

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests with any enhancements or bug fixes.

