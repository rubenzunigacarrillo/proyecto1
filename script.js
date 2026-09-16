import './node_modules/bootstrap/dist/js/bootstrap.min.js';

window.addEventListener("load", function(){
    function example1() {
        let elements = document.getElementsByClassName("main-text");
        let totalLeft = 0;
        const MOVE_VALUE = 1;
        let increase = true; 

        let w = window.innerWidth - 100;
        marginControler.max = w;
        elements[0].style.color = "#007a0a";
        
        setInterval(() => {
            // Set increase or decrease margin value
            if (totalLeft >= w) increase = false;
            else if (totalLeft <= 0) increase = true;
            // Apply increase or decrease margin value
            if (increase) totalLeft += MOVE_VALUE;
            else totalLeft -= MOVE_VALUE;
            // Implement margin value to HTML
            for (let i = 0; i < elements.length; i ++) {
                if (i === 1)
                    elements[1].innerHTML = "Margin de animación " + totalLeft + " px";
                else 
                    elements[i].style.marginLeft = totalLeft + "px";
            }
        }, 5);
        /*
            // Only first element moves
            setInterval(() => {
                elements[0].style.marginLeft = totalLeft + "px";
                elements[1].innerHTML = "Margin de arriba " + totalLeft + " px";
                if (totalLeft >= w) increase = false;
                else if (totalLeft <= 0) increase = true;

                if (increase) totalLeft += MOVE_VALUE;
                else totalLeft -= MOVE_VALUE;

                // console.log(elements[3].offsetWidth);
                marginControler.value = totalLeft;
            }, 0);
        */
        // setTimeout(()=>{
        //     let totalLeft = 2;
        //     console.log("Timeoute1 y su valor de totalLeft:" + totalLeft);
        // }, 2000);

        // setTimeout(()=>{
        //     console.log("Timeoute2 y su valor de totalLeft:" + totalLeft);
        // }, 2000);
    }

    example1();
    // moveWithRangeInput();

    function moveWithRangeInput() {    
        let changeMargin = false;
        let elements = document.getElementsByClassName("main-text");
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
        //     elements[0].style.marginLeft = marginControler.value + "px";
        // }, 1);
        setInterval(() => {
            if(changeMargin){
                elements[0].style.marginLeft = marginControler.value + "px";
                console.log(marginControler.value)
            }
        }, 1);

    }
});