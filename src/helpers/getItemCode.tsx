export const getItemCode = (code: string, items: [string, any]): string => {
  const codes = items.map((item) => item.code);

  const [itemCode] = codes.filter((c) => c === code);

  return itemCode;
};
