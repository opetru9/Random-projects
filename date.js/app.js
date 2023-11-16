const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')
let mode = 'time'

function update(){
    output.textContent = format(mode)
}
update()

setInterval(update,100)


function format(formatMode){
    const now = new Date()

    switch (formatMode){
        case 'date':
            return now.toLocaleDateString()
        case 'time':
            return now.toLocaleTimeString() + '.' + now.getMilliseconds()
        case 'full':
            return now.toLocaleDateString() +' '+ now.toLocaleTimeString()
        default:
            return now.toLocaleTimeString()
    }
}

fullBtn.onclick = btnClick('full') 
dateBtn.onclick = btnClick('date')
timeBtn.onclick = btnClick('time')

function btnClick(name){
    return function(){
        mode = name
        update()
    }
}
// fullBtn.onclick = () => {
//     mode = 'full'
//     update()
// }
// dateBtn.onclick = () => {
//     mode = 'date'
//     update()
// }
// timeBtn.onclick = () => {
//     mode = 'time'
//     update()
// }





/*
now.getFullYear()           now.setFullYear(2055)
now.getMonth()              now.setMonth(2)
now.getDate()               now.setDate(3)
now.getHours()              now.setHours(5)
now.getMinutes()            now.setMinutes(14)
now.getSeconds()            now.setSeconds(25)
now.getMilliseconds()       now.setMilliseconds(212)    

now.toDateString()
now.toTimeString()
now.toLocaleDateString()
now.toLocaleTimeString()
*/
 