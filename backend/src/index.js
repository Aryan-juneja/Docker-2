import express from "express";
import cors from 'cors'
import connection from "./Database/db.js";
import bookRouter from "./Routes/Book.routes.js";
import cookieParser from "cookie-parser";
import userRouter from "./Routes/User.routes.js";
import routes from "./Routes/Contact.routes.js";

const app = express();

app.use(cors({
  origin: '*',
  credentials: true,
}));


app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json({limit:"16kb"}));
app.use(express.static("public"))
app.use(express.urlencoded({limit:"16kb", extended:true}))

// Add a root endpoint to check API status
app.get('/', (req, res) => {
  res.json({ message: 'API is running successfully' });
});

const port = process.env.PORT || 8080; // Changed from 8000 to 8080 to match actual running port

app.use("/api/v1/books", bookRouter);
app.use("/api/v1/users", userRouter);
app.use('/api', routes);

connection().then(() => {
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
    console.log(`listening on port Hello Ladies`);
    // console.log(`listening on port Hello Ladies 2`);
  });
});