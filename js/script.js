//скрипт для навигация
let arrow = document.querySelectorAll(".arrow");
for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement;
    console.log(arrowParent);
    arrowParent.classList.toggle("showMenu");
  });
}
// function filter tables
const lists = document.querySelector(".filter");
const itemse = document.querySelectorAll(".buttons");
const listItemst = document.querySelectorAll(".link_btn");

function filter() {
  lists.addEventListener("click", (event) => {
    const targetIds = event.target.dataset.id;
    const targets = event.target;

    if (targets.classList.contains("link_btn")) {
      listItemst.forEach((listIteme) => listIteme.classList.remove("active"));
      targets.classList.add("active");
    }

    switch (targetIds) {
      case "link":
        getItemse(targetIds);
        break;
    }
  });
}
filter();

function getItemse(className) {
  itemse.forEach((item) => {
    if (item.classList.contains(className)) {
      item.style.display = "none";
    } else item.style.display = "block";
  });
}

// click table
const list = document.querySelector(".filters");
const items = document.querySelectorAll(".tables");
const listItems = document.querySelectorAll(".button");

function filteracia() {
  list.addEventListener("click", (event) => {
    const targetId = event.target.dataset.id;
    const target = event.target;

    if (target.classList.contains("button")) {
      listItems.forEach((listItem) => listItem.classList.remove("active"));
      target.classList.add("active");
    }

    switch (targetId) {
      case "tf":
        getItems(targetId);
        break;
      case "ts":
        getItems(targetId);
        break;
    }
  });
}
filteracia();

function getItems(className) {
  items.forEach((item) => {
    if (item.classList.contains(className)) {
      item.style.display = "block";
    } else item.style.display = "none";
  });
}
// second table
const listt = document.querySelector(".filterss");
const itemss = document.querySelectorAll(".tabless");
const listItemss = document.querySelectorAll(".buttonn");

function filteraciaa() {
  listt.addEventListener("click", (event) => {
    const targetIdd = event.target.dataset.id;
    const targett = event.target;

    if (targett.classList.contains("buttonn")) {
      listItemss.forEach((listItem) => listItem.classList.remove("active"));
      targett.classList.add("active");
    }

    switch (targetIdd) {
      case "tff":
        getItemss(targetIdd);
        break;
      case "tss":
        getItemss(targetIdd);
        break;
    }
  });
}
filteraciaa();

function getItemss(className) {
  itemss.forEach((item) => {
    if (item.classList.contains(className)) {
      item.style.display = "block";
    } else item.style.display = "none";
  });
}
//second buttons
const listst = document.querySelector(".filterd");
const itemset = document.querySelectorAll(".buttonf");
const listItemste = document.querySelectorAll(".link_btns");

function filterr() {
  listst.addEventListener("click", (event) => {
    const targetIdst = event.target.dataset.id;
    const targetst = event.target;

    if (targetst.classList.contains("link_btns")) {
      listItemste.forEach((listItemer) =>
        listItemer.classList.remove("active")
      );
      targetst.classList.add("active");
    }

    switch (targetIdst) {
      case "links":
        getItemset(targetIdst);
        break;
    }
  });
}
filterr();

function getItemset(className) {
  itemset.forEach((itemw) => {
    if (itemw.classList.contains(className)) {
      itemw.style.display = "none";
    } else itemw.style.display = "block";
  });
}
