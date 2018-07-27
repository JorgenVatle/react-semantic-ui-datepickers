import format from 'date-fns/format';
import isBefore from 'date-fns/is_before';
import isEqual from 'date-fns/is_equal';
import startOfDay from 'date-fns/start_of_day';

function isSelectable(date, minDate, maxDate) {
  if (
    (minDate && isBefore(date, minDate)) ||
    (maxDate && isBefore(maxDate, date))
  ) {
    return false;
  }

  return true;
}

export const getToday = (selected, minDate, maxDate) => {
  const today = new Date();

  return {
    date: startOfDay(today),
    selectable: isSelectable(today, minDate, maxDate),
    selected: isEqual(today, selected),
    today: true,
  };
};

export const formatDate = (date, dateFormat) =>
  date ? format(startOfDay(date), dateFormat) : undefined;

export const omit = (keysToOmit, obj) => {
  const newObj = { ...obj };

  keysToOmit.forEach(key => delete newObj[key]);

  return newObj;
};

export const pick = (keysToPick, obj) => {
  const newObj = {};

  keysToPick.forEach(key => {
    newObj[key] = obj[key];
  });

  return newObj;
};