
export const getChildArray = (obj) => {
  for (const key in obj) {
    if (obj[key] instanceof Array) return obj[key];
  }
};
