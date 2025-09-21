# Bag Shop

A premium bag store built with Node.js, Express, and MongoDB. This is a full-stack e-commerce application featuring distinct roles for users and owners.

## Features

*   **User Authentication**: Secure user registration and login.
*   **Product Management**: Owners can create, update, and manage products.
*   **Shopping Experience**: Users can browse and view products.
*   **RESTful API**: Organized routes for users, owners, and products.
*   **Server-Side Rendering**: Uses EJS for dynamic HTML generation.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
*   [Node.js](https://nodejs.org/en/) (v16 or later recommended)
*   [npm](https://www.npmjs.com/) (comes with Node.js)
*   [MongoDB](https://www.mongodb.com/try/download/community) (or a cloud-based MongoDB Atlas account)

## Getting Started

Follow these steps to get your development environment set up.

### 1. Clone the repository

First, clone the repository to your local machine.

```bash
git clone https://github.com/your-username/bag-shop.git
cd bag-shop
```

### 2. Install Dependencies

Install the project dependencies defined in `package.json`.

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project. This file will hold your secret keys and database connection strings. Your `.gitignore` file is already set up to ignore this file.

Copy the following into your new `.env` file:

```env
# A long, random string for securing user sessions
EXPRESS_SESSION_SECRET_KEY=your_super_secret_and_random_session_key

# Your MongoDB connection string
MONGODB_URI=mongodb://localhost:27017/bag-shop
```

> **Note:**
> *   Replace `your_super_secret_and_random_session_key` with a unique, randomly generated string for security.
> *   Update `MONGODB_URI` with your own local or cloud-based MongoDB connection string.

## Running the Application

You can run the server in two modes:

#### Development Mode
This command uses `nodemon` to start the server. It will automatically restart the application whenever you make changes to the code.

```bash
npm run dev
```

#### Production Mode
This command starts the server using `node`.

```bash
npm start
```

Once running, the application will be available at `http://localhost:3000`.

---