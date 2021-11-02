const sentence = "hello there from lighthouse labs";
let speed = 50;

for (let i in sentence) {
  if (i < sentence.length -1) { 
    setTimeout(() => {
      process.stdout.write(sentence[i]); // keeps string on one line in node
    }, speed * i);
  } else {
    setTimeout(() => {
      console.log(sentence[i]); //console.log creates the new line once loop runs through
    }, speed * i);
  }
};

