'use strict';

{
  // 1
  const scores = [80, 90, 40, 70];
  console.log(scores[0]);
  console.log(scores[1]);
  console.log(scores[2]);
  console.log(scores[3]);
}

{
  // 2
  const scores = [80, 90, 40, 70];

  scores.forEach((score, index) => {
    console.log(`${index}: ${score}`);
  });
}

{
  // 3
  const prices = [180, 190, 200];

  const updatedPrices = prices.map((price) => {
    return price + 20;
  })

  console.log(updatedPrices);

}

{
  // 4
  const prices = [180, 190, 200];

  const updatedPrices = prices.map(price => price + 20);

  console.log(updatedPrices);
}


{
  // 5
  const numbers = [1, 4, 7, 8, 10];

  const evenNumbers = numbers.filter((number) => {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  });

  console.log(evenNumbers);
}




{
  // 6

  const numbers = [1, 4, 7, 8, 10];

  const evenNumbers = numbers.filter(number =>
    number % 2 === 0);

  console.log(evenNumbers);

}

{
  // 7
  const str = "hello";
  console.log(str.length);

  // 8
  console.log(str.slice(2, 4));

  // 9
  console.log(str.slice(1, 2));
  console.log(str.substring(1,2));

}

{
  // 10
  const t = [2023, 7, 29];
  console.log(t.join("/"));

}

{
  // 11
  const scores = [10, 3, 9];
  let sum = 0;

  scores.forEach((score) => {
    sum += score;
  });

  console.log(`${sum}`);

  // 12
  let avg = sum / scores.length
  // console.log(`${sum / scores.length}`);
  console.log(avg);

  // 13
  // console.log(Math.floor(`${sum / scores.length}`));
  console.log(Math.floor(avg));

  // 14
  // console.log(Math.ceil(`${sum / scores.length}`));
  console.log(Math.ceil(avg));

  // 15
  // console.log(Math.round(`${sum / scores.length}`));
  console.log(Math.round(avg));

  // 16
  // console.log((sum / scores.length).toFixed(3));
  console.log((avg).toFixed(3));

  // 17
  // function getRandomInteger(max) {
  //   return Math.floor(Math.random() * (max + 1));
  // }
  // for (let i = 0; i < 10; i++) {
  //   const n = getRandomInteger(6);
  //   console.log(`${n}`);
  // }

  console.log(Math.floor(Math.random()*(6)+1));

}


