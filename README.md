# TapRide - Unified Passenger Console

An intelligent seat inventory management system designed for The Open University of Sri Lanka (North Central Province). TapRide bridges the gap between monthly season pass commuters and daily spot travelers on a single, unified bus fleet.

## Overview
TapRide dynamically splits a 54-seat bus (standard 2+3 right-hand drive layout) into a 60:40 hybrid pool:
*   **60% (32 Seats):** Reserved for monthly season pass holders.
*   **40% (22 Seats):** Open for daily flexible spot bookings via digital QR passes.

## Features & Dashboards
The platform is fully modeled out with bespoke UI panels for 4 distinct operational roles:
1.  **Passenger Portal (`/passenger`):** Live interactive 2+3 bus floor layout (driver on right, doors on left). Includes dynamic season pass pricing, interactive seat allocator, and an integrated QR code wallet for boarding.
2.  **Conductor Dashboard (`/conductor`):** Real-time passenger manifest, QR scanner module for boarding verification, and automated seat-release mechanics.
3.  **Operator Dashboard (`/operator`):** Fleet management, bus holiday declarations, and live 60:40 ratio split controls.
4.  **Admin Network Center (`/admin`):** Global network revenue overview, live socket audit feeds, and manual triggering of the daily auto-booking engine cron jobs.
5.  **Public Landing & Auth (`/`, `/auth`):** High-conversion landing page demonstrating features, unified login, and registration.

## Technical Stack
*   **Frontend:** React 18, TypeScript, Vite
*   **Styling:** Tailwind CSS, Lucide-React Icons
*   **Routing:** React Router v6
*   **Architecture:** Statically mocked state designed for rapid UI/UX demonstration prior to backend API integration.

## Project Status
Active and undergoing final UI updates.
