let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_btn");
let newGameBtn = document.querySelector("#new_btn");
let msgContainer = document.querySelector(".msg_container");
let msgs = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const resetGame = () =>{
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add("hide");
    
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if (turn0) { //player0
            box.innerText = "0";
            turn0 = false;
             box.style.color = "#FF3F7F";
        } else {//playerX
            box.innerText = "X";
            turn0 = true;
             box.style.color = "#8C00FF";
        }
        box.disabled = true;

                                                
    });
})

const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{ 
    msgs.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes ()
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val)
            }
        }
    }
}
newGameBtn.addEventListener("click", resetGame );
resetBtn.addEventListener("click", resetGame );
