export const getAllCategories = (data) => {
  return ['all', ...new Set(data.map((item) => item.category))];
};
