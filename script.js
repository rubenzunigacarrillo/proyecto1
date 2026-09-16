function example1() {
    let element = document.getElementsByClassName("main-text");

    let totalLeft = 0;
    const I_VALUE = 1;
    let increase = true; 

    element[0].style.color = "#007a0a";
    console.log(marginControler.max = window.innerWidth);

    setInterval(() => {
        let w = window.innerWidth
        // console.log(element[0].offsetWidth)
        element[0].style.marginLeft = totalLeft + "px";
        element[1].innerHTML = "Margin de arriba " + totalLeft + " px";
        if (totalLeft >= w) increase = false;
        else if (totalLeft <= 0) increase = true;

        if (increase) totalLeft += I_VALUE;
        else totalLeft -= I_VALUE;

        // console.log(element[3].offsetWidth);
        marginControler.value = totalLeft;
    }, 5);

    setTimeout(()=>{
        let totalLeft = 2;
        console.log("Timeoute1 y su valor de totalLeft:" + totalLeft);
    }, 2000);

    setTimeout(()=>{
        console.log("Timeoute2 y su valor de totalLeft:" + totalLeft);
    }, 2000);
}

// example1();
t1();

function t1() {    
    let changeMargin = false;
    let element = document.getElementsByClassName("main-text");
    let valueUp = 0;
    let valueDown = 0;
    marginControler.max = window.innerWidth - 100;

    marginControler.addEventListener("mouseup", (e) => {
        valueUp = marginControler.value;
        changeMargin = false;
    })
    marginControler.addEventListener("mousedown", (e) => {
        valueDown = marginControler.value;
        changeMargin = true;        
    })

    // setInterval(() => {
    //     marginControler.value = valueDown - valueUp;
    //     element[0].style.marginLeft = marginControler.value + "px";
    // }, 1);
    setInterval(() => {
        if(changeMargin){
            element[0].style.marginLeft = marginControler.value + "px";
            console.log(marginControler.value)
        }
    }, 1);

}
