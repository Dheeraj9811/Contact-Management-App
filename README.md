# Contact Management App - Backend

This is the backend implementation for the Contact Management App.
## Getting Started

1. Clone the repository:

   ```bash
    git clone https://github.com/your-username/Contact-Management-App.git
    cd Contact-Management-App
    npm install
    ```
2. Create a .env file in the root directory and add the following environment variables:

   ```bash
    PORT=5001
    CONNECTION_STRING="your mongodb connection string"
    ACCESS_TOKEN_SECERT = "your access token secret"
    ```

3. Start the server:

   ```bash
    npm run dev
    ```


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)

## Introduction

The Contact Management App is designed to manage and organize contact information. This backend component provides the server-side logic and API endpoints for handling contact-related operations.

## Features

- User registration and authentication
- CRUD operations for managing contacts
- Search and filtering capabilities
- Error handling and validation
- ...

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- MongoDB installed and running

# API Endpoints
    POST /api/register: Register a new user.
    POST /api/login: Authenticate and log in a user.
    GET /api/current: Get details of the currently logged-in user.
    GET /api/contacts: Get a list of all contacts.
    GET /api/contacts/:id: Get details of a specific contact.
    POST /api/contacts: Create a new contact.
    PUT /api/contacts/:id: Update details of a specific contact.
    DELETE /api/contacts/:id: Delete a specific contact.

# Middleware
validateToken: Middleware for validating user tokens before accessing certain endpoints.
errorHandler: Middleware for handling errors.
routeHandler: Middleware for wrapping asynchronous route handlers.
