# Chat Application – Frontend

## Overview
This is the frontend of a real-time chat application built using React.  
It allows users to sign up, log in, view online users, and send messages in real time.

The frontend communicates with the backend APIs and WebSocket server.

---

## Tech Stack

- React
- Zustand (State Management)
- Axios
- Socket.IO Client
- React Router
- React Hot Toast
- Tailwind CSS

---

## Features

- User Authentication (Signup / Login / Logout)
- JWT based authentication
- Real-time messaging
- Online users list
- Profile update
- Image upload support
- Responsive UI

---

## Installation

Clone the repository:


Install dependencies:

## Application runs on:

```
http://localhost:5173
```

## API Endpoints Used
```
POST /api/auth/signup
POST /api/auth/login
GET /api/auth/check
GET /api/messages/users
GET /api/messages/:id
POST /api/messages/send/:id
```

## Real-Time Communication

Socket.IO client is used for real-time messaging.

When a user logs in:

- Socket connection is established
- Online users list updates
- Messages are delivered instantly

---

## Author

Chandra Sekhar Aripaka



