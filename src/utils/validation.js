// Simple email validator
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Password strength validator
export const isStrongPassword = (password) => {
  return password.length >= 8;
};
