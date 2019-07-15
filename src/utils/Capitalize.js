/**
 * Capitalize strings first letter
 *
 * @param {string} string
 * @return {string}
 */
export const Capitalize = string => {
  if (typeof string !== "string") {
    return "";
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
};
