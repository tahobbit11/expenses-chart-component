//graph
const graphs = document.querySelectorAll(".graph");
const graphContainer = document.querySelectorAll(".graph-container")
// text
const day = document.querySelectorAll(".day");
const spending = document.querySelectorAll(".spending-day");
// date
const d = new Date();
let date = d.getDay();

// import
import data from './data.json' assert { type: 'json' };
// Breakdown JSON into individual elements
data.forEach((e,i) => {
    graphs[i].style.height = `${e.amount * 2.2}px`;
    day[i].innerHTML = e.day;
    spending[i].innerHTML = '$' + e.amount;
})

// I know that what's below is beyond cursed, HOWEVER it works so thats a win in my book :)
graphs.forEach((graph, index) => {
    spending.forEach((spend, spends) => {
        graph.addEventListener("click", () => {
            if(spend.style.visibility == "hidden" && spends == index){
                spend.style.visibility = "visible";
            } else {
                spend.style.visibility = "hidden";
            }    
        })
    })
    if(date === index){
        graph.style.backgroundColor = "hsl(186, 34%, 60%)";
    } else {
        graph.style.backgroundColor = "hsl(10, 79%, 65%)";
    }
});