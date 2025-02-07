# Dinopark Activity Tracker

This is a **Next.js** project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). The project demonstrates a fictional dinosaur park activity tracker, complete with real-time zone monitoring, visitor logging, and log display functionality.

## Features

- **Dinosaur Park Zones**
  - Displays a dynamic grid of park zones.
  - Tracks and updates zone statuses (e.g., maintenance, location updates).

- **Visitor Tracking**
  - Each user is assigned a unique ID stored in `localStorage`.
  - Visitor activity is logged (e.g., zone fetches) via an API endpoint.

- **Log File Management**
  - Visitor actions are saved to a `.log` file on the server.
  - A dedicated page displays the log file content in real time.
  - navigate to `/logs` in the browser


## Getting Started

First, install dependencies:

```bash
npm install
yarn install
pnpm install
```
Then, start the development server:

```bash
npm run dev
yarn dev
pnpm dev
bun dev
```
Open http://localhost:3000 in your browser to see the application.

## API Endpoints

### `/api/logging`
- **Method**: `POST`
- **Purpose**: Logs visitor actions to a server-side `.log` file.
- **Body Parameters**:
  - `visitorId`: Unique visitor ID.
  - `action`: Description of the visitor's action.

### `/api/logs`
- **Method**: `GET`
- **Purpose**: Fetches the content of the `.log` file for display.


## Testing

This project uses Jest for unit testing. Run the tests with:

```bash
npm run test
yarn test
```
A full coverage report will also be given

## Live Deployment

https://dinopark.vercel.app/