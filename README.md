# MuseApp 🎵

Welcome to MuseApp! This is a music library web application built using React and Next.js. The project was developed as part of the Front-end platform test and is deployed at [museappfront.vercel.app](https://museappfront.vercel.app).

## 🌐 Live Demo

Check out the live application: [MuseApp on Vercel](https://museappfront.vercel.app)

## 📖 Features

- **Favorite Songs**: Users can favorite a song on both the main and internal screens. The favorite status is persisted even when navigating between pages.
- **Filter Favorites**: Users can filter and display only their favorite songs on the main page.
- **Sort Alphabetically**: Users can sort the songs alphabetically on the main screen.
- **Search with Suggestions**: The search field provides real-time suggestions while typing.
- **Play Music**: Users can play the song on the internal page.

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your local development environment:

- Node.js (v18 or later)
- npm or yarn

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/grilomatheus/music-front-player.git
   cd music-front-player
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the server**:

   Start the node server to provide all the necessary data:

   ```bash
   node server.js
   ```

4. **Run the development server**:

   Start the development server to view the project locally:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Endpoints

The server provides the following endpoints:

- **`/songs`**: Provides all songs.
- **`/song/:ID`**: Provides specific song data based on the song ID.

## 🛠️ Technologies Used

- **React**: For building the user interface.
- **Next.js**: For server-side rendering and easy deployment.
- **TypeScript**: For static typing to improve code quality.
- **Sass**: For styling the components.
- **React H5 Audio Player**: For the audio player component.
- **Local Storage**: For persisting the favorite songs across sessions.

## 📏 Project Requirements

### Basic Requirements

- The application allows users to favorite a song on the main or internal screen.
- Users can filter the song list to show only their favorite songs.
- Users can sort the songs alphabetically.
- The search field provides suggestions as the user types.
- Songs can be played on the internal page.
- The favorite state is persisted when navigating between pages.
- The application is responsive and works well on small viewports.
- The project is built using React and Next.js.

### Extra Points (Implemented)

- **TypeScript**: The project is fully typed using TypeScript.
- **Local Storage**: Favorite songs are persisted in local storage.
- **Deployment**: The application is deployed on Vercel.

## 🚀 Deployment

The application is deployed on Vercel. You can access the live version here: [MuseApp on Vercel](https://museappfront.vercel.app).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For any questions or feedback, feel free to reach out:

- GitHub: [grilomatheus](https://github.com/grilomatheus)
- Email: matheuscgrilo@gmail.com
