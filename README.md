# Fragments API

The **Fragments API** is a back-end service built with Node.js and Express to provide modular and reusable functionality. It emphasizes best practices in structured logging, debugging, and server management.

---

## **Project Overview**
The Fragments API is designed to manage and retrieve data fragments efficiently. This project follows a professional setup for development and testing, including structured logging with Pino, linting with ESLint, and debugging support for seamless development.

---

## **Setup Instructions**

### **Clone the Repository**
```bash
git clone git@github.com:stebin1998/fragments.git
cd fragments
Install Dependencies
npm install
Installation Requirements
Node.js: LTS version (18.x or later recommended)
npm: Comes with Node.js
Git: For cloning the repository
Optional:
jq: For formatting JSON output in the terminal (brew install jq)
curl: For testing HTTP endpoints
Running the Application

Start the Server
To start the server in production mode:

npm start
Visit http://localhost:8080 to test the server.

Development Mode
To start the server in development mode with automatic restarts:

npm run dev
Debug Mode
To start the server in debug mode for troubleshooting:

npm run debug
Use a debugger (e.g., in VSCode) to attach to port 9229.

API Endpoints

Health Check
GET /: Returns a JSON object confirming the server is running. Example response:
{
  "status": "ok",
  "message": "Welcome to the Fragments API!"
}
Error Routes
404 Not Found: Triggered for non-existent routes. Example response:
{
  "status": "error",
  "message": "Not Found"
}
Linting and Formatting

Run Linter
To check for linting issues:

npm run lint
Fix Linting Issues
To fix linting issues automatically:

npm run lint -- --fix
Debugging Tips

Run Debug Mode
npm run debug
VSCode Debugger
Open VSCode.
Go to the "Run and Debug" tab.
Select the Debug Server configuration.
Set breakpoints (e.g., in src/app.js) and trigger them by accessing the API.
Environment Variables
When running with LOG_LEVEL=debug, the server logs all environment variables for troubleshooting:

npm run debug
Usage Examples

Health Check
curl http://localhost:8080
Response:

{
  "status": "ok",
  "message": "Welcome to the Fragments API!"
}
Trigger a 404 Error
curl http://localhost:8080/nonexistent
Response:

{
  "status": "error",
  "message": "Not Found"
}
How to Contribute

Contributions are welcome! Please follow these steps:

Fork the repository.
Create a feature branch:
git checkout -b feature/your-feature-name
Commit your changes:
git commit -m "Add your message"
Push your branch:
git push origin feature/your-feature-name
Open a Pull Request.
Known Issues

Environment variables must be configured manually for production.
Currently, there’s no database integration.
Future Improvements

Add user authentication.
Implement database support.
Create additional API routes for managing data.
License

This project is licensed under the UNLICENSED license.

