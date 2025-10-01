import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Overview from './pages/Overview'
import Roster from './pages/Roster'
import HallOfFame from './pages/HallOfFame'
import Standings from './pages/Standings'
import Stats from './pages/Stats'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-500">
        <Router>
          {/* Animated Background Elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-20 -right-20 w-96 h-96 bg-dbag-red/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Header */}
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative bg-gradient-to-r from-dbag-red-dark via-dbag-red to-red-600 text-white overflow-hidden"
          >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }} />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 py-12 text-center">
              <button
                onClick={toggleDarkMode}
                className="absolute top-4 right-4 glass p-3 rounded-xl hover:scale-110 transition-transform duration-200"
              >
                <span className="text-2xl">{darkMode ? '☀️' : '🌙'}</span>
              </button>

              <motion.h1
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                className="text-6xl md:text-7xl font-black tracking-tight mb-4"
              >
                Danny's Big Ass Glove
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl font-light tracking-wider opacity-90"
              >
                DBAG SOFTBALL
              </motion.p>
            </div>
          </motion.header>

          {/* Navigation */}
          <nav className="sticky top-0 z-50 glass bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-center space-x-1">
                {[
                  { to: '/', label: 'Overview' },
                  { to: '/roster', label: 'Roster' },
                  { to: '/hall-of-fame', label: 'Hall of Fame' },
                  { to: '/standings', label: 'Standings' },
                  { to: '/stats', label: 'Stats' },
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="relative px-6 py-4 font-semibold text-gray-700 dark:text-gray-200 hover:text-dbag-red dark:hover:text-dbag-red transition-colors duration-200 group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-dbag-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="relative max-w-7xl mx-auto px-4 py-12">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/roster" element={<Roster />} />
              <Route path="/hall-of-fame" element={<HallOfFame />} />
              <Route path="/standings" element={<Standings />} />
              <Route path="/stats" element={<Stats />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="relative mt-20 bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <p className="text-gray-400">
                &copy; 2025 Danny's Big Ass Glove. All rights reserved.
              </p>
            </div>
          </footer>
        </Router>
      </div>
    </div>
  )
}

export default App
