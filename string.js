

// word.toLowerCase -balaca herfle
// word.toUpperCase -boyuk herfle
// char - tek simvollari saxlamaq ucundur, stringi array kimi dusunmemize komek edir
//concat stringleri birlesdirmek ucundur
// trim- bosluqlari silmek ucundur trimend-sondan trimstart-evvelden
//endwith and startwith 0 ne ile baslayib bitdiyini yoxlayir 
//includes - her hansi bir herfin olub olmadigini yoxlayir  
//indexof- indexi gosterir  -lastindexof -tersden
//repeat - tekrarlamaq ucun istifade olunur
//padend - istediyimiz qeder tekrarlanma eleyir
//slice - kesme emeliyyatu elemek ucundur
//split stringi arraya ayirir


// let word = "JavaScript";
// console.log(word.charAt(3));

// let sentence = "This is a simple sentence.";
// console.log(sentence.indexOf("is"));

// let sentences = "This is a sample sentence.";
// console.log(sentences.split(" "));

// let phrase = "Programming is fun!";
// console.log(phrase.substring(0,11));
// console.log(phrase.slice(15,18));


//1)
// let originalString = "Hello, World!";
// let reverseString = " ";
// for (let i = originalString.length; i >=0; i--) {
//     reverseString += originalString.charAt(i);
// }
// console.log(reverseString);



// 2)
let sentence = "javascript is fun";
let a = sentence.split(" ");
let allWords;
let newSentence =[];
// newSentence = a[i].charAt(0).toUpperCase();
for (let i = 0; i < a.length; i++) {
    //   allWords =a[i][0].toUpperCase();
   for (let j = 0; j < a[i].length; j++) {
    if (a[i][j]== a[i][0] ) {
       allWords=a[i][j].toUpperCase();
    }
    else{
        allWords= a[i][j].toLowerCase();
    }
        if (allWords==allWords.toUpperCase()) {
            newSentence.push(" "+allWords);
        }
        else{
            newSentence.push(allWords);
        }  
}
}
console.log(newSentence.join("").trimStart());



//3)
// let arr = ["a","ı","o","u"];
// let text = "JavaScript is awesome!";
// let count=0;
// for (let i = 0; i < text.length; i++){
//     for (let j = 0; j < arr.length; j++) {
//         if (text[i]== arr[j]) {
//             count++
//           }
        
//     }
// }
// console.log(count);



//4)

// let sentences = "This is a sample sentence with long words.";
// let arrSentences = sentences.split(" ");
// let b ;
// let maxLengthWord;
// // debugger;
// let maxLength=0;
// for (let i = 0; i < arrSentences.length; i++) {
//    b= arrSentences[i].length;   //  4 2 1 6 
// //    console.log(b); 
//     if (maxLength<b) {
//         maxLength=b;
//         maxLengthWord = arrSentences[i];
//     }
// }
// console.log(maxLengthWord);