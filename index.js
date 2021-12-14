let btn = document.querySelector('button');
let result = 'нет'

function goCheck(x1,x2) {
    
    for(let i = 0; i < x1.length; i++) {
        let c = i
        for(let y = 0; y < x2.length; y++) {
            if (x1[i] === x2[y]) {
                result = 'да'
                if (y === x2.length - 1) { // Есть ли еще символы? ДА? i++
                    alert(result)
                    return
                } else {
                    i++
                }
            } else {
                result = 'нет'
                i = c
                break // конец цикла, начнем сначала!
            }
        }
    }
    alert(result)
    result = 'нет'
}

function giveMeMyStr() {
    let inputOne = document.getElementById(id='input_one').value;
    let inputTwo = document.getElementById(id='input_two').value;
    
    if (inputOne.length >= inputTwo.length) {
        goCheck(inputOne, inputTwo)
    } else {
        alert(
            `В строке ${inputTwo} больше символов, чем в ${inputOne} на целых ${inputTwo.length - inputOne.length}.`
            )
    }
}