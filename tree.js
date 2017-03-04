function tree(num) {
  let width = num*2-1
  let string =''
  let j = 1
  while (j <= num ) {
    let numberOfWhite = Math.floor((width-j)/2)
    let numOfStar = j
   console.log(numberOfWhite)
   for (var i = 1; i<=width; i++) {
     if (numOfStar === 0) {
          string += '\n'
     } else if (i <= numberOfWhite) {
       string += ' '
     } else {
       string += '*'
       numOfStar -= 1
     }
  }
    j ++
  }
  return string
}


console.log(tree(4))
