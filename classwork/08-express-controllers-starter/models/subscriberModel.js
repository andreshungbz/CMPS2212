let signups = [];

export const getAllSignups = () => {
  return signups;
};

export const addSignup = (name, email) => {
  const newSignup = { name, email };
  signups.push(newSignup);
  return newSignup;
};
