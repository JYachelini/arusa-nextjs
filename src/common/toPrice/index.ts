export const toPrice = (n: number): string => {
  return n.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
};
