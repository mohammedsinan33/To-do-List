# ✨ Modern To-Do List Application

A stunning, full-stack to-do list application with a beautiful gradient UI, smooth animations, and real-time updates. Built with React, Express, and MongoDB.

![To-Do List](https://img.shields.io/badge/React-19.2.0-61dafb?style=for-the-badge&logo=react)
![Express](https://img.shields.io/badge/Express-5.2.1-000000?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-9.1.4-47A248?style=for-the-badge&logo=mongodb)

## 🎨 Features

- ✅ **Add, complete, and delete tasks** with smooth animations
- 🎭 **Beautiful gradient UI** with glass-morphism design
- ⚡ **Real-time updates** without page reloads
- 🌊 **Smooth transitions** and hover effects
- 📱 **Fully responsive** design for all devices
- ⌨️ **Keyboard shortcuts** (Enter to add tasks)
- 🎯 **Toggle task completion** with animated checkmarks
- 🗑️ **Quick delete** with confirmation animations

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - UI Library
- **Vite 7.2.4** - Build tool & dev server
- **Axios** - HTTP requests
- **React Icons** - Beautiful icon library
- **CSS3** - Custom animations & gradients

### Backend
- **Express 5.2.1** - Web framework
- **MongoDB** - Database
- **Mongoose 9.1.4** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Auto-restart development server

## 📁 Project Structure

```
To-do-List/
├── front-end/
│   ├── src/
│   │   ├── Pages/
│   │   │   ├── Home.jsx       # Main todo list component
│   │   │   └── Create.jsx     # Task input component
│   │   ├── App.jsx            # Root component
│   │   ├── App.css            # Component styles
│   │   ├── index.css          # Global styles & animations
│   │   └── main.jsx           # Entry point
│   ├── package.json
│   └── vite.config.js
│
└── back-end/
    ├── Models/
    │   └── Todo.js            # Mongoose schema
    ├── index.js               # Express server & API routes
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **MongoDB** installed and running locally
- **npm** or **yarn**

### Installation

#### 1. Clone the repository
```bash
git clone <your-repo-url>
cd To-do-List
```

#### 2. Setup Backend
```bash
cd back-end
npm install
```

**Create `.env` file** in the `back-end` folder:
```bash
# Copy example file
cp .env.example .env
```

Edit `back-end/.env` with your values:
```env
PORT=3001
MONGODB_URI=mongodb://127.0.0.1:27017/test
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

**For MongoDB Atlas (Production):**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todolist
```

Start MongoDB (if using local):
```bash
# Windows
mongod

# macOS/Linux
sudo systemctl start mongod
```

Start the backend server:
```bash
npm start
```
The server will run on **http://localhost:3001**

#### 3. Setup Frontend
Open a new terminal:
```bash
cd front-end
npm install
```

**Create `.env` file** in the `front-end` folder:
```bash
# Copy example file
cp .env.example .env
```

Edit `front-end/.env`:
```env
VITE_API_URL=http://localhost:3001
```

**For production (deployed backend):**
```env
VITE_API_URL=https://your-backend-url.onrender.com
```

Start the development server:
```bash
npm run dev
```
The app will run on **http://localhost:5173**

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/get` | Fetch all tasks |
| POST | `/add` | Create a new task |
| PUT | `/update/:id` | Toggle task completion |
| DELETE | `/delete/:id` | Delete a task |

## 💾 Database Schema

```javascript
{
  task: String,      // Task description
  done: Boolean      // Completion status (default: false)
}
```

## 🎯 Usage

1. **Add a task**: Type in the input field and click "Add Task" or press Enter
2. **Mark as complete**: Click the circle icon to toggle completion
3. **Delete a task**: Click the trash icon
4. **View tasks**: All tasks are displayed with smooth animations

## 🌈 Design Features

- **Animated gradient background** with moving particles
- **Glass-morphism** cards with frosted glass effect
- **Hover animations** on all interactive elements
- **Smooth transitions** for state changes
- **Custom scrollbar** styling
- **Responsive layout** adapts to screen size
- **Modern Poppins font** from Google Fonts

## 🔧 Configuration

### Backend Environment Variables
Create `back-end/.env` file:

| Variable | Description | Example |
|----------|-------------|----------|
| `PORT` | Backend server port | `3001` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://127.0.0.1:27017/test` or Atlas URI |
| `NODE_ENV` | Environment mode | `development` or `production` |
| `FRONTEND_URL` | Frontend URL for CORS | `http://localhost:5173` or Vercel URL |

**⚠️ Important:** Never commit `.env` files to Git. They're already in `.gitignore`.

### Frontend Environment Variables
Create `front-end/.env` file:

| Variable | Description | Example |
|----------|-------------|----------|
| `VITE_API_URL` | Backend API URL | `http://localhost:3001` or Render URL |

### Other Configuration
- Styles in `App.css` and `index.css`
- API routes in `back-end/index.js`

## 📦 Build for Production

### Frontend
```bash
cd front-end
npm run build
```
Production files will be in `front-end/dist/`

### Backend
The backend runs as-is in production. For deployment, consider:
- Using **MongoDB Atlas** (cloud database)
- Setting environment variables for sensitive data
- Using a process manager like **PM2**

## 🌐 Deployment Options

### Frontend
- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**

### Backend
- **Render.com** (Free tier available)
- **Railway.app**
- **Fly.io**
- **Heroku**

### Database
- **MongoDB Atlas** (Cloud MongoDB - Free tier available)

## 🐛 Troubleshooting

**Port already in use:**
```bash
# Kill the process using port 3001 or 5173
# Windows
netstat -ano | findstr :3001
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3001 | xargs kill -9
```

**MongoDB connection error:**
- Ensure MongoDB is running
- Check connection string in `back-end/index.js`
- Verify MongoDB is listening on port 27017

**Module not found:**
```bash
# Reinstall dependencies
cd front-end && npm install
cd ../back-end && npm install
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Your Name - [Your GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgments

- Design inspired by modern UI/UX trends
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

<p align="center">Made with ❤️ and ✨</p>
