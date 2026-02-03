# Backend Setup Guide - Express + MongoDB

## Quick Start

### Step 1: Navigate to Backend Folder

```bash
cd backend
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Create Environment File

Create a `.env` file in the `backend` folder:

```env
PORT=3001
FRONTEND_URL=http://localhost:5173
MONGODB_URI=mongodb://localhost:27017/kcare-clinic
```

### Step 4: Start Backend Server

```bash
npm run dev
```

The server will start on `http://localhost:3001`

## MongoDB Setup (Optional)

### Option 1: Local MongoDB

1. Download MongoDB: https://www.mongodb.com/try/download/community
2. Install and start MongoDB service
3. Use connection string: `mongodb://localhost:27017/kcare-clinic`

### Option 2: MongoDB Atlas (Cloud - Free)

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for free account
3. Create a free cluster
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Update `MONGODB_URI` in `.env`

**Note:** MongoDB is optional! The server works without it. Chat history won't be saved, but AI API will work perfectly.

## Frontend Configuration

Update your frontend `.env` file (in project root):

```env
VITE_BACKEND_URL=http://localhost:3001
```

Or the frontend will use `http://localhost:3001` by default.

## Testing

1. Start backend: `cd backend && npm run dev`
2. Start frontend: `npm run dev` (in project root)
3. Open AI Assistant
4. Check console - should see: `🔄 Attempting Hugging Face API via backend proxy...`

## Project Structure

```
backend/
  ├── server.js          # Main server file
  ├── package.json       # Dependencies
  ├── .env              # Environment variables (create this)
  ├── env.example       # Example env file
  ├── .gitignore        # Git ignore file
  └── README.md         # Backend documentation
```

## API Endpoints

- `GET /health` - Health check
- `POST /api/huggingface` - Hugging Face API proxy
- `POST /api/chat/save` - Save chat message (requires MongoDB)
- `GET /api/chat/history/:sessionId` - Get chat history (requires MongoDB)

## Troubleshooting

### Port Already in Use?
Change `PORT` in `.env` file

### MongoDB Connection Failed?
- Server works without MongoDB
- Only chat history feature requires MongoDB
- AI API proxy works without MongoDB

### CORS Errors?
Update `FRONTEND_URL` in `.env` to match your frontend URL

## Production Deployment

See `backend/README.md` for deployment instructions.
