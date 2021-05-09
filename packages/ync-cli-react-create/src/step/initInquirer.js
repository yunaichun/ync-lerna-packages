const inquirer = require('inquirer');
const fse = require('fs-extra');

// == 第一次选择
const choice = {
  type: 'list',
  message: '请选择你要创建的 React 项目模版',
  name: 'choice',
  choices: [
    'React Component',
    'create-react-app'
  ]
};

// == git 项目名称
const projectName = {
  type: 'input',
  name: 'projectName',
  message: 'project name',
  default: 'react-component',
  validate(input) {
    if (!input) {
      return 'project name is required.'
    }
    if (fse.existsSync(input)) {
      return 'project name of folder is exist.'
    }
    return true;
  }
};

// == npm 包名称
const libraryName = {
  type: 'input',
  name: 'libraryName',
  message: 'npm library name',
  default: 'react-component',
  validate(input) {
    if (input.length < 1) {
      return 'library name is required.'
    }
    return true;
  }
};

// == 作者
const authorName = {
  type: 'input',
  name: 'authorName',
  message: 'author name'
};

// == 版本号
const version = {
  type: 'input',
  name: 'version',
  message: 'version',
  default: '1.0.0'
};

// == 描述
const description = {
  type: 'input',
  name: 'description',
  message: 'description',
  default: 'This is a Project of React'
};

// == 关键字
const keywords = {
  type: 'input',
  name: 'keywords',
  message: 'keywords, such as React,xxx',
  filter: value => value.split(',')
};

// == git 仓库地址
const git = {
  type: 'input',
  name: 'git',
  message: 'git repo',
  default: 'https://github.com'
};

const initInquirer = async () => {
  const userInput1 = await inquirer.prompt([choice]);
  if (userInput1.choice === 'create-react-app') {
    return userInput1;
  }
  const userInput2 = await inquirer.prompt([
    projectName,
    libraryName,
    authorName,
    version,
    description,
    keywords,
    git,
  ]);
  return { ...userInput2, ...userInput1 };
}

module.exports = initInquirer;
