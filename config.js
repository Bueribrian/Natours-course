module.exports = {
  PORT: 4000 || process.env.PORT,
  morganConfig:
    ':id \n // Method: :method \n // URL: :url \n // Response time: :response-time\n // Date: :date[web]\n ---------'
};
