# Check Uptime

A modern uptime monitoring application built with a Turborepo monorepo architecture. This project consists of a ping
server backend and a client frontend for monitoring service availability and health checks.

## 🏗️ Architecture

This project uses **Turborepo** to manage a monorepo with the following applications:

- **ping-server**: Express.js backend API for health checks and ping endpoints
- **ping-client**: Next.js frontend application for monitoring dashboard
- **docs**: Documentation and project structure information

## 🚀 Features

### Backend (ping-server)

- **Health Check Endpoint** (`/health`) - Returns server status and uptime
- **Ping Endpoint** (`/ping`) - Simple ping/pong response with timestamp
- **User Authentication** - Sign-up and sign-in endpoints
- Built with Express.js and TypeScript

### Frontend (ping-client)

- **Next.js Application** - Modern React-based frontend with App Router
- **TailwindCSS Styling** - Utility-first CSS framework for styling
- **TypeScript Support** - Full type safety throughout the application
- **Modern React 19** - Latest React features and improvements

## 📦 Tech Stack

- **Runtime**: Bun (v1.2.11+)
- **Monorepo**: Turborepo
- **Backend**: Express.js + TypeScript
- **Frontend**: Next.js + React 19 + TypeScript
- **Styling**: TailwindCSS v4
- **Linting**: ESLint
- **Package Manager**: Bun workspaces

## 🛠️ Development Setup

### Prerequisites

- Node.js >= 18
- Bun >= 1.2.11

### Installation

```bash
# Clone the repository
git clone https://github.com/iamsg97/check-uptime
cd check-uptime

# Install dependencies
bun install
```

### Development Commands

```bash
# Start all applications in development mode
bun dev

# Start only the server
bun dev:server

# Start only the client
bun dev:ui

# Build all applications
bun build

# Run linting
bun lint

# Format code
bun format

# Type checking
bun check-types
```

## 🏃‍♂️ Running the Application

### Development Mode

```bash
# Start both server and client
bun dev
```

The applications will be available at:

- **Server**: `http://localhost:3001`
- **Client**: `http://localhost:3000` (Next.js default port)

### Production Build

```bash
# Build all applications
bun build

# Start the server in production
cd apps/ping-server
bun start
```

## 📡 API Endpoints

### Health Check

```
GET /health
Response: { "status": "ok", "uptime": <seconds> }
```

### Ping

```
GET /ping
Response: { "message": "pong", "timestamp": "<ISO-string>" }
```

### Authentication

```
POST /sign-up
POST /sign-in
Body: { "user": "..." }
```

## 🧪 Testing

### Server Tests

```bash
cd apps/ping-server
bun test
```

### Client Development

```bash
cd apps/ping-client
bun dev        # Start development server
bun build      # Build for production
bun lint       # Run ESLint
```

## 📚 Development Tools

The project includes modern development tooling:

- **ESLint**: Code linting and formatting
- **TypeScript**: Type safety across all applications
- **TailwindCSS**: Utility-first CSS for the frontend
- **Next.js**: React framework with App Router

## 📁 Project Structure

```text
check-uptime/
├── apps/
│   ├── ping-server/          # Express.js backend
│   ├── ping-client/          # Next.js frontend
│   └── docs/                 # Documentation
├── packages/
│   ├── eslint-config/        # Shared ESLint configurations
│   ├── typescript-config/    # Shared TypeScript configurations
│   └── ui/                   # Shared UI components
├── turbo.json               # Turborepo configuration
└── package.json             # Root package configuration
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔧 Environment Variables

### Server (.env)

```bash
PORT=3001
```

### Client (.env)

```bash
# Add any client-specific environment variables here
```

---

Built with ❤️ using Turborepo, Next.js, and Express.js
