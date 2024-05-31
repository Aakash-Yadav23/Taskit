# Taskti - Task Manager App

Taskti is a full-featured task manager app built with Next.js and TypeScript. This app is designed to help you manage your tasks efficiently with various features and a modern UI.

## Features

- [ ] **User Authentication and Authorization**
  - [ ] User registration with email verification (OTP)
  - [ ] Login with email and password
  - [ ] Role-based access control (RBAC)

- [ ] **Task Management**
  - [ ] Create, update, delete, and view tasks
  - [ ] Assign due dates and priorities
  - [ ] Mark tasks as complete or incomplete

- [ ] **Project Management**
  - [ ] Create and manage multiple projects
  - [ ] Assign tasks to projects
  - [ ] Track project progress

- [ ] **Collaboration**
  - [ ] Share projects with other users
  - [ ] Real-time updates on task changes

- [ ] **Notifications**
  - [ ] Email notifications for task deadlines and updates
  - [ ] In-app notifications

- [ ] **Search and Filter**
  - [ ] Search tasks by keywords
  - [ ] Filter tasks by status, priority, and due date

- [ ] **Analytics and Reporting**
  - [ ] Task completion statistics
  - [ ] Project progress reports

- [ ] **Responsive Design**
  - [ ] Mobile-friendly interface

## Tech Stack

### Frontend

- Next.js
- TypeScript
- Tailwind CSS
- ShadCN UI
- React Query
- Zustand
- Formik & Yup
- NextAuth.js
- Axios
- Socket.io
- Jest & React Testing Library

### Backend

- Node.js
- Express.js
- TypeScript
- MongoDB & Mongoose
- JWT for authentication
- Socket.io for real-time updates
- Nodemailer for email service
- AWS S3 for file storage
- Redis for caching
- Dotenv for environment variables
- Jest & Supertest for testing

### DevOps and Deployment

- Docker
- GitHub Actions for CI/CD
- Winston for logging
- New Relic for monitoring
- Vercel for frontend hosting
- AWS EC2 for backend hosting
- MongoDB Atlas for database hosting
- ESLint for linting
- Prettier for code formatting

## Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/your-repo/taskti.git
    cd taskti
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add the following variables:

    ```env
    EMAIL=your-email@gmail.com
    EMAIL_PASSWORD=your-email-password
    JWT_SECRET=your_jwt_secret
    MONGODB_URI=your_mongodb_connection_string
    ```

4. **Run the development server**
    ```bash
    npm run dev
    ```

5. **Build and start the production server**
    ```bash
    npm run build
    npm start
    ```

## Usage

- Visit the app in your browser at `http://localhost:3000`
- Register a new account and verify it with the OTP sent to your email
- Log in with your email and password
- Start managing your tasks and projects!

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
