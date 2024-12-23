# WebknotTech
# Event Management Dashboard

## Overview
This project is a web-based Event Management Dashboard designed to streamline the organization and management of events. It allows users to create, manage, and track events, attendees, and tasks efficiently. Built as part of a hackathon assignment, this dashboard integrates a user-friendly frontend, a robust backend, and a database for storing event-related data.

## Features
### Event Management
- Create, update, delete, and view events.
- Display event details including name, description, location, and date.

### Attendee Management
- Add and remove attendees.
- Assign attendees to specific events or tasks.

### Task Tracker
- Track task progress with statuses (Pending/Completed).
- Visualize task progress with a progress bar.

## Tech Stack
### Frontend
- **React.js** for building the user interface.
- **Bootstrap** for responsive styling.

### Backend
- **Node.js** with **Express.js** for creating RESTful APIs.

### Database
- **MongoDB** for storing event, attendee, and task data.

### Tools
- Visual Studio Code
- Postman for API testing
- GitHub for version control

## System Architecture
1. **Frontend:** Provides an interactive dashboard for managing events, attendees, and tasks.
2. **Backend:** Handles API requests and business logic.
3. **Database:** Stores all data related to events, attendees, and tasks.

## Installation and Setup

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running locally or accessible remotely

### Backend Setup
1. Clone the repository and navigate to the backend folder:
   ```bash
   git clone <repository-url>
   cd event-management-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add the following:
   ```env
   MONGO_URI=<Your MongoDB Connection String>
   PORT=5000
   ```
4. Start the server:
   ```bash
   nodemon server.js
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd event-management-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend:
   ```bash
   npm start
   ```

### Accessing the Application
- Open your browser and navigate to `http://localhost:3000` for the frontend.
- Backend APIs are available at `http://localhost:5000`.

## API Endpoints
### Event Management
- **Create Event:** `POST /api/events`
- **Get All Events:** `GET /api/events`
- **Update Event:** `PUT /api/events/:id`
- **Delete Event:** `DELETE /api/events/:id`

### Attendee Management
- **Add Attendee:** `POST /api/attendees`
- **Get All Attendees:** `GET /api/attendees`
- **Delete Attendee:** `DELETE /api/attendees/:id`

### Task Management
- **Create Task:** `POST /api/tasks`
- **Get Tasks for an Event:** `GET /api/tasks/:eventId`
- **Update Task Status:** `PUT /api/tasks/:id`

## Bonus Features
- **Authentication:** Secure login/logout functionality.
- **Calendar View:** Visualize events on a calendar.
- **Real-time Updates:** WebSocket integration for dynamic task progress updates.

## Deliverables
1. **GitHub Repository:**
   - [Frontend Repository Link](#)
   - [Backend Repository Link](#)
2. **Documentation:**
   - Detailed API usage instructions.
   - Steps for setting up and running the project.
3. **Presentation:** A walkthrough of the dashboard.

## Contributing
Feel free to fork the repository and submit pull requests for improvements or bug fixes.

## License
This project is licensed under the MIT License.

## Acknowledgments
Special thanks to the hackathon organizers and mentors for guidance and support.

## Contact
For any questions or feedback, please contact Khursheed Iram at [Your Email Address].

