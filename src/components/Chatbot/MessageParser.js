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
    
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.helloWorldHandler();
        }

      else if (lowerCaseMessage.includes("todos")){
          this.actionProvider.todosHandler();
        }

      else if (lowerCaseMessage.includes("download")) {
          this.actionProvider.phoneHandler();

          const lowerCaseMessage = message.toLowerCase()
        
          if (lowerCaseMessage.includes ("apple")){
            this.actionProvider.dappleHandler();
          }
        }

      else if (lowerCaseMessage.includes("reload")){
          this.actionProvider.tngReloadHandler();
        }

      else if (lowerCaseMessage.includes("browse")){
        this.actionProvider.browseIntHandler();
      }

      else if(lowerCaseMessage.includes("qr")){
        this.actionProvider.scanQrHandler();
      }

      else if (lowerCaseMessage.includes("account")){
          this.actionProvider.gooAccHandler();
      }

      else if (lowerCaseMessage.includes("switchon")){
        this.actionProvider.switchOnHandler();
      }

      else {
          this.actionProvider.errorHandler();
        }
      }
    }
    
    export default MessageParser;

  //  new MessageParser(actionProvider,state)