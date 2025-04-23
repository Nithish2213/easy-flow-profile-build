
/**
 * Combines multiple class names into a single string
 * @param {string[]} classes - Array of class names to combine
 * @returns {string} - Combined class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
