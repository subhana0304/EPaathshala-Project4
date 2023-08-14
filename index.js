
// TriAngle ----------------
document.getElementById('triangleButton').addEventListener('click', function () {

    let triInputBhumi = document.getElementById('triInpuBhu');
    let triInputBhumiValueString = triInputBhumi.value;
    let triInputBhumiValue = parseFloat(triInputBhumiValueString);
    // console.log(triInputBhumiValue);

    let triInputUcchota = document.getElementById('triInpuUch');
    let triInputUcchotaValueString = triInputUcchota.value;
    let triInputUcchotaValue = parseFloat(triInputUcchotaValueString);
    // console.log(triInputUcchotaValue);

    let triTextBhumi = document.getElementById('triangleBhumi');
    triTextBhumi.innerText = triInputBhumiValue;

    let triTextUcchota = document.getElementById('triangleUcchota');
    triTextUcchota.innerText = triInputUcchotaValue;
    
    let calculate = 0.5 * triInputBhumiValue * triInputUcchotaValue;
    // console.log(calculate);

    let li = document.createElement('li');
    li.innerHTML= `Triangle = ${calculate}cm<sup>2</sup>`

    let ol = document.getElementById('ol');
    ol.appendChild(li);

    triInputBhumi.value = '';
    triInputUcchota.value = '';

})

// Parallelogram ----------------
document.getElementById('parallelogramButton').addEventListener('click', function () {

    let peraInputBhumi = document.getElementById('peraInpuBhu');
    let peraInputBhumiValueString = peraInputBhumi.value;
    let peraInputBhumiValue = parseFloat(peraInputBhumiValueString);
    // console.log(peraInputBhumiValue);

    let peraInputUcchota = document.getElementById('peraInpuUch');
    let peraInputUcchotaValueString = peraInputUcchota.value;
    let peraInputUcchotaValue = parseFloat(peraInputUcchotaValueString);
    // console.log(peraInputUcchotaValue);

    let peraTextBhumi = document.getElementById('paraBhumi');
    peraTextBhumi.innerText = peraInputBhumiValue;

    let peraTextUcchota = document.getElementById('paraUcchota');
    peraTextUcchota.innerText = peraInputUcchotaValue;

    let calculate = peraInputBhumiValue * peraInputUcchotaValue;
    // console.log(calculate);
    let li = document.createElement('li');
    li.innerHTML = `Parallelogram = ${calculate}cm<sup>2</sup>`;

    let ol = document.getElementById('ol');
    ol.appendChild(li);

    peraInputBhumi.value = '';
    peraInputUcchota.value = '';
})


// Rhombus ----------------
document.getElementById('rhombusButton').addEventListener('click', function () {

    let rhombusInputKorno1 = document.getElementById('rhombusInpuBhu');
    let rhombusInputKorno1ValueString = rhombusInputKorno1.value;
    let rhombusInputKorno1Value = parseFloat(rhombusInputKorno1ValueString);
    // console.log(rhombusInputKorno1Value);

    let rhombusInputKorno2 = document.getElementById('rhombusInpuUch');
    let rhombusInputKorno2ValueString = rhombusInputKorno2.value;
    let rhombusInputKorno2Value = parseFloat(rhombusInputKorno2ValueString);
    // console.log(rhombusInputKorno2Value);

    let rhombusTextKorno1 = document.getElementById('d1');
    rhombusTextKorno1.innerText = rhombusInputKorno1Value;

    let rhombusTextKorno2 = document.getElementById('d2');
    rhombusTextKorno2.innerText = rhombusInputKorno2Value;

    let calculate = 0.5 * rhombusInputKorno1Value * rhombusInputKorno2Value;
    // console.log(calculate);
    let li = document.createElement('li');
    li.innerHTML = `Rhombus = ${calculate}cm<sup>2</sup>`;

    let ol = document.getElementById('ol');
    ol.appendChild(li);

    rhombusInputKorno1.value = '';
    rhombusInputKorno2.value = '';
})

// Pentagon ----------------
document.getElementById('pentagonButton').addEventListener('click', function () {

    let pentagonInputKorno1 = document.getElementById('penInputBhu');
    let pentagonInputKorno1ValueString = pentagonInputKorno1.value;
    let pentagonInputKorno1Value = parseFloat(pentagonInputKorno1ValueString);
    // console.log(rhombusInputKorno1Value);

    let pentagonInputKorno2 = document.getElementById('penInptUch');
    let pentagonInputKorno2ValueString = pentagonInputKorno2.value;
    let pentagonInputKorno2Value = parseFloat(pentagonInputKorno2ValueString);
    // console.log(rhombusInputKorno2Value);

    let pentagonTextKorno1 = document.getElementById('pentaP');
    pentagonTextKorno1.innerText = pentagonInputKorno1Value;

    let pentagonTextKorno2 = document.getElementById('pentaB');
    pentagonTextKorno2.innerText = pentagonInputKorno2Value;

    let calculate = 0.5 * pentagonInputKorno1Value * pentagonInputKorno2Value;
    // console.log(calculate);
    let li = document.createElement('li');
    li.innerHTML = `Pentagon = ${calculate}cm<sup>2</sup>`;

    let ol = document.getElementById('ol');
    ol.appendChild(li);

    pentagonInputKorno1.value = '';
    pentagonInputKorno2.value = '';
})