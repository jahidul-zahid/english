/* Master navbar. Pages must be named Day_01_English_Speaking_Practice.html, Day_02_..., etc.
   TO ADD A NEW DAY: create the new file, then change LAST_DAY below. Nothing else. */
(function () {
  var LAST_DAY = 3;
  var pad = function (n) { return String(n).padStart(2, "0"); };
  var file = function (n) { return "Day_" + pad(n) + "_English_Speaking_Practice.html"; };
  var m = location.pathname.match(/Day_(\d+)_/i);
  var current = m ? parseInt(m[1], 10) : 1;

  var days = "";
  for (var i = 1; i <= LAST_DAY; i++) {
    days += '<a href="' + file(i) + '"' + (i === current ? ' class="active" aria-current="page"' : "") + ">Day " + pad(i) + "</a>";
  }
  var nav = document.createElement("nav");
  nav.className = "daynav";
  nav.setAttribute("aria-label", "Day navigation");
  nav.innerHTML =
    '<div class="daynav-in"><span class="daynav-brand">English Practice</span>' +
    '<a class="daynav-step' + (current <= 1 ? " off" : "") + '" href="' + file(Math.max(1, current - 1)) + '">← Prev</a>' +
    '<div class="daynav-days">' + days + "</div>" +
    '<a class="daynav-step' + (current >= LAST_DAY ? " off" : "") + '" href="' + file(Math.min(LAST_DAY, current + 1)) + '">Next →</a></div>';
  document.body.insertBefore(nav, document.body.firstChild);
  var a = nav.querySelector(".daynav-days a.active");
  if (a && a.scrollIntoView) a.scrollIntoView({ inline: "center", block: "nearest" });
})();
