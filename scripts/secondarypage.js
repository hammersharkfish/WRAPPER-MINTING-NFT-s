import { configjsexportwrapped } from './wrappedconfig.js';

    function disconnectpress(){ 
    	disconnectaccount()
      localStorage.setItem("walletManagechoice","disconnect")
      primarywindow=window.open(window.loginpage, "_self");
      primarywindow.onload = function() {primarywindow.close(); }
    }
    function anotherwalletfun(){
    	disconnectaccount()
    	 // $(window.connectwalletpopupId).css("display","block");
               localStorage.setItem("walletManagechoice","anotherwallet")
               primarywindow=window.open(window.loginpage, "_self");
               primarywindow.onload = function() {primarywindow.close();} 
    }
    async function disconnectaccount(){ 

      if  (localStorage.getItem("modechoice")=="walletconnect" && window.localStorage.getItem()=="walletconnect"){

    //COMMENTED OUT BECAUSE THROWS ERROR --> GIHUB ISSUE RAISED BUT NO RESOLUTION .
   // var completeDisconnection= await window.provider.disconnect()
   // await window.provider.on("disconnect",()=>{ })  
	  window.localStorage.removeItem('walletconnect');
 }
      accountheader.innerHTML="Disconnected"

    }    
    function cancelpopup(){ 
      $(window.walletmanageId).css("display","none");
      }
    function walletmanager(){

      $(function () {
          $(window.walletmanageId).css("display","block");

        });
      
      $(window.anotherwalletId).on('click', function(){
    	anotherwalletfun();
   //  $(window.walletmanageId).css("display","none");
		 // $('#wrapped-primarypage').css("display","block");
		 // $('#wrapped-secondarypage').css("display","none");
		 // document.location.reload(true)} ) 
		})
      
      $(window.disconnectId).on('click', function(){
      disconnectpress();
  		// $(window.walletmanageId).css("display","none");
  		//  $('#wrapped-primarypage').css("display","block");
  		//  $('#wrapped-secondarypage').css("display","none");
  		// document.location.reload(true)} ) 
  	})
      
      $(window.cancelId).on('click', function(){
      cancelpopup(); 
  	// $(window.walletmanageId).css("display","none"); 
  		})
  	}

                    function displaySecondarypage(){
                    $(window.NFTId).css("display","block")    
                      // image.src =localStorage.getItem("NFTbase64") ;
                      // document.body.appendChild(image);
                    window.NFTbase64.src=localStorage.getItem("NFTbase64")
                    const json = atob(localStorage.getItem("NFTbase64").substring(29));
                    const result = JSON.parse(json);
                    window.NFTbase64.src=result["image"]
                    window.accountheader.innerHTML=localStorage.getItem("userAddressWrapper")
                    $(window.accountheader).on('click', function(){
                    walletmanager();
                    } 
                    )
                    }

class wrapperconnectwallet {
  constructor() {
    var latesttokenid
    window.insertHTML="#wrapped-insertHTML"
    window.wrappedsecondaryid="#wrapped-secondarypage"
    window.imagedivid="#wrapped-NFTimagediv"
    window.NFTId="#wrapped-NFTimage"
    window.NFT="wrapped-NFTimage"

    window.loginpage=configjsexportwrapped.loginpage 

  	window.anotherwalletId="#wrapped-anotherwallet";
  	window.disconnectId="#wrapped-disconnect";
  	window.cancelId="#wrapped-cancel";

  	window.walletmanageId='.wrapped-wallet-manage-popup';


  	this.loginButtonId = "wrapped-myBtn";
  	this.clickButtonId="wrapped-claim";
  	this.blochaindisplayId="wrapped-Blockchain";
  	this.waitdisplaId="wrapped-Wait";
  	this.accountheaderId="wrapped-myBtn2";


  }
  	 getHTMLbyId(){  
    window.accountheader=document.getElementById(this.accountheaderId);
    window.NFTbase64=document.getElementById(window.NFT);
  }
	}
  window.onload= () => { 
    var wrapperobj=new wrapperconnectwallet
    $(window.insertHTML).html(configjsexportwrapped.logoutinsert);
    wrapperobj.getHTMLbyId();
    displaySecondarypage() 
  }

