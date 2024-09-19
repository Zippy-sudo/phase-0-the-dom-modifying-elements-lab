const a = document.getElementById("main");
a.remove();

const newHeader = document.createElement("h1");
newHeader.id ="victory";
newHeader.textContent = "George is the champion";
document.body.append(newHeader);
