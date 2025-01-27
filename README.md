# Hotel Booking Management App

A comprehensive web application designed for hotel employees to manage cabin bookings, guest information, and key hotel operations. The app includes user authentication, cabin management, booking tracking, real-time analytics, and more, all tailored for a smooth and efficient hotel management experience.

## Features

- **User Authentication**:  
  - Sign up within the app (for verified hotel employees only).  
  - Log in, update personal details (name, password, avatar).  

- **Cabin Management**:  
  - View, add, edit, and delete cabins.  
  - Cabin table displays: Photo, Name, Capacity, Price, and Discount.  
  - Upload photos when adding/editing cabins.  

- **Booking Management**:  
  - View all bookings with details such as Arrival/Departure dates, Status, Paid Amount, Cabin and Guest Data.  
  - Filter bookings by status (unconfirmed, checked in, checked out).  
  - Update booking data: number of guests, number of nights, guest observations, breakfast bookings, and breakfast prices.  
  - Check-in/Check-out functionality (manual, no editing required).  
  - Payment confirmation upon guest check-in.  

- **Dashboard & Analytics**:  
  - Display statistics for the last 7, 30, or 90 days:  
    - Guest check-ins/outs for the current day.  
    - Recent bookings, sales, check-ins, and occupancy rate.  
    - Charts for daily hotel sales (total sales vs. extra sales like breakfast).  
    - Statistics on stay durations.  

- **Settings**:  
  - Define app-wide parameters (breakfast price, min/max nights per booking, max guests per booking).  

- **User Interface**:  
  - Dark mode support.  
  - Fully responsive UI across devices.

## Tech Stack

- **React**: Frontend framework for building the app.
- **Styled Components**: CSS-in-JS for styling.
- **React Router**: Handling routing and navigation.
- **React Query**: Data fetching and remote state management.
- **Context API**: UI state management (e.g., dark mode, user data).
- **React Hook Form**: Managing and validating forms.
- **Supabase**: Backend (database, authentication, and storage).
- **React Icons**: Providing a rich set of icons for UI elements.
- **React Hot Toast**: Notifications and toasts.
- **Recharts**: Charting library for displaying analytics and sales data.
- **date-fns**: Date handling library for managing dates and times.

## Installation

1. **Clone the repository**:

```bash

