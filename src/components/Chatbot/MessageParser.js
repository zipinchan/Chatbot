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

      
      if(lowerCaseMessage.includes("how")){

        if (lowerCaseMessage.includes("hello")) {
          this.actionProvider.helloWorldHandler();
          }

        else if (lowerCaseMessage.includes("download") && (lowerCaseMessage.includes("app") || lowerCaseMessage.includes("application"))) {
            this.actionProvider.phoneHandler();
          }

/////////////////////// tng /////////////////////////

        else if (lowerCaseMessage.includes("touch n go") || lowerCaseMessage.includes("touchngo") || lowerCaseMessage.includes("tng")){

            if (lowerCaseMessage.includes("reload")){
              this.actionProvider.tngReloadHandler();
            }

            else if (lowerCaseMessage.includes("transfer")){
              this.actionProvider.tngTransferHandler();
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

        else if(lowerCaseMessage.includes("qr") && lowerCaseMessage.includes("scan")){
          this.actionProvider.scanQrHandler();
        }

        else if (lowerCaseMessage.includes("account") && (lowerCaseMessage.includes("create") || lowerCaseMessage.includes("signup") || lowerCaseMessage.includes("sign up")) && lowerCaseMessage.includes("google")){
            this.actionProvider.gooAccHandler();
        }

        else if ((lowerCaseMessage.includes("switchon") || lowerCaseMessage.includes("switch on") || lowerCaseMessage.includes("turn on") || lowerCaseMessage.includes("turnon")) && lowerCaseMessage.includes("phone")){
          this.actionProvider.switchOnHandler();
        }

        /////////////////////// grab /////////////////////////

        else if (lowerCaseMessage.includes("grab")){
          if (lowerCaseMessage.includes("pay")){
            this.actionProvider.grabPayHandler();
          }

          else if (lowerCaseMessage.includes("transfer")){
            this.actionProvider.grabTransferHandler();
          }

          else if (lowerCaseMessage.includes("receive")){
            this.actionProvider.grabReceiveHandler();
          }
          
          else if (lowerCaseMessage.includes("order")){
            this.actionProvider.grabOrderHandler();
          }

          else if (lowerCaseMessage.includes("ride")){
            this.actionProvider.grabRideHandler();
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

        }


      }


      else {
        this.actionProvider.error2Handler();
      } //else

    } //parse
  }
    
    
    export default MessageParser;

  //  new MessageParser(actionProvider,state)