/**
 * Formats a date to a human-readable string.
 * @param {string} date - The date to format.
 * @returns {string} - The formatted date string.
 */
export const formatDate = (date) => {
  return date
    ? new Date(date).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "Present";
};

/**
 * Calculates the number of months between two dates and formats the result into years and months.
 * @param {string} startDate - The start date.
 * @param {string} endDate - The end date.
 * @returns {string} - The formatted duration string.
 */
export const calculateDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  // Ensure at least one month is counted
  const months = totalMonths === 0 ? 1 : totalMonths;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  let duration = "";
  if (years > 0) {
    duration += `${years} year${years > 1 ? "s" : ""}`;
  }
  if (remainingMonths > 0) {
    if (years > 0) duration += " ";
    duration += `${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
  }

  return duration;
};
