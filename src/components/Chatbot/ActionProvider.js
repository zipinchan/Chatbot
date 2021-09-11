//The actionprovider controls what kind of action that the chatbot is going to perform. 
//The actionprovider is given the createChatBotMessage and createClientMessage functions in the constructor, which you can use to create a new responses.

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    
    }

    helloWorldHandler = () => {
      const message = this.createChatBotMessage("Hi, I'm nerdybot!")
      this.setChatbotMessage(message)
    }

    todosHandler = () => {
      const message = this.createChatBotMessage("Sure. Here;s your todos.", {
        widget: "todos"
      })
      this.setChatbotMessage(message); //create chatbot message
    }

    

    setChatbotMessage = (message) => {
     this.setState(state =>({ ...state, messages: [...state.messages, message] }) ) //create chatbot message instance
    }


   /* greet() {
        const greetingMessage = this.createChatBotMessage("Hi, friend.")
        this.updateChatbotState(greetingMessage)
      }
      
      handleJavascriptList = () => {
        const message = this.createChatBotMessage(
          "What do u want to know about? :)",
          {
           // widget: "linklist",
          }


        );
   
      this.updateChatbotState(message);
        };

     updateChatbotState(message) {
    // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
            
       this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages]
        }));
      }
    */
  }
  
  export default ActionProvider;
  