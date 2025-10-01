import { motion } from 'framer-motion'

const hallOfFamers = [
  {
    name: 'Player Name',
    years: '20XX-20XX',
    position: 'Position',
    stats: { hrs: 'XX', rbis: 'XXX', runs: 'XXX' },
    bio: 'Brief note about the player\'s contributions and where they are now.'
  },
  {
    name: 'Player Name',
    years: '20XX-20XX',
    position: 'Position',
    stats: { hrs: 'XX', rbis: 'XXX', runs: 'XXX' },
    bio: 'Brief note about the player\'s contributions and where they are now.'
  },
  // Add more hall of famers
]

export default function HallOfFame() {
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
        className="glass rounded-3xl p-8 shadow-2xl text-center"
      >
        <motion.h2
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="text-5xl font-black text-gray-900 dark:text-white mb-4"
        >
          Hall of Fame
        </motion.h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Honoring the legendary players who have been part of DBAG's journey
        </p>
      </motion.div>

      {/* Hall of Fame Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {hallOfFamers.map((player, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9, opacity: 0, rotateY: 90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="glass rounded-3xl p-8 shadow-2xl border-2 border-dbag-red/30 relative overflow-hidden group"
          >
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-dbag-red/20 to-transparent rounded-bl-full" />

            {/* Trophy Icon */}
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="text-6xl mb-4"
            >
              🏆
            </motion.div>

            <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-2">
              {player.name}
            </h3>
            <p className="text-dbag-red font-bold text-lg mb-1">{player.position}</p>
            <p className="text-gray-600 dark:text-gray-400 italic mb-6">{player.years}</p>

            {/* Stats Grid */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 mb-6">
              <h4 className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-4 uppercase tracking-wider">
                Career Stats
              </h4>
              <div className="grid grid-cols-3 gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-black text-dbag-red">{player.stats.hrs}</div>
                  <div className="text-xs font-semibold text-gray-600 dark:text-gray-400">HRs</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-black text-dbag-red">{player.stats.rbis}</div>
                  <div className="text-xs font-semibold text-gray-600 dark:text-gray-400">RBIs</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-black text-dbag-red">{player.stats.runs}</div>
                  <div className="text-xs font-semibold text-gray-600 dark:text-gray-400">Runs</div>
                </motion.div>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
              {player.bio}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
