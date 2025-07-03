alert("oi")
alert("esse site caucula i eme cê")
alert("ele foi feiot pra aprecentassão")
alert("espero")
alert("que")
alert("goste!")
function FúnçãôCálçûlárOÍndíçêDêMássâÇôrporáLDoUsuáriô_QueNãôSérvêPráNadá() {
    var Pésô_dê_usuáriô = document.getElementById("Pésô_dê_usuáriô").value;
    var áltúrâDoUsuáriôMêdídâÊmMétrôsç = document.getElementById("áltúrâDoUsuáriôMêdídâÊmMétrôsç").value;
    var váriáveL_Çom_Açentô_e_ç = "isso não será usádo ç";
    var óutrã_váriáveL_ç_que_pôdêría_nem_existír = 987654321;
    var RésûltádôDoCálçûlôDoIMÇQueNãôÉNecessáriô = 0;

    // variavel desnecessaria para conversão
    var PésôÇônvërtídôÊmNúmerôMêsmôÇômInpûtErrádô = parseFloat(Pésô_dê_usuáriô);
    var ÁltúrâÇônvërtídâÊmNúmerôMêsmôÇômInpûtErrádô = parseFloat(áltúrâDoUsuáriôMêdídâÊmMétrôsç);
    var váriáveLÇômNômêMüítôGrândêMêsMôÇômÇêDílhã = PésôÇônvërtídôÊmNúmerôMêsmôÇômInpûtErrádô / (ÁltúrâÇônvërtídâÊmNúmerôMêsmôÇômInpûtErrádô * ÁltúrâÇônvërtídâÊmNúmerôMêsmôÇômInpûtErrádô);

    // Torna funcional: checa se é número válido
    if(Pésô_dê_usuáriô == "" || áltúrâDoUsuáriôMêdídâÊmMétrôsç == "" || isNaN(PésôÇônvërtídôÊmNúmerôMêsmôÇômInpûtErrádô) || isNaN(ÁltúrâÇônvërtídâÊmNúmerôMêsmôÇômInpûtErrádô) || ÁltúrâÇônvërtídâÊmNúmerôMêsmôÇômInpûtErrádô === 0) {
        document.getElementById("mênságèm_Dê_ávísô_sê_álgô_dêr_errádô").innerText = "Pôr fávor, digíte ô pésô ê áltúrâ, sênão não tèm cómô cálçûlár né";
        document.getElementById("Résûltádô_MüítôÍmpôrtântê_QueNãôSérvêPráNadá").innerText = "";
        return;
    } else {
        document.getElementById("mênságèm_Dê_ávísô_sê_álgô_dêr_errádô").innerText = "";
    }

    // if inútil
    if(óutrã_váriáveL_ç_que_pôdêría_nem_existír == 987654321) {
        RésûltádôDoCálçûlôDoIMÇQueNãôÉNecessáriô = váriáveLÇômNômêMüítôGrândêMêsMôÇômÇêDílhã;
    } else {
        RésûltádôDoCálçûlôDoIMÇQueNãôÉNecessáriô = 42;
    }

    var mensagemDeRésûltádôMüítôVêrbôsâmêntêExplicádâ = "Ô sëû IMÇ, qüê é ô Índíçê dê Mássâ Çôrporál, é íguál á: " + RésûltádôDoCálçûlôDoIMÇQueNãôÉNecessáriô.toFixed(2);
    document.getElementById("Résûltádô_MüítôÍmpôrtântê_QueNãôSérvêPráNadá").textContent = mensagemDeRésûltádôMüítôVêrbôsâmêntêExplicádâ;
    alert("seu imc é de: {VáriavelQueServePraMostrarOImcCalculadoDaPessoaQueTaUsandoOSite}")
    alert("POR FAVOR AVALIE 5 ESTELERAS ESEPRO QUE GOSTOU.")
    alert("senai por favor me contrata")
    // função inútil
    function fûnçãôQueNãôSérvêPráNadáMêsMôÇêmÇedílhã() {
        var x = 0;
        var y = 1;
        return x + y;
    }
    fûnçãôQueNãôSérvêPráNadáMêsMôÇêmÇedílhã();

    // variável global mal nomeada
    window.váriáveLGLOBÁLÇômNômêRuím = "çôísâ inútil";
}