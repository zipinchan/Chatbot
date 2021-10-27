//The actionprovider controls what kind of action that the chatbot is going to perform.
//The actionprovider is given the createChatBotMessage and createClientMessage functions in the constructor, which you can use to create a new responses.

// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

// import { retrieveChat } from '../../firebase';


class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, stateRef) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    //   this.recognition = new SpeechRecognition()
    //     this.recognition.continous = true
    //     this.recognition.interimResults = false
    //     this.recognition.lang = 'en-US'
    //     this.recognition.maxAlternatives = 1;

    //     this.recognition.start()
    //     this.recognition.onresult = (e) => {
    //         if  (e.results[0].isFinal) {
    //             const transcript = e.results[0][0].transcript;
    //             this.recognition.abort()
    //             this.parse(transcript) 
    //         }
    // }
  }



    phoneHandler = () => {
      const message = this.createChatBotMessage("What phone are you using?",
      {
        widget:"phone"
      })
      this.setChatbotMessage(message);
    }

    handler = (list) => {
      for(let i = 0; i < list.length; i++){
        this.setChatbotMessage(this.createChatBotMessage(list[i].message));
      }
    }

    searchHandler = () => {
         const message2 =this.createChatBotMessage(
        "Do you want to search Google for more answers?",
        {
          widget: "google",
          loading: true,
          terminateLoading: true,
        }
      )
      this.setChatbotMessage(message2);
    }


   createClientMesssage = (message) => {
      const clientMessage = {
             message: message,
             type: "user", 
      }

          return clientMessage;
    }


  //  userMessage = () => {
  //   //  const message1 = this.createClientMesssage(message);
  //    // this.setClientMessage(message)
  //    setTimeout(() => {
  //     this.recognition.start();
  //   }, 1000) 
  //   } 


    setClientMessage = (clientMessage) => {
      this.setState(prevState => ({
           ...prevState, messages: [...prevState.messages, clientMessage]
      }))
    }

    setChatbotMessage = (message) => {
      this.setState(state =>({ ...state, messages: [...state.messages, message] }) ) //create chatbot message instance
     }

    organizeTipsHandler = () => {
      const message = this.createChatBotMessage("1. Put Important Apps on the First Home Screen 2. Put the apps you use most often in the Dock, and any remaining ones on your Home screen 3. One way to make the Dock more useful is to put a folder in it")
      this.setChatbotMessage(message);
    }

    safetyHandler = () => {
      var tips = [
        "Tips: Avoid clicking on links in unsolicited emails & be wary of email attachments",
        "Tips: Do not visit any untrusted website",
        "Tips: When using credit card information for online purchase, lookout for \"HTTPS\" and lock icon",
        "Tips: Avoid Public WIFI & Computers for online shopping",
        "Tips: Set up Touch ID or Facial Recognition on your device and back it up with a unique PIN",
        "Tips: Only download official apps from Google Play or App Store to avoid \"fake\" apps that mimic trusted brands in order to obtain your personal information.",
        "Tips: Don't Jailbreak or Root your smartphone",
        "Tips: Use different passwords for different accounts, if one is compromised, others remain safe",
        "Tips: Use Multi-Factor Authentication (MFA) whenever available. It's your best defense against hacker",
        "Tips: Use characters from ALL  categories, for example SeNioR#8Te$ch"
      ];

      var randomTips = tips[Math.floor(Math.random() * tips.length)];
      const message = this.createChatBotMessage(randomTips);
      this.setChatbotMessage(message);
    }
  }

  export default ActionProvider;
