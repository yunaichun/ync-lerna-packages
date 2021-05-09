module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'type-enum': [0],
    'type-empty': [0],
    'type-case': [0],
    'subject-empty': [0],
    'scope-case': [0],
    'commit-check': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'commit-check': ({ type, scope, subject }) => {
          const tips = '\n提交规范<type>(<scope>): <subject>';
          const types = ['build', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'];

          // == 验证 subject
          const emptySubject = !subject || subject.trim().length === 0;
          if (emptySubject) return [false, `subject 不允许为空 ${tips}`];

          // == 验证 type
          const illegalType = types.indexOf(type) < 0;
          if (illegalType) return [false, `type 请填写: ${types.join(', ')} ${tips}`];

          // == 验证 scope
          const scopePattern = /release|NoTicket|[A-Z]+-\d+/;
          if (!scopePattern.test(scope)) return [false, `scope 请填写: jiraID, NoTicket ${tips}`];
          return [true];
        },
      },
    },
  ],
};