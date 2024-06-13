# Blog Application

This is a Blog Application built using [Vite](https://vitejs.dev/) for the frontend and [Appwrite](https://appwrite.io/) for the backend services.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

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
    git clone https://github.com/lone-wolf005/blog-application.git
    cd blog-application
    ```

2. Install the dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Set up Appwrite:
    - Follow the Appwrite [getting started guide](https://appwrite.io/docs) to set up your Appwrite server.
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

## Usage

To run the application locally, use:

```sh
npm run dev
# or
yarn dev
