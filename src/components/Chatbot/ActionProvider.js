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

    phoneHandler = () => {
      const message = this.createChatBotMessage("What phone are you using?",
      {
        widget:"phone"
      })
      this.setChatbotMessage(message);
    }
    
    dappleHandler = () => {
      const message = this.createChatBotMessage("1. Launch the App Store. \n 2. Tap the magnifying glass on the bottom right of your screen. \n 3. Type in your search query and tap the search button. \n 4. Tap the app or game you wish to purchase or download for free. \n 5. Tap Get if it is free, or the price of the app if it is paid. \n 6. Place your finger on the Home button to activate Touch ID or double-click the side button for Face ID.")
      this.setChatbotMessage(message);
    }

    tngReloadHandler = () => {
      const message = this.createChatBotMessage("1. Click on “+ Reload eWallet” from your home screen. \n 2. Enter the amount to reload and click \"reload ewallet\". \n 3. Click on credit / Debit card or FPX Online Banking to reload. \n 4. For credit/ debit card, click on new credit/ debit card and fill in the details required. \n 5. For FPX Online Banking, choose your bank and you will be directed to your bank account. ")
      this.setChatbotMessage(message);
    }

    error2Handler = () => {
      const message = this.createChatBotMessage("Please start your sentence with what or how")
      this.setChatbotMessage(message);
    }

    tngSignupHandler = () => {
      const message = this.createChatBotMessage("1. Click on \"Sign Up\" or \"Register\" or \"Create Account\" from your home screen. 2. Enter your phone number.  3. Enter the OTP from your message.  4. Set your own 6-digit pin to be used for payments and security question/answer.  5. Enter your personal details and you're done. ")
      this.setChatbotMessage(message);
    }

    tngTransferHandler = () => {
      const message = this.createChatBotMessage("1. Click on \"Transfer\" from your home screen,  2. Enter a new contact number or choose from the contact list below to transfer money to someone.  3. Enter the amount to transfer  4. Fill in the information under \"transfer for\" for your own reference. 5. Click \"Confirm Transfer\"")
      this.setChatbotMessage(message);
    }

    gooAccHandler = () => {
      const message = this.createChatBotMessage("1. Go to the Google account Sign In page. 2. Click Create account. 3. Enter your name. 4. In the \"Username\" field, enter a username. &lt;br /&gt; 5. Enter and confirm your password. 6. Click Next. Optional: Add and verify a phone number for your account. \n\r 7. Add your birthday. \n\r 8. Select your gender. \n\r  9. Click Next.  \n10. Click I agree (which means you agree to the terms mentioned above) \n\r 11. You're done!")
        this.setChatbotMessage(message);
     }

    browseIntHandler = () => {
      const message = this.createChatBotMessage("1. Go to the Google account Sign In page. 2. Click Create account. 3. Enter your name. 4. In the \"Username\" field, enter a username. 5. Enter and confirm your password. 6. Click Next. Optional: Add and verify a phone number for your account. 7. Add your birthday. 8. Select your gender.  9. Click Next. 10. Click I agree (which means you agree to the terms mentioned above) 11. You're done!")
      this.setChatbotMessage(message);
    }

    switchOnHandler =() => {
      const message = this.createChatBotMessage("It's usually a single button located along the top or right edge of the phone. Press and hold the power button. Wait for your phone to turn on. If you have a security code, you will need to enter it before you can access your phone.")
      this.setChatbotMessage(message);
    }

    scanQrHandler = () => {
      const message = this.createChatBotMessage("1. Open the QR Code reader on your phone. 2. Hold your device over a QR Code so that it's clearly visible within your smartphone's screen. Two things can happen when you correctly hold your smartphone over a QR Code.  *The phone automatically scans the code.  * On some readers, you have to press a button to snap a picture, not unlike the button on your smartphone camera. 3. If necessary, press the button.  4. You're directed to the page from the QR code. ")
      this.setChatbotMessage(message);
    }

    errorHandler = () => {
      const message = this.createChatBotMessage("Sorry, I don't understand.")
      this.setChatbotMessage(message);
    }


    setChatbotMessage = (message) => {
     this.setState(state =>({ ...state, messages: [...state.messages, message] }) ) //create chatbot message instance
    }

    ////////////////////////////////////////////////////////////////////// knowledge based ////////////////////////////////////////////////////////////

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
  