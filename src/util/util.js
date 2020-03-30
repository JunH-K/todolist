/**
 *
 * @param milliseconds 밀리초
 * @returns {string} YYYY.MM.DD hh.mm:ss
 */
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

const isRefIdValid = refIds => {
  return /(^@[@0-9]*)$/g.test(refIds);
};

/**
 *
 * @param str 추출할 문자열
 * @param separator 추출기준
 * @returns {*} separator 기준으로 추출하고 빈값들은 제거 후 return
 */
const extractFromString = (str, separator) => {
  const values = str.split(separator);
  return values.filter(Boolean);
};

export { getMillisecondsToDate, isRefIdValid, extractFromString };
