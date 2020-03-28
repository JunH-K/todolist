const getMillisecondsToDate = milliseconds => {
  const date = new Date(milliseconds);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
};

export { getMillisecondsToDate };