
## Base URL

`https://api.example.com`

The API manages books in a library. Requests and responses use JSON where applicable.

## Endpoints

### 1. List all books

- **Method:** GET
- **Path:** `/books`
- **Description:** Returns a list of all books in the library.
- **Request body:** None
- **Success status:** `200 OK`

Example request:

```http
GET /books
```

### 2. Get one book

- **Method:** GET
- **Path:** `/books/{id}`
- **Description:** Returns details of a single book identified by its ID.
- **Request body:** None
- **Success status:** `200 OK`

Example request:

```http
GET /books/1
```

### 3. Create a book

- **Method:** POST
- **Path:** `/books`
- **Description:** Creates a new book in the library.
- **Request body:**

```json
{
  "title": "Things Fall Apart",
  "author": "Chinua Achebe",
  "publishedYear": 1958
}
```

- **Success status:** `201 Created`

Example request:

```http
POST /books
Content-Type: application/json
```

The JSON object above is sent as the request body.

### 4. Update a book

- **Method:** PUT
- **Path:** `/books/{id}`
- **Description:** Replaces the details of an existing book.
- **Request body:**

```json
{
  "title": "Things Fall Apart",
  "author": "Chinua Achebe",
  "publishedYear": 1958
}
```

- **Success status:** `200 OK`

Example request:

```http
PUT /books/1
Content-Type: application/json
```

The JSON object above is sent as the request body.

### 5. Delete a book

- **Method:** DELETE
- **Path:** `/books/{id}`
- **Description:** Deletes a book identified by its ID.
- **Request body:** None
- **Success status:** `204 No Content`

Example request:

```http
DELETE /books/1
```

### 6. List books by author

- **Method:** GET
- **Path:** `/books?author={authorName}`
- **Description:** Returns books written by the specified author.
- **Request body:** None
- **Success status:** `200 OK`

Example request:

```http
GET /books?author=Chinua%20Achebe
```

The author parameter filters the results by author name.

## Error Codes

### 400 Bad Request

Returned when the request contains invalid data or parameters.

**Example:** A client attempts to create a book without the required title or author.

### 404 Not Found

Returned when the requested resource does not exist.

**Example:** A client requests `GET /books/999` when no book with ID `999` exists.

## Summary

| Operation | Method | Path | Success Status |
|---|---|---|---|
| List books | GET | `/books` | 200 |
| Get one book | GET | `/books/{id}` | 200 |
| Create book | POST | `/books` | 201 |
| Update book | PUT | `/books/{id}` | 200 |
| Delete book | DELETE | `/books/{id}` | 204 |
| Filter by author | GET | `/books?author={authorName}` | 200 |
