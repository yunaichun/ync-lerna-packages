module.exports = {
  branch: 'staging',
  flows: {
    check: {
      cmd: {
        branch: ['git', 'branch'],
        diffLocal: ['git', 'diff', '--stat'],
        diffRemote: ['git', 'diff', '--stat', 'origin/staging'],
      }
    },
    scan: {},
    install: { cmd: ['npm', 'ci'] },
    test: { cmd: ['npm', 'run', 'test'] },
    build: { cmd: ['npm', 'run', 'build:stg'] },
    put: { cmd: ['npm', 'run', 'deploy:stg'] },
  },
  hosts: {
  }
};
