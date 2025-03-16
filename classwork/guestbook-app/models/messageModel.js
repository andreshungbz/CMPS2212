const messages = [];

export const retrieveMessages = () => {
  return messages;
};

export const addMessage = (name, message) => {
  const newMessage = { name, message };
  messages.push(newMessage);
  return newMessage;
};
