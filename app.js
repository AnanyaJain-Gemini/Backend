import express from 'express';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import dotenv from 'dotenv';
import cors from 'cors';

import { sequelize } from './db/sequelize.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/users.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// --- MIDDLEWARES ---

// CORS: allow frontend at http://localhost:5173
app.use(
  cors({
    origin: 'http://localhost:5173', // Allow your frontend origin
    credentials: true, // Allow cookies/authorization headers
  })
);

// Parse form data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Enable cookies
app.use(cookieParser());

// Enable PUT, PATCH, DELETE from forms
app.use(methodOverride('_method'));

// --- ROUTES ---

app.use('/auth', authRoutes);
app.use('/users', userRoutes);

// Home route (for test/debug)
// app.get('/', (req, res) => {
//   res.render('userDirectoryApp');
//   // res.send('Welcome to the User Directory API!');
// });

// Logout route (clears the JWT cookie)
app.post('/logout', (req, res) => {
  try {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (err) {
    res.status(500).json('Error logging out');
  }
});

// --- DATABASE & SERVER INIT ---

sequelize
  .authenticate()
  .then(() => {
    console.log('Sequelize: Connected to database: ');
    app.listen(port, () => {
      console.log(`Backend server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Sequelize connection failed:', err);
    process.exit(1);
  });
// import express from 'express';
// import userRoutes from './routes/users.js';
// import authRoutes from './routes/authRoutes.js';
// import cookieParser from 'cookie-parser';
// import dotenv from 'dotenv';
// // import { pool } from './db/connection.js';
// import methodOverride from 'method-override';
// import { sequelize } from './db/sequelize.js';

// dotenv.config();

// //export value of port from ".env" file
// const port = process.env.PORT || 3000;

// // create an instance of express
// const app = express();

// // mount middleware for form data
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // enable reading cookies
// app.use(cookieParser());

// //use method override on post methods
// app.use(methodOverride('_method'));

// //set ejs as view engine template
// // app.set(settingName, value)
// // app.set('view engine', 'ejs');

// //mount middleware for "/users" routes
// app.use('/users', userRoutes);

// app.use('/auth', authRoutes);

// app.get('/home', (req, res) => {
//   //res.render('loginForm', { message });
//   let message = req.query.message || null;
//   res.render('home', { message });
// });

// app.post('/logout', (req, res) => {
//   //if blacklisting token
//   // if(token){
//   //   blacklist.add(token);
//   // }

//   //when using httpOnly cookies
//   res.clearCookie('token'); // remove the JWT cookie
//   res.redirect('/?message=Logged out successfully');
// });

// app.get('/', (req, res) => {
//   const message = req.query.message;
//   res.render('userDirectoryApp', { message });
// });

// //connections
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Sequelize: Connection has been established successfully.');
//     // Sync all models
//     return sequelize.sync(); // or sequelize.sync({ alter: true })
//   })
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`Server is running on port ${port}`);
//     });
//   })
//   .catch((err) => {
//     console.error('Sequelize: Unable to connect to the database:', err);
//     process.exit(1);
//   });

// // pool
// //   .connect()
// //   .then(() => {
// //     console.log('Connected to PostgreSQL Database');

// //     app.listen(3000, (req, res) => {
// //       console.log(`Server is running on ${port}`);
// //     });
// //   })
// //   .catch((err) => {
// //     console.log('Failed to connect to db: ', err.message);
// //     process.exit(1);
// //   });

// // app.listen(3000, (req, res) => {
// //   console.log(`Server is running on ${port}`);
// // });
