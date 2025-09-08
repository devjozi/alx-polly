# ALX Poll - Modern Polling Platform

A modern polling platform built with Next.js 15, TypeScript, and Shadcn UI components. This application allows users to create, share, and vote on polls with a beautiful and responsive interface.

## Features

- 🔐 **User Authentication** - Secure login and registration system
- 📊 **Poll Management** - Create, view, and manage polls
- 🗳️ **Voting System** - Real-time voting with visual results
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🎨 **Modern UI** - Built with Shadcn UI components
- ⚡ **Fast Performance** - Optimized with Next.js 15

## Project Structure

```
alx-prolly/
├── app/                          # Next.js app directory
│   ├── auth/                     # Authentication pages
│   │   └── login/               # Login page
│   ├── polls/                   # Polls pages
│   │   └── page.tsx            # Polls listing page
│   ├── globals.css              # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── components/                   # React components
│   ├── auth/                    # Authentication components
│   │   ├── login-form.tsx      # Login form component
│   │   └── register-form.tsx   # Registration form component
│   ├── polls/                   # Poll-related components
│   │   ├── create-poll-form.tsx # Create poll form
│   │   ├── poll-card.tsx       # Individual poll card
│   │   └── polls-list.tsx      # Polls listing component
│   ├── ui/                      # Shadcn UI components
│   │   ├── badge.tsx           # Badge component
│   │   ├── button.tsx          # Button component
│   │   ├── card.tsx            # Card component
│   │   ├── input.tsx           # Input component
│   │   └── label.tsx           # Label component
│   └── navigation.tsx           # Navigation component
├── hooks/                       # Custom React hooks
│   ├── use-auth.ts             # Authentication hook
│   └── use-polls.ts            # Polls management hook
├── lib/                         # Utility functions
│   └── utils.ts                # Common utilities
├── types/                       # TypeScript type definitions
│   └── index.ts                # Main type definitions
└── public/                      # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd alx-prolly
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
Create a `.env.local` with:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Database & Auth**: Supabase
- **QR Codes**: qrcode

## Key Components

### Authentication
- `LoginForm` - User login interface
- `RegisterForm` - User registration interface
- `useAuth` - Authentication state management

### Polls
- `PollsList` - Display all polls
- `PollCard` - Individual poll display
- `CreatePollForm` - Poll creation interface
- `usePolls` - Polls state management

### UI Components
- Reusable Shadcn UI components
- Consistent design system
- Responsive layouts

## Development Notes

- All components are built with TypeScript for type safety
- Custom hooks manage state and API interactions
- Mock data is used for development (replace with real API calls)
- Authentication is currently mocked (implement real auth system)
- Poll voting is simulated (implement real voting system)

## Next Steps

1. Implement real authentication system (NextAuth.js, Auth0, etc.)
2. Set up database (PostgreSQL, MongoDB, etc.)
3. Add real-time updates (WebSockets, Server-Sent Events)
4. Implement user profiles and poll management
5. Add poll categories and search functionality
6. Deploy to production (Vercel, Netlify, etc.)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.