# Project Description

This project is a Node.js API developed using TypeScript, aiming to provide endpoints for managing vehicles, including CRUD operations (Create, Read, Update, Delete). The project is structured into three main folders: `src` for routes, `services` for business logic, and `controllers` for application control layer.

## Key Features 🚀

- **Vehicle CRUD:** The API allows creating, reading, updating, and deleting vehicles.
- **Structured Endpoints:** Endpoints are organized according to best practices, following a clear and cohesive structure.
- **TypeScript Development:** TypeScript enables safer and more consistent coding, with static typing and code autocompletion.
- **Data Persistence:** The project uses MongoDB as the database to store vehicle information.
- **Request Testing:** Insomnia is used to test and debug API HTTP requests, ensuring correct functionality.

## How to Use 🛠️

1. **Install Dependencies:** Run `npm install` to install all necessary dependencies.
2. **Database Configuration:** Set up environment variables: Create a `.env` file at the project root and define the necessary environment variables, including the MongoDB Atlas connection URL.

Example: (MONGODB_URI=your-mongodb-atlas-connection-url).
3. **Run the Server:** Execute `npm run dev` to start the server.

### Specific Commands 🛠️
1. **TypeScript Commands:**
```bash
    npm install typescript --save-dev
```
```bash
    tsc --init
```
```bash
    npm install tsx
```
```bash
    npm install @types/node --save-dev
```

2. **Fastify Commands:**
```bash
    npm install fastify @fastify/cors
```

3. **Prisma Commands:**
```bash
    npm install prisma --save-dev
```
```bash
    npm install @prisma/client
```
```bash
    npx prisma init
```

## Available Endpoints 🚚

- `GET /vehicle`: Returns all registered vehicles.
- `POST /vehicle`: Creates a new vehicle with provided data.
- `PUT /vehicle/:id`: Updates data for a specific vehicle based on the provided ID.
- `DELETE /vehicle/:id`: Deletes a specific vehicle based on the provided ID.

## Technologies Used 🛠️

- Node.js (v20.11.1) - https://nodejs.org/en
- TypeScript
- Fastify
- Atlas MongoDB - https://www.mongodb.com/pt-br
- Prisma - https://www.prisma.io
- Insomnia - https://insomnia.rest