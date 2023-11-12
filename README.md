# Sports Application API

Welcome to the Sports Application API! This API allows you to manage sports data, including points tables, fixtures, and live streams.

## Installation

To get started with the Sports Application API, follow these steps:

1. Clone the repository to your local machine:

   ```sh
   git clone https://github.com/Calladrus2001/Eshway-Task.git
   cd Back-end_task
   ```

2. Install the required dependencies using npm:

   ```sh
   npm install
   ```

3. Configure the MongoDB connection:
   - Make sure you have MongoDB installed and running locally or provide a connection string to your MongoDB instance by editing `index.js`.

4. Start the server:

   ```sh
   npm start
   ```

5. The server should now be running on the specified port (default: 3000).

## Testing with ngrok

For testing purposes, you can use ngrok to expose your local server to the internet. Follow these steps:

1. [Install ngrok](https://ngrok.com/download) if you haven't already.

2. Start your server:

   ```sh
   npm start
   ```

3. In a separate terminal window, run ngrok to create a public URL:

   ```sh
   ngrok http 3000
   ```

   Replace `3000` with the port your server is running on if it's different.

4. Ngrok will generate a public URL (e.g., `https://your-ngrok-url.ngrok.io`) that you can use for testing and development.

## API Documentation

### Points Table

##### Get Points Table

- **URL:** `/api/points-table`
- **Method:** GET
- **Description:** Get the point-wise ranking for all teams or sports.

##### Add Team to Points Table

- **URL:** `/api/points-table`
- **Method:** POST
- **Description:** Add a new team to the points table.

##### Update Points for a Team

- **URL:** `/api/points-table`
- **Method:** PUT
- **Description:** Update points for a team.
- **Request Body:**
  ```json
  {
    "teamName": "TeamA",
    "points": 10
  }
  ```

### Fixture

##### Get Fixtures

- **URL:** `/api/fixtures`
- **Method:** GET
- **Description:** Get a list of sports and their fixtures.

##### Add Fixture

- **URL:** `/api/fixtures`
- **Method:** POST
- **Description:** Add a new fixture.
- **Request Body:**
  ```json
  {
    "sport": "Football",
    "date": "2023-09-30",
    "team": "TeamA"
  }
  ```

##### Update Fixture

- **URL:** `/api/fixtures`
- **Method:** PUT
- **Description:** Update a fixture.
- **Request Body:**
  ```json
  {
    "fixtureId": "64792eged721ge8910ye",
    "sport": "Football",
    "date": "2023-09-30",
    "team": "TeamB"
  }
  ```

### LiveStream

#### Get Live Streams

- **URL:** `/api/live-streams`
- **Method:** GET
- **Description:** Get a list of sports and their live streams.

#### Add Live Stream

- **URL:** `/api/live-streams`
- **Method:** POST
- **Description:** Add a new live stream.
- **Request Body:**
  ```json
  {
    "sport": "Football",
    "youtubeLink": "https://www.youtube.com/your-live-stream-url"
  }
  ```

#### Update Live Stream

- **URL:** `/api/live-streams`
- **Method:** PUT
- **Description:** Update a live stream.
- **Request Body:**
  ```json
  {
    "liveStreamId": "6473t63791egr7193d3w",
    "sport": "Football",
    "youtubeLink": "https://www.youtube.com/updated-live-stream-url"
  }
  ```
 -----------------------------------------------------------------------------------   Updated By Me   -----------------------------------------------------------------



 ### Authentication APIs:


#### User Registration

- **URL:** `/api/signup`
- **Method:** POST
- **Description:**  Register a new user.
- - **Request Body:**
  ```json
  {
    "name":"sapana",
    "email": "abc@gmail.com",
    "password": "sap123"
  }
  ```

#### User Login

- **URL:** `/api/login`
- **Method:** POST
- **Description:** Log in an existing user.
- **Request Body:**
  ```json
  {
    "email": "abc@gmail.com",
    "password": "sap123"
  }
  ```

#### Password Reset

- **URL:** `/api/reset-password`
- **Method:** POST
- **Description:** Reset the password for a user..
- **Request Body:**
  ```json
  {
    "email": "abc@gmail.com",
    "newPassword": "Football",
    "oldPassword": "footbal123"
  }
  ```

