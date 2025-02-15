const tabSwitch = document.querySelectorAll(".tabSwitch");
const tabContent = document.querySelectorAll(".tabContent");

tabSwitch.forEach((switcher, index) => {
	switcher.addEventListener("click", () => {
		if (switcher.classList.contains("activeSwitch")) {
		} else {
			tabSwitch.forEach((switche) => {switche.classList.remove("activeSwitch")});
			switcher.classList.add("activeSwitch");

			tabContent.forEach((tabe) => {tabe.classList.remove("activeContent")});
			tabContent[index].classList.add("activeContent");
		}
		console.log(index);
	});
});