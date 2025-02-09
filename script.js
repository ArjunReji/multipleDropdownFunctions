function output() {
  if (num.value !== '') {
    const limit = Number(num.value);
    
    
    if (mySelection.value === 'fibonacci') {
      fibonacciSeries(limit);
    }


    else if (mySelection.value === 'armstrong') {
      const checkArmstrong = armstrongNumberCheck(limit)
      if (checkArmstrong === limit) {
        out.innerHTML = `${limit} is an Armstrong Number`
      }
      else {
        out.innerHTML = `${limit} is an not Armstrong Number`
      }
    }



    else {
      out.innerHTML = `${reverseNumber(limit)} is the Reversed Number of  ${limit}`
    }



    function fibonacciSeries(numb) {
      let temp = 0;
      let num1 = 0, num2 = 1;
      out.innerHTML = `fibonacci series upto ${numb} : ${num1}, `;
      for (let i = 0; temp <= numb; i++) {
        temp = num1 + num2;
        out.innerHTML += `${num2}, `
        num1 = num2;
        num2 = temp;
      }
    }


    function armstrongNumberCheck(numb) {
      let sum = 0;
      const numberString = numb.toString();
      const numberOfDigits = numberString.length;

      for (let i = 0; i < numberOfDigits; i++) {
        sum += Math.pow(Number(numberString[i]), numberOfDigits);
      }
      return sum;
    }


    function reverseNumber(numb) {
      let result = numb.toString().split('').reverse().join('');
      return result;
    }


    
  }
  else {
    alert(`enter a valid number`);
  }
}