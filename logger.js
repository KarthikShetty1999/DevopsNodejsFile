const { createLogger, transports, format } = require("winston");
const Logger = createLogger({
  transports: [
    new transports.File({
      filename: "userData.log",
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
    }),
    new transports.File({
      filename: "user-errorData.log",
      level: "error",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});
module.exports = Logger ;