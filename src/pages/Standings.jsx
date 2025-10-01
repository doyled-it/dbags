import { motion } from 'framer-motion'

const currentStandings = {
  sunday: [
    { team: 'DBAG', w: 'X', l: 'X', pct: '.XXX', isDbag: true },
    { team: 'Team 2', w: 'X', l: 'X', pct: '.XXX' },
    // Add more teams
  ],
  monday: [
    { team: 'DBAG', w: 'X', l: 'X', pct: '.XXX', isDbag: true },
    { team: 'Team 2', w: 'X', l: 'X', pct: '.XXX' },
  ],
  tuesday: [
    { team: 'DBAG', w: 'X', l: 'X', pct: '.XXX', isDbag: true },
    { team: 'Team 2', w: 'X', l: 'X', pct: '.XXX' },
  ],
}

const pastSeasons = [
  { year: '2024', record: 'XX-XX', finish: 'Xth place' },
  { year: '2023', record: 'XX-XX', finish: 'Xth place' },
]

export default function Standings() {
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
        <h2 className="text-5xl font-black text-gray-900 dark:text-white">
          Standings
        </h2>
      </motion.div>

      {/* Current Season */}
      <div className="space-y-6">
        <motion.h3
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-3xl font-bold text-gray-900 dark:text-white"
        >
          Current Season (2025)
        </motion.h3>

        {Object.entries(currentStandings).map(([league, teams], leagueIndex) => (
          <motion.div
            key={league}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: leagueIndex * 0.1 }}
            className="glass rounded-2xl overflow-hidden shadow-xl"
          >
            <div className={`p-4 font-bold text-white text-xl ${
              league === 'monday' ? 'bg-gray-900' : 'bg-gradient-to-r from-dbag-red to-red-600'
            }`}>
              {league.charAt(0).toUpperCase() + league.slice(1)} League
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                      Team
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                      W
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                      L
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                      PCT
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {teams.map((team, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (leagueIndex * 0.1) + (index * 0.05) }}
                      whileHover={{ scale: 1.01, backgroundColor: 'rgba(220, 38, 38, 0.05)' }}
                      className={`${
                        team.isDbag
                          ? 'bg-dbag-red/10 dark:bg-dbag-red/20 font-bold'
                          : 'bg-white dark:bg-gray-900'
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                        {team.team}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-gray-700 dark:text-gray-300">
                        {team.w}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-gray-700 dark:text-gray-300">
                        {team.l}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-gray-700 dark:text-gray-300">
                        {team.pct}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Historical Standings */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="space-y-4"
      >
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
          Past Seasons
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pastSeasons.map((season, index) => (
            <motion.div
              key={season.year}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 + (index * 0.1) }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="glass rounded-xl p-6 border-l-4 border-dbag-red shadow-lg"
            >
              <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                {season.year} Season
              </h4>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                <span className="font-bold">Record:</span> {season.record}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                <span className="font-bold">Finish:</span> {season.finish}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
