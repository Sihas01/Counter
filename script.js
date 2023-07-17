let tot = 0;
function change(n){

    //check reset is click or not
    if(n == 0){
        //if click set tot to 0
        tot = 0; 
        
    }else{
        //if not click do the calculation
        tot = tot + n ;
    }
 
   //get html tag 
   let count = document.getElementById("count");
   count.innerText = tot;
}

function background(){
    var m = document.getElementById("flexSwitchCheckDefault").value;
        alert(m);
}
