module.exports = {
  branch: 'master',
  flows: {
    check: {
      cmd: {
        branch: ['git', 'branch'],
        diffLocal: ['git', 'diff', '--stat'],
        diffRemote: ['git', 'diff', '--stat', 'origin/master'],
      }
    },
    scan: {},
    install: { cmd: ['npm', 'ci'] },
    test: { cmd: ['npm', 'run', 'test'] },
    build: { cmd: ['npm', 'run', 'build'] },
    pre: { cmd: ['npm', 'run', 'deploy'] },
    put: { cmd: ['npm', 'run', 'deploy'] },
    notice: {}
  },
  hosts: {
  }
}