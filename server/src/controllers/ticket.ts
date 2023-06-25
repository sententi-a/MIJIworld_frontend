const sharp = require("sharp");
const fs = require("fs");

// Process ticket image(add text on it) and help client to download the image
export const getTicket = async (
  restName,
  date,
  name,
  company,
  note,
  message
) => {
  const imagePath = `src/assets/tickets/${restName}.png`;

  try {
    const imageBuffer = await fs.promises.readFile(imagePath);

    const text = Buffer.from(
      `<svg width="1000" height="417">
        <style>
          text {font-size: 18px; font-family: Noto Sans KR; font-weight: bold; fill: #525253;}    
        </style>
        <text x="14%" y="42%" text-anchor="middle">${date}</text>
        <text x="79%" y="21%" text-anchor="middle">${name}</text>
        <text x="79%" y="37%" text-anchor="middle">${company}</text>
        <text x="79%" y="53%" text-anchor="middle">${note}</text>
        <text x="79%" y="69%" text-anchor="middle">${message}</text>
      </svg>`
    );

    await sharp(imageBuffer)
      .composite([{ input: text, top: 0, left: 0 }])
      .toFile(`restaurant_ticket.png`);
  } catch (error) {
    console.error(error);
  }
};
