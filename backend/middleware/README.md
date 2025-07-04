## Error Handler

1.  How does the error handler work without explicitly calling it in `contactController`?
2.  Flow of what happens when you post a bad request to /api/contacts

### Key Points

1.  The error handler **doesn't need to be explicitly called** — Express forwards errors to any middleware with **4 parameters**: `(err, req, res, next)`.
2.  The error handler is defined **after all routes**, so it can catch any error from previous middleware/controllers.
3.  `res.status(400)` ensures the correct status code is retained when the error is caught.

### Overview

The error handling works through **Express's middleware chain** and **Node's error handling**. Here's the detailed flow when you make a POST request to `/api/contacts` with missing fields:

### 1\. Request Hits the Server

**Request:** `POST /api/contacts` with missing fields.

Express receives the request and starts processing it through the middleware chain.

### 2\. `express.json()` Middleware

```javascript
app.use(express.json());
```

Parses the JSON body of the request.

Attaches the parsed data to `req.body`.

### 3\. Route Handler

Request reaches the route handler in `contactRoutes.js`:

```javascript
router.route("/").post(createContact);
```

This calls the `createContact` controller.

### 4\. Controller Execution

```javascript
const createContact = (req, res) => {
   console.log(req.body);
   const { name, email, phone } = req.body;
   if (!name || !email || !phone) {
       res.status(400);
       throw new Error("All fields are required");
   }
   // ... rest of the code
};
```

The controller checks for missing fields.

Sets status to 400.

Throws an error with the message `"All fields are required"`.

### 5\. Error Thrown in Async Context

When an error is thrown (even if not using `async`), Express catches it and forwards it to the error-handling middleware.

### 6\. Error Handler Middleware

The error reaches our error handler (defined after all routes):

```javascript
const errorHandler = (err, req, res, next) => {
   const statusCode = res.statusCode >= 400 ? res.statusCode : 500;
   res.status(statusCode).json({
       title: ERROR_TITLES[statusCode] || "Error",
       message: err.message,
       stackTrace: err.stack,
   });
};
```

It sees the status code was already set to 400.

Sends a JSON response with:

*   `title`: "Bad Request" (from `ERROR_TITLES[400]`)
*   `message`: "All fields are required"
*   `stackTrace`: The error stack trace

### 7\. Response Sent to Client

```plaintext
{
 "title": "Bad Request",
 "message": "All fields are required",
 "stackTrace": "Error: All fields are required\n    at createContact ..."
}
```

This pattern:

*   Centralizes error handling
*   Keeps error responses consistent
*   Separates concerns
*   Works automatically