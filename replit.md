# AI Expert Portfolio Application

## Overview

This is a full-stack web application built as a portfolio showcase for an AI expert and automation specialist. The application features a modern, dark-themed design with smooth animations and interactive components, presenting various AI projects, skills, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Animation**: Framer Motion for smooth page transitions and interactions
- **Design System**: Dark theme with gradient accents, using CSS custom properties

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API structure with `/api` prefix
- **Development**: Hot reload with tsx for server development

### Data Storage Solutions
- **Primary Database**: PostgreSQL via Neon Database serverless platform
- **ORM**: Drizzle ORM with type-safe schema definitions
- **Schema Location**: Shared schema file at `shared/schema.ts`
- **Migrations**: Drizzle Kit for database migrations in `./migrations` directory
- **Fallback Storage**: In-memory storage implementation for development/testing

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scroll navigation and mobile responsiveness
- **Hero Section**: Animated landing area with gradient backgrounds and call-to-action
- **Skills Section**: Interactive skill cards with technology badges and descriptions
- **Projects Section**: Featured project showcase with detailed descriptions and technology stacks
- **Contact Form**: Form with validation, project type selection, and toast notifications
- **Footer**: Social media links and contact information

### UI Component Library
- Comprehensive shadcn/ui components including:
  - Form controls (Input, Textarea, Select, Checkbox, Radio)
  - Navigation (Tabs, Accordion, Dropdown menus)
  - Feedback (Toast, Alert, Dialog)
  - Data display (Card, Badge, Table, Charts)
  - Layout (Sidebar, Resizable panels, Scroll areas)

### Backend Components
- **Storage Interface**: Abstract storage interface with in-memory implementation
- **Route Registration**: Centralized route management system
- **Error Handling**: Global error middleware with proper status codes
- **Request Logging**: Detailed API request/response logging with timing
- **Development Server**: Vite integration for hot module replacement

## Data Flow

### Frontend Data Flow
1. **Component State**: Local state managed with React hooks
2. **Server State**: TanStack Query for API data fetching and caching
3. **Form Handling**: React Hook Form with Zod validation schemas
4. **Route Navigation**: Wouter for client-side routing without full page reloads

### Backend Data Flow
1. **Request Processing**: Express middleware chain for JSON parsing and logging
2. **Route Handling**: Centralized route registration with modular structure
3. **Data Access**: Storage interface pattern for database operations
4. **Response Format**: Consistent JSON responses with error handling

### Database Schema
- **Users Table**: Basic user structure with username and password fields
- **Type Safety**: Drizzle Zod integration for runtime validation
- **Insert/Select Types**: Generated TypeScript types for database operations

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Libraries**: Radix UI primitives, Tailwind CSS, class-variance-authority
- **Animation**: Framer Motion for smooth transitions
- **Data Fetching**: TanStack Query for server state management
- **Date Handling**: date-fns for date manipulation
- **Icons**: Lucide React for consistent iconography

### Backend Dependencies
- **Express Framework**: Core web framework with middleware support
- **Database**: Drizzle ORM with Neon Database driver
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Development Tools**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Build System**: Vite with React plugin and TypeScript support
- **Code Quality**: TypeScript for type safety
- **Database Tools**: Drizzle Kit for schema management and migrations
- **Replit Integration**: Runtime error overlay and cartographer plugins

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Production Optimization**: Tree shaking, minification, and code splitting

### Environment Configuration
- **Development**: Local development with hot reloading via tsx
- **Production**: Node.js server serving built frontend and API
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### File Structure
```
├── client/          # Frontend React application
├── server/          # Backend Express server
├── shared/          # Shared types and schemas
├── dist/            # Production build output
└── migrations/      # Database migration files
```

### Scalability Considerations
- **Database**: Serverless PostgreSQL scales automatically
- **Session Storage**: PostgreSQL-backed sessions for horizontal scaling
- **Static Assets**: Built frontend assets can be served via CDN
- **API Structure**: Modular route system supports easy feature additions

The application is designed as a professional portfolio showcase with the flexibility to extend into a full business application platform, supporting additional features like user authentication, project management, and client interaction systems.