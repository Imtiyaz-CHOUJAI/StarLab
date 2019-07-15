/**
 * Purify array from duplicates
 *
 * @param {array} array
 * @param {string} key
 * @return {array}
 */
export const Purify = (array, key) => {
  const unique = array
    .map(e => e[key])

    // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)

    // eliminate the dead keys & store unique objects
    .filter(e => array[e])
    .map(e => array[e]);

  return unique;
};
