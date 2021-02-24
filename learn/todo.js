var elements = [];

function add(){
    if(document.querySelector(".addtxt").value !=""){
        elements.push(document.querySelector(".addtxt").value);
        display();
    }
}
function display(){
    document.querySelector('.list').innerHTML="";
    for(var i=0; i<elements.length;i++){
        document.querySelector('.list').innerHTML +=`<div class='element'>`+elements[i]+`
        <button type='button' class='btn-cls' onclick='strike(`+i+`)'>-</button>
        <input type='button' value='Del' onclick='del(`+i+`)'><div>`
    }
}
function strike(ele){
    if(elements[ele].includes("<strike>")){
        elements[ele]= elements[ele].replace("<strike>","")
        elements[ele]= elements[ele].replace("</strike>","")
    }else{
        elements[ele]="<strike>"+elements[ele]+"</strike>"
    }
    display()
}
function del(ele){
    elements.splice(ele,1);
    display();
}