let rbut1= document.getElementById("rb1");
let rbut2= document.getElementById("rb2");
let rbut3= document.getElementById("rb3");
let checkb= document.getElementById("cb1");
let but= document.getElementById("selectbtn");
let label=document.getElementById("lbl");
let label1=document.getElementById("lbl1");

but.onclick = function(){
    if(checkb.checked){
        label.textContent="agreed to terms and conditions";
        if(rbut1.checked){
            label1.textContent="Room 1 selected";
        }
        else if(rbut2.checked){
            label1.textContent="Room 2 selected";
        }
        else if(rbut3.checked){
            label1.textContent="Room 3 selected";
        }else{
            label1.textContent="No room selected yet";
        }
    }
    else{
        label.textContent="Please agree to terms and conditions! Room not selected";
    }

}