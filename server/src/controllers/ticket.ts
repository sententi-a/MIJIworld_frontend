const sharp = require("sharp");

export const getTicket = async (image, date, name, company, note, message) => {
  try {
    await sharp(image)
      .composite([
        { input: date, top: 20, left: 10 },
        { input: name, top: 15, left: 50 },
        { input: company, top: 25, left: 50 },
        { input: note, top: 35, left: 50 },
        { input: message, top: 45, left: 50 },
      ])
      .toFile(`restaurant_ticket.png`);
  } catch (error) {
    console.error(error);
  }
};
