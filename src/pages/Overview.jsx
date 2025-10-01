import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
}

export default function Overview() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Hero Section */}
      <motion.div
        variants={itemVariants}
        className="glass rounded-3xl p-12 shadow-2xl border border-white/20"
      >
        <motion.h2
          className="text-5xl font-black text-gray-900 dark:text-white mb-6"
          whileHover={{ scale: 1.02 }}
        >
          Welcome to <span className="text-gradient">DBAG</span>
        </motion.h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Danny's Big Ass Glove is a competitive and fun-loving softball team spanning multiple years and Volo seasons.
        </p>
      </motion.div>

      {/* Current Season Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { day: 'Sunday', color: 'from-dbag-red to-red-600', icon: '🌅' },
          { day: 'Monday', color: 'from-gray-800 to-black', icon: '🌙' },
          { day: 'Tuesday', color: 'from-dbag-red to-red-600', icon: '⚡' },
        ].map((league, index) => (
          <motion.div
            key={league.day}
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className={`glass rounded-2xl p-8 bg-gradient-to-br ${league.color} text-white shadow-xl cursor-pointer`}
          >
            <div className="text-5xl mb-4">{league.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{league.day} League</h3>
            <p className="text-white/80">Currently Active</p>
          </motion.div>
        ))}
      </div>

      {/* About Section */}
      <motion.div
        variants={itemVariants}
        className="glass rounded-3xl p-12 shadow-2xl"
      >
        <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          About the Team
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          DBAG has been a fixture in the Volo softball community, bringing together talented players
          and creating lasting memories on the diamond. Our team represents dedication, camaraderie,
          and a love for the game.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            { label: 'Years Active', value: 'X+', icon: '📅' },
            { label: 'Championships', value: 'X', icon: '🏆' },
            { label: 'Team Members', value: 'XX', icon: '👥' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-dbag-red/10 to-red-500/10 dark:from-dbag-red/20 dark:to-red-500/20 rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-black text-dbag-red mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
