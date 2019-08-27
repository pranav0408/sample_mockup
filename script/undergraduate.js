var i = 1;

function next(){
    
    if( i<3 ){
        var text = ".text" + i;
        var next = ".text" + (i+1);
        document.querySelector(text).style.transform = " translate(-50%,-50%)  scale(0)";
        document.querySelector(next).style.transform = " translate(-50%,-50%) scale(1) ";
        i++;
    }
    else{
        document.querySelector('.text2').style.transform = " translate(-50%,-50%) scale(0) ";
        document.querySelector('.text3').style.transform = " translate(-50%,-50%) scale(0) ";
        document.querySelector('.text1').style.transform = " translate(-50%,-50%) scale(1) ";
        i=1;
    }

}

function prev(){
    
    if( i>1 ){
        var text = ".text" + i;
        var next = ".text" + (i-1);
        document.querySelector(text).style.transform = " translate(-50%,-50%)  scale(0)";
        document.querySelector(next).style.transform = " translate(-50%,-50%) scale(1) ";
        i--;
    }
    else{
        document.querySelector('.text1').style.transform = " translate(-50%,-50%) scale(0) ";
        document.querySelector('.text2').style.transform = " translate(-50%,-50%) scale(0) ";
        document.querySelector('.text3').style.transform = " translate(-50%,-50%) scale(1) ";
        i=3;
    }
    
}