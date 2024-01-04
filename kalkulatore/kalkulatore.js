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

let testtti = document.querySelector(".testi");
function myFunction() {
  var x = document.getElementById("permbajtjaKalkulatori");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

testtti.addEventListener("click", myFunction);
