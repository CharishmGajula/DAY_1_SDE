let sec_val;

function check() {
  const entered_num = parseInt(document.getElementById("txt").value);
  var res=document.getElementById("result");

  if (isNaN(entered_num)) {
    console.log("IS NOT A NUMBER");
    return;
  }

  if (entered_num === sec_val) {
    res.innerHTML="YAHOO YOU DID IT"
  } else if (entered_num > sec_val) {
    res.innerHTML="ITS TOO HIGH"
  } else {
    res.innerHTML="ITS TOO LOW"
  }
}

document.addEventListener("DOMContentLoaded", function () {
  sec_val = Math.floor(Math.random() * 10) + 1;
  console.log("Secret number is:", sec_val);

  // ✅ Now the button exists, safe to attach
  document.getElementById("button").addEventListener("click", check);
});

