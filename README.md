# QuizNet-Frontend

![QuizNet](https://github.com/user-attachments/assets/90249b67-1a3b-495c-aeb8-8b468663fbbe)

QuizNet-Frontend is an Angular-based frontend for the QuizNet exam portal, supporting both user and admin views. Users can take quizzes, view results, and admins can manage quizzes and questions.

## Features

- User dashboard to browse and attempt quizzes
- Admin dashboard to add, update, and delete quizzes and questions
- Authentication and authorization
- Responsive UI with Angular Material
- Real-time quiz timer and result calculation
- SweetAlert2 for user-friendly alerts


## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/quizNet-frontend.git
   cd quizNet-frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Development Server

Start the local development server:
```sh
ng serve
```
Navigate to [http://localhost:4200/](http://localhost:4200/) in your browser.

### Building

To build the project for production:
```sh
ng build
```
The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests

To execute unit tests:
```sh
ng test
```

### Running End-to-End Tests

To run e2e tests:
```sh
ng e2e
```

## Customization

- Update API endpoints in the services as needed.
- Modify Angular Material themes in `styles.css` or component styles.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)

---

For more information, see the [Angular CLI documentation](https://angular.dev/tools/cli)


## Author
[Shashi Salwathura](https://github.com/ShashiSal98)

Happy Coding! 🚀
