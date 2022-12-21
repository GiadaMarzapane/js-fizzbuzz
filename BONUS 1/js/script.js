for (let index = 1; index <= 100; index++) {

    const main = document.querySelector('main.flex');
    const elementFizzBuzz = `<div class="box box-buzzfizz">FizzBuzz</div>`;
    const elementFizz = `<div class="box box-fizz">Fizz</div>`;
    const elementBuzz = `<div class="box box-buzz">Buzz</div>`;
    const element = `<div class="box">${index}</div>`;

    if ((index % 3 == 0) && (index % 5 == 0)){
        console.log('FIZZBUZZ');
        main.innerHTML += elementFizzBuzz;
    }
    else if (index % 3 == 0){
        console.log('FIZZ');
        main.innerHTML += elementFizz;
    }
    else if (index % 5 == 0){
        console.log('BUZZ'); 
        main.innerHTML += elementBuzz;
    }
    else{
        console.log(index);
        main.innerHTML += element;
    }
}