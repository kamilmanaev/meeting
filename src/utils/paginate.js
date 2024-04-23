function paginate(items, size, currentPage) {
  const start = size * (currentPage - 1);
  return [...items].splice(start, 4);
}
export default paginate;
