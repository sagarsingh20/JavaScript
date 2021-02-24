var data=[]; 
var count=0;

let commentObj={"comments":""}

let replyObj =  {"reply":"", "like":0};


function add(){
    let commentData={}
    commentData={...commentObj}
    commentData.comments=document.querySelector(".comment").value;
    data.push(commentData);
    displayData();
    document.querySelector(".comment").value="";
}

function displayData(){
    document.getElementsByTagName('div').innerHTML=""
   
    for(var i=0; i<data.length;i++){
        var div = document.createElement('div');
        div.setAttribute('id','comment'+i)
        div.innerHTML=`<h4><img src="./assests/av.jpeg" alt="Avatar" class="avatar">
        `+data[i].comments+`
        <input type="button" class="bttn" value="reply" onclick="reply(`+i+`)">
        <i onclick="clikeLike(`+i+`)" class="fa fa-thumbs-up"></i>
        <input type="button" class="bttn" value="Delete" onclick="del(`+i+`)">
        <input type="button" class="bttn" value="edit" onclick="edit(`+i+`)"></h4>`
    }
    document.querySelector('.show').appendChild(div)
}

function display(i){
    var par= document.createElement("p")
    par.id="par"
    par.style="margin-left:7rem;margin-block-start:0rem;margin-block-end: 0.5rem;"
    for(let j=0;j<data[i]['reply'].length;j++){
        par.innerText=data[i].reply[j].reply
        document.getElementById('comment'+i).appendChild(par)
    }
    console.log(data)
}

function reply(elem){
 
    var txt=document.createElement('input');
    txt.style="margin: 0 6rem;"
    txt.placeholder= data[elem].comments;
    document.getElementById('comment'+elem).appendChild(txt);
    
    var bttn = document.createElement('button');
    bttn.id="but"
    bttn.innerHTML="Post";
    document.querySelector('#comment'+elem).appendChild(bttn);
    bttn.addEventListener('click',function (){
        let temp={}
        temp=Object.assign(temp,replyObj)
        temp.reply=txt.value;
        !data[elem].reply? data[elem].reply=[]:null
        data[elem].reply.push(temp);
        display(elem);
        txt.remove();
        bttn.remove();
        //console.log(data)
    })
}

function clikeLike(x){
    console.log(data[x])
    let chk={};
    chk=Object.assign(chk, replyObj);
    chk.like=1;
    !data[x].reply? data[x].reply=[]:null
    data[x].reply.push(chk);
   // console.log(data);
    
    // console.log(data)
    // console.log(x)
    // console.log(count)
}

function deleteAll(){
    data.splice(0);
    displayData()
}

function del(ele){
    data.splice(ele,1)
    displayData();
}

function update(ele){
    data.splice(ele,1,document.querySelector('.comnty').value);
    displayData();
}

function edit(index){
    document.querySelector('.show').innerHTML="";
    document.querySelector('.show').innerHTML=`<input class="comnty" type="text" value="`+data[index].comments+`">
    <input type="button" class="bttn" value="update" onclick="update(`+index+`)">`
}

