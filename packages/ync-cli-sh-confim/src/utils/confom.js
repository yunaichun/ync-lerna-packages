const inquirer = require('inquirer');
const confirmation = require('confirmation');

const inputConfim = async ({
  message
} = {
    message: `Are you confirm to excute?`
  }) => {
  const { field } = await inquirer.prompt([{
    type: 'confirm',
    name: 'field',
    message,
    default: false
  }]);
  return field;
}

const popConfim = async ({
  title,
  message,
  OK,
  close,
} = {
    title: 'Warning',
    message: 'You will delete your items, are you sure?',
    OK: '[O] OK',
    close: '[X] Close',
  }) => {
  const confim = await confirmation(
    title,
    message,
    OK,
    close
  )
  return confim;
}
module.exports = {
  inputConfim,
  popConfim,
};
