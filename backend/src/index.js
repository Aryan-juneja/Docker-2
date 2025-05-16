import express from "express";
import cors from 'cors';
import connection from "./Database/db.js";
import bookRouter from "./Routes/Book.routes.js";
import cookieParser from "cookie-parser";
import userRouter from "./Routes/User.routes.js";
import routes from "./Routes/Contact.routes.js";

const app = express();

// Fix CORS configuration for Docker container communication
app.use(cors({
  origin: true, // Allow any origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'],
  credentials: true,
  exposedHeaders: ['set-cookie']
}));

app.use(cookieParser());
app.use(express.json({limit:"16kb"}));
app.use(express.static("public"));
app.use(express.urlencoded({limit:"16kb", extended:true}));

// Add a root endpoint to check API status
app.get('/', (req, res) => {
  res.json({ message: 'API is running successfully' });
});

const port = process.env.PORT || 8080;

app.use("/api/v1/books", bookRouter);
app.use("/api/v1/users", userRouter);
app.use('/api', routes);

connection()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch(err => {
    console.error("Database connection failed:", err);
    process.exit(1);
  });