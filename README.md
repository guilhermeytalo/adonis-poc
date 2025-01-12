# Adonis POC

This repository serves as a proof of concept (POC) for a modular and scalable application built using [AdonisJS](https://adonisjs.com/). It is structured according to a clean architecture approach, making it easy to extend, maintain, and adapt for various use cases.

---

## Features

- Modular clean architecture.
- Separation of concerns into application, domain, infrastructure, and interface layers.
- Well-defined database schema for tracking gym sessions, body metrics, and meal entries.
- Ready-to-use structure for creating new projects (white-label support).

---

## Branches

- ** Use the main branch as your source to run project

- **`features/02_archtecture`**: This branch provides the white-label base structure for starting new projects from scratch. If you are building a new project, start here.

---

## Directory Structure

The project is divided into layers for better separation of concerns:

### Application Layer (`app/application`)
- **Use Cases (`use-cases`)**: Contains application-specific logic and services.
- **Errors (`errors`)**: Handles errors specific to the application.

### Domain Layer (`app/core`)
- **Entities (`entities`)**: Represents the core business logic and domain objects.
- **Repositories (`repositories`)**: Defines repository interfaces for data access.
- **Services (`services`)**: Contains domain-specific services.

### Infrastructure Layer (`app/infrastructure`)
- **Database Models (`database/models`)**: Maps database tables to models.
- **Repository Implementations (`database/repositories`)**: Implements repository interfaces for data access.
- **External Services (`services`)**: Handles integrations with external systems.

### Interface Layer (`app/interfaces`)
- **DTOs (`dtos`)**: Defines data transfer objects.
- **HTTP (`http`)**: Handles web-related code:
  - **Controllers (`controllers`)**: Application controllers.
  - **Middleware (`middleware`)**: Custom middleware.
  - **Routes (`routes`)**: API routes.
  - **Validators (`validators`)**: Input validation rules.

### Other Key Directories
- **`config/`**: Configuration files for the project.
- **`database/migrations/`**: Migration files for setting up the database schema.
- **`start/`**: Entry point configurations for the Adonis app.
- **`tests/`**: Test bootstrap and test files.

---

## Database Schema

The application is designed with the following database schema:

### Tables

#### `Users`
- `id`: Primary Key
- `username`: User's username
- `email`: User's email
- `password_hash`: Hashed password
- `created_at`: Account creation timestamp
- `last_login`: Last login timestamp

#### `GymSessions`
- `id`: Primary Key
- `user_id`: Foreign Key to `Users`
- `session_date`: Date of the gym session
- `duration_minutes`: Duration of the session in minutes
- `notes`: Additional notes
- `created_at`: Timestamp of record creation

#### `BodyMetrics`
- `id`: Primary Key
- `user_id`: Foreign Key to `Users`
- `record_date`: Date of the record
- `current_weight`: Current weight
- `target_weight`: Target weight
- `chest_size`: Chest measurement
- `waist_size`: Waist measurement
- `hip_size`: Hip measurement
- `created_at`: Timestamp of record creation

#### `MealEntries`
- `id`: Primary Key
- `user_id`: Foreign Key to `Users`
- `meal_date`: Date of the meal
- `meal_type`: Type of meal (e.g., breakfast, lunch, dinner)
- `food_name`: Name of the food item
- `portion_size`: Size of the portion
- `portion_unit`: Unit of the portion size (e.g., grams, ounces)
- `calories`: Caloric content
- `proteins`: Protein content
- `carbs`: Carbohydrate content
- `fats`: Fat content
- `created_at`: Timestamp of record creation

---

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/guilhermeytalo/adonis-poc.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file based on `.env.example`.

4. Run database migrations:
   ```bash
   node ace migration:run
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

---

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
