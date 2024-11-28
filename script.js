function firstWord(string) {
	
  let num = string.trim().split(' ')

  return num[0]
} 

// Do not change the code below
  
const s = prompt("Enter String:");
alert(firstWord(s));
