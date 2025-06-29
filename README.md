# Check Uptime

A modern uptime monitoring application built with a Turborepo monorepo architecture. This project consists of a ping
server backend and a client frontend for monitoring service availability and health checks.

## 🏗️ Architecture

This project uses **Turborepo** to manage a monorepo with the following applications:

- **ping-server**: Express.js backend API for health checks and ping endpoints
- **ping-client**: SvelteKit frontend application for monitoring dashboard
- **docs**: Documentation and project structure information

## 🚀 Features

### Backend (ping-server)

- **Health Check Endpoint** (`/health`) - Returns server status and uptime
- **Ping Endpoint** (`/ping`) - Simple ping/pong response with timestamp
- **User Authentication** - Sign-up and sign-in endpoints
- Built with Express.js and TypeScript

### Frontend (ping-client)

- **SvelteKit Application** - Modern reactive frontend
- **Storybook Integration** - Component development and testing
- **Playwright E2E Testing** - End-to-end test coverage
- **Vitest Unit Testing** - Component and unit test coverage

## 📦 Tech Stack

- **Runtime**: Bun (v1.2.11+)
- **Monorepo**: Turborepo
- **Backend**: Express.js + TypeScript
- **Frontend**: SvelteKit + TypeScript
- **Testing**: Playwright (E2E), Vitest (Unit)
- **Linting**: ESLint + Prettier
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
- **Client**: `http://localhost:5173` (default Vite port)

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

### Unit Tests

```bash
cd apps/ping-client
bun test:unit
```

### End-to-End Tests

```bash
cd apps/ping-client
bun test:e2e
```

### Run All Tests

```bash
cd apps/ping-client
bun test
```

## 📚 Storybook

The client application includes Storybook for component development:

```bash
cd apps/ping-client
bun storybook
```

Visit `http://localhost:6006` to view the component library.

## 📁 Project Structure

```
check-uptime/
├── apps/
│   ├── ping-server/          # Express.js backend
│   ├── ping-client/          # SvelteKit frontend
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

```
PORT=3001
```

### Client (.env)

```
# Add any client-specific environment variables here
```

---

Built with ❤️ using Turborepo, SvelteKit, and Express.js
