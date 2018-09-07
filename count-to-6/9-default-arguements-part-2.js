module.exports = function makeImportant(word, loudness = word.length) {
    return `${word}${"!".repeat(loudness)}`;
};