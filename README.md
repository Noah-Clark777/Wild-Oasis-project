Wild Oasis – Admin Dashboard

A full-featured hotel management dashboard that allows staff to manage cabins, bookings, and guests through a clean, data-driven interface.
This project focuses on building a scalable admin panel with complex state management, real-time data updates, and a professional UI architecture.

 Features:
* Manage cabins (create, update, delete)
* View and manage bookings
* Track guest information
* Dashboard overview with key metrics
* Real-time UI updates based on data changes
* Authentication & protected routes 
* Responsive admin interface

  
Tech Stack:
* Frontend: React
* State Management: Context API / React state
* Routing: React Router
* Styling: CSS Modules / Styled Components
* Backend / Data: Supabase
* Tooling: Vite


Architecture & Key Concepts:
* Component-Driven Design
Built reusable UI components to maintain consistency across the dashboard.

* Centralized State Management
Managed shared state across multiple views without prop drilling.

* Separation of Concerns
Data fetching, business logic, and UI rendering are decoupled for scalability.

* Custom Hooks
Encapsulated logic (e.g., fetching data, handling forms) into reusable hooks.

* Protected Routing
Ensured only authenticated users can access dashboard functionality.

* Async Data Handling
Implemented loading states, error handling, and optimistic UI updates.
