# 🚀 Deployment Guide

Complete step-by-step guide to deploy your To-Do List application to production.

## 📋 Overview

- **Database**: MongoDB Atlas (Cloud)
- **Backend**: Render.com (Free tier)
- **Frontend**: Vercel (Free tier)

## 🗄️ Step 1: Setup MongoDB Atlas (Database)

### 1.1 Create Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Sign up for a free account
3. Verify your email

### 1.2 Create Cluster
1. Click **"Create"** → **"Shared"** (Free tier)
2. Choose **AWS** as cloud provider
3. Select nearest region
4. Cluster name: `TodoCluster` (or any name)
5. Click **"Create Cluster"** (takes 3-5 minutes)

### 1.3 Create Database User
1. Go to **Database Access** (left sidebar)
2. Click **"Add New Database User"**
3. Authentication Method: **Password**
4. Username: `todoadmin` (save this)
5. Password: Click **"Autogenerate Secure Password"** (save this!)
6. Database User Privileges: **Read and write to any database**
7. Click **"Add User"**

### 1.4 Whitelist IP Address
1. Go to **Network Access** (left sidebar)
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (0.0.0.0/0)
4. Click **"Confirm"**

### 1.5 Get Connection String
1. Go to **Database** → Click **"Connect"**
2. Choose **"Connect your application"**
3. Driver: **Node.js**, Version: **5.5 or later**
4. Copy the connection string:
   ```
   mongodb+srv://todoadmin:<password>@todocluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<password>` with your actual password
6. Add database name at the end: `/todolist`
   ```
   mongodb+srv://todoadmin:YourPassword@todocluster.xxxxx.mongodb.net/todolist?retryWrites=true&w=majority
   ```
7. **Save this connection string!** You'll need it for backend deployment

---

## 🔧 Step 2: Deploy Backend to Render

### 2.1 Prepare Backend
Your backend is already configured! The code now uses environment variables.

### 2.2 Push to GitHub
```bash
cd C:\Users\moham\OneDrive\Desktop\To-do-List

# Add changes
git add .
git commit -m "Prepare backend for deployment with environment variables"
git push
```

### 2.3 Create Render Account
1. Go to [Render.com](https://render.com)
2. Sign up with GitHub (easier integration)
3. Authorize Render to access your repositories

### 2.4 Create Web Service
1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository
3. Select `To-do-List` repository
4. Configure:
   - **Name**: `todolist-api` (or any name)
   - **Region**: Choose nearest region
   - **Root Directory**: `back-end`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node index.js`
   - **Instance Type**: **Free**

### 2.5 Add Environment Variables
In the **Environment Variables** section, add:

| Key | Value |
|-----|-------|
| `MONGODB_URI` | Your MongoDB Atlas connection string from Step 1.5 |
| `NODE_ENV` | `production` |
| `PORT` | `3001` |

### 2.6 Deploy
1. Click **"Create Web Service"**
2. Wait 3-5 minutes for deployment
3. Once deployed, you'll see a URL like: `https://todolist-api.onrender.com`
4. **Save this URL!** You'll need it for frontend

### 2.7 Test Backend
Visit in browser:
```
https://todolist-api.onrender.com/get
```
Should return: `[]` (empty array)

---

## 🎨 Step 3: Deploy Frontend to Vercel

### 3.1 Create .env file for local testing
```bash
cd front-end

# Create .env file (not .env.example)
echo VITE_API_URL=https://todolist-api.onrender.com > .env
```

Replace `https://todolist-api.onrender.com` with your actual Render URL from Step 2.6

### 3.2 Test Locally
```bash
npm run dev
```
Open `http://localhost:5173` and test adding/deleting tasks. It should now connect to your production backend!

### 3.3 Push to GitHub
```bash
cd ..
git add .
git commit -m "Configure frontend for production API"
git push
```

### 3.4 Create Vercel Account
1. Go to [Vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Authorize Vercel

### 3.5 Deploy Frontend
1. Click **"Add New..."** → **"Project"**
2. Import your `To-do-List` repository
3. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `front-end`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### 3.6 Add Environment Variable
In **Environment Variables** section:

| Key | Value |
|-----|-------|
| `VITE_API_URL` | Your Render backend URL (e.g., `https://todolist-api.onrender.com`) |

### 3.7 Deploy
1. Click **"Deploy"**
2. Wait 2-3 minutes
3. You'll get a URL like: `https://your-app.vercel.app`

---

## 🔄 Step 4: Update Backend CORS

Your frontend URL is now different, so update backend CORS:

### 4.1 In Render Dashboard
1. Go to your backend service on Render
2. Go to **Environment** tab
3. Add new environment variable:

| Key | Value |
|-----|-------|
| `FRONTEND_URL` | Your Vercel URL (e.g., `https://your-app.vercel.app`) |

4. Save changes
5. Render will automatically redeploy

---

## ✅ Step 5: Test Your Live App

1. Open your Vercel URL: `https://your-app.vercel.app`
2. Try adding tasks
3. Try marking tasks as complete
4. Try deleting tasks
5. Refresh page - tasks should persist!

---

## 🎉 You're Live!

Your app is now deployed with:
- ✅ Frontend: Vercel
- ✅ Backend: Render
- ✅ Database: MongoDB Atlas

Share your Vercel URL with anyone to use your app!

---

## 🔧 Making Updates

### Update Frontend
```bash
cd front-end
# Make your changes
git add .
git commit -m "Update frontend"
git push
```
Vercel automatically redeploys!

### Update Backend
```bash
cd back-end
# Make your changes
git add .
git commit -m "Update backend"
git push
```
Render automatically redeploys!

---

## 🐛 Troubleshooting

### Frontend can't connect to backend
1. Check CORS in backend - ensure `FRONTEND_URL` is set correctly
2. Verify `VITE_API_URL` in Vercel environment variables
3. Check Render logs for errors

### Backend crashes
1. Check Render logs
2. Verify MongoDB connection string is correct
3. Ensure all environment variables are set

### Database connection fails
1. Check MongoDB Atlas - IP whitelist includes 0.0.0.0/0
2. Verify username/password in connection string
3. Check if cluster is running

### Tasks don't persist
1. Check browser console for errors
2. Verify backend URL is correct
3. Check Network tab in browser DevTools

---

## 💡 Tips

- **Free tier limitations**: 
  - Render: Spins down after 15 minutes of inactivity (first request may take 30s)
  - MongoDB Atlas: 512MB storage limit
  - Vercel: Unlimited bandwidth for personal projects

- **Custom Domain**: Both Vercel and Render support custom domains for free!

- **Monitoring**: Check Render logs regularly for errors

---

## 📚 Useful Links

- [Render Documentation](https://render.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)

---

Need help? Check the logs in Render and Vercel dashboards!