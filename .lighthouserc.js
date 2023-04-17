module.exports = {
  ci: {
    collect: {
      startServerCommand: 'yarn start',
      url: ['http://localhost:8080'],
      numberOfRuns: 3,
    },
  },
};
