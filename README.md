# MVP Application

Full-stack MVP application built with Angular, Node.js, Express, and PostgreSQL.

## Project Structure

- `/frontend` - Angular application
- `/backend` - Node.js/Express API

## Prerequisites

- Node.js 18.x or higher
- PostgreSQL 14.x or higher
- Angular CLI 16.x or higher

## Quick Start

### Backend Setup
```bash
cd server
npm install
npm run dev
```

### Frontend Setup
```bash
cd client
npm install
ng serve
```

## Environment Variables

### Backend
Create a `.env` file in the backend directory:

```
NODE_ENV=development
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_NAME=mvp_app
JWT_SECRET=your_jwt_secret
```

### Frontend
Environment files are located in `frontend/src/environments/`

## API Documentation

API documentation can be found in the `/backend/docs` directory.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
# dublin-app
# dublin-app
