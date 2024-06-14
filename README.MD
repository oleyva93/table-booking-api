# Table booking api

This system facilitates restaurant management and booking operations, including user roles, table availability, and reservation processing.

## Database Schema

	
	"User": {
		"firstName": "String",
		"lastName": "String",
		"email": "String",
		"phone": "String",
		"password": "String",
		"role": "admin/owner/client"
	},
	"Restaurant": {
		"name": "String",
		"address": "String",
		"description": "String",
		"admin": ["User ObjectId"],
		"verified": "Boolean",
		"businessHours": {
			"Sunday": {
				"start": "String", // e.g., "09:00"
				"end": "String"    // e.g., "17:00"
			},
			"Monday": {
				"start": "String",
				"end": "String"
			},
			// ... other days
			}
	},
	"Table": {
		"restaurant": "ObjectId",
		"tableIdentifier": "String",  // eg Table No 12
		"capacity": "Number",
		"description": "String"
	},
	"Booking": {
		"restaurant": "ObjectId",
		"tables": ["Table ObjectId"],
		"noOfPersons": "Integer",
		"bookingFrom": "DateTime",
		"bookingTo": "DateTime",
		"customer": "User ObjectId",
		"bookingStatus": "pending/confirmed/canceled",
		"bookingStatusUpdatedBy": "customer/owner"
	}


each collection will have _id by default

# API Endpoints

## Users

1. **Create a new user**
   - **POST** `/users`
   - Input data:
     ```json
     {
       "firstName": "John",
       "lastName": "Doe",
       "email": "john.doe@example.com",
       "phone": "1234567890",
       "password": "securepassword",
       "role": "client"
     }
     ```

2. **Get user information**
   - **GET** `/users/:userId`
   - Parameters: `userId`

3. **Update user information**
   - **PUT** `/users/:userId`
   - Input data:
     ```json
     {
       "firstName": "John",
       "lastName": "Doe",
       "email": "john.doe@example.com",
       "phone": "0987654321",
       "password": "newpassword",
       "role": "client"
     }
     ```
   - Parameters: `userId`

4. **Delete a user**
   - **DELETE** `/users/:userId`
   - Parameters: `userId`

## Restaurants

5. **Create a new restaurant**
   - **POST** `/restaurants`
   - Input data:
     ```json
     {
       "name": "Sample Restaurant",
       "address": "123 Main St",
       "description": "A great place to dine.",
       "admin": ["60a7b2c6c25e2b001f9e4b2b"],
       "verified": true,
       "businessHours": {
         "Sunday": { "start": "09:00", "end": "22:00" },
         "Monday": { "start": "09:00", "end": "22:00" },
         "Tuesday": { "start": "09:00", "end": "22:00" },
         "Wednesday": { "start": "09:00", "end": "22:00" },
         "Thursday": { "start": "09:00", "end": "22:00" },
         "Friday": { "start": "09:00", "end": "22:00" },
         "Saturday": { "start": "09:00", "end": "22:00" }
       }
     }
     ```

6. **Get restaurant information**
   - **GET** `/restaurants/:restaurantId`
   - Parameters: `restaurantId`

7. **Update restaurant information**
   - **PUT** `/restaurants/:restaurantId`
   - Input data:
     ```json
     {
       "name": "Updated Restaurant",
       "address": "456 Another St",
       "description": "An updated description.",
       "admin": ["60a7b2c6c25e2b001f9e4b2b"],
       "verified": false,
       "businessHours": {
         "Sunday": { "start": "10:00", "end": "23:00" },
         "Monday": { "start": "10:00", "end": "23:00" },
         "Tuesday": { "start": "10:00", "end": "23:00" },
         "Wednesday": { "start": "10:00", "end": "23:00" },
         "Thursday": { "start": "10:00", "end": "23:00" },
         "Friday": { "start": "10:00", "end": "23:00" },
         "Saturday": { "start": "10:00", "end": "23:00" }
       }
     }
     ```
   - Parameters: `restaurantId`

8. **Delete a restaurant**
   - **DELETE** `/restaurants/:restaurantId`
   - Parameters: `restaurantId`

## Tables

9. **Create a new table**
   - **POST** `/tables`
   - Input data:
     ```json
     {
       "restaurant": "60a7b2c6c25e2b001f9e4b2b",
       "tableIdentifier": 12,
       "capacity": 4,
       "description": "Near the window"
     }
     ```

10. **Get table information**
    - **GET** `/tables/:tableId`
    - Parameters: `tableId`

11. **Update table information**
    - **PUT** `/tables/:tableId`
    - Input data:
      ```json
      {
        "restaurant": "60a7b2c6c25e2b001f9e4b2b",
        "tableIdentifier": 13,
        "capacity": 6,
        "description": "Near the window, updated"
      }
      ```
    - Parameters: `tableId`

12. **Delete a table**
    - **DELETE** `/tables/:tableId`
    - Parameters: `tableId`

## Bookings

13. **Create a new booking**
    - **POST** `/bookings`
    - Input data:
      ```json
      {
        "restaurant": "60a7b2c6c25e2b001f9e4b2b",
        "tables": ["60a7b2c6c25e2b001f9e4b2c"],
        "noOfPersons": 4,
        "bookingFrom": "2023-05-20T18:00:00Z",
        "bookingTo": "2023-05-20T20:00:00Z",
        "customer": "60a7b2c6c25e2b001f9e4b2d",
        "bookingStatus": "pending",
        "bookingStatusUpdatedBy": "customer"
      }
      ```

14. **Get booking information**
    - **GET** `/bookings/:bookingId`
    - Parameters: `bookingId`

15. **Update booking information**
    - **PUT** `/bookings/:bookingId`
    - Input data:
      ```json
      {
        "restaurant": "60a7b2c6c25e2b001f9e4b2b",
        "tables": ["60a7b2c6c25e2b001f9e4b2c"],
        "noOfPersons": 4,
        "bookingFrom": "2023-05-20T18:00:00Z",
        "bookingTo": "2023-05-20T20:00:00Z",
        "customer": "60a7b2c6c25e2b001f9e4b2d",
        "bookingStatus": "confirmed",
        "bookingStatusUpdatedBy": "owner"
      }
      ```
    - Parameters: `bookingId`

16. **Delete a booking**
    - **DELETE** `/bookings/:bookingId`
    - Parameters: `bookingId`

17. **Check table availability**
    - **POST** `/restaurants/:restaurantId/availability`
    - Input data:
      ```json
      {
        "bookingFrom": "2023-05-20T18:00:00Z",
        "bookingTo": "2023-05-20T20:00:00Z",
        "noOfPersons": 4
      }
      ```
    - Parameters: `restaurantId`


### Authentication Endpoints

#### Register a New User
- **POST /auth/signup**
  - Description: Creates a new user account.
  - Request Body (JSON):
    ```json
    {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "phone": "+1234567890",
      "password": "password123",
      "role": "client"
    }
    ```
  - Response: Success message or error details.

#### User Login
- **POST /auth/login**
  - Description: Authenticates a user and returns an authentication token.
  - Request Body (JSON):
    ```json
    {
      "email": "john.doe@example.com",
      "password": "password123"
    }
    ```
  - Response: Authentication token or error details (JSON)
  ```json
   {
     "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
     "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
   }
	```

#### User Logout
- **POST /auth/logout**
  - Description: Logs out the currently authenticated user.
  - Request Headers: Authorization token.
  - Response: Success message or error details.
