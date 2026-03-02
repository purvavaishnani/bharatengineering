# Bharat Engineering - VMC & CNC Job Works Website

## Overview

This is a modern web application for Bharat Engineering, a precision manufacturing company based in Rajkot, Gujarat, specializing in VMC (Vertical Machining Center) and CNC job works. The application serves as a business showcase and lead generation platform, featuring company information, services, portfolio gallery, and contact functionality.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API with JSON responses
- **Validation**: Zod schemas for request/response validation

### Development Setup
- **Monorepo Structure**: Shared types and schemas between client and server
- **Development Server**: Vite dev server with HMR
- **Build Process**: Separate client (Vite) and server (esbuild) builds
- **Type Safety**: Full TypeScript coverage across the stack

## Key Components

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Contact inquiries table with proper validation
- **Migrations**: Drizzle-kit for database schema management
- **Connection**: Neon serverless PostgreSQL connection

### API Layer
- **Contact Endpoint**: POST /api/contact for form submissions
- **Admin Endpoint**: GET /api/contact for inquiry management
- **Error Handling**: Comprehensive error handling with proper HTTP status codes
- **Validation**: Zod schema validation for all inputs

### Frontend Components
- **Layout**: Header with navigation, Footer with company info
- **Sections**: Hero, About, Services, Gallery, Contact
- **UI Components**: Comprehensive shadcn/ui component library
- **Forms**: Contact form with validation and error handling
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Data Flow

1. **User Interaction**: Users navigate through the single-page application
2. **Contact Form**: Users fill out contact form with service inquiries
3. **Client Validation**: Form data validated using Zod schemas
4. **API Request**: Data sent to backend via TanStack Query
5. **Server Validation**: Backend validates data using shared Zod schemas
6. **Database Storage**: Contact inquiries stored in PostgreSQL
7. **Response**: Success/error feedback displayed to user

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL driver
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **react-hook-form**: Form state management
- **zod**: Runtime type validation
- **tailwindcss**: Utility-first CSS framework

### Development Dependencies
- **vite**: Build tool and dev server
- **typescript**: Type checking and compilation
- **drizzle-kit**: Database migrations and schema management
- **esbuild**: Server bundling for production

## Deployment Strategy

### Build Process
1. **Client Build**: Vite builds React application to `dist/public`
2. **Server Build**: esbuild bundles Express server to `dist/index.js`
3. **Static Assets**: Client assets served from Express in production

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable
- **Development**: Uses Vite dev server with Express API
- **Production**: Single Express server serves both API and static files

### Database Setup
- **Provider**: Neon Database (serverless PostgreSQL)
- **Schema**: Managed through Drizzle migrations
- **Deployment**: `npm run db:push` applies schema changes

## Changelog

```
Changelog:
- July 06, 2025. Initial setup and complete website development
  - Built professional static website for Bharat Engineering
  - Implemented responsive design with modern UI components
  - Added complete sections: Hero, About, Services, Gallery, Contact
  - Integrated contact form with backend API
  - Added SEO optimization and professional branding
  - User confirmed satisfaction with design and functionality
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```