$("#submit").on("click", value => {
	clearResults();
	let colors = $("#input").val();
	colors = colors.split("\n");
	colors.forEach(color => {
		color = trimQuotes(color);
		if (isValidColorString) {
			$("#result").append("<div class='color-box'><div class='color' style='background-color:" + color + ";'></div><div class='text'>" 
				+ color + "</div></div>");
		} else {
			alert("invalid color: " + color);
		}
	});
});

function trimQuotes(string) {
	let l = string.length;
	if ((string[0] === "'" && string[l-1] === "'") || (string[0] === '"' && string[l-1] === '"'))
		return string.substring(1, l-1);
	return string;
}

function isValidColorString(color) {
	let l = color.length;
	return (color.indexOf("#") === 0 && color.length === 7) 
			|| (color.indexOf("rgb(") === 0 && color[l-1] === ")")
			|| (color.indexOf("rgba(") === 0 && color[l-1] === ")");
}

function clearResults() {
	$("#result").empty();
}