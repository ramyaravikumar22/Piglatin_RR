//get a reference to both the input and output 

const textInput = document.getElementById('textInput');
const textOutput = document.getElementById('textOutput');

//create array of vowels 

const vowels = ['a', 'e', 'i', 'o', 'u'];
const ending = 'ay';

//now we want to check anytime a user enters something into the input we need to update the output

textInput.addEventListener('keyup', (e) => {
    const input = e.target.value; //e is the even; target is the target element 
    console.log(input);

    const words = input.split(' ');
    //ranslate the each word for pig latin
    const output = words.map(word => convertToPigLatin(word)).join(' ')
    //check if it ends in a vowel, then just add the ending vowel
    textOutput.innerText = output; 
    
});
const convertToPigLatin = (input) => {
    if(vowels.includes(input[0])) {
        output = input + ending;
    } else {
        //a word starting with sm 'smile' then it should get all the consonants 
        let consonants = '';
        for (let i = 0; i < input.length; i++) {
            if (vowels.includes(input[i])) {
                break;
            }
            consonants += input[i]   
        }
        output = input.substring(consonants.length) + consonants + ending;
    }

    //translate pig latin and display new text
   // take that input and lets set this text for output
   return output;
};