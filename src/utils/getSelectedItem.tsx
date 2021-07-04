export const getSelectedItem = (code: string, items: []) => {
  for (const key in items) {
    if (items[key] === code) return items[key];
  }
};
