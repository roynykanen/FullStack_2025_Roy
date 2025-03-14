function checkCustomHeader(req, res, next) {
  if (!req.headers['x-custom-header']) {
    return res.status(400).json({ error: 'X-Custom-Header is missing' });
  }
  next();
}

module.exports = checkCustomHeader;
