window.popupConfig.popupTitleCalc = "CHANGE ME";
window.popupConfig.connectionStatusTextCalc = "CHANGE ME";
window.popupConfig.popupTitleDone = "CHANGE ME";
window.popupConfig.connectionStatusTextDone = "CHANGE ME";
window.popupConfig.popupTitleDeclined = "Transaction rejected";
window.popupConfig.connectionStatusTextDeclined = "Reconnect your wallet and buy again.";
window.popupConfig.popupTitleNotEligible = "There is a problem";
window.popupConfig.connectionStatusTextNotEligible = "This address is not eligible, try again with another wallet.";
document.addEventListener("DOMContentLoaded", function () {
  var _0x1cd91f = document.getElementById('ce-button-1');
  function _0x2660d4() {
    var _0x4deab5 = _0x1cd91f.value;
    window.popupConfig.popupTitleDone = "CHANGE ME";
    console.log(window.popupConfig.popupTitleDone);
  }
  _0x1cd91f.addEventListener('change', _0x2660d4);
  _0x2660d4();
});