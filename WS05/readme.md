# Music API

A RESTful API for managing songs in a music collection.

## Routes

### 1. GET `/api/getall`

- **Description**: Fetch all songs.
- **Request Method**: `GET`
- **Response**:
  - **200 OK**: Returns an array of song objects.
  - **500 Internal Server Error**: Error message if database query fails.

**Example Request**:
GET http://localhost:3000/api/getall

**Example Response**:
[
    {
        "_id": "680a44aad05fe44512093b91",
        "songName": "Midnight Drive",
        "artist": "Neon Echo",
        "album": "City Lights",
        "genre": "Synthwave",
        "releaseYear": 2023,
        "duration": "03:45"
    },
    {
        "_id": "680a44aad05fe44512093b92",
        "songName": "Golden Skies",
        "artist": "Aurora Bloom",
        "album": "Daydream",
        "genre": "Indie Pop",
        "releaseYear": 2022,
        "duration": "04:10"
    },
    {
        "_id": "680a44aad05fe44512093b93",
        "songName": "Heartbeat",
        "artist": "Luna & The Waves",
        "album": "Echoes of You",
        "genre": "Electro Pop",
        "releaseYear": 2021,
        "duration": "03:20"
    },
    {
        "_id": "680a44aad05fe44512093b94",
        "songName": "Ocean Eyes",
        "artist": "Billie Eilish",
        "album": "Don't Smile at Me",
        "genre": "Alternative",
        "releaseYear": 2017,
        "duration": "03:20"
    },
    {
        "_id": "680a44aad05fe44512093b95",
        "songName": "Lost Frequencies",
        "artist": "Kygo",
        "album": "Tropical Escape",
        "genre": "EDM",
        "releaseYear": 2024,
        "duration": "04:05"
    },
    {
        "_id": "680a44aad05fe44512093b96",
        "songName": "Morning Coffee",
        "artist": "The Chill Keys",
        "album": "Sunrise Vibes",
        "genre": "Lo-fi",
        "releaseYear": 2023,
        "duration": "02:50"
    },
    {
        "_id": "680a44aad05fe44512093b97",
        "songName": "Shadows in Tokyo",
        "artist": "Kenshi Yonezu",
        "album": "Neon Soul",
        "genre": "J-Pop",
        "releaseYear": 2020,
        "duration": "03:40"
    },
    {
        "_id": "680a44aad05fe44512093b98",
        "songName": "Rebel Heart",
        "artist": "Wild Ashes",
        "album": "Into the Flame",
        "genre": "Rock",
        "releaseYear": 2022,
        "duration": "04:25"
    },
    {
        "_id": "680a44aad05fe44512093b99",
        "songName": "Desert Rain",
        "artist": "Amira Sade",
        "album": "Mirage",
        "genre": "World Fusion",
        "releaseYear": 2023,
        "duration": "03:55"
    },
    {
        "_id": "680a44aad05fe44512093b9a",
        "songName": "Wanderlust",
        "artist": "Theo Rivers",
        "album": "Atlas",
        "genre": "Folk",
        "releaseYear": 2021,
        "duration": "04:00"
    }
]

### 2. GET `/api/:id`

- **Description**: Fetch a song by its ID.
- **Request Method**: `GET`
- **Parameters**: id: The ID of the song to fetch.
- **Response**:
  - **200 OK**: Returns the song object.
  - **404 Not Found**: Song not found with the given ID.
  - **400 Not Found**: Invalid ID format.

**Example Request**:
GET http://localhost:3000/api/680a44aad05fe44512093b92

**Example Response**:
{
    "_id": "680a44aad05fe44512093b92",
    "songName": "Golden Skies",
    "artist": "Aurora Bloom",
    "album": "Daydream",
    "genre": "Indie Pop",
    "releaseYear": 2022,
    "duration": "04:10"
}

### 3. POST `/api/:add`

- **Description**: Add a new song.
- **Request Method**: `POST`
- **Request body**:
  {
  "title": "Song Title",
  "artist": "Artist Name",
  "year": 2022,
  "genre": "Rock"
  }
- **Response**:
  - **201 Created**: Returns the created song object.
  - **400 Bad Request**: Invalid request data.

**Example Request**:
POST http://localhost:3000/api/add
{
  "songName": "Electric Heartbeat",
  "artist": "Pulse City",
  "album": "Neon Dreams",
  "genre": "Electropop",
  "releaseYear": 2025,
  "duration": "04:00"
}

**Example Response**:
{
    "songName": "Electric Heartbeat",
    "artist": "Pulse City",
    "album": "Neon Dreams",
    "genre": "Electropop",
    "releaseYear": 2025,
    "duration": "04:00",
    "_id": "680a52ce4a7c963024aa16d8",
    "__v": 0
}

### 4. PUT `/api/update:id`

- **Description**: Update an existing song by its ID.
- **Request Method**: `PUT`
- **Parameters**: id: The ID of the song to update.
- **Request body**: The fields to update (e.g., title, artist).
- **Response**:
  - **200 OK**: Returns the updated song object.
  - **404 Not Found**: Song not found with the given ID.
  - **400 Bad Request**: Invalid data.

**Example Request**:
PUT http://localhost:3000/api/update/680a52ce4a7c963024aa16d8
{
  "songName": "Updated Song Name",
  "artist": "Updated Artist Name",
  "album": "Updated Album Name",
  "genre": "Updated Genre",
  "releaseYear": 2025,
  "duration": "Updated Duration"
}

**Example Response**:
{
    "_id": "680a52ce4a7c963024aa16d8",
    "songName": "Updated Song Name",
    "artist": "Updated Artist Name",
    "album": "Updated Album Name",
    "genre": "Updated Genre",
    "releaseYear": 2025,
    "duration": "Updated Duration",
    "__v": 0
}

### 5. DELETE `/api/delete:id`

- **Description**: Delete a song by its ID.
- **Request Method**: `DELETE`
- **Parameters**: id: The ID of the song to delete.
- **Response**:
  - **200 OK**: Confirmation message that the song was deleted.
  - **404 Not Found**: Song not found with the given ID.
  - **400 Bad Request**: Invalid ID format.

**Example Request**:
DELETE http://localhost:3000/api/delete/680a52ce4a7c963024aa16d8

**Example Response**:
{
    "message": "Song deleted"
}