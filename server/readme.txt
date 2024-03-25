API docs.
1. auth-route

Endpoints: 

“/auth/registration” - This endpoint assumes the presence of "username" and "password" in the request body. Validation consists of two checks: username length (from 3 to 15 characters) and password length (from 4 to 20). If the validation stage is not passed, the server will return a JSON-object with the corresponding message and an array of errors. If the user in the passed "username" already exists, the server will return a JSON-object with the corresponding message.
In case of unexpected errors, the server will return a JSON object with the message "registration error". If the registration is successful, the server hashes the password and sends a JSON-object with the corresponding message.

“/auth/login” - This endpoint assumes the presence of "username" and "password" in the request body. If the user with the passed username was not found, the server will return a 400 status code and a JSON object with the corresponding message. If the password is not valid, the server will return a 400 status code and a JSON object with the corresponding message. In case of successful authorization, the server sends a JSON-object with the "jwt-token" field inside which there is an Access token valid for 24 hours.
Save it to localStorage or Cookies.
2. protected-route
	
All endpoints require an Access token in the header called "Authorization".If the token is invalid, the server will return a JSON-object with the corresponding message.

The properties common to all endpoints will be listed here. If the required data is not passed to the request body, the server will return a JSON-object with the corresponding message. If successful, the server will return a JSON object with the message "Successful + your request".

Endpoints:
