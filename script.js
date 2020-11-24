//  burger

let x = document.getElementById('contain')

x.addEventListener('click', burger);

function burger(){
    let element = document.getElementById('nav')

    element.classList.toggle('open')
    x.classList.toggle('change')
}
// slow scroll

// let nav = document.querySelectorAll('#nav');

// nav.forEach(ev => {
//     ev.addEventListener('click',(evt) =>{
//         evt.preventDefault();
//         let calculator = document.getElementById('calc')
//         // let calculator = document.getElementById('calc')
//         // calculator.scrollIntoView();
//         if(ev.classList.contains('c')) {
//             calculator.scrollIntoView()
//         }

        
//     })
// });

// document.querySelector('.clc').addEventListener('click',(evt)=>{
//     evt.preventDefault()
//     document.getElementById('calc').scrollIntoView();
// })

function classContains(){
    if(this.classList.contains('clc')){
        document.getElementById('calc').scrollIntoView();
    }
}

// calcl

const output = document.querySelector('output')

const div = document.createElement('div')

div.classList.add('keyboard')
document.querySelector('.calculator').appendChild(div)

'C CE % / 7 8 9 * 4 5 6 - 1 2 3 + 0 ( ) ='.split(' ')
    .map(symbol => {
        div.insertAdjacentHTML('beforeend', `<button value="${symbol}">${symbol}</button>`)
    })

div.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON') {
        calc(e.target.value)
    }
})

document.addEventListener('keydown', e => {
    if ((e.key).match(/[0-9%\/*\-+\(\)=]|Backspace|Enter/)) calc(e.key)
})

function calc(value) {
    if (value.match(/=|Enter/)) {
        try {
            if (output.textContent !== '') {
                output.textContent = Math.trunc(math.evaluate(output.textContent))
            }
        } catch {
            let oldValue = output.textContent
            let newValue = 'недопустимое выражение'

            output.textContent = newValue
            const timer = setTimeout(() => {
                output.textContent = oldValue
                clearTimeout(timer)
            }, 1500)
        }
    } else if (value === 'C') {
        output.textContent = ''
    } else if (value.match(/CE|Backspace/)) {
        output.textContent = output.textContent.substring(0, output.textContent.length - 1)
    } else {
        output.textContent += value
    }
}

// todo

function onPageLoaded(){
    const input = document.querySelector("input[type='text']");
    const ul = document.querySelector('ul.todos')

    function createTodo(){
        const li = document.createElement('li');
        const textSpan = document.createElement('span')
        textSpan.classList.add("todo-text")
        const newTodo = input.value;
        textSpan.append(newTodo)

        const deleteBtn = document.createElement('span')
        deleteBtn.classList.add('todo-trash');
        const icon = document.createElement('i')
        icon.classList.add('todo-trash')
        
    }

}