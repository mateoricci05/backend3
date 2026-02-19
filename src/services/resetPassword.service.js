
import crypto from 'crypto';

export const generateResetToken = () => {
  return crypto.randomBytes(32).toString('hex');
};

export const isTokenExpired = (createdAt) => {
  const oneHour = 60 * 60 * 1000;
  return (Date.now() - new Date(createdAt).getTime()) > oneHour;
};
