export const getDate = (time: any) => {
  const date = new Date(Number(time * 1000));
  return `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}-${date.getHours()}:${date.getMinutes()}น`;
};
