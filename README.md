# Contact API

A RESTful API for managing contacts built with Node.js, Express, and MongoDB.

## Features

- Create, Read, Update, and Delete contacts
- Data validation
- MongoDB database
- Error handling
- CORS enabled

## Prerequisites

- Node.js (v14 or higher)
- MongoDB

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/contact-api
   ```

## Running the Application

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

- `POST /api/contacts` - Create a new contact
- `GET /api/contacts` - Get all contacts
- `GET /api/contacts/:id` - Get a single contact
- `PUT /api/contacts/:id` - Update a contact
- `DELETE /api/contacts/:id` - Delete a contact

## Request Body Format

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "company": "Example Corp",
  "message": "This is a test message"
}
``` 