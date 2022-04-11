export const randomDate = (start: Date, end: Date): Date => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

export const randomId = (range: number): number => {
  return Math.floor(Math.random() * range);
};
