type nestedObject = {};
export const getChildArray = (obj: nestedObject) => {
  for (const key in obj) {
    if (obj[key] instanceof Array) return obj[key];
  }
};
