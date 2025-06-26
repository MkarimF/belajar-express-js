# Express.js CRUD API with Prisma and Swagger

This project is a simple CRUD API for blog posts using Express.js, Prisma ORM, MySQL, and Swagger UI for API documentation.

## Features

- CRUD endpoints for posts (`/api/posts`)
- Prisma ORM for MySQL database
- Swagger UI documentation (`/api-docs`)

## Requirements

- Node.js (v18 or higher recommended)
- npm
- MySQL database

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd express-js
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   Copy `.env.example` to `.env` and set your MySQL database URL:
   ```
   DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
   ```

4. **Setup the database**

   Run Prisma migrations to create tables:
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start the server**
   ```bash
   npm run dev
   ```
   The API will be available at [http://localhost:3000](http://localhost:3000)

6. **Access Swagger UI**

   Open [http://localhost:3000/api-docs](http://localhost:3000/api-docs) in your browser.

## Scripts

- `npm run dev` — Start server with nodemon
- `npm start` — Start server

## Folder Structure

- `src/` — Source code (routes, controllers, helpers)
- `prisma/` — Prisma schema and migrations
- `src/swagger.json` — Swagger API documentation

## License
belajar-express-js
# belajar-express-js
