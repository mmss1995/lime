$(document).ready(function(){
  var cookie = false;
  if(localStorage){
    cookie = localStorage.getItem("noShowWelcome");
  }
  if (!cookie){
    setTimeout(function () {
      $("#cookieConsent").fadeIn(200);
    }, 4000);
    $("#closeCookieConsent, .cookieConsentOK").click(function() {
      $("#cookieConsent").fadeOut(200);
      localStorage.setItem("noShowWelcome", true);
    });
  }
});
