
function addtask(){
    if(document.getElementById('input-box').value ==='') {
        alert("you must write something!");
    }
    else{
        var li=document.createElement("li");
        var inputvalue=document.getElementById('input-box').value;
        var t = document.createTextNode(inputvalue);
        li.appendChild(t);
        document.getElementById('list-container').appendChild(li);
        var span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
                 
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        this.parentElement.style.display = "none";
        }
    }
    }
    document.getElementById("input-box").value='';
}

var close = document.getElementsByTagName("span");

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}
, false);
