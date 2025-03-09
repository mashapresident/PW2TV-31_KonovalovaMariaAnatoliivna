function calculateEmissions(){
    // Введені дані
    const coalMass = parseFloat(document.getElementById("coal").value); 
    const mazutMass = parseFloat(document.getElementById("mazut").value); 
    const gasVolume = parseFloat(document.getElementById("gas").value);

    let Gvin = 0.015; // Вміст горючих речовин у леткій золі
    let Gshl = 0.005; // Вміст горючих речовин у шлаку
    let efficiency = 0.985; // Ефективність золоуловлювальної установки

    // Формули розрахунку коефіцієнтів
    let kCoal = (coalMass * (1 - Gvin - Gshl) * (1 - efficiency));
    let kMazut = (mazutMass * (1 - efficiency));
    let kGas = 0; // Природний газ не генерує твердих частинок

    // Валовий викид для кожного палива (т)
    let ECoal = 1e-6 * kCoal * coalMass;
    let EMazut = 1e-6 * kMazut * mazutMass;
    let EGas = 1e-6 * kGas * gasVolume;

    let resultText = `
        <p> Для заданого енергоблоку і відповідним умовам роботи:</p>
        <p>1. Показник емісії твердих частинок при спалюванні вугілля становитиме: ${kCoal.toFixed(2)} г/ГДж;</p>
        <p>2. Валовий викид при спалюванні вугілля становитиме: ${ECoal.toFixed(2)} т.</p>
        <p>3. Показник емісії твердих частинок при спалюванні мазуту становитиме: ${kMazut.toFixed(2)} г/ГДж;</p>
        <p>4. Валовий викид при спалюванні мазуту становитиме: ${EMazut.toFixed(2)} т.</p>
        <p>5. Показник емісії твердих частинок при спалюванні природного газу становитиме: ${kGas.toFixed(2)} г/ГДж;</p>
        <p>6. Валовий викид при спалюванні природного газу становитиме: ${EGas.toFixed(2)} т.</p>
    `;

    document.getElementById("result").innerHTML = resultText;
}
