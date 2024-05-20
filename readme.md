# Vehicle Management API

This is a simple Vehicle Management API built with Node.js and MongoDB. The API allows users to perform CRUD operations on vehicles, including searching by registration number and rental price.

## Features

- Create a new vehicle
- Get all vehicles
- Update a vehicle
- Delete a vehicle
- Search for a vehicle by registration number
- Search for vehicles by rental price

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Docker
- Docker Compose

## Installation

### Prerequisites

- Node.js and npm installed on your machine (for local development)
- Docker and Docker Compose installed (for containerization)

### Steps

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/vehicle-management-api.git
   cd vehicle-management-api
   ```

2. Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   MONGODB_URI=mongodb://mongodb:27017/vehicle_management
   PORT=3000
   ```

3. Build and start the Docker containers:

   ```sh
   docker-compose up --build
   ```

   This will start both MongoDB and the Node.js server in Docker containers.

4. To stop the containers, use:

   ```sh
   docker-compose down
   ```

## API Endpoints

### Create a new vehicle

- **Method:** POST
- **URL:** `/api/vehicles`
- **Body:**

  ```json
  {
    "registrationNumber": "ABC123",
    "make": "Toyota",
    "model": "Camry",
    "year": 2020,
    "rentalPrice": 50
  }
  ```

### Get all vehicles

- **Method:** GET
- **URL:** `/api/vehicles`

### Update a vehicle

- **Method:** PUT
- **URL:** `/api/vehicles/:registrationNumber`
- **Body:**

  ```json
  {
    "make": "Honda",
    "model": "Accord",
    "year": 2021,
    "rentalPrice": 55
  }
  ```

### Delete a vehicle

- **Method:** DELETE
- **URL:** `/api/vehicles/:registrationNumber`

### Search by registration number

- **Method:** GET
- **URL:** `/api/vehicles/search/registration`
- **Query Parameter:** `registrationNumber`

  Example: `/api/vehicles/search/registration?registrationNumber=ABC123`

### Search by rental price

- **Method:** GET
- **URL:** `/api/vehicles/search/price`
- **Query Parameter:** `price`

  Example: `/api/vehicles/search/price?price=60`

## Testing the API

You can use Postman or any other API client to test the endpoints. Make sure your server is running before making requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Additional Notes:

- Ensure your `.env` file is correctly set up and in the root directory.
- The `docker-compose.yml` and `Dockerfile` are configured to use the correct versions and dependencies.
- The `vehicle-service` container relies on the `mongodb` container. Docker Compose ensures that the MongoDB container is up and running before the Node.js container starts.