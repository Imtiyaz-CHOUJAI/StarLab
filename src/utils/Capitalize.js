/**
 * Capitalize strings first letter
 *
 * @param {String} string
 */
export const Capitalize = string => {
  if (typeof string !== "string") {
    return "";
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
};
