var button = document.getElementById('makedollarz'),
  count = 0;
button.onclick = function() {
  count += 1;
  document.getElementById("result").innerHTML = "$" + count;
};