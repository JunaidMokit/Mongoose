# Simple Note System - Backend

A simple backend application for managing notes built with Node.js, Express, MongoDB, and Mongoose. This project provides a RESTful API that supports CRUD operations for notes.

---

## Project Overview

This backend system allows users to create, read, update, and delete notes stored in a MongoDB database. It is designed to be lightweight and easy to extend for any note-taking application.

The backend is built using:
- **Node.js** as the runtime environment,
- **Express.js** for handling HTTP requests,
- **MongoDB** for data storage,
- **Mongoose** for modeling and interacting with MongoDB.

---

## Features

- **Create Note**: Add new notes with title and content.
- **Read Notes**: Fetch all notes or a single note by its ID.
- **Update Note**: Modify existing notes.
- **Delete Note**: Remove notes by ID.

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- RESTful API principles

---

## API Endpoints

| HTTP Method | Endpoint    | Description                |
|-------------|-------------|----------------------------|
| POST        | `/notes`    | Create a new note          |
| GET         | `/notes`    | Get all notes              |
| GET         | `/notes/:id`| Get a note by ID           |
| PUT         | `/notes/:id`| Update a note by ID        |
| DELETE      | `/notes/:id`| Delete a note by ID        |

---

## Getting Started

### Prerequisites

- Node.js installed ([Download](https://nodejs.org/))
- MongoDB installed and running ([Download](https://www.mongodb.com/try/download/community))

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JunaidMokit/Mongoose.git
 
