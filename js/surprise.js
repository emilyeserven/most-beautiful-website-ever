var button = document.getElementById('makedollarz'),
  multi1 = document.getElementById('circ-1'),
  multi2 = document.getElementById('circ-2'),
  multi5 = document.getElementById('circ-3'),
  multi10 = document.getElementById('circ-4'),
  multi15 = document.getElementById('circ-5'),
  multi20 = document.getElementById('circ-6'),
  count = 0,
  multiplier = 1;

/* global $ */
//var bitcoin = $.get( "https://blockchain.info/tobtc", { currency: "USD", value: 100 } );
/*
$(function()
{
        $.get("https://blockchain.info/tobtc?currency=USD&value=100", function(data, textStatus)
        {
                alert("Done, with the following status: " + textStatus + ". Here is the response: " + data);
        });
}); */
var btcRate = $.ajax({type: "GET", url: "https://blockchain.info/tobtc?currency=USD&value=1", async: false}).responseText;
/*var btcRate;
$.get("https://blockchain.info/tobtc?currency=USD&value=100", function(text) {
  btcRate = text;
  return btcRate;
});*/

	
//var btcRate = $.get('https://blockchain.info/tobtc', { currency: "USD", value: 100 }).responseText;
			
console.log(btcRate);

function inactiveClass() {
  multi1.className = "inactive";
  multi2.className = "inactive";
  multi5.className = "inactive";
  multi10.className = "inactive";
  multi15.className = "inactive";
  multi20.className = "inactive";
}
function multiVal(num) {
  multiplier = num;
  inactiveClass();
  var multiName = "multi" + num;
  multiname.className = "active";
}
multi1.onclick = function() {
  multiplier = 1;
  inactiveClass();
  multi1.className = "active";
}
multi2.onclick = function() {
  multiplier = 2;
  inactiveClass();
  multi2.className = "active";
}
multi5.onclick = function() {
  multiplier = 5;
  inactiveClass();
  multi5.className = "active";
}
multi10.onclick = function() {
  multiplier = 10;
  inactiveClass();
  multi10.className = "active";
}
multi15.onclick = function() {
  multiplier = 15;
  inactiveClass();
  multi15.className = "active";
}
multi20.onclick = function() {
  multiplier = 20;
  inactiveClass();
  multi20.className = "active";
}
button.onclick = function() {
  count += (1 * multiplier);
  document.getElementById("result").innerHTML = "$" + count;
  document.getElementById("coffee").innerHTML = count / 3.46;
  document.getElementById("btc").innerHTML = count * btcRate;
};
document.getElementById("btcRate").innerHTML = btcRate;