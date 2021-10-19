export function getTime(currentDate) {
  // const currentDate = new Date;

  const year = currentDate.getFullYear();
  const mothByte = currentDate.getMonth() + 1;
  const month = (mothByte < 10) ? `0${mothByte}` : mothByte;
  const dayOfMonth = (currentDate.getDate() < 10) ? `0${currentDate.getDate()}` : currentDate.getDate();
  const localDate = `${dayOfMonth}.${month}.${year}г`;
  
  return localDate;
}