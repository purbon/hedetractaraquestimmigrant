(function() {
  var lang = window.navigator.userLanguage || window.navigator.language;
  var url = "index.ca.html"
  if (lang == "es-ES") {
    url = "index.es.html";
  }
  window.location = url
})();
