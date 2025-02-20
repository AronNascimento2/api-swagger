const ensuredAuthenticated = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send();
  }

  const parts = token.split(" ");
  if (parts.length !== 2) {
    return res.status(401).send();
  }

  const [, user] = parts;

  if (user === "admin") {
    return next();
  }

  return res.status(401).send();
};

module.exports = ensuredAuthenticated;
