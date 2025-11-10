const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

  if (!Array.isArray(members)) {
    return false;
  }

  let team = members
  .filter(mem => typeof mem === 'string')
  .map(mem => mem.trim()[0].toUpperCase())
  .sort()
  .join('')

  return team;
}

module.exports = {
  createDreamTeam
};
