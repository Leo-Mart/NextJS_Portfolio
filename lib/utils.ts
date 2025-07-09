const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-EU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export { formatDate };
