export const constraints = {
  email: {
    presence: true,
    email: true,
  },
  password: {
    presence: true,
    length: {
      minimum: 5,
    },
  },
  username: {
    presence: true,
    length: {
      minimum: 3,
      maximum: 20,
    },
    format: {
      pattern: '[a-z0-9]+',
      flags: 'i',
      message: 'can only contain a-z and 0-9',
    },
  },
};
