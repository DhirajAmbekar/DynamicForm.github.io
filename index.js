function sub(){
    document.getElementsByClassName("start-screen")[0].style.display="none"
    document.getElementById("first-screen").style.display="block"
}

document.getElementById("second-viewer").addEventListener('click',fun1)
function fun1(){
    document.getElementById("first-screen").style.display="none"
    document.getElementById("second-screen").style.display="block"
}




function omg() {
    bool = true
    if (document.getElementById("gun").value == "Text") {
        document.getElementById("clean1").style.display = "block"
        document.getElementById("him").placeholder = document.getElementById("gun").value;
        bool = false
    }
    if (document.getElementById("gun").value == "number") {
        document.getElementById("clean2").style.display = "block"
        document.getElementById("him1").placeholder = document.getElementById("gun").value;
        bool = false
    }
    if (document.getElementById("gun").value == "email") {
        document.getElementById("clean3").style.display = "block"
        document.getElementById("him2").placeholder = document.getElementById("gun").value;
        bool = false
    }
    if (document.getElementById("gun").value == "radio") {
        document.getElementById("clean4").style.display = "block"
        bool = false
    }
    if (document.getElementById("gun").value == "select") {
        document.getElementById("clean5").style.display = "block"
        document.getElementById("him3").style.display = "none"
        document.getElementById("disps").style.display = "none"
        document.getElementById("letinin5").style.display = "block"
        bool = false
    }
    if (document.getElementById("gun").value == "checkbox") {
        document.getElementById("clean6").style.display = "block"
        document.getElementById("him4").style.display = "none"
        document.getElementById("disps2").style.display = "none"
        bool = false
    }
    if(document.getElementById("gun").value == "Submit"){
        document.getElementById("clean7").style.display = "block"
        document.getElementById("him5").style.display = "none"  
        document.getElementById("disps3").style.display = "none"
        alert("Is Your Form Completed ?")
        bool = false
    }

    return bool
}


