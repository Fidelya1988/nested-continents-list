export const getSelectedItem = (code: string, items: []): void => {
  for (const key in items) {
    if (items[key] === code) return items[key];
  }
};
