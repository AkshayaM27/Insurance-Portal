# Smart Car Insurance Portal

A semi-functional Smart Car Insurance Portal built using Angular, Spring Boot, and SQLite.

## Features

- Get insurance quote
- Compare insurance plans
- Buy policy
- Upload vehicle document details
- Track claims
- Renew insurance
- Store data using SQLite database

## Tech Stack

- Frontend: Angular 20
- Backend: Spring Boot
- Database: SQLite
- API: REST API

## Project Structure

```text
insurance-portal/
├── frontend/
└── backend/

Run Backend
Go to backend folder:
cd Backend
cd insurance-backend

Run Spring Boot:
mvnw.cmd spring-boot:run

Backend runs at:
http://localhost:8080
Test API:
http://localhost:8080/api/plans


Run Frontend
cd Frontend
npm install
ng serve
Frontend runs at:
http://localhost:4200


Database
SQLite database is automatically created when backend runs.
Database file:
insurance.db
You can view it using DB Browser for SQLite.

Main APIs
GET  /api/plans
POST /api/quotes
GET  /api/quotes
POST /api/policies
GET  /api/policies
POST /api/documents
GET  /api/documents
POST /api/claims
GET  /api/claims
POST /api/renewals
GET  /api/renewals