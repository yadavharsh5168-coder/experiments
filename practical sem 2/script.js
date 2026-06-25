function convertTemperature() {
    let temp = document.getElementById("temperature").value;
    let conversion = document.getElementById("conversion").value;
    let result = document.getElementById("result");

    if (temp === "") {
        result.innerHTML = "Please enter a temperature.";
        return;
    }

    temp = parseFloat(temp);

    if (conversion === "ftoc") {
        let celsius = (temp - 32) * 5 / 9;
        result.innerHTML =
            temp + " °F = " + celsius.toFixed(2) + " °C";
    }
    else {
        let fahrenheit = (temp * 9 / 5) + 32;
        result.innerHTML =
            temp + " °C = " + fahrenheit.toFixed(2) + " °F";
    }
}