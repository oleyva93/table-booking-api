# Table booking api

This system facilitates restaurant management and booking operations, including user roles, table availability, and reservation processing.

## Database Schema

```json	
{
  {
  "User": {
    "first_name": "String",
    "last_name": "String",
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
    "services": {
      "Sunday": {
        "breakfast": ["String", "String"], // e.g., ["09:00", "11:00"]
        "lunch": ["String", "String"],
        "dinner": ["String", "String"]
      },
      "Monday": {
        "breakfast": ["String", "String"], // e.g., ["09:00", "11:00"]
        "lunch": ["String", "String"],
        "dinner": ["String", "String"]
      },
      // ... other days
    },
    "business_hours": {
      "Sunday": {
        "start": "String", // e.g., "09:00"
        "end": "String" // e.g., "17:00"
      },
      "Monday": {
        "start": "String",
        "end": "String"
      },
      // ... other days
    }
  },
  "Table": {
    "restaurant_id": "ObjectId",
    "table_identifier": "String | Number", // eg Table No 12
    "capacity": "Number",
    "description": "String"
  },
  "Booking": {
    "restaurant": "ObjectId",
    "tables": ["Table ObjectId"],
    "no_of_persons": "Integer",
    "booking_from": "DateTime",
    "booking_to": "DateTime",
    "customer_id": "User ObjectId",
    "booking_status": "pending/confirmed/canceled",
    "booking_status_updated_by": "customer/owner"
  }
}
```

each collection will have _id by default

# API Endpoints

## Clients

  1. **Get Client Bookings**
- **POST** `/client/:client_id/bookings`
- Parameters:  
    - `client_id` - required
    - `booking_status`
    - `booking_form_gt`
    - `booking_to_lt`

## Bookings

17. **Check table availability**
    - **POST** `/restaurants/:restaurant_id/availability`
    - Input data:
      ```json
      {
        "booking_from": "2023-05-20T18:00:00Z",
        "booking_to": "2023-05-20T20:00:00Z",
        "no_of_persons": 4
      }
      ```
    - Parameters: `restaurant_id`

13. **Create a new booking**
    - **POST** `/bookings`
    - Input data:
      ```json
      {
        "client_first_name": "Jane",
        "client_last_name": "Doe",
        "client_email": "jane@mail.com",
        "client_phone": "1234567890",
        "restaurant_id": "60a7b2c6c25e2b001f9e4b2b",
        "tables": ["60a7b2c6c25e2b001f9e4b2c"],
        "no_of_persons": 4,
        "booking_from": "2023-05-20T18:00:00Z",
        "booking_to": "2023-05-20T20:00:00Z",
        "customer_id": "60a7b2c6c25e2b001f9e4b2d",
        "booking_status": "pending",
        "booking_status_updated_by": "customer"
      }
      ```

14. **Get booking information**
    - **GET** `/bookings/:booking_id`
    - Parameters: `booking_id`

15. **Update booking information**
    - **PUT** `/bookings/:bookingId`
    - Input data:
      ```json
      {
        "restaurant_id": "60a7b2c6c25e2b001f9e4b2b",
        "tables": ["60a7b2c6c25e2b001f9e4b2c"],
        "no_of_persons": 4,
        "booking_from": "2023-05-20T18:00:00Z",
        "booking_to": "2023-05-20T20:00:00Z",
        "customer_id": "60a7b2c6c25e2b001f9e4b2d",
        "booking_status": "pending",
        "booking_status_updated_by": "customer"
      }
      ```
    - Parameters: `booking_id`

16. **Delete a booking**
    - **DELETE** `/bookings/:booking_id`
    - Parameters: `booking_id`

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
       "business_hours": {
         "Sunday": { "start": "09:00", "end": "22:00" },
         "Monday": { "start": "09:00", "end": "22:00" },
         "Tuesday": { "start": "09:00", "end": "22:00" },
         "Wednesday": { "start": "09:00", "end": "22:00" },
         "Thursday": { "start": "09:00", "end": "22:00" },
         "Friday": { "start": "09:00", "end": "22:00" },
         "Saturday": { "start": "09:00", "end": "22:00" }
       },
       "services": {
        "Sunday": {
         "breakfast": ["09:00", "11:00"], 
          "lunch": ["14:00", "16:00"],
          "dinner": ["20:00", "22:00"]
        },
        "Monday": {
          "breakfast": ["09:00", "11:00"],
          "lunch": ["14:00", "16:00"],
          "dinner": ["20:00", "22:00"]
        },
        ///...
      },
     }
     ```

6. **Get restaurant information**
   - **GET** `/restaurants/:restaurant_id`
   - Parameters: `restaurant_id`

7. **Update restaurant information**
   - **PUT** `/restaurants/:restaurant_id`
   - Input data:
     ```json
     {
       "name": "Updated Restaurant",
       "address": "456 Another St",
       "description": "An updated description.",
       "admin": ["60a7b2c6c25e2b001f9e4b2b"],
       "verified": false,
       "business_hours": {
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
   - Parameters: `restaurant_id`

8. **Delete a restaurant**
   - **DELETE** `/restaurants/:restaurant_id`
   - Parameters: `restaurant_id`

## Tables

9. **Create a new table**
   - **POST** `/tables`
   - Input data:
     ```json
     {
       "restaurant": "60a7b2c6c25e2b001f9e4b2b",
       "table_identifier": 12,
       "capacity": 4,
       "description": "Near the window"
     }
     ```

10. **Get table information**
    - **GET** `/tables/:table_id`
    - Parameters: `table_id`

11. **Update table information**
    - **PUT** `/tables/:table_id`
    - Input data:
      ```json
      {
        "restaurant_id": "60a7b2c6c25e2b001f9e4b2b",
        "table_identifier": 13,
        "capacity": 6,
        "description": "Near the window, updated"
      }
      ```
    - Parameters: `table_id`

12. **Delete a table**
    - **DELETE** `/tables/:table_id`
    - Parameters: `table_id`

## Users

2. **Get user information**
   - **GET** `/users/:user_id`
   - Parameters: `user_id`

3. **Update user information**
   - **PUT** `/users/:user_id`
   - Input data:
     ```json
     {
       "firs_name": "John",
       "last_name": "Doe",
       "email": "john.doe@example.com",
       "phone": "0987654321",
       "password": "newpassword",
       "role": "client"
     }
     ```
   - Parameters: `user_id`

4. **Delete a user**
   - **DELETE** `/users/:user_id`
   - Parameters: `user_id`

### Authentication Endpoints

#### Register a New User
- **POST /auth/signup**
  - Description: Creates a new user account.
  - Request Body (JSON):
    ```json
    {
      "firs_name": "John",
      "last_name": "Doe",
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
     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
     "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
   }
	```

#### User Logout
- **POST /auth/logout**
  - Description: Logs out the currently authenticated user.
  - Request Headers: Authorization token.
  - Response: Success message or error details.



