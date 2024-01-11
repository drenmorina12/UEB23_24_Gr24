function zgjedhja() {
  var x1 = document.getElementById("x1");
  var x2 = document.getElementById("x2");
  var y1 = document.getElementById("y1");
  var y2 = document.getElementById("y2");
  var xl = document.getElementById("l1");
  var yl = document.getElementById("l2");

  var testx1 = (x1.value * 2 + 24) / 2 - x1.value;
  var testx2 = (x2.value * 2 + 24) / 2 - x2.value;
  var testy1 = (y1.value * 2 + 24) / 2 - y1.value;
  var testy2 = (y2.value * 2 + 24) / 2 - y2.value;
  var testxl = (xl.value * 2 + 24) / 2 - xl.value;
  var testyl = (yl.value * 2 + 24) / 2 - yl.value;

  if (
    x1.value != "" &&
    x2.value != "" &&
    y1.value != "" &&
    y2.value != "" &&
    xl.value != "" &&
    yl.value != ""
  ) {
    if (
      testx1 == 12 &&
      testx2 == 12 &&
      testy1 == 12 &&
      testy2 == 12 &&
      testxl == 12 &&
      testyl == 12
    ) {
      var x =
        (xl.value * y2.value - yl.value * y1.value) /
        (x1.value * y2.value - x2.value * y1.value);
      var y =
        (x1.value * yl.value - x2.value * xl.value) /
        (x1.value * y2.value - x2.value * y1.value);
      var d = x1.value * y2.value - x2.value * y1.value;

      if (d == 0) {
        alert(
          "Ana e majtë e sistemit është e njejt, sistemi nuk ka zgjidhje !"
        );
      } else {
        console.log(x);
        console.log(y);
        console.log(testx1);
        document.getElementById("xR").value = x;
        document.getElementById("yR").value = y;
      }
    } else if (
      testx1 != 12 ||
      testx2 != 12 ||
      testy1 != 12 ||
      testy2 != 12 ||
      testxl != 12 ||
      testyl != 12
    ) {
      alert("Vendosni të dhëna valide !");
      console.log(testx1);
      console.log(testx2);
      console.log(testy1);
      console.log(testy2);
      console.log(testxl);
      console.log(testyl);
    }
  } else {
    alert("Mos leni rubrika të zbrazëta !");
  }
}

function pastrimi() {
  let x11 = document.getElementById("x1");
  x11.value = "";
  document.getElementById("x2").value = "";
  document.getElementById("y1").value = "";
  document.getElementById("y2").value = "";
  document.getElementById("l1").value = "";
  document.getElementById("l2").value = "";
  document.getElementById("xR").value = "";
  document.getElementById("yR").value = "";
  x11.focus();
}

///////////////////////////////////////////////////////////////////////

var vleraGj = document.getElementById('vleraGj');

var selectVGj = document.getElementById('njesiaVleraGj');
var selecttRGj = document.getElementById('njesiaRezultatiGj');


