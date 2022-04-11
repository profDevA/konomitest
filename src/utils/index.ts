import moment from "moment";

export const randomDate = (start: Date, end: Date): Date => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

export const randomId = (range: number): number => {
  return Math.floor(Math.random() * range);
};

export const randomStatus = (): number => {
  return Math.floor(Math.random() * 3);
};

export const dollarUS = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const getExpiryDate = (
  createdTimeStamp: string,
  leaseEnd: number,
  blockNumber: number
): string => {
  if (!createdTimeStamp || !leaseEnd || !blockNumber) return "";
  const expiryDate =
    moment(createdTimeStamp).unix() + 3 * (leaseEnd - blockNumber);
  return moment.unix(expiryDate).format("DD/MMM/YYYY HH:MM");
};
