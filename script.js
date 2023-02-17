//your code here
let evaluatedText = document.getElementById("evaluatedText");
      let letterCount = document.getElementById("letterCount");

      evaluatedText.addEventListener("input", lettertext);

      function lettertext() {
        let word = evaluatedText.value;
        let letter = word.length;
        letterCount.innerText = letter;
      }