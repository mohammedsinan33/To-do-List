# ✨ To-Do List - Frontend

Beautiful, modern React frontend for the To-Do List application with stunning animations and gradient design.

## 🎨 Features

- **Stunning UI** with gradient backgrounds and glass-morphism effects
- **Smooth animations** - fade-ins, slide-ins, scale effects, and bounces
- **Real-time updates** without page reloads
- **Responsive design** that works on all devices
- **Interactive elements** with hover animations and transitions
- **Keyboard shortcuts** (Enter key to add tasks)
- **Custom styled scrollbar** matching the theme

## 🛠️ Tech Stack

- **React 19.2.0** - UI Library with latest features
- **Vite 7.2.4** - Lightning-fast build tool and dev server
- **Axios** - Promise-based HTTP client for API calls
- **React Icons** - Beautiful Bootstrap icons
- **CSS3** - Custom animations, gradients, and modern styling
- **Google Fonts** - Poppins font family

## 📁 Project Structure

```
src/
├── Pages/
│   ├── Home.jsx          # Main component with task list
│   └── Create.jsx        # Task input component
├── App.jsx               # Root component
├── App.css               # Component styles with animations
├── index.css             # Global styles and keyframes
└── main.jsx              # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Backend server running on `http://localhost:3001`

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will run on **http://localhost:5173**

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## 🎯 Components

### Home Component
- Fetches and displays all tasks from the backend
- Handles task completion toggle
- Manages task deletion
- Shows empty state when no tasks exist
- Implements staggered animations for task items

### Create Component
- Input field for new tasks
- Add button with shimmer effect
- Enter key support for quick task addition
- Auto-clears input after submission
- Prevents empty task creation

## 🌈 Design System

### Colors & Gradients
- Primary gradient: Purple to pink (`#667eea` → `#764ba2`)
- Secondary gradient: Pink to red (`#f093fb` → `#f5576c`)
- Success gradient: Blue to cyan (`#4facfe` → `#00f2fe`)

### Animations
- `fadeIn` - Component entrance animation
- `slideInLeft` - Title animation
- `slideInRight` - Form animation
- `scaleIn` - Task item appearance
- `bounce` - Sparkle emoji animation
- `pulse` - Empty state animation
- `glow` - Focus effect animation

### Shadows
- Small: `0 2px 10px rgba(0, 0, 0, 0.1)`
- Medium: `0 8px 30px rgba(0, 0, 0, 0.12)`
- Large: `0 15px 50px rgba(0, 0, 0, 0.2)`
- Glow: `0 0 40px rgba(102, 126, 234, 0.4)`

## 🔧 Configuration

### API Configuration
Update the API base URL in components if your backend runs on a different port:

```javascript
// In Home.jsx and Create.jsx
axios.get('http://localhost:3001/get')
```

### Styling
- Modify `index.css` for global styles and animations
- Modify `App.css` for component-specific styles
- CSS variables defined in `:root` for easy theme customization

## 📦 Dependencies

```json
{
  "axios": "^1.13.2",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-icons": "^5.5.0"
}
```

## 🎨 Customization

### Change Colors
Edit CSS variables in `index.css`:
```css
:root {
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  /* ... more variables */
}
```

### Modify Animations
All animations are defined in `index.css` using `@keyframes`. Adjust timing and effects as needed.

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build the project
npm run build

# Deploy the dist/ folder
netlify deploy --prod --dir=dist
```

### Other Options
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 🐛 Troubleshooting

**Port 5173 already in use:**
```bash
# Kill the process
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

**Cannot connect to backend:**
- Ensure backend server is running on port 3001
- Check CORS configuration in backend
- Verify API URLs in components

**Build errors:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📝 Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

---

Built with ❤️ using React + Vite
