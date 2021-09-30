//The message parser controls what happens when the user sends a message.

//import { isCompositeComponent } from "react-dom/test-utils";

//You have to implement this yourself. The beauty of this is that you can make the message parsing as complex or as simple as you'd like.

//The only method that the message parser needs to implement is the "parse" method. This method is called inside the chatbot when it receives a message from the user.

//The final piece of the puzzle is the actionprovider. We'll take a look at that next. It will handle bot actions. It will come as no surprise then, that the actionprovider is given to the messageparser, so that the messageparser can invoke the correct actions after the message is parsed.

class MessageParser {
    constructor(actionProvider,state) {
      this.actionProvider = actionProvider;
      this.state=state;
    }
    
    parse(message) {
      /*  console.log(message) */
        
      const lowerCaseMessage = message.toLowerCase()

      if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("your name") || lowerCaseMessage.includes("who are you")) {
        this.actionProvider.helloWorldHandler();
        }
      
      else if(lowerCaseMessage.includes("how") || lowerCaseMessage.includes("steps") || lowerCaseMessage.includes("step")){

/////////////////////// tng /////////////////////////

         if (lowerCaseMessage.includes("touch n go") || lowerCaseMessage.includes("touchngo") || lowerCaseMessage.includes("tng") || lowerCaseMessage.includes("touch 'n go")){

          if (lowerCaseMessage.includes("reload") || lowerCaseMessage.includes("topup") || lowerCaseMessage.includes("top up")){
            this.actionProvider.tngReloadHandler();
            }

            else if (lowerCaseMessage.includes("transfer")){

              if (lowerCaseMessage.includes("history") || lowerCaseMessage.includes("past")){
                this.actionProvider.tngTransHisHandler();
              }

              else {
              this.actionProvider.tngTransferHandler();
              }
            }
            
          else if (lowerCaseMessage.includes("signup") || lowerCaseMessage.includes("sign up") || (lowerCaseMessage.includes("create") && lowerCaseMessage.includes("account")) ){
          this.actionProvider.tngSignupHandler();
          }

          else {
            this.actionProvider.errorHandler();
          }
        }
////////////////////////////////////////////////////////////////

        else if ((lowerCaseMessage.includes("browse") || lowerCaseMessage.includes("search")) && lowerCaseMessage.includes("internet")){
          this.actionProvider.browseIntHandler();
        }

        //////////////// app /////////////////
        

        else if (lowerCaseMessage.includes("delete") || lowerCaseMessage.includes("remove") || lowerCaseMessage.includes("uninstall")){
          if (lowerCaseMessage.includes("apple")) {
            this.actionProvider.deleteAppleHandler();
        }

          else if (lowerCaseMessage.includes("android")) {
            this.actionProvider.deleteAndroidHandler();
          }

          else {
            this.actionProvider.appErrorHandler();
          }

        }

        else if (lowerCaseMessage.includes("data") || lowerCaseMessage.includes("cellular")) {
          if (lowerCaseMessage.includes("apple")){
            this.actionProvider.dataAppleHandler();
          }

          else if (lowerCaseMessage.includes("android")){
            this.actionProvider.dataAndroidHandler();
          }

          else {
            this.actionProvider.appErrorHandler();
          }
        }

        else if (lowerCaseMessage.includes("update") && (lowerCaseMessage.includes("app") || lowerCaseMessage.includes("application") || lowerCaseMessage.includes("applications"))) {
          if (lowerCaseMessage.includes("apple")){
            this.actionProvider.updateAppleHandler();
          }

          else if (lowerCaseMessage.includes("android")){
            this.actionProvider.updateAndroidHandler();
          }

          else {
            this.actionProvider.appErrorHandler();
          }
        }

        else if (lowerCaseMessage.includes("organize") && (lowerCaseMessage.includes("app") || lowerCaseMessage.includes("application") || lowerCaseMessage.includes("applications"))) {
          if (lowerCaseMessage.includes("apple")){
            this.actionProvider.organizeAppleHandler();
          }

          else if (lowerCaseMessage.includes("android")){
            this.actionProvider.organizeAndroidHandler();
          }

          else {
            this.actionProvider.appErrorHandler();
          }
        }

        else if (lowerCaseMessage.includes("location services") || lowerCaseMessage.includes("location service") || lowerCaseMessage.includes("location")) {
          if (lowerCaseMessage.includes("apple")){
            this.actionProvider.locationAppleHandler();
          }

          else if (lowerCaseMessage.includes("android")){
            this.actionProvider.locationAndroidHandler();
          }

          else {
            this.actionProvider.appErrorHandler();
          }
        }

        else if (lowerCaseMessage.includes("location") && (lowerCaseMessage.includes("app") || lowerCaseMessage.includes("application") || lowerCaseMessage.includes("applications"))) {
          if (lowerCaseMessage.includes("apple")){
            this.actionProvider.lAppleSettingsHandler();
          }

          else if (lowerCaseMessage.includes("android")){
            this.actionProvider.lAndroidSettingsHandler();
          }

          else {
            this.actionProvider.appErrorHandler();
          }
        }
        
        else if ((lowerCaseMessage.includes("download") || lowerCaseMessage.includes("install")) && (lowerCaseMessage.includes("app") || lowerCaseMessage.includes("application"))) {
          this.actionProvider.phoneHandler();
        }

        /////////////////////////////////////////////////////

        ////////////////////// whatsapp ///////////////////

        else if (lowerCaseMessage.includes("whatsapp") || lowerCaseMessage.includes("whats app") || lowerCaseMessage.includes("whatsapps")) {

         if ((lowerCaseMessage.includes("register") || lowerCaseMessage.includes("create")) && lowerCaseMessage.includes("account")) {
          this.actionProvider.waRegisterHandler();
        }

        else if ((lowerCaseMessage.includes("start") || lowerCaseMessage.includes("new") || lowerCaseMessage.includes("create")) && lowerCaseMessage.includes("chat")){
          this.actionProvider.waStartChatHandler();
        }

        else if (lowerCaseMessage.includes("video") || lowerCaseMessage.includes("call")){
          this.actionProvider.waStartVideoHandler();
        }

        else {
          this.actionProvider.errorHandler();
        }
      }

        ////////////////////////////////////////////////////

        else if(lowerCaseMessage.includes("qr") && lowerCaseMessage.includes("scan")){
          this.actionProvider.scanQrHandler();
        }

        else if (lowerCaseMessage.includes("account") && (lowerCaseMessage.includes("create") || lowerCaseMessage.includes("signup") || lowerCaseMessage.includes("sign up")) && lowerCaseMessage.includes("google")){
            this.actionProvider.gooAccHandler();
        }

        else if ((lowerCaseMessage.includes("switchon") || lowerCaseMessage.includes("switch on") || lowerCaseMessage.includes("turn on") || lowerCaseMessage.includes("turnon")) && lowerCaseMessage.includes("phone")){
          this.actionProvider.switchOnHandler();
        }

        ///////////////// chrome ////////////////

        else if (lowerCaseMessage.includes("chrome")) {
          if (lowerCaseMessage.includes("history") && (lowerCaseMessage.includes("clear") || lowerCaseMessage.includes("remove") || lowerCaseMessage.includes("delete"))){
            this.actionProvider.clearHistHandler();
          }

          else if (lowerCaseMessage.includes("bookmark") || lowerCaseMessage.includes("star")) {
            this.actionProvider.bookmarkHandler();
          }

          else {
            this.actionProvider.errorHandler();
          }

        }

        /////////////////////////////////////////

        /////////////////////// grab /////////////////////////

        else if (lowerCaseMessage.includes("grab")){
          if (lowerCaseMessage.includes("pay")){
            this.actionProvider.grabPayHandler();
          }

          else if (lowerCaseMessage.includes("reload") || lowerCaseMessage.includes("topup") || lowerCaseMessage.includes("top up")){
            this.actionProvider.grabReloadHandler();
          }

          else if (lowerCaseMessage.includes("transfer")){
            this.actionProvider.grabTransferHandler();
          }

          else if (lowerCaseMessage.includes("receive")){
            this.actionProvider.grabReceiveHandler();
          }
          
          else if (lowerCaseMessage.includes("order") || lowerCaseMessage.includes("food")){
            this.actionProvider.grabOrderHandler();
          }

          else if (lowerCaseMessage.includes("ride")){
            this.actionProvider.grabRideHandler();
          }

          else if (lowerCaseMessage.includes("mart")){
            this.actionProvider.grabMartHandler();
          }

          else {
            this.actionProvider.errorHandler();
          }
        }

        //////////////////////////////////////////////

        else {
            this.actionProvider.errorHandler();
          }
      } //first if
////////////////////////////////////////////////////////// knowledge based /////////////////////////////////////////////////////////////////////////////////////
      else if (lowerCaseMessage.includes("what")) {
        if (lowerCaseMessage.includes("qr")) {
          this.actionProvider.qrKnowledge();
        }

        else if (lowerCaseMessage.includes("google")) {
          this.actionProvider.gooKnowledge();
        }

        else if (lowerCaseMessage.includes("internet")) {
          this.actionProvider.intKnowledge();
        }

        else if (lowerCaseMessage.includes("app") || lowerCaseMessage.includes("application") || lowerCaseMessage.includes("apps") || lowerCaseMessage.includes("applications")){
          this.actionProvider.appKnowledge();
        }

        else if ((lowerCaseMessage.includes("tips") || lowerCaseMessage.includes("tip")) && lowerCaseMessage.includes("safety")){
          this.actionProvider.safetyHandler();
        }

        else if (lowerCaseMessage.includes("sim")){
          this.actionProvider.simKnowledge();
        }

        else if (lowerCaseMessage.includes("mobile data") || lowerCaseMessage.includes("data") || lowerCaseMessage("cellular")) {
          this.actionProvider.mobileDataKnowledge();
        }

        else if (lowerCaseMessage.includes("appstore") || lowerCaseMessage.includes("app store")) {
          this.actionProvider.appStoreKnowledge();
        }

        else if (lowerCaseMessage.includes("playstore") || lowerCaseMessage.includes("play store") || lowerCaseMessage.includes("google store")) {
          this.actionProvider.playStoreKnowledge();
        }

        else if (lowerCaseMessage.includes("airplane")) {
          this.actionProvider.airplaneKnowledge();
        }

        else if (lowerCaseMessage.includes("wifi") || lowerCaseMessage.includes("wi fi") || lowerCaseMessage.includes("wi-fi")){
          this.actionProvider.wifiKnowledge();
        }

        else if (lowerCaseMessage.includes("bluetooth")){
          this.actionProvider.bluetoothKnowledge();
        }

        else if (lowerCaseMessage.includes("location")){
          this.actionProvider.locationKnowledge();
        }

        //////////////////// grab //////////////////////////
        else if (lowerCaseMessage.includes("grab")){
          if (lowerCaseMessage.includes("pay") || lowerCaseMessage.includes("wallet")){
            this.actionProvider.grabPayKnowledge();
          }

          else if (lowerCaseMessage.includes("food")){
            this.actionProvider.grabFoodKnowledge();
          }
          
          else if (lowerCaseMessage.includes("transfer")){
            this.actionProvider.grabTransferKnowledge();
          }

          else if (lowerCaseMessage.includes("mart")){
            this.actionProvider.grabMartKnowledge();
          }

          else {
            this.actionProvider.grabKnowledge();
          }

          } // end grab

    ////////////////////////////////////////////////////////

      else if (lowerCaseMessage.includes("whatsapp") || lowerCaseMessage.includes("whats app") || lowerCaseMessage.includes("whatsapps")){
        this.actionProvider.whatsappKnowledge();
      }

    /////////////////////////tng////////////////////////////
      else if (lowerCaseMessage.includes("touchngo") || lowerCaseMessage.includes("tng") || lowerCaseMessage.includes("touch n go") || lowerCaseMessage.includes("touch 'n go")){
        this.actionProvider.tngKnowledge();
      }


  ////////////////////////////////////////////////////////////////
        else {
          this.actionProvider.errorHandler();
        }      
      } //what

      else {
        this.actionProvider.error2Handler();
      } //else

    } //parse
  }
    
    
    export default MessageParser;

  //  new MessageParser(actionProvider,state)