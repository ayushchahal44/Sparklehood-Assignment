# AI Safety Monitor

A modern dashboard for tracking and managing AI safety incidents. Built with React, TypeScript, and Material-UI, this application provides a comprehensive interface for monitoring, reporting, and analyzing AI safety-related incidents.

## Features

- 📊 **Incident Dashboard**: View all reported AI safety incidents in a clean, organized interface
- 🔍 **Filtering & Sorting**: Filter incidents by severity and sort by date
- 📝 **Incident Reporting**: Easy-to-use form for reporting new AI safety incidents
- 🎨 **Modern UI**: Sleek, dark-themed interface with responsive design
- 🏷️ **Severity Levels**: Color-coded severity indicators (Low, Medium, High)
- 📅 **Date Tracking**: Automatic date tracking for all reported incidents
- 🔒 **Type Safety**: Built with TypeScript for robust type checking

## Tech Stack

- React 18
- TypeScript
- Material-UI (MUI)
- Vite
- date-fns (for date formatting)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ayushchahal44/Sparklehood-Assignment.git
cd ai-safety-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

## Running the Project

1. Start the development server:
```bash
npm run dev
# or
yarn dev
```

2. Open your browser and navigate to:
```
http://localhost:5173
```

## Project Structure

```
ai-safety-dashboard/
├── public/                 # Static assets
│   └── ai-safety-monitor.svg  # Application favicon
├── src/
│   ├── types/             # TypeScript type definitions
│   │   └── incident.ts    # Incident type definitions
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Project dependencies
└── README.md              # Project documentation
```

## Usage

### Viewing Incidents
- The dashboard displays all reported incidents
- Use the severity filter to view specific types of incidents
- Sort incidents by date using the sort dropdown
- Click "View Details" to see the full description of an incident

### Reporting New Incidents
1. Click the "Report New Incident" button
2. Fill in the required fields:
   - Title
   - Description
   - Severity level
3. Click "Submit Incident" to add it to the dashboard

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Material-UI for the component library
- Vite for the build tool
- The AI safety community for inspiration
