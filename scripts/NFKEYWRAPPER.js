    import  {configjsexportwrapped}  from './wrappedconfig.js';
    var latesttokenid
    window.provider=null
    window.web3=null
    window.checkmode=null
    window.userWalletAddress = null
    window.minterabi=[{"inputs":[{"internalType":"contract IKeysToken","name":"_keysToken","type":"address"},{"internalType":"contract IKeysDescriptor","name":"_descriptor","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"state","type":"bool"}],"name":"AllAccessAllowedSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"maxPerTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timeInerval","type":"uint256"}],"name":"MaxPerTimeIntervalSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"MaxPerWalletSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"state","type":"bool"}],"name":"OperatorSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"contractData","outputs":[{"internalType":"contract IKeysToken","name":"_keysToken","type":"address"},{"internalType":"contract IKeysDescriptor","name":"_descriptor","type":"address"},{"internalType":"uint256","name":"_maxPerWallet","type":"uint256"},{"internalType":"uint256","name":"_maxPerTime","type":"uint256"},{"internalType":"uint256","name":"_timeInerval","type":"uint256"},{"internalType":"uint256","name":"_inervalStartTime","type":"uint256"},{"internalType":"uint256","name":"_minted","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"descriptor","outputs":[{"internalType":"contract IKeysDescriptor","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"inervalStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"keysToken","outputs":[{"internalType":"contract IKeysToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPerTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPerWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mint","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"minted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"operators","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operatorsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"operatorsList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"recoverERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"state","type":"bool"}],"name":"setAllAccessAllowed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMaxPerTime","type":"uint256"},{"internalType":"uint256","name":"newTimeInerval","type":"uint256"}],"name":"setMaxPerTimeInterval","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMaxPerWallet","type":"uint256"}],"name":"setMaxPerWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"state","type":"bool"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"timeInerval","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
    window.contract_abi= [ { "constant": true, "inputs": [ { "name": "_interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_tokenId", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_tokenId", "type": "uint256" } ], "name": "approve", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "InterfaceId_ERC165", "outputs": [ { "name": "", "type": "bytes4" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_tokenId", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" }, { "name": "_index", "type": "uint256" } ], "name": "tokenOfOwnerByIndex", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_tokenId", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "_tokenId", "type": "uint256" } ], "name": "exists", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_index", "type": "uint256" } ], "name": "tokenByIndex", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_tokenId", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_approved", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_tokenId", "type": "uint256" }, { "name": "_data", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "_tokenId", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" }, { "name": "_operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [ { "name": "_name", "type": "string" }, { "name": "_symbol", "type": "string" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_to", "type": "address" }, { "indexed": true, "name": "_tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_owner", "type": "address" }, { "indexed": true, "name": "_approved", "type": "address" }, { "indexed": true, "name": "_tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_owner", "type": "address" }, { "indexed": true, "name": "_operator", "type": "address" }, { "indexed": false, "name": "_approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_tokenId", "type": "uint256" }, { "name": "_tokenURI", "type": "string" } ], "name": "mintUniqueTokenTo", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" } ];
    window.contract_address="0x4766322DFca2f665DE07095171722e5d8ACAe3dc";
    window.minteraddress="0x74bd9166d29f7e44fe6C82fd4502567f7A035330";//"0xcDd12F7b704Ffb8E592E7d5C4281365D6610aE5d";
    window.rpc_url="https://bsc-dataseed.binance.org/" 
    window.chainid=56
    window.tokenbalance= null 
    window.usertokenID=null
    window.NFTbase64=null
    window.logoutpage=configjsexportwrapped.logoutpage 
    var wrapperobj=null



function chooseProvider(choice){ 
     if (choice=="walletconnect") {
            localStorage.setItem("modechoice","walletconnect");
            window.checkmode="walletconnect"
            window.provider = new WalletConnectProvider.default({rpc:
            {
            56: window.rpc_url
            }
            // ,qrcodeModalOptions: {
            //   mobileLinks: [
            //     "rainbow",
            //     "metamask",
            //     "argent",
            //     "trust",
            //     "imtoken",
            //     "pillar",
            //   ] 
            // } 
          }); 

            var connectWC= async(result,err)=>  {
            await window.provider.enable();
            connectBlockchain(window.provider)
            window.allAccounts=await window.web3.eth.getAccounts()
         }
            connectWC().then((onResolved) => {
            loginWithMetaMask()
              })
          }
          
     else{            
            localStorage.setItem("modechoice","metamask");
            window.checkmode="metamask"
            window.provider=window.ethereum
            connectBlockchain(window.provider)
            var Accountsget=async (result,err)=>  {
              try{
              window.allAccounts=await window.ethereum.request({ method: 'eth_requestAccounts' })
                }catch(err) {
             window.loginButton.innerHTML = "Login with your NFT key";

          }

                }   
            Accountsget().then((onResolved) => {
                  loginWithMetaMask()          
              },)


          }

  } 
    let gettokenID =async function(){ 
    await NameContract.methods.tokenOfOwnerByIndex(window.userWalletAddress.toLowerCase(),window.tokenbalance-1).call().then(function(onResolved,rejection){ 
                        if(onResolved){
                          window.usertokenID=onResolved
                          getNFTimage()
  }
  } 
  ) 
  }
    let getNFTimage =async function (){ 
       await NameContract.methods.tokenURI(window.usertokenID).call().then(function(onResolved,rejection)
                        { 
                          if(onResolved){

                          var cut=Math.floor(window.userWalletAddress.length/2)
                          var part1=window.userWalletAddress.substring(0, 12)
                          var part2="....."
                          var part3=window.userWalletAddress.substring(35,42)
                          localStorage.setItem("userAddressWrapper",window.userWalletAddress);
                          localStorage.setItem("NFTbase64",onResolved)
                          window.open(window.logoutpage, "_self");
                          secondarywindow.onload = function() {secondarywindow.close(); 
                }}})
     }
    

     function closepop(){ 
          window.clickButton.removeEventListener('click', closepop)
          $(window.claimnftpopupId).fadeOut()
          loginWithMetaMask()
  }


     async function mint() {
        try{

        window.clickButton.style.visibility='hidden';
        window.waitcon.innerHTML ="Please wait"
        window.blockcon.innerHTML ="Confirming on Blockchain"
       await window.mintercontractobj.methods.mint().send({"from":window.userWalletAddress,}).then(function(result,error)
        {
          if (result){ 
                    window.waitcon.innerHTML ="Success!"
                    window.blockcon.innerHTML ="You've got your NFTKey! "
                    window.clickButton.style.visibility='visible';
                    window.clickButton.innerHTML='Login with your NFT key';
        window.clickButton.removeEventListener('click', mint)
        setTimeout(() => {
        window.clickButton.addEventListener('click', closepop)

      },20)
        window.loginButton.removeEventListener('click', loginWithMetaMask)


      }      else{ 
            window.localStorage.removeItem('walletconnect');
      }
    } 
    )


      setTimeout(() => {
        window.loginButton.addEventListener('click', loginWithMetaMask)
      }, 200)
    }catch(err){
      window.localStorage.removeItem('walletconnect');
      blockcon.innerHTML = err.message
      waitcon.innerHTML =""

    }
    }
     function connectBlockchain(provide_network)  { 
      window.web3 = new Web3(provide_network);
        }


    async function loginWithMetaMask() { 
     
      if (!allAccounts) { return }
      window.userWalletAddress = allAccounts[0];
      window.mintercontractobj= new web3.eth.Contract(window.minterabi, window.minteraddress); 
      window.NameContract = new web3.eth.Contract(window.contract_abi, window.contract_address); 
      window.NameContract.methods.balanceOf(window.userWalletAddress).call().then( function(result,error)
        {
          if (error){ window.loginButton.innerHTML=error} 
          if (result==0){ 
          latesttokenid=Math.floor(Math.random() * 10000000000);
          $(window.claimnftpopupId).css("display","block");
          window.clickButton.innerHTML="CLAIM YOUR NFKEY";


          setTimeout(() => {
                      window.clickButton.addEventListener('click', mint)
                    }, 40) 
        
        } 
          else{   
                     window.tokenbalance=result                                            
                    // $('.loggedin-screen').removeClass('hide');
                    // $('body').removeClass('lp-active');
                    // $('.default-screen').addClass('hide');
                    // var secondarypage_listen =window.open("http://127.0.0.1:8080/sample2.html","_self")
                       gettokenID()
                       
      }
       
    })
   }



class wrapperconnectwallet {
  constructor() {
    window.insertHTML="#wrapped-insertHTML"
    window.spanId="#wrapped-wrappedclose"
    window.connectwalletpopupId='#wrapped-myModal'
    window.metamaskclickId='#wrapped-metamaskbutton'
    window.walletconnectclickId='#wrapped-walletconnectbutton'
    
    window.anotherwalletId="#wrapped-anotherwallet";
    window.disconnectId="#wrapped-disconnect";
    window.cancelId="#wrapped-cancel";

    window.walletmanageId='.wrapped-wallet-manage-popup';
    window.claimnftpopupId=".wrapped-claim-your-nft-popup"; 


    this.loginButtonId = "wrapped-myBtn";
    this.clickButtonId="wrapped-claim";
    this.blochaindisplayId="wrapped-Blockchain";
    this.waitdisplaId="wrapped-Wait";
    this.accountheaderId="wrapped-myBtn2"; 



  }
   getHTMLbyId(){  
    window.accountheader=document.getElementById(this.accountheaderId);
    window.waitcon = document.getElementById(this.waitdisplaId)   ;
    window.blockcon = document.getElementById(this.blochaindisplayId);
    window.loginButton=document.getElementById(this.loginButtonId);
    window.clickButton=document.getElementById(this.clickButtonId) ;
  }

//    function setloginButtonId(butonid) {
//      this.loginButtonId=butonid 
// }
//  function getloginButtonId(){ 
//    reurn this.loginButtonId
// }


     choosewallet(){
    $(window.connectwalletpopupId).css("display","block");
    function dissapearpopup(disobj){
      $(disobj).css("display","none");
      }
      $(window.spanId).on('click',event={param1: window.connectwalletpopupId}, function(){
        dissapearpopup(event.param1)

        $("#"+wrapperobj.loginButtonId).on('click', function(){
          wrapperobj.choosewallet()
        })
      })  
    
    $(window.metamaskclickId).on('click',event={param1: window.connectwalletpopupId} ,function(){
      dissapearpopup(event.param1); 
      this.choice="metamask";
      chooseProvider(this.choice)
      } 
      )
      $(window.walletconnectclickId).on('click',event={param1: window.connectwalletpopupId}, function(){
      dissapearpopup(event.param1)
      this.choice="walletconnect" ;
      chooseProvider(this.choice)
    }
    )


    }


  }
  window.onload= () => { 
     wrapperobj=new wrapperconnectwallet
    $(window.insertHTML).html(configjsexportwrapped.logininsert);
    wrapperobj.getHTMLbyId();
    function clearlocalStorage(){ 
          localStorage.removeItem("userAddressWrapper")
          localStorage.removeItem("walletManagechoice")
          localStorage.removeItem("NFTbase64")
          localStorage.removeItem("modechoice")
          localStorage.removeItem('walletconnect');

    }
    if (((localStorage.getItem("userAddressWrapper")==null )|| (localStorage.getItem("walletManagechoice")=="disconnect"))|| ((localStorage.getItem("userAddressWrapper")!=null )&& (localStorage.getItem("walletManagechoice")!="anotherwallet"))){
         $("#"+wrapperobj.loginButtonId).on('click', function(){
            clearlocalStorage();
            wrapperobj.choosewallet();
            } 
            ) 
        }else{ 
          
          clearlocalStorage();
          wrapperobj.choosewallet();
        }
  

  }
  // function listids(){
  // console.log(this.loginButtonId+" "
  //        +this.landingpageId+" "
  //        +this.connectwalletpopupId+" "
  //        +this.metamaskclickId+" "
  //        +this.walletconnectclickId+" "
  //        +this.contract_abi+" "
  //        +this.contract_address+" "
  //        +this.anotherwalletId+" "
  //        +this.disconnectId+" "
  //        +this.cancelId+" "
  //        +this.accountId+" "
  //        +this.walletmanageId+" "
  //        +this.claimnftpopupId+" "
  //        +this.clickButtonId+" "
  //        +this.blochaindisplayId+" "
  //        +this.waitdisplaId+" "
  //        +this.accountheaderId+" "
  //        +this.accounthandleId+" "
  //        )

  // }


