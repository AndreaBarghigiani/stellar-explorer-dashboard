# Stellar Explorer Dashboard - Technical Overview

## 1. Project Overview

The Stellar Explorer Dashboard is an interactive web application that allows users to explore space missions in detail. Each mission has a defined route, and users can view specific information about planets and other celestial bodies encountered along the way. Users can switch between missions and inspect various telemetry data and resources relevant to each journey.

## 2. Technology Choices

### Tech Stack

- **Frontend:** React.js, Tailwind CSS, shadcn/ui (for utility components)
- **Data Storage:** JSON (used as a lightweight database for quick access and simplicity)
- **State Management:** None (since the project is relatively simple, state is managed within components as needed)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Type Safety:** TypeScript

### Why These Choices?

**JSON as a Data Source:** Given time constraints, using a structured JSON file was the simplest and fastest way to store and retrieve mission data. A relational database like PostgreSQL or MySQL would provide better querying capabilities but wasn't necessary for the project scope.

**React & Tailwind CSS:** React enables a modular, component-based structure, while Tailwind CSS simplifies styling and ensures a consistent design.

**No Global State Management:** Since the app is not heavily interactive beyond switching missions and displaying details, a global state management solution like Redux or Zustand was unnecessary.

## 3. Application Architecture

### Folder Structure

```
├── src
│ ├── App.tsx
│ ├── assets
│ ├── components
│ │ ├── dashboard (Main UI for mission exploration)
│ │ ├── hero.tsx (Introductory section)
│ │ ├── magicui (Special UI effects)
│ │ ├── ui (Reusable UI components)
│ ├── data (JSON file containing mission details)
│ ├── hooks (Custom React hooks)
│ ├── lib (Utility functions)
│ ├── types (TypeScript type definitions)
│ ├── main.tsx (Entry point for React app)
│ ├── index.css (Global styles)
│ ├── vite-env.d.ts (Vite configuration)
├── tailwind.config.js (Tailwind CSS configuration)
├── tsconfig.json (TypeScript configuration)
├── vite.config.ts (Vite build configuration)
```

### Component Breakdown

**Dashboard Components:** Displays mission and planetary details, telemetry charts, and resource lists.

**Mission Modal & Mission Switcher:** Allow users to change missions dynamically.

**UI Components (shadcn/ui-based):** Includes `dialog.tsx`, `progress.tsx`, and `select.tsx` for consistent UI patterns.

**Custom Hooks:** A `use-media-query.tsx` hook for handling responsive design.

**Utility Library:** A `utils.ts` file for helper functions. In the future, the utility functions will be split into separate modules based on their specific domains as the project evolves.

## 4. Potential Future Features & Improvements

**Database Integration:** Replace JSON with a proper database (PostgreSQL or MySQL) to handle mission data more efficiently.

**State Management:** If the app expands, Zustand could help manage local state efficiently. However, if we integrate a database and external APIs, implementing tRPC and leveraging React Query would provide better cache optimization and server-state management.

**User-Generated Missions:** Allow users to create and save their own space missions.

**API Data Integration:** Fetch real-time space mission data from NASA or SpaceX APIs to enhance realism.

**Increase SSR:** Consider migrating to Next.js for improved performance through server-side rendering (SSR) and static generation. Since the app has limited interactions, reducing the client-side JavaScript bundle could significantly enhance load times and user experience.
