function wordCounter(sentence){
    const wordFrequencyMap = new Map();

    const words = sentence.split(/\s+/)     //split the sentence into words using whitespace as separator

    for(const word of words){
        const cleanWord = word.toLowerCase().replace(',', '')   //remove non-alphanumeric characters and convert to lowercase

        if(cleanWord.length > 0){
            wordFrequencyMap.set(cleanWord, (wordFrequencyMap.get(cleanWord) || 0) + 1);
        }
    }
    return wordFrequencyMap;
}

const sentence = "please please submit your assignment on time, your assignment are important";
const result = wordCounter(sentence);

console.log(result);