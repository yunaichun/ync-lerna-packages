const initHelp = require('./help');
const initVerify = require('./verify');

class Creation {
    async do () {
        await initHelp();
        await initVerify();
    }
}

module.exports = Creation;
