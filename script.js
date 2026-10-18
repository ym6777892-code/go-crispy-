(function () {
  "use strict";

  var $ = function (id) { return document.getElementById(id); };
  var root = document.documentElement;
  var menuEl = $("menu"), catsEl = $("cats");
  var lang = "ar";
  try { var saved = localStorage.getItem("gc-lang"); if (saved === "en" || saved === "ar") lang = saved; } catch (e) {}

  var offset = function () {
    var cs = getComputedStyle(root);
    return parseFloat(cs.getPropertyValue("--header-h")) + parseFloat(cs.getPropertyValue("--cats-h")) + 12;
  };
  var fmt = function (n) { return n.toLocaleString(lang === "ar" ? "ar-EG" : "en-US"); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };

  function render() {
    var t = UI[lang], ar = lang === "ar";
    root.lang = lang; root.dir = ar ? "rtl" : "ltr";
    document.title = t.title;
    $("tagline").textContent = t.tagline;
    $("browse").textContent = t.browse;
    $("lang").textContent = t.lang;
    ["vat1", "vat3"].forEach(function (i) { $(i).textContent = t.vat; });
    ["vat2", "vat4"].forEach(function (i) { $(i).textContent = t.vatSub; });
    $("rights").textContent = t.rights;
    $("year").textContent = new Date().getFullYear();
    catsEl.setAttribute("aria-label", t.nav);

    catsEl.innerHTML = MENU.map(function (s) {
      return '<a href="#' + s.id + '" data-id="' + s.id + '">' + esc(ar ? s.ar : s.en) + "</a>";
    }).join("");

    menuEl.innerHTML = MENU.map(function (s) {
      var badge = s.kind ? '<span class="badge ' + s.kind + '">' + t[s.kind] + "</span>" : "";
      var items = s.items.map(function (it) {
        var desc = ar ? it[3] : it[4];
        return '<article class="item"><div class="info">' +
          '<div class="name">' + esc(ar ? it[0] : it[1]) + "</div>" +
          (ar ? '<div class="name-alt">' + esc(it[1]) + "</div>" : "") +
          (desc ? '<p class="desc">' + esc(desc) + "</p>" : "") +
          '</div><div class="price">' + fmt(it[2]) + "<small>" + t.cur + "</small></div></article>";
      }).join("");
      return '<section class="sec ' + (s.kind || "") + '" id="' + s.id + '"><div class="sec-head"><h2>' +
        esc(ar ? s.ar : s.en) + "</h2>" + badge + '</div><div class="grid">' + items + "</div></section>";
    }).join("");

    $("socials").innerHTML = SOCIALS.map(function (x) {
      return '<a href="' + esc(x.url) + '" target="_blank" rel="noopener">' + esc(x.name) + "</a>";
    }).join("");
  }

  /* ---- التمرير: تحديث التصنيف النشط بدون التأثير على تمرير الصفحة ---- */
  var lockUntil = 0, barTouched = 0, active = null, ticking = false;

  function setActive(id) {
    if (id === active) return;
    active = id;
    var cur = catsEl.querySelector(".on");
    if (cur) cur.classList.remove("on");
    var a = catsEl.querySelector('[data-id="' + id + '"]');
    if (!a) return;
    a.classList.add("on");
    if (Date.now() - barTouched < 1500) return; // المستخدم يمرر الشريط بنفسه
    var br = catsEl.getBoundingClientRect(), ar = a.getBoundingClientRect();
    var d = (ar.left + ar.width / 2) - (br.left + br.width / 2);
    if (Math.abs(d) > 4) catsEl.scrollBy({ left: d, behavior: "smooth" }); // أفقي فقط
  }

  function spy() {
    ticking = false;
    if (Date.now() < lockUntil) return;
    var line = offset() + 8, id = MENU[0].id;
    for (var i = 0; i < MENU.length; i++) {
      var el = $(MENU[i].id);
      if (el && el.getBoundingClientRect().top <= line) id = MENU[i].id;
    }
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) id = MENU[MENU.length - 1].id;
    setActive(id);
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(spy); }
  }, { passive: true });
  ["touchstart", "pointerdown", "wheel"].forEach(function (ev) {
    catsEl.addEventListener(ev, function () { barTouched = Date.now(); }, { passive: true });
  });

  catsEl.addEventListener("click", function (e) {
    var a = e.target.closest("a[data-id]");
    if (!a) return;
    e.preventDefault();
    var sec = $(a.dataset.id);
    lockUntil = Date.now() + 900;
    active = null; setActive(a.dataset.id);
    window.scrollTo({ top: sec.getBoundingClientRect().top + window.scrollY - offset() + 1, behavior: "smooth" });
    setTimeout(spy, 950);
  });

  $("browse").addEventListener("click", function (e) {
    e.preventDefault();
    var m = $(MENU[0].id);
    window.scrollTo({ top: m.getBoundingClientRect().top + window.scrollY - offset() - 40, behavior: "smooth" });
  });

  /* ---- تبديل اللغة مع الحفاظ على موضع القراءة ---- */
  $("lang").addEventListener("click", function () {
    var line = offset() + 8, anchor = null, before = 0;
    for (var i = 0; i < MENU.length; i++) {
      var el = $(MENU[i].id), r = el.getBoundingClientRect();
      if (r.top <= line) { anchor = MENU[i].id; before = r.top; }
    }
    lang = lang === "ar" ? "en" : "ar";
    try { localStorage.setItem("gc-lang", lang); } catch (e) {}
    var y = window.scrollY, wasTop = y < 5;
    active = null;
    render();
    if (anchor && !wasTop) {
      var after = $(anchor).getBoundingClientRect().top;
      window.scrollTo({ top: y + (after - before), behavior: "instant" });
    }
    catsEl.scrollLeft = 0;
    lockUntil = 0; spy();
  });

  render();
  spy();
})();
