# NLW Agents

A backend API developed during Rocketseat's NLW (Next Level Week) event, focused on agent-based applications with real-time capabilities.

## Tech Stack

### Core Technologies
- **Node.js** - Runtime environment with native TypeScript support
- **Fastify** - High-performance web framework
- **TypeScript** - Type-safe JavaScript development
- **PostgreSQL** - Primary database with pgvector extension

### Key Libraries
- **Drizzle ORM** - Type-safe database operations and migrations
- **Zod** - Schema validation and type inference
- **fastify-type-provider-zod** - Integration between Fastify and Zod for automatic validation
- **@fastify/cors** - Cross-origin resource sharing support
- **postgres** - PostgreSQL client

### Development Tools
- **Biome** - Fast formatter and linter
- **Drizzle Kit** - Database migrations and studio
- **Docker Compose** - Container orchestration for PostgreSQL

## Design Patterns

- **MVC Architecture** - Organized route handlers and business logic separation
- **Schema-First API** - Zod schemas for request/response validation
- **Type-Safe Database** - Drizzle ORM with TypeScript integration
- **Environment Configuration** - Centralized env management with validation

## Project Setup

### Prerequisites
- Node.js 18+ (with native TypeScript support)
- Docker and Docker Compose

### Installation

1. **Clone and install dependencies**
   ```bash
   cd server
   npm install
   ```

2. **Start PostgreSQL database**
   ```bash
   docker-compose up -d
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your database configuration
   ```

4. **Run database migrations**
   ```bash
   npm run db:migration:migrate
   ```

5. **Seed the database (optional)**
   ```bash
   npm run db:seed
   ```

### Development

```bash
# Start development server with hot reload
npm run dev

# Access the API at http://localhost:3333
```

### Database Management

```bash
# Generate new migration
npm run db:migration:generate

# Apply migrations
npm run db:migration:migrate

# Open Drizzle Studio (database GUI)
npm run drizzle:studio
```

### Production

```bash
# Start production server
npm start
```

## API Endpoints

- `GET /health` - Health check endpoint
- `GET /rooms` - List available rooms

## Database

The project uses PostgreSQL with the pgvector extension for vector operations, ideal for AI/ML applications. Database schema and migrations are managed through Drizzle ORM.

---

*Developed during Rocketseat's NLW event*
