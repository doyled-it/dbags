# Danny's Big Ass Glove (DBAG) Softball Website

A modern, animated React website for the DBAG softball team featuring roster management, stats tracking, hall of fame, and standings.

## 🚀 Features

- **Modern React Architecture**: Built with React 19, Vite, and React Router
- **Stunning Animations**: Powered by Framer Motion for smooth, professional animations
- **Tailwind CSS**: Modern utility-first CSS framework for sleek styling
- **Dark Mode**: Full dark mode support with smooth transitions
- **Glassmorphism Effects**: Frosted glass UI elements with backdrop blur
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Animated Backgrounds**: Pulsing gradient blobs and patterns
- **GitHub Pages Ready**: Easy deployment configuration included

## 📋 Pages

1. **Overview** - Team introduction and current league schedule
2. **Roster** - Current players with day badges (Sun/Mon/Tue)
3. **Hall of Fame** - Legendary past players with career stats
4. **Standings** - Current season standings for all leagues
5. **Stats** - Player statistics (season and all-time)

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **React Router DOM** - Routing
- **GitHub Pages** - Hosting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:doyled-it/dbags.git
   cd dbags/dbag-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - The dev server will start (usually at `http://localhost:5173`)
   - Open the URL in your browser

## 🎨 Customization

### Update Team Colors
Edit `tailwind.config.js`:
```js
colors: {
  'dbag-red': {
    DEFAULT: '#dc2626',
    dark: '#b91c1c',
    light: '#fee2e2',
  },
}
```

### Update Content
- **Roster**: Edit `src/pages/Roster.jsx` - Update `playerData` array
- **Hall of Fame**: Edit `src/pages/HallOfFame.jsx` - Update `hallOfFamers` array
- **Standings**: Edit `src/pages/Standings.jsx` - Update `currentStandings` and `pastSeasons`
- **Stats**: Edit `src/pages/Stats.jsx` - Update `statsData` and `leaders`
- **Overview**: Edit `src/pages/Overview.jsx` - Update team info and stats

### Change Team Name/Subtitle
Edit `src/App.jsx` header section:
```jsx
<h1>Danny's Big Ass Glove</h1>
<p>DBAG SOFTBALL</p>
```

## 🚀 Deployment to GitHub Pages

### First Time Setup

1. **Make sure you're in the dbag-app directory**
   ```bash
   cd /Users/mdoyle/projects/dbags/dbag-app
   ```

2. **Initialize git (if not already done)**
   ```bash
   git init
   ```

3. **Add all files**
   ```bash
   git add .
   ```

4. **Create initial commit**
   ```bash
   git commit -m "Initial commit - DBAG Softball website"
   ```

5. **Add remote repository**
   ```bash
   git remote add origin git@github.com:doyled-it/dbags.git
   ```

6. **Push to GitHub**
   ```bash
   git branch -M main
   git push -u origin main
   ```

7. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

8. **Enable GitHub Pages**
   - Go to your repository: `https://github.com/doyled-it/dbags`
   - Click **Settings** → **Pages**
   - Under "Source", select **gh-pages** branch
   - Click **Save**
   - Your site will be live at: `https://doyled-it.github.io/dbags/`

### Updating the Site

After making changes:

```bash
git add .
git commit -m "Update team roster" # or describe your changes
git push
npm run deploy
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🎯 Customization Guide

### Adding New Players

In `src/pages/Roster.jsx`:
```jsx
const playerData = [
  {
    name: 'Mike Doyle',
    position: 'Outfield',
    days: ['Sun', 'Mon', 'Tue']
  },
  // Add more players...
]
```

### Adding Hall of Fame Members

In `src/pages/HallOfFame.jsx`:
```jsx
const hallOfFamers = [
  {
    name: 'Player Name',
    years: '2020-2024',
    position: 'First Base',
    stats: { hrs: '45', rbis: '120', runs: '95' },
    bio: 'Legendary player who moved to another city.'
  },
  // Add more...
]
```

### Updating Standings

In `src/pages/Standings.jsx`:
```jsx
const currentStandings = {
  sunday: [
    { team: 'DBAG', w: '8', l: '2', pct: '.800', isDbag: true },
    { team: 'Other Team', w: '6', l: '4', pct: '.600' },
  ],
  // Update monday and tuesday leagues...
}
```

## 🎨 Design Features

- **Glassmorphism**: Frosted glass effects on cards and navigation
- **Animated Gradients**: Pulsing background blobs
- **Spring Animations**: Smooth, natural motion
- **Hover Effects**: Cards lift and scale on hover
- **Smooth Transitions**: Color and theme changes
- **Responsive Grid**: Adapts to all screen sizes

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
# Or use a different port
npm run dev -- --port 3000
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### GitHub Pages not updating
```bash
# Force rebuild and deploy
npm run build
npm run deploy
```

## 📄 License

This project is for the DBAG softball team. Feel free to fork and customize for your own team!

## 🤝 Contributing

Want to add features or fix bugs?
1. Fork the repo
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Open a Pull Request

## 📞 Contact

Questions? Reach out to the DBAG team!

---

Built with ❤️ and ⚾ for Danny's Big Ass Glove
