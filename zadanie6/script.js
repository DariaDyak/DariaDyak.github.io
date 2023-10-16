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



  function schet() 
{
    var kol = document.getElementById("kol").value;
    var usluga = document.querySelector('input[name="usluga"]:checked').value;
    var option = document.getElementById("option").value;
    var svva = document.getElementById("checkbox").checked;

    var total = 0;
    document.getElementById("options").style.display = 'none';
    document.getElementById("svva").style.display = 'none';
    if (usluga === "u1") 
    {
        document.getElementById("options").style.display = 'none';
        document.getElementById("svva").style.display = 'none';
        total = 2000;
    } 
    else if (usluga === "u2") 
    {
        document.getElementById("options").style.display = 'block';
        document.getElementById("svva").style.display = 'none';
        if (option === "o1")
        {
            total = 2500;
        } 
        else if (option === "o2")
        {
            total = 3500;
        }
        else if (option === "o3") 
        {
            total = 5000;
        }
        else if (option === "o4") 
        {
                total = 9000;
        }
    }
    else if (usluga === "u3") 
    {
        document.getElementById("options").style.display = 'none';
        document.getElementById("svva").style.display = 'block';
        document.getElementById("checkbox").checked;
        if (svva) 
        {
            total = 19300;
        } 
        else 
        {
            total = 16500;
        }
    }

    var itog = total * kol;

    document.getElementById("rez1").innerHTML = "Стоимость услуги: " + itog + " " + "рублей.";
}
  
  
