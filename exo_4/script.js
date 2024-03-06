const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

const morseToLatin = {
  "-": "T",
  "--": "M",
  "---": "O",
  "--.": "G",
  "--.-": "Q",
  "--..": "Z",
  "-.": "N",
  "-.-": "K",
  "-.--": "Y",
  "-.-.": "C",
  "-..": "D",
  "-..-": "X",
  "-...": "B",
  ".": "E",
  ".-": "A",
  ".--": "W",
  ".---": "J",
  ".--.": "P",
  ".-.": "R",
  ".-..": "L",
  "..": "I",
  "..-": "U",
  "..-.": "F",
  "...": "S",
  "...-": "V",
  "....": "H",
};

function getLatinCharacterList(str) {
  return str.split("");
}

function getMorseCharacterList(str) {
  return str.replaceAll("/", " / ").split(" ");
}

function translateLatinCharacter(char) {
  if (char === " ") return " / ";
  else {
    console.log(`${char} to`, latinToMorse[char]);
    return latinToMorse[char];
  }
}

function translateMorseCharacter(char) {
  if (char === "/") return " ";
  else {
    console.log(`${char} to`, morseToLatin[char]);
    return morseToLatin[char];
  }
}

function encode(str) {
  let charList = getLatinCharacterList(str);
  let encodedList = [];
  for (let i = 0; i < charList.length; i++) {
    encodedList.push(translateLatinCharacter(charList[i]));
    //console.log(encodedList);
    if (
      i != charList.length - 1 &&
      charList[i] != " " &&
      charList[i + 1] != " "
    )
      encodedList.push(" ");
  }
  return encodedList.join("");
}

function decode(str) {
  let charList = getMorseCharacterList(str);
  let decodedList = [];
  for (let i = 0; i < charList.length; i++) {
    decodedList.push(translateMorseCharacter(charList[i]));
  }
  return decodedList.join("");
}

/*
console.log(encode('A BC'));
console.log(getMorseCharacterList(".- / -... -.-."));
console.log(translateMorseCharacter("/"));
console.log(translateMorseCharacter(".-"));
console.log(decode(".- / -... -.-."));
*/

const textInput = document.getElementById("latin");
const morseInput = document.getElementById("morse");

const encodeBtn = document.getElementById("encode_btn");
const decodeBtn = document.getElementById("decode_btn");
const clearBtn = document.getElementById("clear");

encodeBtn.addEventListener("click", () => {
  console.log("encode");
  morseInput.value = encode(textInput.value.toUpperCase());
});

decodeBtn.addEventListener("click", () => {
  console.log("decode");
  textInput.value = decode(morseInput.value);
});

clearBtn.addEventListener("click", () => {
  console.log("clear");
  morseInput.value = "";
  textInput.value = "";
});
