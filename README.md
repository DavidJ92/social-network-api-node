# Social Network API Node

Social Network API Node is a RESTful API built with Node.js, Express, and MongoDB. It allows users to manage users, thoughts, and reactions in a social network application.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Endpoints](#endpoints)
6. [Demo](#demo)

## Introduction

Social Network API Node provides a backend server for a social network application. It allows users to perform CRUD operations on users, thoughts, and reactions. With this API, users can create accounts, share thoughts, react to thoughts, and manage their friend lists.

## Features

- Create, read, update, and delete users
- Create, read, update, and delete thoughts
- Add and remove friends for users
- Add and remove reactions to thoughts

## Installation

To run the Social Network API Node locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Start the server by running `npm start`.
5. The server will start running on `http://localhost:3000`.

## Usage

To use the API, you can send HTTP requests to the provided endpoints using tools like Postman or curl. Make sure to include the required request parameters and data in your requests.

## Endpoints

The following endpoints are available in the API:

- GET /api/users: Get all users.
- GET /api/users/:userId: Get a single user by ID.
- POST /api/users: Create a new user.
- PUT /api/users/:userId: Update a user by ID.
- DELETE /api/users/:userId: Delete a user by ID.
- POST /api/users/:userId/friends/:friendId: Add a friend to a user's friend list.
- DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user's friend list.
- GET /api/thoughts: Get all thoughts.
- GET /api/thoughts/:thoughtId: Get a single thought by ID.
- POST /api/thoughts: Create a new thought.
- PUT /api/thoughts/:thoughtId: Update a thought by ID.
- DELETE /api/thoughts/:thoughtId: Delete a thought by ID.
- POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought.
- DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction from a thought.

## Demo

Watch the video demo of the Social Network API Node: [Video Demo](https://drive.google.com/file/d/14tAXcjkn3NFZgBVX8G5NyOfn3UMiYW1l/view?usp=sharing)

