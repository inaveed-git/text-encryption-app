

# Text Encryption App

Welcome to the Text Encryption App! This application provides a secure way to encrypt and decrypt text using strong encryption algorithms. It includes error handling, encryption, and decryption functionalities.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Routes](#routes)
- [Error Handling](#error-handling)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Requirements

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/inaveed-git/text-encryption-app.git
   ```

2. Change into the project directory:

   ```bash
   cd text-encryption-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Getting Started

To run the application:



1. Start the Node.js application:

   ```bash
   node app.js
   ```

   The app will be accessible at [http://localhost:3000](http://localhost:3000) in your web browser.

## Usage

1. Visit [http://localhost:3000](http://localhost:3000) in your web browser.

2. You will be welcomed by the landing page with a "Get Started" button.

3. Click "Get Started" to navigate to the encryption page.

4. Enter your text, and the app will encrypt it for you.

5. You can also decrypt the text on the decryption page.

## Routes

- **GET /encrypt**: Encryption page to enter text and encrypt it.
- **POST /encrypt**: Endpoint for encrypting text.
- **GET /decrypt**: Decryption page to enter encrypted text and decrypt it.

## Error Handling

The application includes robust error handling mechanisms to ensure smooth user experience. In case of any issues, error messages will be displayed with relevant information.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS (Embedded JavaScript)
- Crypto (for encryption and decryption)
- Express-Validator (for input validation)
- Bootstrap (for styling)
- Other dependencies (refer to package.json)

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

