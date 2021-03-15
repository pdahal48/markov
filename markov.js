/** Textual markov chain generator */

let obj = {}

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }
  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
      let words = this.words

      words.forEach(function (element, index, array) {
        if (obj[element] in obj) {
         obj[element].push(array[index+1])
        } else{
          obj[element] = [array[index+1]]
        }
      })
  }

  /** return random text from chains */
  makeText(numWords = 100) {
    // TODO
  }
}



// let mm = new MarkovMachine("the cat in the hat");
