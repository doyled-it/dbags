import { motion } from 'framer-motion'

const playerData = [
  { name: 'Player Name', position: 'Position', days: ['Sun', 'Mon', 'Tue'] },
  { name: 'Player Name', position: 'Position', days: ['Sun'] },
  { name: 'Player Name', position: 'Position', days: ['Mon', 'Tue'] },
  // Add more players as needed
]

export default function Roster() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass rounded-3xl p-8 shadow-2xl"
      >
        <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-4">
          Current Roster
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 italic">2025 Season</p>
      </motion.div>

      {/* Player Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {playerData.map((player, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass rounded-2xl p-6 shadow-xl border border-white/20 cursor-pointer group"
          >
            <div className="relative">
              {/* Player Avatar Placeholder */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-dbag-red to-red-600 flex items-center justify-center text-white text-3xl font-black shadow-lg"
              >
                {player.name.charAt(0)}
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
                {player.name}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-4">
                {player.position}
              </p>

              {/* Days Badges */}
              <div className="flex justify-center gap-2 flex-wrap">
                {player.days.map((day) => (
                  <motion.span
                    key={day}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`px-4 py-2 rounded-lg font-bold text-white shadow-lg ${
                      day === 'Mon'
                        ? 'bg-gray-900 dark:bg-black'
                        : 'bg-gradient-to-r from-dbag-red to-red-600'
                    }`}
                  >
                    {day}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="glass rounded-2xl p-8 shadow-xl"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Schedule Legend
        </h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="px-4 py-2 rounded-lg bg-gradient-to-r from-dbag-red to-red-600 text-white font-bold shadow-lg">
              Sun
            </span>
            <span className="text-gray-700 dark:text-gray-300">Sunday League</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-4 py-2 rounded-lg bg-gray-900 dark:bg-black text-white font-bold shadow-lg">
              Mon
            </span>
            <span className="text-gray-700 dark:text-gray-300">Monday League</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-4 py-2 rounded-lg bg-gradient-to-r from-dbag-red to-red-600 text-white font-bold shadow-lg">
              Tue
            </span>
            <span className="text-gray-700 dark:text-gray-300">Tuesday League</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
