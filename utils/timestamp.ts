const getTHMonth = (month: number) => {
  switch (month) {
    case 0:
      return 'มกราคม';
    case 1:
      return 'กุมภาพันธ์';
    case 2:
      return 'มีนาคม';
    case 3:
      return 'เมษายน';
    case 4:
      return 'พฤษภาคม';
    case 5:
      return 'มิถุนายน';
    case 6:
      return 'กรกฎาคม';
    case 7:
      return 'สิงหาคม';
    case 8:
      return 'กันยายน';
    case 9:
      return 'ตุลาคม';
    case 10:
      return 'พฤศจิกายน';
    case 11:
      return 'ธันวาคม';
    default:
      break;
  }
};

/**
 * Get date from timestamp
 * @param time time in timestamp
 */
export const getDate = (time: any) => {
  const date = new Date(Number(time * 1000));
  const month = getTHMonth(date.getMonth());
  const year = date.getFullYear() + 543;
  const hours =
    `${date.getHours()}`.length === 1 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    `${date.getMinutes()}`.length === 1
      ? `0${date.getMinutes()}`
      : date.getMinutes();
  return `${date.getDate()} ${month} ${year} เวลา ${hours}:${minutes} น.`;
};
