const tasksDiv = document.getElementById("tasks");
const washBtn = document.getElementById("wash-btn");
const mowBtn = document.getElementById("mow-btn");
const pullBtn = document.getElementById("pull-btn");
const totalCost = document.getElementById("total-cost");
const invoiceBtn = document.getElementById("invoice-btn");
let tasks = [];

const washCar = {
  name: "Wash Car",
  price: "10",
};

const mowLawn = {
  name: "Mow Lawn",
  price: "20",
};

const pullWeeds = {
  name: "Pull Weeds",
  price: "30",
};

washBtn.addEventListener("click", function () {
  if (tasks.indexOf(washCar) == -1) {
    tasks.push(washCar);
    render();
  }
});

mowBtn.addEventListener("click", function () {
  if (tasks.indexOf(mowLawn) == -1) {
    tasks.push(mowLawn);
    render();
  }
});

pullBtn.addEventListener("click", function () {
  if (tasks.indexOf(pullWeeds) == -1) {
    tasks.push(pullWeeds);
    render();
  }
});

invoiceBtn.addEventListener("click", function () {
  tasks = [];
  render();
});
function render() {
  let cost = 0;
  tasksDiv.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    tasksDiv.innerHTML += `<div class="task-div"> <div style="display: flex; background-color: #1f2937"> <p class="task"> ${tasks[i].name}</p> <a href="#" class="remove" onclick="remove('${tasks[i].name}')">Remove</a> </div> <p class="price"><span class="sign">$</span>${tasks[i].price}</p></div>`;
    cost += parseInt(tasks[i].price);
  }
  if (cost != 0) {
    totalCost.innerHTML = `<span class="note">We accept cash, credit card, or PayPal</span>$${cost}`;
  } else {
    totalCost.innerHTML = `<span class="note"></span>$0`;
  }
}

function remove(name) {
  tasks = tasks.filter((item) => item.name != name);
  render();
}
