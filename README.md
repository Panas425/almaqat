Almaqat
Overview

Almaqat is a full-stack web application built with Node.js, Express, and SQLite, following the MVC (Model-View-Controller) architecture.

The project is structured for deployment on Heroku (via Procfile) and Google App Engine (via app.yaml).

The name “Almaqat” represents the project’s internal concept or idea and can be further refined with a more specific product description in the future.

Tech Stack
Layer	Technology
Backend	Node.js, Express
Database	SQLite (messages.db)
Frontend	HTML, CSS, JavaScript
View Engine	EJS
Deployment	Heroku, Google App Engine
Project Structure
almaqat/
├── app.js              # Main application entry point
├── controllers/        # Business logic & request handlers
├── models/             # Database models & queries
├── routes/             # Application routes
├── views/              # EJS templates
├── public/             # Static assets (CSS, JS, images)
├── config/             # Configuration files
├── messages.db         # SQLite database
├── Procfile            # Heroku start configuration
├── app.yaml            # Google App Engine config
├── package.json        # Dependencies & scripts
└── .gitignore          # Git ignored files
Getting Started
Prerequisites
Node.js (as specified in package.json)
npm or yarn
Installation
# Clone the repository
git clone https://github.com/Panas425/almaqat.git

# Move into the project directory
cd almaqat

# Install dependencies
npm install
Running Locally
node app.js

Or with nodemon:

npm run dev

The app will run on:

http://localhost:3000

(or the port defined in your environment/config)

Deployment
Heroku
heroku create your-app-name
git push heroku main
Google App Engine
gcloud app deploy
API Routes

Routes are defined inside the routes/ directory.

Typical endpoints may include:

GET / – Home page
Additional routes defined in the project

This section should be updated after reviewing the full route definitions.

Database

The project uses SQLite with a file-based database: messages.db.

Inspecting the database:
sqlite3 messages.db
.tables
.schema table_name
Key Files
File	Purpose
app.js	Initializes Express app, middleware, and routes
controllers/	Handles business logic
models/	Database queries and structure
views/	EJS templates
Procfile	Heroku start command
app.yaml	Google Cloud deployment config
Future Improvements
Add environment variable support (dotenv)
Improve error handling middleware
Write unit tests for controllers and models
Move sensitive config to environment variables
Fully document API endpoints
Expand project description for clarity
Contributing

This is currently a personal project.
For suggestions or contributions, please contact the repository owner: @Panas425
