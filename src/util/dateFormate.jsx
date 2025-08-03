const isValidDate = (date) => {
  return date instanceof Date && !isNaN(date.getTime());
};

//1: yyyy/mm/dd (ex: 2025/08/03)
export const formatDateWithDigits = (date) => {
  if (!isValidDate(date)) {
    return 'Invalid Date';
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}/${month}/${day}`;
};

// 2: yyyy/MMM/dd (ex: 2025/Aug/03)
export const formatDateWithMonthName = (date) => {
  if (!isValidDate(date)) {
    return 'Invalid Date';
  }

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}/${month}/${day}`;
};