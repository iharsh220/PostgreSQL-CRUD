# 📦 PostgreSQL Basic API

A scalable and secure REST API built with **Node.js**, **Express**, and **PostgreSQL**. Includes logging, clustering, compression, CORS, Swagger documentation, and a clean modular folder structure for scalability.

---

## 🚀 Features

- ✅ CRUD API with PostgreSQL
- ✅ Express.js with middleware (`cors`, `helmet`, `compression`)
- ✅ Logging with `winston`
- ✅ Auto-generated API docs via Swagger
- ✅ Multiprocess support via Node `cluster`
- ✅ Secure, modular, and production-ready setup
- ✅ Postman Collection included

---

## 📁 Folder Structure

```
project/
├── config/             # DB configuration
├── controllers/        # Route logic
├── middleware/         # Security, error handling
├── models/             # DB queries
├── routes/             # Route endpoints
├── utils/              # Logger and helpers
├── .env                # Environment variables
├── app.js              # Express app setup
├── cluster.js          # Entry point using Node cluster
├── swagger.js          # Swagger UI setup
└── README.md
```

---

## 🛠️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/iharsh220/PostgreSQL-CRUD.git
cd PostgreSQL-CRUD
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment

Create a `.env` file:

```env
PORT=3000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=yourdbname
DB_PORT=5432
```

### 4. Create PostgreSQL table

```sql
CREATE TABLE data (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  value TEXT NOT NULL
);
```

### 5. Run the server

```bash
npm start
```

> Use `npm run dev` if you have `nodemon` installed for development.

---

## 📬 API Endpoints

| Method | Route            | Description             |
|--------|------------------|-------------------------|
| GET    | `/api/data`      | Get all data            |
| POST   | `/api/data`      | Create new data         |
| GET    | `/api/data/:id`  | Get data by ID          |
| PUT    | `/api/data/:id`  | Update data by ID       |
| DELETE | `/api/data/:id`  | Delete data by ID       |

---

## 📘 Documentation

Swagger is available at:

```
http://localhost:3000/docs
```

---

## 📮 Postman Collection

A Postman collection is available for all endpoints.

To use:

1. Open Postman.
2. Import → Raw Text → Paste the collection JSON provided in this repo or [here](#).

---

## 🧠 Performance & Security

- Uses `helmet` for secure headers.
- Uses `compression` and `cors` for performance and cross-origin access.
- Uses `cluster` to spawn processes on all CPU cores.
- Logs stored using `winston`.

---

## 👨‍💻 Developer Scripts

```bash
npm run start     # Start server using cluster.js
npm run dev       # Start with nodemon
npm run lint      # Run eslint checks
npm run docs      # Serve Swagger documentation (if separated)
```

---

## 📄 License

MIT — [Harsh Gohil](mailto:harshgohil@example.com)
