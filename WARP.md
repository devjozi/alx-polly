# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

ALX Poll is a modern polling platform built with Next.js 15, TypeScript, and Supabase. The application uses a client-side architecture with mock data for development, designed to be upgraded to a full-stack solution with Supabase authentication and real-time features.

## Architecture

### Core Structure
- **Next.js 15 App Router**: Uses the new app directory structure with server and client components
- **State Management**: React hooks pattern with custom hooks for auth and polls management
- **Authentication**: Supabase-based auth system with context provider pattern
- **UI Components**: Shadcn UI component library with Tailwind CSS styling
- **TypeScript**: Full type safety with custom type definitions

### Key Patterns

**Authentication Flow**:
- `AuthContext` provides global auth state using Supabase session management
- `withAuth` HOC protects authenticated routes
- `useAuth` hook provides convenient access to auth state

**Poll Management**:
- `usePolls` hook handles all poll-related operations (fetch, create, vote)
- Currently uses mock data but structured for easy API integration
- Optimistic updates for voting functionality

**Component Architecture**:
- Clear separation between UI components (`components/ui/`) and feature components
- Feature components organized by domain (`auth/`, `polls/`)
- Consistent prop interfaces and event handling patterns

## Development Commands

### Essential Commands
```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment Setup
Required environment variables in `.env.local`:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Code Quality & Review Guidelines

Based on the existing `coderabbit.yaml` configuration, pay attention to:

### Next.js Components (`app/**/*.tsx`)
- Server vs Client Component usage - ensure proper `"use client"` directives
- React hooks optimization (`useCallback`, `useMemo`, `useEffect` cleanup)
- Component composition and performance
- Accessibility and ARIA attributes
- Memory management in useEffect hooks

### Authentication (`app/(auth)/**/*.tsx`, `contexts/AuthContext.tsx`)
- Secure session management with Supabase
- Proper error handling and loading states
- JWT token handling security
- Rate limiting considerations for auth endpoints

### Database & API (`lib/supabaseClient.ts`)
- Environment variable validation (already implemented)
- Proper error handling for Supabase operations
- Type safety with database operations
- Connection management best practices

### Polls System (`hooks/use-polls.ts`, `components/polls/`)
- Mock data structure matches real API expectations
- Optimistic updates for better UX
- Proper error handling and rollback patterns
- Type safety for poll operations

## Development Notes

### Current State
- **Mock Data**: Poll functionality uses mock data in `usePolls` hook
- **Authentication**: Supabase integration is set up but may need backend configuration
- **Real-time Features**: Planned but not yet implemented

### Common Development Tasks

**Adding New Poll Features**:
1. Update types in `types/index.ts`
2. Modify `usePolls` hook for new operations
3. Create/update components in `components/polls/`
4. Add new routes in `app/` directory if needed

**Implementing Real API**:
1. Replace mock data in `usePolls` with Supabase queries
2. Set up Supabase database schema
3. Implement server actions for data mutations
4. Add real-time subscriptions for live updates

**UI Component Development**:
- Use existing Shadcn UI components from `components/ui/`
- Follow Tailwind CSS patterns established in existing components
- Ensure responsive design for mobile compatibility

### File Organization
```
app/                    # Next.js pages and layouts
├── (auth)/            # Authentication routes (grouped route)
├── dashboard/         # User dashboard
├── p/[id]/           # Public poll sharing route
├── polls/            # Main polls interface
components/
├── auth/             # Authentication-specific components  
├── polls/            # Poll-related components
├── ui/               # Reusable UI components (Shadcn)
contexts/             # React context providers
hooks/                # Custom React hooks
lib/                  # Utility functions and clients
types/                # TypeScript type definitions
```

### Important Implementation Details

**Supabase Client**: The client in `lib/supabaseClient.ts` includes comprehensive environment variable validation with helpful error messages for missing configuration.

**Type Safety**: All components use proper TypeScript interfaces defined in `types/index.ts`. The auth system properly extends Supabase user types.

**Route Protection**: The `withAuth` HOC pattern is used consistently to protect authenticated routes like `/polls` and `/dashboard`.

**Component Composition**: Poll components follow a clear hierarchy: `PollsList` → `PollCard` → individual poll options, with consistent prop interfaces for actions like voting and viewing.