module.exports = async page => {
    await page.type("#first-name", "Vinicyus");
    await page.type("#last-name", "Marques");
    await page.type("#email", "teste@email.com");
    await page.click("#agree");
}