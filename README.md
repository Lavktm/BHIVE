<<<<<<< HEAD
# Nubra

An Options Trading Platform

## Technologies Used

This project is built with a modern tech stack to ensure scalability, performance, and developer efficiency:

- **React 18**: A JavaScript library for building user interfaces, ensuring a responsive and interactive web application.
- **Next.js 14**: A React framework that provides features such as server-side rendering and generating static websites for React-based web applications.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript, enhancing code quality and maintainability.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs without having to leave your HTML.
- **Jest**: A delightful JavaScript Testing Framework with a focus on simplicity, configured for unit testing to ensure code reliability.
- **ESLint**: A static code analysis tool for identifying problematic patterns in JavaScript code, ensuring code quality and consistency.
- **Prettier**: An opinionated code formatter that enforces a consistent style by parsing your code and reprinting it with its own rules.
- **Husky & Lint-Staged**: Tools to run scripts on your staged files before they are committed, ensuring that only quality code gets checked in.
- **Conventional Commit Lint**: Enforces a conventional commit format, promoting a more manageable and readable version history.
- **Site Map**: Automatically generates a `sitemap.xml` file to improve SEO and site navigation efficiency.

## Getting Started

### Prerequisites

List what software and tools need to be installed before running this project, and how to install them.

### Installation

Step-by-step guide to get a development environment running:

1. Clone the repository
   ```sh
   git clone <repo>
   ```
2. Install NPM packages
   ```bash
   pnpm install
   ```
3. Start the development server
   ```sh
   pnpm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/app/page.tsx`.

## Code Structure

- root
  - public/
  - src/
    - **mocks**
    - **tests**
    - app/ - Centralizes layout and navigation development, simplifying app-wide concerns.
      - api/
      - home/page.tsx
      - backtester/page.tsx
      - error.tsx
      - layout.tsx
      - not-found.tsx
      - options-chain/page.tsx
      - page.tsx
      - screener/page.tsx
      - strategies/page.tsx
    - assets: All images and static files will be stored here.
    - constants: All constants related to the project will be stored here.
    - components: UI elements specific to the module
    - containers: Higher ordered UI elements composed of components
    - hooks: Custom React hooks used in this project
    - services: API calls and external interactions
    - transformers: Used in services to convert API response to Nubra states
    - states: Redux/Context API states and reducers
    - reducers: Reducers in Redux are functions that take the current state and an action as arguments, and return a new state.
    - **tests**: Unit and integration tests for the module
    - **mocks**: Mocks required for tests
    - styles: Tailwind CSS and module-specific styles
    - utils: Common utility functions used across the projects.
  - .env.example
  - .eslintrc.js
  - .gitignore
  - .nvmrc
  - .prettierignore
  - .prettierrc.js
  - commitlint.config.js
  - components.json
  - jest.config.js
  - jest.setup.js
  - next-env.d.ts
  - next-sitemap.config.js
  - next.config.js
  - package.json
  - pnpm-lock.yaml
  - postcss.config.js
  - README.md
  - tailwind.config.ts
  - tsconfig.json
  - vercel.json
=======
# BHIVE
>>>>>>> d2eb62d70a2de2ba554123b1629bcee8b9c02dcf
