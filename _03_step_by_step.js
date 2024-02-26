const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currengtActive = 1
next.addEventListener('click', () => {
    currengtActive++

    if (currengtActive > circles.length){
        currengtActive = circles.length
    }
    // console.log(currengtActive);
    update()
})

prev.addEventListener('click', () => {
    currengtActive--

    if (currengtActive < 1){
        currengtActive = 1
    }
    update()
})

function update(){
    circles.forEach((circle, idx) =>{
        if (idx < currengtActive){
            circle.classList.add('active')
        } else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = ((actives.length-1)/ (circles.length-1)*100)+'%';

    if (currengtActive === 1){
        prev.disabled = true

    }else{
        prev.disabled = false
        // next.disabled = false
        if (currengtActive == circles.length){
            submit.style.opacity = 1
            next.disabled = true
        }else{
            submit.style.opacity = 0
            next.disabled = false

        }
        // btn.prev.style.backgroundColor = red
    }


}

