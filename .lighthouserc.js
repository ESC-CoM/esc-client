module.exports = {
  ci: {
    collect: {
      startServerCommand: 'yarn start',
      url: [
        'http://localhost:3001',
        'http://localhost:3001/mymeeting/register',
        'http://localhost:3001/mymeeting/register/1',
      ],
      numberOfRuns: 1,
    },
    upload: {
      target: 'filesystem',
      outputDir: './lhci_reports',
      reportFilenamePattern: '%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%',
    },
  },
};
