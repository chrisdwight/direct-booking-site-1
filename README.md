# Direct Booking Website

This project is a React-based web application for a direct booking platform that allows users to browse rental properties, check real-time availability, and make inquiries.

## Features

- **Directory of Rental Properties**: Users can view a list of available rental properties.
- **Real-Time Availability**: Each property displays its current availability status.
- **Dedicated Property Pages**: Users can click on a property to view detailed information, including amenities and availability.
- **Calendar Interface**: A calendar is provided for users to select available and booked dates.
- **Contact Section**: A contact form is available for inquiries about properties.

## Project Structure

```
direct-booking-site
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Calendar.tsx
│   │   ├── ContactSection.tsx
│   │   ├── PropertyAvailability.tsx
│   │   ├── PropertyCard.tsx
│   │   ├── PropertyList.tsx
│   │   └── PropertyPage.tsx
│   ├── pages
│   │   ├── HomePage.tsx
│   │   └── PropertyDetailsPage.tsx
│   ├── types
│   │   └── index.ts
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd direct-booking-site
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

### Building for Production

To create a production build, run:
```
npm run build
```
This will generate an optimized build in the `build` directory.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.