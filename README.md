This reposoitory was made keeping in mind Non-developers. Follow these steps  - 

1. Copy and paste your project in a new folder , if you mess up the steps you will still have the orignal files .  

2. Copy and paste the wrappedcontent.css file in your projectdirectory/content/css . 

3. Copy and paste \<link rel="stylesheet" href="content/css/wrappedcontent.css" /> inside the <head></head> tags of loginpage and logoutpage  . 

4. Copy and paste just above the </body> tag of loginpage (with rest of the \<script></script> pile)  -
    <script type="module" src="scripts/wrappedconfig.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@walletconnect/web3-provider@1.7.5/dist/umd/index.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script type="module" src="scripts/NFKEYWRAPPER.js"></script>  

5. Copy and paste just above the </body> tag of logoutpage (with rest of the \<script></script> pile) -
    <script type="module" src="scripts/wrappedconfig.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@walletconnect/web3-provider@1.7.5/dist/umd/index.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script type="module" src="scripts/secondarypage.js"></script>

6. Provide id="wrapped-myBtn" on the button you wish to use as login buttton on your login page . 
   eg- \<button id="wrapped-myBtn"  class="ABC XYZ">login\</button>

7. Provide id="wrapped-myBtn2" on the button you wish to use as the logout button on your logout page. 
   eg-  \<button id="wrapped-myBtn2"  class="ABC XYZ">logout\</button>

8. Copy and paste \<div id="wrapped-insertHTML"></div> just above \</body> tag in login and logout page . 

9. In wrappedconfig.js change login and logout page to your login and logout pages' URL. 
  eg loginpage:"https://example.com/loginpage.html"
     logoutpage:"https://example.com/logoutpage.html"

10. Copy and paste \<img  id="wrapped-NFTimage" src="" /> on the logout page (optional) .



