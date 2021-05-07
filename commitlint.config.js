module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'type-empty': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'type-empty': (options) => {
          console.log(123, options)
          // const emptySubject = !subject || subject.trim().length === 0;
          // if (emptySubject) return [false, `提交 type 不允许为空`];
          // return [true];
          return [false, `提交 type 不允许为空`];
        },
      },
    },
  ],
};