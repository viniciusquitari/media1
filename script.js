 function calcular() {
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);

    if (
        nota1 < 0 || nota1 > 20 ||
        nota2 < 0 || nota2 > 20 ||
        nota3 < 0 || nota3 > 20
    ) {
        document.getElementById("resultado").innerHTML =
            "Erro: as notas devem estar entre 0 e 20.";
    } else {
        let media = (nota1 + nota2 + nota3) / 3;

        document.getElementById("resultado").innerHTML =
            "A média é: " + media.toFixed(2);
    }
}