module.exports = findDateBeforeTodayByMonths = (months) => {
  const today = new Date();
  let date = new Date();
  date.setMonth(date.getMonth() - months);
  return date;
}
