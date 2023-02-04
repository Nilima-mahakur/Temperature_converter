const calculateTemp = () => {
    const Temperature = document.getElementById('temp').value;
    const tempSelected = document.getElementById('tempdif');
    const newTemp = tempdif.options[tempSelected.selectedIndex].value;

    // FAHRENHEIT TO CELSIUS
    const fahreToCel = (fahrenheit) => {
        let celsius = ((fahrenheit - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

      // CELSIUS TO FAHRENHEIT
      const celToFahre = (celsius) => {
        let fahrenheit = ((celsius * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    if (newTemp == 'celsius') {
        document.getElementById("result").innerHTML = celToFahre(Temperature) + " Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = fahreToCel(Temperature) + " Celsius";
    }
}