function tom() {
    flag = true
    if (document.getElementById("gun").value == "Text") {
        let m = document.getElementById("bom")
        document.getElementById("addedform").innerText = m.value + "  :-"
        m.style.display = "none";
        document.getElementById("ron").style.display = "none";
        flag = false
    }
    if (document.getElementById("gun").value == "number") {
        let m = document.getElementById("bom1")
        document.getElementById("addedform1").innerText = m.value + "  :-"
        m.style.display = "none";
        document.getElementById("ron1").style.display = "none";
        flag = false
    }
    if (document.getElementById("gun").value == "email") {
        let m = document.getElementById("bom2")
        document.getElementById("addedform2").innerText = m.value + "  :-"
        m.style.display = "none";
        document.getElementById("ron2").style.display = "none";
        flag = false
    }
    if (document.getElementById("gun").value == "radio") {
        let m = document.getElementById("bom3")
        document.getElementById("addedform3").innerText = m.value + "  :-"
        m.style.display = "none";
        document.getElementById("ron3").style.display = "none";
        let om = document.getElementById("him3")
        if (document.getElementById("him3").value != "") {
            let ino = document.getElementById("rdo")
            let crtrdo = document.createElement("input")
            let crtlabel = document.createElement("label");
            let divide = document.createElement("br")
            crtrdo.type = "radio"
            crtrdo.className = "baby"
            crtrdo.value = om.value
            let crtlabelin = document.createTextNode(om.value)
            crtlabel.appendChild(crtlabelin)
            ino.appendChild(crtrdo)
            ino.appendChild(crtlabel)
            ino.appendChild(divide)
            om.value = ""
        }

        flag = false
    }
    if (document.getElementById("gun").value == "select") {
        let m = document.getElementById("bom4")
        document.getElementById("addedform4").innerText = m.value + "  :-"
        m.style.display = "none";
        document.getElementById("ron4").style.display = "none";
        if(document.getElementById("him4").value != ""){
                let readin = document.getElementById("him4")
                let sel = document.getElementById("jingat")
                let crob = document.createElement("option")
                crob.className = "monika"
                crob.value = readin.value
                let finch = document.createTextNode(readin.value)
                crob.appendChild(finch)
                sel.appendChild(crob)
            console.log(crob)
                readin.value = ""
        }
        flag = false
    }
    if (document.getElementById("gun").value == "checkbox") {
        let m = document.getElementById("bom5")
        document.getElementById("addedform5").innerText = m.value + "  :-"
        m.style.display = "none";
        document.getElementById("ron5").style.display = "none";
        let om = document.getElementById("him5")
        if (om.value != "") {
            let ino = document.getElementById("rdo2")
            let crtrdo = document.createElement("input")
            let crtlabel = document.createElement("label")
            let divide = document.createElement("br")
            crtrdo.type = "checkbox"
            crtrdo.className = "baby1"
            crtrdo.value = om.value
            let crtlabelin = document.createTextNode(om.value)
            crtlabel.appendChild(crtlabelin)
            ino.appendChild(crtrdo)
            ino.appendChild(crtlabel)
            ino.appendChild(divide)
            om.value = ""
        }
        flag = false
    }
    if(document.getElementById("gun").value == "Submit"){
        document.getElementsByClassName("lowerform")[0].style.display = "block"
        document.getElementById("sep").style.display = "none"
        document.getElementById("sep1").style.display = "none"
        document.getElementById("sep2").style.display = "none"
        document.getElementById("sep3").style.display = "none"
        document.getElementById("sep4").style.display = "none"
        document.getElementById("sep5").style.display = "none"
        if(document.getElementById("addedform").innerHTML != "" ){
            document.getElementById("tomcruse").style.display = "block"
        document.getElementById("let1").innerHTML += document.getElementById("addedform").innerText
        }
        if(document.getElementById("addedform1").innerHTML != "" ){
            document.getElementById("tomcruse2").style.display = "block"
            document.getElementById("let2").innerHTML += document.getElementById("addedform1").innerText 
        }
        if(document.getElementById("addedform2").innerHTML != "" ){
            document.getElementById("tomcruse3").style.display = "block"
            document.getElementById("let3").innerHTML += document.getElementById("addedform2").innerText 
        }
        let om = document.getElementById("him3")
        if(document.getElementById("addedform3").innerHTML != "" ){
            document.getElementById("tomcruse4").style.display = "block"
            document.getElementById("let4").innerHTML += document.getElementById("addedform3").innerText 
            document.getElementById("letinin").innerHTML += document.getElementById("rdo").innerHTML
        }
        if(document.getElementById("addedform4").innerHTML != "" ){
            document.getElementById("tomcruse5").style.display = "block"
            document.getElementById("let5").innerHTML += document.getElementById("addedform4").innerText 
            document.getElementById("letinin5").innerHTML += document.getElementById("jingat").innerHTML
        }
        if(document.getElementById("addedform5").innerHTML != "" ){
            document.getElementById("tomcruse6").style.display = "block"
            document.getElementById("let6").innerHTML += document.getElementById("addedform5").innerText 
            document.getElementById("letinin6").innerHTML += document.getElementById("rdo2").innerHTML
        }
        flag = false
    }
    return flag
}
document.getElementById("sep").addEventListener("click", (l) => {
    document.getElementById("clean1").style.display = "none"
})
document.getElementById("sep1").addEventListener("click", (l) => {
    document.getElementById("clean2").style.display = "none"
})
document.getElementById("sep2").addEventListener("click", (l) => {
    document.getElementById("clean3").style.display = "none"
})
document.getElementById("sep3").addEventListener("click", (l) => {
    document.getElementById("clean4").style.display = "none"
})
document.getElementById("sep4").addEventListener("click", (l) => {
    document.getElementById("clean5").style.display = "none"
})
document.getElementById("sep5").addEventListener("click", (l) => {
    document.getElementById("clean6").style.display = "none"
})
function fin21(){
 
    document.getElementsByClassName("leftbox")[0].style.display = "block";  
    if(document.getElementById("addedform").innerHTML != ""){
        document.getElementById("box1").innerHTML += document.getElementById("addedform").innerText
        document.getElementById("inbox").innerHTML = document.getElementById("cream1").value
    }
    if(document.getElementById("addedform1").innerHTML != ""){
        document.getElementById("box2").innerHTML += document.getElementById("addedform1").innerText
        document.getElementById("inbox2").innerHTML = document.getElementById("cream2").value
    }
    if(document.getElementById("addedform2").innerHTML != ""){
        document.getElementById("box3").innerHTML += document.getElementById("addedform2").innerText
        document.getElementById("inbox3").innerHTML = document.getElementById("cream3").value
    }
    if(document.getElementById("addedform3").innerHTML != ""){
        document.getElementById("box4").innerHTML += document.getElementById("addedform3").innerText
        var k =document.querySelectorAll('.baby')
        var l = document.querySelector('#inbox4')
        for(m=0;m<k.length;m++){
            if(k[m].checked && k[m].type=="radio"){
                l.innerHTML = k[m].value + "<br>"
            }
        }
    }
    if(document.getElementById("addedform4").innerHTML != ""){
        document.getElementById("box5").innerHTML += document.getElementById("addedform4").innerText
        var l = document.querySelector('#inbox5')
         l.innerHTML = document.getElementById("letinin5").value
    }
    if(document.getElementById("addedform5").innerHTML != ""){
        document.getElementById("box6").innerHTML += document.getElementById("addedform5").innerText
        var k =document.querySelectorAll('.baby1')
        var l = document.querySelector('#inbox6')
        for(m=0;m<k.length;m++){
            if(k[m].checked && k[m].type=="checkbox"){
                l.innerHTML += k[m].value + "<br>"
            }
        }
}
document.getElementById("second-screen").style.display = "none";
}