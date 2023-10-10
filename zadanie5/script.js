var tovari = [
    { name: "Розетка Schneider Electric", cena: 235 }, { name: "Беспроводной звонок InHome", cena: 650 }, { name: "Дюбель-хомут TPlast(уп)", cena: 150 }, { name: "Лампочка GX53 12w ", cena: 120 }, { name: "Светильник Ecola", cena: 15400 },{ name: "Светодиодная лента Feron 19w(1м)", cena: 160 }
  ];
  var vt;
  var kol;
  function schetstoim() {
    var price = vt.cena * kol;
    return price;
  }
  function chooset(ind) {
    vt = tovari[ind-1];
  }
  function knopka() {
    var количество = parseInt(document.getElementById("kolvo").value);
    if (vt && количество > 0) {
    kol = количество;
    var price = schetstoim();
    document.getElementById("rez").innerHTML = "Стоимость: " + price;
    } else {
    document.getElementById("rez").innerHTML = "Введите корректное количество";
    }
    }
  document.getElementById("shet").addEventListener("click", knopka);
  
  
