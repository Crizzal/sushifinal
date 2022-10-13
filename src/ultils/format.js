export const formatCurrency = (value) => {
  if (!value) return "0đ";
  return value.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};
