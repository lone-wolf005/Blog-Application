# Blog Application

This is a Blog Application built using [Vite](https://vitejs.dev/) for the frontend and [Appwrite](https://appwrite.io/) for the backend services.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Tailwind CSS Configuration](#tailwind-css-configuration)
- [Usage](#usage)
- [Contribution](#contribution)

## Features

- Create, read, update, and delete blog posts.
- User authentication (sign up, log in, log out).
- Markdown support for blog content.
- Responsive design.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (>=14.x)
- npm or yarn
- An Appwrite instance (you can set up one locally or use a hosted version)

## Installation

To install this application, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/blog-application.git
    cd blog-application
    ```

2. Install the dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Set up Appwrite:
    - Follow the Appwrite [getting started guide](https://appwrite.io/docs/getting-started-for-self-hosted) to set up your Appwrite server.
    - Create a project in Appwrite.
    - Create a database with collections for blog posts and users.
    - Set up authentication providers if needed.

## Configuration

1. Create a `.env` file in the root directory and add your Appwrite configuration:
    ```env
    VITE_APPWRITE_ENDPOINT=https://appwrite.example.com/v1
    VITE_APPWRITE_PROJECT=your_project_id
    VITE_APPWRITE_DATABASE=your_database_id
    VITE_APPWRITE_COLLECTION=your_collection_id
    VITE_APPWRITE_BUCKET=your_bucket_id
    ```

## Tailwind CSS Configuration

1. Install Tailwind CSS and its dependencies:
    ```sh
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

2. Configure your `tailwind.config.js` file:
    ```javascript
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

3. Add the Tailwind directives to your CSS file:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

4. Ensure your CSS file is imported in your `main.jsx` or `App.jsx`:
    ```javascript
    import './index.css';
    ```

## Usage

To run the application locally, use:

```sh
npm run dev
# or
yarn dev

## Contibution
JIGAR THAKOR(https://github.com/lone-wolf005)