function konvertimGj() {
    var njesiaVleraGj = selectVGj.options[selectVGj.selectedIndex].value;
    var njesiaRrezultatiGj = selecttRGj.options[selecttRGj.selectedIndex].value;

    if (vleraGj.value >= 0) {
        if (njesiaVleraGj == "meterV" && njesiaRrezultatiGj == "meterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 1;

            console.log(njesiaVleraGj);
            console.log(njesiaRrezultatiGj);

        } else if (njesiaVleraGj == "meterV" && njesiaRrezultatiGj == "milimeterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 1000;
        } else if (njesiaVleraGj == "meterV" && njesiaRrezultatiGj == "centimeterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 100;
        } else if (njesiaVleraGj == "meterV" && njesiaRrezultatiGj == "decimeterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 10;
        } else if (njesiaVleraGj == "meterV" && njesiaRrezultatiGj == "dekameterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value / 10;
        } else if (njesiaVleraGj == "meterV" && njesiaRrezultatiGj == "hektameterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value / 100;
        } else if (njesiaVleraGj == "meterV" && njesiaRrezultatiGj == "kilometerR") {
            document.getElementById('rezultatiGj').value = vleraGj.value / 1000;
        } else if (njesiaVleraGj == "milimeterV" && njesiaRrezultatiGj == "meterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value / 1000;
        } else if (njesiaVleraGj == "milimeterV" && njesiaRrezultatiGj == "milimeterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 1;
        } else if (njesiaVleraGj == "milimeterV" && njesiaRrezultatiGj == "centimeterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value / 10;
        } else if (njesiaVleraGj == "milimeterV" && njesiaRrezultatiGj == "decimeterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value / 100;
        } else if (njesiaVleraGj == "milimeterV" && njesiaRrezultatiGj == "dekameterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value / 10000;
        } else if (njesiaVleraGj == "milimeterV" && njesiaRrezultatiGj == "hektameterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value / 100000;
        } else if (njesiaVleraGj == "milimeterV" && njesiaRrezultatiGj == "kilometerR") {
            document.getElementById('rezultatiGj').value = vleraGj.value / 1000000;
        } else if (njesiaVleraGj == "centimeterV" && njesiaRrezultatiGj == "meterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value / 100;
        } else if (njesiaVleraGj == "centimeterV" && njesiaRrezultatiGj == "milimeterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 10;
        } else if (njesiaVleraGj == "centimeterV" && njesiaRrezultatiGj == "centimeterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 1;
        } else if (njesiaVleraGj == "centimeterV" && njesiaRrezultatiGj == "decimeterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value / 10;
        } else if (njesiaVleraGj == "centimeterV" && njesiaRrezultatiGj == "dekameterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value / 1000;
        } else if (njesiaVleraGj == "centimeterV" && njesiaRrezultatiGj == "hektameterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value / 10000;
        } else if (njesiaVleraGj == "centimeterV" && njesiaRrezultatiGj == "kilometerR") {
            document.getElementById('rezultatiGj').value = vleraGj.value / 100000;
        } else if (njesiaVleraGj == "decimeterV" && njesiaRrezultatiGj == "meterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value / 10;
        } else if (njesiaVleraGj == "decimeterV" && njesiaRrezultatiGj == "milimeterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 100;
        } else if (njesiaVleraGj == "decimeterV" && njesiaRrezultatiGj == "centimeterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 10;
        } else if (njesiaVleraGj == "decimeterV" && njesiaRrezultatiGj == "decimeterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 1;
        } else if (njesiaVleraGj == "decimeterV" && njesiaRrezultatiGj == "dekameterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value / 100;
        } else if (njesiaVleraGj == "decimeterV" && njesiaRrezultatiGj == "hektameterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value / 1000;
        } else if (njesiaVleraGj == "decimeterV" && njesiaRrezultatiGj == "kilometerR") {
            document.getElementById('rezultatiGj').value = vleraGj.value / 10000;
        } else if (njesiaVleraGj == "dekameterV" && njesiaRrezultatiGj == "meterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 10;
        } else if (njesiaVleraGj == "dekameterV" && njesiaRrezultatiGj == "milimeterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 10000;
        } else if (njesiaVleraGj == "dekameterV" && njesiaRrezultatiGj == "centimeterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 1000;
        } else if (njesiaVleraGj == "dekameterV" && njesiaRrezultatiGj == "decimeterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 100;
        } else if (njesiaVleraGj == "dekameterV" && njesiaRrezultatiGj == "dekameterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 1;
        } else if (njesiaVleraGj == "dekameterV" && njesiaRrezultatiGj == "hektameterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value / 10;
        } else if (njesiaVleraGj == "dekameterV" && njesiaRrezultatiGj == "kilometerR") {
            document.getElementById('rezultatiGj').value = vleraGj.value / 100;
        } else if (njesiaVleraGj == "hektameterV" && njesiaRrezultatiGj == "meterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 100;
        } else if (njesiaVleraGj == "hektameterV" && njesiaRrezultatiGj == "milimeterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 100000;
        } else if (njesiaVleraGj == "hektameterV" && njesiaRrezultatiGj == "centimeterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 10000;
        } else if (njesiaVleraGj == "hektameterV" && njesiaRrezultatiGj == "decimeterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 1000;
        } else if (njesiaVleraGj == "hektameterV" && njesiaRrezultatiGj == "dekameterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 10;
        } else if (njesiaVleraGj == "hektameterV" && njesiaRrezultatiGj == "hektameterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 1;
        } else if (njesiaVleraGj == "hektameterV" && njesiaRrezultatiGj == "kilometerR") {
            document.getElementById('rezultatiGj').value = vleraGj.value / 10;
        } else if (njesiaVleraGj == "kilometerV" && njesiaRrezultatiGj == "meterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 1000;
        } else if (njesiaVleraGj == "kilometerV" && njesiaRrezultatiGj == "milimeterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 1000000;
        } else if (njesiaVleraGj == "kilometerV" && njesiaRrezultatiGj == "centimeterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 100000;
        } else if (njesiaVleraGj == "kilometerV" && njesiaRrezultatiGj == "decimeterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 10000;
        } else if (njesiaVleraGj == "kilometerV" && njesiaRrezultatiGj == "dekameterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 100;
        } else if (njesiaVleraGj == "kilometerV" && njesiaRrezultatiGj == "hektameterR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 10;
        } else if (njesiaVleraGj == "kilometerV" && njesiaRrezultatiGj == "kilometerR") {
            document.getElementById('rezultatiGj').value = vleraGj.value * 1;
        } else if (njesiaVleraGj == "zgjedhe nje opsion") {
            alert('Zgjidhni një njësi !')
        } else if (njesiaRrezultatiGj == "zgjedhe nje opsion") {
            alert('Zgjidhni një njësi !')
        }
    } else {
        alert('Vendosni vlera valide !');
    }
}



var vleraP = document.getElementById('vleraP');

var selectVP = document.getElementById('njesiaVleraP');
var selecttRP = document.getElementById('njesiaRezultatiP');

