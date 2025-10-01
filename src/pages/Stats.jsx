import { motion } from 'framer-motion'
import { useState } from 'react'

const statsData = {
  '2025': [
    { player: 'Player Name', hrs: 'X', rbis: 'XX', runs: 'XX' },
    { player: 'Player Name', hrs: 'X', rbis: 'XX', runs: 'XX' },
  ],
  'all-time': [
    { player: 'Player Name', hrs: 'XX', rbis: 'XXX', runs: 'XXX' },
    { player: 'Player Name', hrs: 'XX', rbis: 'XXX', runs: 'XXX' },
  ],
}

const leaders = [
  { category: 'Home Runs', player: 'Player Name', stat: 'XX HRs', icon: '💥' },
  { category: 'RBIs', player: 'Player Name', stat: 'XX RBIs', icon: '🎯' },
  { category: 'Runs', player: 'Player Name', stat: 'XX Runs', icon: '🏃' },
]

export default function Stats() {
  const [selectedSeason, setSelectedSeason] = useState('2025')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass rounded-3xl p-8 shadow-2xl"
      >
        <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-6">
          Player Statistics
        </h2>

        {/* Season Filter */}
        <div className="flex items-center gap-4">
          <label className="text-xl font-bold text-gray-700 dark:text-gray-300">
            Season:
          </label>
          <select
            value={selectedSeason}
            onChange={(e) => setSelectedSeason(e.target.value)}
            className="px-6 py-3 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold text-lg shadow-lg focus:ring-4 focus:ring-dbag-red/50 focus:border-dbag-red transition-all cursor-pointer"
          >
            <option value="all-time">All-Time</option>
            <option value="2025">2025 Season</option>
            <option value="2024">2024 Season</option>
            <option value="2023">2023 Season</option>
          </select>
        </div>
      </motion.div>

      {/* Season Leaders */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
          Season Leaders
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.category}
              initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ delay: 0.3 + (index * 0.1) }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-8 bg-gradient-to-br from-dbag-red to-red-600 text-white shadow-2xl text-center relative overflow-hidden"
            >
              {/* Animated Background */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '30px 30px'
                }}
              />

              <div className="relative z-10">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="text-5xl mb-4"
                >
                  {leader.icon}
                </motion.div>
                <h4 className="text-lg font-bold mb-3 opacity-90">
                  {leader.category}
                </h4>
                <p className="text-2xl font-black mb-2">{leader.player}</p>
                <p className="text-3xl font-black">{leader.stat}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Table */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="glass rounded-2xl overflow-hidden shadow-2xl"
      >
        <div className="bg-gradient-to-r from-dbag-red to-red-600 p-6">
          <h3 className="text-2xl font-bold text-white">
            {selectedSeason === 'all-time' ? 'All-Time' : selectedSeason} Statistics
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Player
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  HRs
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  RBIs
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Runs
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {(statsData[selectedSeason] || statsData['2025']).map((player, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + (index * 0.05) }}
                  whileHover={{ scale: 1.01, backgroundColor: 'rgba(220, 38, 38, 0.05)' }}
                  className="bg-white dark:bg-gray-900"
                >
                  <td className="px-6 py-4 whitespace-nowrap font-bold text-gray-900 dark:text-white">
                    {player.player}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-gray-700 dark:text-gray-300 font-semibold">
                    {player.hrs}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-gray-700 dark:text-gray-300 font-semibold">
                    {player.rbis}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-gray-700 dark:text-gray-300 font-semibold">
                    {player.runs}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  )
}
