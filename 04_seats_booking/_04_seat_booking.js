const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const poster = document.getElementById('poster');

const movieSelect = document.getElementById('movie');
// var img = document.createElement('img'); 


let ticketprice = +movieSelect.value;

// function changeMovie(){
//     console.log(ticketprice);
//     if (ticketprice == 300){
//         document.getElementById("poster",display ='block')
//     }
//     else{
//         document.getElementById("poster",display ='none')  
//     }
// }

// console.log(ticketprice);



    //              this is a string value 
    //              using + to convert to number value


// update total  price
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
 
    count.innerHTML = selectedSeatsCount;
    total.innerHTML = selectedSeatsCount * ticketprice;

}

// seats click Event
// function declaration 
        // function(f_name){.....};
        // or f_name => {....};

container.addEventListener('click', e =>{
    if (
        e.target.classList.contains('seat') 
        && !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});
        

// replacing image
// function ReplacingImage(){
//     poster.src="deadpool2.jpg"; 
// }



// movie select event
movieSelect.addEventListener('change', e => {
    // ticketprice = +e.target.value;
    x = e.target.value.slice(-2);
    console.log(x, typeof x);

    if (x === "m1"){
        poster.src="images/m1.webp";
    }
    else if (x === "m2"){
        poster.src="images/m2.webp"; 
    }
    else if (x === "m3"){
        poster.src="images/m3.webp"; 
    }
    else if (x === "m4"){
        poster.src="images/m4.webp"; 
    }
    else if (x === "m5"){
        poster.src="images/m5.webp";
    }

    ticketprice = +e.target.value.slice(0,3);
    console.log(ticketprice);


    // if(ticketprice == 250){
    //     screen.
    // }
    updateSelectedCount();
});





 