function konvertimP() {
    var njesiaVleraP = selectVP.options[selectVP.selectedIndex].value;
    var njesiaRrezultatiP = selecttRP.options[selecttRP.selectedIndex].value;

    if (vleraP.value >= 0) {
        if (njesiaVleraP == "kilogramV" && njesiaRrezultatiP == "kilogramR") {
            document.getElementById('rezultatiP').value = vleraP.value * 1;

            console.log(njesiaVleraGj);
            console.log(njesiaRrezultatiGj);
        } else if (njesiaVleraP == "kilogramV" && njesiaRrezultatiP == "miligramR") {
            document.getElementById('rezultatiP').value = vleraP.value * 1000000;
        } else if (njesiaVleraP == "kilogramV" && njesiaRrezultatiP == "gramR") {
            document.getElementById('rezultatiP').value = vleraP.value * 1000;
        } else if (njesiaVleraP == "kilogramV" && njesiaRrezultatiP == "dekagramR") {
            document.getElementById('rezultatiP').value = vleraP.value * 100;
        } else if (njesiaVleraP == "kilogramV" && njesiaRrezultatiP == "tonR") {
            document.getElementById('rezultatiP').value = vleraP.value / 1000;
        } else if (njesiaVleraP == "miligramV" && njesiaRrezultatiP == "kilogramR") {
            document.getElementById('rezultatiP').value = vleraP.value / 1000000;
        } else if (njesiaVleraP == "miligramV" && njesiaRrezultatiP == "miligramR") {
            document.getElementById('rezultatiP').value = vleraP.value * 1;
        } else if (njesiaVleraP == "miligramV" && njesiaRrezultatiP == "gramR") {
            document.getElementById('rezultatiP').value = vleraP.value / 1000;
        } else if (njesiaVleraP == "miligramV" && njesiaRrezultatiP == "dekagramR") {
            document.getElementById('rezultatiP').value = vleraP.value / 10000;
        } else if (njesiaVleraP == "miligramV" && njesiaRrezultatiP == "tonR") {
            document.getElementById('rezultatiP').value = vleraP.value / 1000000000;
        } else if (njesiaVleraP == "gramV" && njesiaRrezultatiP == "kilogramR") {
            document.getElementById('rezultatiP').value = vleraP.value / 1000;
        } else if (njesiaVleraP == "gramV" && njesiaRrezultatiP == "miligramR") {
            document.getElementById('rezultatiP').value = vleraP.value * 1000;
        } else if (njesiaVleraP == "gramV" && njesiaRrezultatiP == "gramR") {
            document.getElementById('rezultatiP').value = vleraP.value * 1;
        } else if (njesiaVleraP == "gramV" && njesiaRrezultatiP == "dekagramR") {
            document.getElementById('rezultatiP').value = vleraP.value / 100;
        } else if (njesiaVleraP == "gramV" && njesiaRrezultatiP == "tonR") {
            document.getElementById('rezultatiP').value = vleraP.value / 1000000;
        } else if (njesiaVleraP == "dekagramV" && njesiaRrezultatiP == "kilogramR") {
            document.getElementById('rezultatiP').value = vleraP.value / 100;
        } else if (njesiaVleraP == "dekagramV" && njesiaRrezultatiP == "miligramR") {
            document.getElementById('rezultatiP').value = vleraP.value * 10000;
        } else if (njesiaVleraP == "dekagramV" && njesiaRrezultatiP == "gramR") {
            document.getElementById('rezultatiP').value = vleraP.value * 10;
        } else if (njesiaVleraP == "dekagramV" && njesiaRrezultatiP == "dekagramR") {
            document.getElementById('rezultatiP').value = vleraP.value * 1;
        } else if (njesiaVleraP == "dekagramV" && njesiaRrezultatiP == "tonR") {
            document.getElementById('rezultatiP').value = vleraP.value / 100000;
        } else if (njesiaVleraP == "tonV" && njesiaRrezultatiP == "kilogramR") {
            document.getElementById('rezultatiP').value = vleraP.value * 1000;
        } else if (njesiaVleraP == "tonV" && njesiaRrezultatiP == "miligramR") {
            document.getElementById('rezultatiP').value = vleraP.value * 1000000000;
        } else if (njesiaVleraP == "tonV" && njesiaRrezultatiP == "gramR") {
            document.getElementById('rezultatiP').value = vleraP.value * 1000000;
        } else if (njesiaVleraP == "tonV" && njesiaRrezultatiP == "dekagramR") {
            document.getElementById('rezultatiP').value = vleraP.value * 100000;
        } else if (njesiaVleraP == "tonV" && njesiaRrezultatiP == "tonR") {
            document.getElementById('rezultatiP').value = vleraP.value * 1;
        } else if (njesiaVleraP == "zgjedhe nje opsion") {
            alert('Zgjidhni një njësi !')
        } else if (njesiaRrezultatiP == "zgjedhe nje opsion") {
            alert('Zgjidhni një njësi !')
        }

    } else {
        alert('Vendosni vlera valide !');
    }
}
