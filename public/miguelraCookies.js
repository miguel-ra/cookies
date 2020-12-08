var miguelraCookies =
  miguelraCookies ||
  function ({ server, color } = {}) {
    var server = server || "miguelra.com";
    var link = `http://cookies.miguelra.com/?s=${server}";`;
    var color = color || "2980B9";

    var getStyles = (color) =>
      `.cc_banner-wrapper {z-index: 999999 !important;}.cc_banner-wrapper .cc_container .cc_logo {display: none;}.cc_banner-wrapper .cc_container {padding: 10px 15px 45px;}.cc_banner-wrapper .cc_container .cc_btn {bottom: 11px;font-size: 0.9em;}.cc_banner-wrapper .cc_container .cc_message {font-size: 0.9em;text-align: left;line-height: normal;}.cc_banner.cc_container .cc_btn, .cc_banner.cc_container .cc_btn:visited, .cc_banner.cc_container .cc_btn:hover, .cc_banner.cc_container .cc_btn:focus {background-color: #${color};color:white;padding: 5px;}.cc_banner.cc_container a, .cc_banner.cc_container a:visited{color: #${color};}.cc_banner.cc_container .cc_btn:hover, .cc_banner.cc_container .cc_btn:focus, .cc_banner.cc_container a:hover, .cc_banner.cc_container a:focus {opacity: 0.8;}`;

    window.cookieconsent_options = {
      message:
        "Este sitio web utiliza cookies para asegurarse de obtener la mejor experiencia de usuario. Si continúa navegando, consideramos que acepta su uso.",
      learnMore: "Más información",
      link: link,
      dismiss: "Aceptar",
      theme: "light-floating",
    };

    function loadAlert() {
      var script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.setAttribute(
        "src",
        "https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/1.0.9/cookieconsent.min.js"
      );
      document.head.appendChild(script);

      var styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      styleSheet.innerText = getStyles(color);
      document.head.appendChild(styleSheet);
    }

    var request = new XMLHttpRequest();
    request.open("GET", "https://www.geoplugin.net/json.gp", true);
    request.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        var data = JSON.parse(this.response);
        if (data.geoplugin_continentCode === "EU") {
          loadAlert();
        }
      } else {
        loadAlert();
      }
    };
    request.onerror = function () {
      loadAlert();
    };
    request.send();
  };
