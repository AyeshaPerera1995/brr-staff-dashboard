# BRR Staff Dashboard

A fully responsive and simple internal dashboard web application built using **Next.js**, **TypeScript**, **React**, and **Tailwind CSS**. This app simulates an internal IT staff portal that allows users to:

- View staff directory
- Submit IT support tickets
- Track ticket status
- Manage to-do tasks
- Experience clean UX with mobile-first design

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/brr-dashboard.git
cd brr-dashboard
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4.Visit: http://localhost:3000

> Requires Node.js ≥ 18 and npm ≥ 9

## ✨ Features Completed

### Staff Directory
- Displays a list of staff from mock data
- Shows role, status, last login, email, drive usage, and device
- Icons for device type (iMac vs Tablet)
- Status color indicators (active/inactive)
- Responsive card layout with hover

### IT Request Form
- Form with dropdown for issue type, text description, and optional file upload
- Shows loading state and success message
- Clears inputs after submission
- Responsive and styled interfaces

### Tickets Page
- Displays table of simulated tickets
- Columns: issue type, status, created date
- Color-coded badge indicators for status (Open, In Progress, Resolved)
- Loading and empty states included
- Styled with hover, shadows, and responsive table layout

### To-Do List
- Add, toggle, delete, and edit tasks inline
- Keyboard support (Enter to submit)
- Icons for complete (✓), edit, delete
- Fully responsive, styled list with light/dark mode
- Clear empty state and transitions

### Global Layout & Navigation
- Shared Navbar across pages
- Hamburger menu on mobile
- Active link highlighting
- Logged-in user context displayed at top right (hardcoded user)
- Gradient dashboard banner on home page

### 🌐 Technologies Used
- Next.js       App Router, Server/Client components
- React	        Hooks, functional components
- TypeScript	Strong typing throughout
- Tailwind CSS	CSS styling
- React Icons	Icons across cards and status indicators
- Context API	User context for global shared state
- Jest + RTL    Basic unit testing

### 🧠 Assumptions Made
- User authentication is mocked with a hardcoded user in Context (Ayesha, role: Admin)
- All data (staff, tickets, tasks) is static — no backend or real API used
- File upload is simulated and not stored/sent
- No validation libraries were used
- Project assumes modern browsers with JavaScript enabled

### 🧩 What I’d Add With More Time
If more time was available, I would enhance the app with:

- Full authentication with role-based access (Admin/User)
- Backend API with database
- Persistent storage (e.g., localStorage, MongoDB)
- Dashboard analytics (charts for tickets/tasks)
- Toast notifications
- Due dates or calendar integration in the to-do list
- Full unit test coverage with mocks
- User avatars and profile settings

## Author
- Name: Ayesha Perera
- Email: ayeshaperera9519@gmail.com
- GitHub: [GitHub Link](https://github.com/AyeshaPerera1995)
