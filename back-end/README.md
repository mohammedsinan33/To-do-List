# 🚀 To-Do List - Backend API

RESTful API backend for the To-Do List application built with Express and MongoDB.

## 🛠️ Tech Stack

- **Express 5.2.1** - Fast, minimalist web framework for Node.js
- **MongoDB** - NoSQL database for storing tasks
- **Mongoose 9.1.4** - Elegant MongoDB object modeling (ODM)
- **CORS** - Enable cross-origin resource sharing
- **Nodemon** - Auto-restart server during development

## 📁 Project Structure

```
back-end/
├── Models/
│   └── Todo.js           # Mongoose schema for tasks
├── index.js              # Express server & API routes
├── package.json          # Dependencies & scripts
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **MongoDB** installed and running locally
- **npm** or **yarn**

### Installation

```bash
# Install dependencies
npm install

# Start development server with auto-reload
npm start
```

The server will run on **http://localhost:3001**

## 📡 API Endpoints

### Get All Tasks
```http
GET /get
```
**Response:**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "task": "Buy groceries",
    "done": false
  },
  {
    "_id": "507f1f77bcf86cd799439012",
    "task": "Finish project",
    "done": true
  }
]
```

### Create New Task
```http
POST /add
Content-Type: application/json

{
  "task": "New task description"
}
```
**Response:**
```json
{
  "_id": "507f1f77bcf86cd799439013",
  "task": "New task description",
  "done": false
}
```

### Toggle Task Completion
```http
PUT /update/:id
```
**Parameters:**
- `id` - MongoDB ObjectId of the task

**Response:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "task": "Buy groceries",
  "done": true
}
```

### Delete Task
```http
DELETE /delete/:id
```
**Parameters:**
- `id` - MongoDB ObjectId of the task

**Response:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "task": "Buy groceries",
  "done": false
}
```

## 💾 Database Schema

### Todo Model
```javascript
{
  task: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  }
}
```

**Collection Name:** `todos`

## 🔧 Configuration

### Database Connection
Edit `index.js` to change the MongoDB connection string:
```javascript
mongoose.connect('mongodb://127.0.0.1:27017/test')
```

**For Production (MongoDB Atlas):**
```javascript
mongoose.connect('mongodb+srv://username:password@cluster.mongodb.net/todolist')
```

### Port Configuration
Change the server port in `index.js`:
```javascript
app.listen(3001, () => {
  console.log('Server is running on port 3001')
})
```

### CORS Configuration
Current configuration allows all origins. For production, restrict to specific domains:
```javascript
app.use(cors({
  origin: 'https://yourdomain.com'
}))
```

## 🗄️ MongoDB Setup

### Local MongoDB

**Windows:**
```bash
# Start MongoDB service
net start MongoDB

# Or run mongod directly
mongod
```

**macOS/Linux:**
```bash
# Start MongoDB service
sudo systemctl start mongod

# Or run mongod directly
mongod --dbpath /path/to/data
```

### MongoDB Atlas (Cloud)

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Replace localhost connection with Atlas URI
5. Add IP address to whitelist

## 📦 Dependencies

```json
{
  "cors": "^2.8.5",
  "express": "^5.2.1",
  "mongoose": "^9.1.4"
}
```

### Dev Dependencies
```json
{
  "nodemon": "^3.1.11"
}
```

## 🌐 Deployment

### Render.com (Recommended)

1. Create account on [Render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repository
4. Configure:
   - **Build Command:** `npm install`
   - **Start Command:** `node index.js`
   - **Environment Variables:** Add MongoDB Atlas URI
5. Deploy

### Railway.app

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Deploy
railway up
```

### Environment Variables for Production

Create `.env` file:
```env
PORT=3001
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todolist
NODE_ENV=production
```

Update `index.js`:
```javascript
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/test');

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

## 🔒 Security Best Practices

### For Production:
1. **Use environment variables** for sensitive data
2. **Enable rate limiting** to prevent abuse
3. **Add input validation** using libraries like `joi` or `express-validator`
4. **Use helmet.js** for security headers
5. **Enable HTTPS** in production
6. **Sanitize user inputs** to prevent injection attacks

Example with security packages:
```bash
npm install helmet express-rate-limit dotenv
```

```javascript
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);
```

## 🐛 Troubleshooting

**MongoDB Connection Error:**
```bash
# Check if MongoDB is running
# Windows
sc query MongoDB

# macOS/Linux
sudo systemctl status mongod
```

**Port already in use:**
```bash
# Windows
netstat -ano | findstr :3001
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3001 | xargs kill -9
```

**Cannot connect from frontend:**
- Check CORS configuration
- Verify MongoDB is running
- Ensure server is listening on correct port
- Check firewall settings

**Module not found:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📝 Scripts

- `npm start` - Start server with Nodemon (auto-reload)
- `npm test` - Run tests (not configured yet)

## 🔄 API Error Handling

All endpoints currently return errors as JSON. Example error response:
```json
{
  "error": "Task not found",
  "message": "No task exists with the given ID"
}
```

## 📚 Future Enhancements

- [ ] Add user authentication (JWT)
- [ ] Add input validation
- [ ] Add rate limiting
- [ ] Add request logging
- [ ] Add unit tests
- [ ] Add API documentation (Swagger)
- [ ] Add pagination for large task lists
- [ ] Add task categories/tags

---

Built with ❤️ using Express + MongoDB