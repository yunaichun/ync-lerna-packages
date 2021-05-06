module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'empty-msg': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'empty-msg': ({ subject }) => {
          const emptySubject = !subject || subject.trim().length === 0;
          if (emptySubject) return [false, `提交 type 不允许为空`];
          return [true];
        },
      },
    },
  ],
};
