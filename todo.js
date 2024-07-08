
    
    function save(){
        var b=document.getElementById("inputs")
        var n=document.getElementById("warning")
        warning.textContent=""
        if (b.value!==""){
            var a=document.getElementById("table")
            var c=document.createElement("tr")
            var d=document.createElement("td")
            d.textContent=b.value
            var e=document.createElement("td")
            var f=document.createElement("input")
            f.setAttribute("type", "checkbox");
            f.setAttribute("id","box")
            f.onclick = delet;
            e.appendChild(f)
            c.appendChild(d)
            c.appendChild(e)
            a.appendChild(c)
            b.value=""
        
    }
    else{
        var d=document.createElement("div")
        d.textContent="give input"
        d.style.color="red"
        n.append(d)
    }
}
    function delet(event){
        event.target.parentElement.parentElement.remove();
    }
    function Key(event){
        if(event.keyCode==13){
            save()
        }
    }

