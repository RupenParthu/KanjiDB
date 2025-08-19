const JishoAPI = require('unofficial-jisho-api');
const jisho = new JishoAPI();

async function searchJisho() {
  try {
    const result = await jisho.searchForKanji('日');
    if (result.found) {
      console.log('Kanji Data for "日":');
      console.log('---');
      console.log(`Character: ${result.kanji}`);
      console.log(`Meaning: ${result.meaning}`);
      console.log(`Onyomi: ${result.onyomi.join(', ')}`);
      console.log(`Kun'yomi: ${result.kunyomi.join(', ')}`);
    } else {
      console.log('Kanji not found.');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

searchJisho();