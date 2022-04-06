
export const configjsexportwrapped=
   { 

   	loginpage:"http://127.0.0.1:8080/index.html",// ENTRY
   	logoutpage:"http://127.0.0.1:8080/success.html", // ENTRY

   	logininsert: `<!-- WRAPPED HTML -->
<div id="wrapped-myModal" class="wrapped-modal">

  <!-- Modal content -->
  <div class="wrapped-modal-content">
    <span id ="wrapped-wrappedclose" class="wrapped-close">&times;</span>
            <button id="wrapped-metamaskbutton" type="wrapped-button" class="wrapped-wallet-btn">
            <img width="45" src="content/images/metamask.svg" alt="Metamask" />
            <h5 class="wrapped-popup__subheading">Metamask</h5>
            <p class="mb-0 text-muted">Connect to your MetaMask Wallet</p>
        </button>
        <button id="wrapped-walletconnectbutton" type="wrapped-button" class="wrapped-wallet-btn">
            <img width="45" src="content/images/walletconnect.svg" alt="WalletConnect" />
            <h5 class="wrapped-popup__subheading">WalletConnect</h5>
            <p class="mb-0 text-muted">Scan with WalletConnect to connect</p>
        </button>
  </div>

</div>
<div class="wrapped-claim-your-nft-popup">
<div id='wrapped-authdisplay' class="wrapped-site-popup wrapped-claim-your-nft-popup-content">
<h3 id="wrapped-Wait"class="wrapped-popup__subheading">Authorization Failed</h3>
<h2 id="wrapped-Blockchain" class="wrapped-popup__heading">You do not have an NFKey</h2>
<button id='wrapped-claim' onclick="" type="button" class="wrapped-btn">CLAIM YOUR NFKEY</button>
</div>
</div>
<!-- WRAPPED HTML --> `,
    
    logoutinsert:`<!-- WRAPPED WALLET MANAGE -->
<div id="wrapped-walletmanage" class="wrapped-wallet-manage-popup">
  <div class="wrapped-wallet-manage-popup-content">
    	<h2>Wallet manage</h2>
        <button  id="wrapped-anotherwallet"  type="button" class="wrapped-wallet-btn">
            <p class="mb-0 text-muted">Use another wallet</p>
        </button>
        <button id="wrapped-disconnect" type="button" class="wrapped-wallet-btn">
            <p class="mb-0 text-muted">Disconnect</p>
        </button>
        <button id="wrapped-cancel" type="button" class="wrapped-wallet-btn">
            <p class="mb-0 text-muted">Cancel</p>
        </button>
  </div>
   </div>
<!--WRAPPED WALLET MANAGE -->` 

}
