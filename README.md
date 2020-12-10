# Client Side Form Validation

## Validates Username, Email and confirms matching passwords.

This is a basic JS form validation app, useful for validating form data on the client side before it is sent to the server, thus allowing the user to fix invalid data straight away. This is paramount to good UX as it prevents the wait times caused by server rejections. HTML5 offers built in form control, however this example uses JavaScript in order to take control over the vanilla error messages and HTML validation which may not work in legacy browsers.

**_However_**, form submitted data should still undergo security checks on the server side to prevent malicious code insertion.

### What does this example check for?

This form validation example checks for the following:

- **Required Fields**: Checks whether data has been entered into a required field.

- **Username**: Checks whether the username is between 3 & 15 characters

- **Email**: Checks if the email is of the correct format using a regEx

- **Passwords**: Checks whether the passwords match and are between 6 - 25 characters
