// use function 
// new


function marks(m1){
        if(m1<=100 && m1>=90){
            console.log("A");
        }else if(m1<=89 && m1>=80){
            console.log("B")
        }else if(m1<=79 && m1>=70){
            console.log("C")
        }else if(m1<=69 && m1>=60){
            console.log("D")
        }else if(m1<60){
            console.log("F")
    }
    }
    marks(55);

    // without function 

    var m1=55;
    if(m1<=100 && m1>=90){
        console.log("A");
    }else if(m1<=89 && m1>=80){
        console.log("B")
    }else if(m1<=79 && m1>=70){
        console.log("C")
    }else if(m1<=69 && m1>=60){
        console.log("D")
    }else if(m1<60){
        console.log("F")
    }
