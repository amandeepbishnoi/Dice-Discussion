// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
// const { type } = require("jquery");
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function openProject() {
    document.getElementById("b1").setAttribute("disabled", "true");
    var aman = document.getElementById("projectName").value;
    var display = aman;
    document.getElementById('createProject').textContent = display;
}
function openQuestion() {
    document.getElementById("Question").style.visibility = "visible";
}

function Qsummary() {
    var element = document.getElementById("show");
    var noOfNodes = element.childNodes.length;
    var data = document.createElement("div");
    for (var i = 0; i < noOfNodes; i++) {
        var summaryDiv = document.createElement("div");
        summaryDiv.style.border = "2px solid black";
        let quesName = element.childNodes[i].childNodes[0].childNodes[1].childNodes[2].innerHTML;
        let qheading = element.childNodes[i].childNodes[0].childNodes[3].childNodes[1];
        let qtemp = document.createElement("H3");
        qtemp.innerHTML = qheading.innerHTML;
        qtemp.setAttribute('style', 'margin:5px');
        let answer = element.childNodes[i].childNodes[0].childNodes[3].childNodes[2].childNodes[0].childNodes[3].value;
        let block = document.createElement("DIV");

        let upperheading = document.createElement("DIV");
        upperheading.setAttribute("style", "display:flex;")
        let qheadtemp = document.createElement("H3");
        qheadtemp.setAttribute('style', 'margin:5px');
        qheadtemp.innerHTML = quesName;
        upperheading.appendChild(qheadtemp);
        upperheading.appendChild(qtemp);

        block.appendChild(upperheading);
        let txtboxQ = document.createElement("TEXTAREA");
        txtboxQ.setAttribute('style', "margin:1vw;width:95%");
        txtboxQ.setAttribute("rows", "1");
        txtboxQ.setAttribute('placeholder', "Add Question filter");
        block.appendChild(txtboxQ);
        let ansblock = document.createElement("DIV");
        //the answers are assigned with the id= Question number
        //later answers can be retrived from this id and stored in from of array and punch will be (index+1)
        ansblock.setAttribute("id", JSON.stringify(quesName))
        let ansArr = answer.split('\n');
        let count = 1;
        ansArr.map(eachPart => {
            //condition if the eachPart is null or has a empty line skip it
            if (eachPart && eachPart.length > 0) {
                let part = document.createElement("H5");
                let txtbox = document.createElement("TEXTAREA");
                txtbox.setAttribute("rows", "1")
                txtbox.setAttribute("cols", "10")
                txtbox.setAttribute("placeholder", "Answer filter");
                let eachAns = document.createElement("DIV");
                eachAns.setAttribute("style", "display:flex;justify-content: space-between;")
                part.setAttribute('style', 'margin:0;margin-right:5px');
                part.innerHTML = qheadtemp.innerHTML + "_" + count + ". " + eachPart;
                eachAns.appendChild(part);
                let rating = document.createElement("DIV");
                for (let i = 0; i < 5; i++) {
                    let eachStar = document.createElement("INPUT");
                    eachStar.setAttribute("type", "checkbox")
                    eachStar.setAttribute("style","margin:2px")
                    rating.appendChild(eachStar);
                }
                if (checkType() == 3) {
                    eachAns.appendChild(rating);
                }
                eachAns.appendChild(txtbox);
                ansblock.appendChild(eachAns);
                count++;
            }
        })
        ansblock.setAttribute('style', 'padding:15px;color:black;max-height:20vh;overflow:scroll');
        block.appendChild(ansblock);
        summaryDiv.innerHTML = block.innerHTML;
        data.appendChild(summaryDiv);
    }
    document.getElementById("Qdata").innerHTML = data.innerHTML;
    document.getElementById("summary").style.visibility = "visible";
    document.getElementById("backdrop").style.visibility = "visible";
}
function out() {
    var element = document.getElementById("show");
    var noOfNodes = element.childNodes.length;
    for (var i = 0; i < noOfNodes; i++) {
        element.childNodes[i].childNodes[0].childNodes[1].style.visibility = "visible";
    }
    document.getElementById("summary").style.visibility = "hidden";
    document.getElementById("backdrop").style.visibility = "hidden";
}
function createQuestion() {
    var deep = document.getElementById("question").value;
    var display = deep;
    document.getElementById("Q").style.visibility = "visible";
    document.getElementById('Q').textContent = display;
}

function createOption() {
    var deep = document.getElementById("question").value;
    var display = deep;
    document.getElementById("Q").style.visibility = "visible";
    document.getElementById('Q').textContent = display;
}

function openOption() {
    document.getElementById("O").style.visibility = "visible";
}

let divIdCount = "1";
let divIdCount2 = "1";
function deleteBlock(Id) {
    Id.remove();
    divIdCount--;
    refresh();
}
var tempOutput = "";
function refresh() {

}
function checkType() {
    var e = document.getElementById("type");
    var resp = e.value;
    if (resp == "Single Response") {
        console.log("get Single input");
        return 1;
    } else if (resp == "Multi Response") {
        console.log("get Multi input");
        return 2;
    } else {
        return 3;
    }
}
var output = "";
function addnewquestion() {
    var title = document.getElementById("question").value;
    var content = document.getElementById("type").value;
    document.getElementById("question").value = "Question";
    var divId = "Qdiv" + divIdCount2;
    spanid = 'qspam_' + divIdCount;
    output =
        `<div class="panel">
  	<div><button onclick="deleteBlock(${divId})">x</button>   <span id =` + spanid + `>Q${divIdCount}</span></div>
  	<div class="panel-body">
  			<h3 class="panel-title"><i> ${title} <i></h3>
        <p>${content}</p>
         <textarea id=${divId + 'textArea'} name="txt" rows="7" cols="100"></textarea>`

    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", divId);

    // newDiv.setAttribute("class","show");

    newDiv.innerHTML = output;
    document.getElementById("show").appendChild(newDiv);
    divIdCount++;
    divIdCount2++;
    document.getElementById("Sbutton").style.visibility = "visible";
}