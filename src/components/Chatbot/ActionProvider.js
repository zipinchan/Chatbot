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
    
    appStoreHandler = () => {
      const message = this.createChatBotMessage("1. Launch the App Store. \n 2. Tap the magnifying glass on the bottom right of your screen. \n 3. Type in your search query and tap the search button. \n 4. Tap the app or game you wish to purchase or download for free. \n 5. Tap Get if it is free, or the price of the app if it is paid. \n 6. Place your finger on the Home button to activate Touch ID or double-click the side button for Face ID.")
      this.setChatbotMessage(message);
    }

    playStoreHandler = () => {
      const message = this.createChatBotMessage("1. From the home screen, select the Play store Play Store app. 2. Select the Search field. Enter the desired app name, then select a suggestion or the Search key. Select Install. 3. The download icon Downloading icon will appear in the Notification bar while the content is downloading. 4. To access the app after it has downloaded and installed, select Open or find it from your home screen. ")
      this.setChatbotMessage(message); 
    }

    appGalleryHandler = () => {
      const message = this.createChatBotMessage("1. To find it, open the phone’s app drawer and look for the red bag logo. Tap on this and you should be in App Gallery. 2. You’ll land on the Featured page. Search for the app you want by tapping the search bar at the top. Once your app comes up, click its list entry. This should then load up the app page. 3. At the bottom of the display should be a blue “Install” button. Tap this. Wait for the application to install. 4. The blue button should now say “Open”. Tap this and you should be in your newly installed app. ")
      this.setChatbotMessage(message);
    }

    
/////////////// tng ///////////////////////

    tngSignupHandler = () => {
      const message = this.createChatBotMessage("1. Click on \"Sign Up\" or \"Register\" or \"Create Account\" from your home screen. 2. Enter your phone number.  3. Enter the OTP from your message.  4. Set your own 6-digit pin to be used for payments and security question/answer.  5. Enter your personal details and you're done. ")
      this.setChatbotMessage(message);
    }

    tngReloadHandler = () => {
      const message = this.createChatBotMessage("1. Click on “+ Reload eWallet” from your home screen. \n 2. Enter the amount to reload and click \"reload ewallet\". \n 3. Click on credit / Debit card or FPX Online Banking to reload. \n 4. For credit/ debit card, click on new credit/ debit card and fill in the details required. \n 5. For FPX Online Banking, choose your bank and you will be directed to your bank account. ")
      this.setChatbotMessage(message);
    }

    tngTransferHandler = () => {
      const message = this.createChatBotMessage("1. Click on \"Transfer\" from your home screen,  2. Enter a new contact number or choose from the contact list below to transfer money to someone.  3. Enter the amount to transfer  4. Fill in the information under \"transfer for\" for your own reference. 5. Click \"Confirm Transfer\"")
      this.setChatbotMessage(message);
    }

/////////////////////////////////////////////////

    gooAccHandler = () => {
      const message = this.createChatBotMessage("1. Go to the Google account Sign In page. 2. Click Create account. 3. Enter your name. 4. In the \"Username\" field, enter a username. 5. Enter and confirm your password. 6. Click Next. Optional: Add and verify a phone number for your account. 7. Add your birthday. 8. Select your gender. 9. Click Next.  \n10. Click I agree (which means you agree to the terms mentioned above) 11. You're done!")
        this.setChatbotMessage(message);
     }

    browseIntHandler = () => {
      const message = this.createChatBotMessage("1. Go into your web browser (eg. Google Chrome, Safari (iPhone), Firefox) 2. Your cursor should be in the text entry field at the top of the window. 3. Type in the URL of the webpage that you want to visit or your search term. 4. Press return to go to the web page or to search.")
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

//////////// Grab ////////////////////

    grabPayHandler = () => {
      const message = this.createChatBotMessage("1. Click \"Payment\" located at bottom middle. 2. Click \"Scan to Pay\" and scan the QR code of the merchant. 3. Enter the amount to pay. 4. Swipe the green bar to confirm paying.")
      this.setChatbotMessage(message);
    } 

    grabTransferHandler = () => {
      const message = this.createChatBotMessage("1. Click \"Payment\" located at bottom middle. 2. Click \"Send\" to transfer money to another person. 3. Search for the contact from the list or enter the mobile number in the search bar at the top. 4. Enter the amount to transfer and leave a note if you want. 5. Swipe the green bar at the bottom to confirm transferring the money to the person at the top of the screen. 6. You're done!")
      this.setChatbotMessage(message);
    }

    grabReceiveHandler = () => {
      const message = this.createChatBotMessage("1. Click \"Payment\" located at the bottom middle of the Grab app. 2. Click \"Receive\" to transfer money to another person. 3. Ask the sender to scan your QR code if he/she is infront of you. 4. If not, click the link below to send the QR code via Whatsapp or any other apps.")
      this.setChatbotMessage(message);
    }

    grabOrderHandler = () => {
      const message = this.createChatBotMessage("1. Click \"Food\" from your screen in the Grab app. 2. Search for the restaurants you want to order from. 3. To search with filters (halal / non-halal etc.), tap on the search bar at the top of the screen. 4. Scroll down to find the type of cuisine you want. 5. Click into the restaurant. 6. Look through the menu and click on the food you want. 7. Add on any instructions under special instructions. 8. Press \"Add to Basket\" at the bottom of the screen. 8. After done adding all the food you want by repeating steps 6-8, click on the basket at the bottom of your screen. 9. Click on the address under \"Deliver to\" and add in your address at the search bar on top. 10. Tap on \"Contactless Delivery\" to change it to Self-Pick up or do nothing to choose Contactless Delivery. 11. Confirm the order summary. 12. Tick the Cutlery tick box if you need cutleries. 13. Under payment details, click on the left side \"cash\" icon to change payment method. 14. To add a new card, click \"Add Payment Methods\". 15. Confirm the total payment and click \"Place Order\". 16. Once your order is received, you can just sit back and relax for the delivery to come to you!")
      this.setChatbotMessage(message);
      }      
    
    grabRideHandler = () => {
      const message = this.createChatBotMessage("1. Click \"Car\" from your screen in the Grab app. 2. Type in your starting and ending locations. 3. Choose your vehicle option. 4. Tap on the cash icon to change payment method. 5. Tap on \"Promo\" if you have a promo code. 6. Click on \"Book\" at the bottom of your screen to book. 7. Once a driver is found, you're done! 8. You can keep track of your driver in real-time on your screen!")
      this.setChatbotMessage(message);
      }

    grabMartHandler = () => {
      const message = this.createChatBotMessage("1. Click \"Mart\" from your screen in the Grab app. 2. Type in the search bar located at the top of the screen for the items you want or scroll down to shop. 3. Click on the items you want to buy and click \"Add to Basket\". 4. Repeat steps 2-3 to continue adding items into your cart. 5. Click on basket at the bottom of your screen and confirm the details. 6. After confirmation, click \"Place Order\" to proceed payment.")
      this.setChatbotMessage(message);
    }

    grabReloadHandler = () => {
      const message = this.createChatBotMessage("1. Click \"Payment\" located at the bottom middle of the Grab app. 2. Click \"Top Up\" located at the middle of the Grab app in your screen. 3. Choose the top-up methods you want from the list. 4. Add new card for card payment or select your bank for online banking method. 5. Enter the amount to be reloaded into your Grab wallet and click \"Next\". 6. Check for the minimum amount to be reloaded. 7. You're done!")
    }

  ///////////////////////////////////////////////////
   /* grabTransferHandler = () => {
      const message = this.createChatBotMessage()
      this.setChatbotMessage(message);
      }     */

////////////////////////////////////////////////////////////////////// knowledge based ////////////////////////////////////////////////////////////
    qrKnowledge = () => {
      const message = this.createChatBotMessage("Short for Quick Response, QR codes are a type of barcode easily readable with digital devices like smartphones. They store information as a series of pixels in a square grid that can be read in two directions — top to bottom and right to left — unlike standard barcodes that can only be read top to bottom.")
      this.setChatbotMessage(message);
    }

    gooKnowledge = () => {
      const message = this.createChatBotMessage("Google is a search engine that enables users to locate information on the web.")
      this.setChatbotMessage(message);
    }
    
    intKnowledge = () => {
      const message = this.createChatBotMessage("The Internet is a vast network that connects computers all over the world. Through the Internet, people can share information and communicate from anywhere with an Internet connection.")
      this.setChatbotMessage(message); 
    }

    appKnowledge = () => {
      const message = this.createChatBotMessage("An app, which is short for \"application,\" is a type of software that can be installed and run on a computer, tablet, smartphone or other electronic devices. Simply put, an app is a type of software that allows you to perform specific tasks. For example, Whatsapp, Facebook, Grab etc.")
      this.setChatbotMessage(message);
    }

//////////////////////// grab ////////////////////////
    grabKnowledge = () => {
      const message = this.createChatBotMessage("Grab is an easy to use on-demand car and taxi service that you can use to hail licensed taxis or business driving services in Malaysia, Philippines, India, Thailand, Singapore, Vietnam, and Indonesia.")
      this.setChatbotMessage(message);
    }

    grabTransferKnowledge = () => {
      const message = this.createChatBotMessage("Grab transfer is a method for you to transfer funds between your contacts in the Grab app, using your Grab wallet.")
      this.setChatbotMessage(message);
    }

    grabPayKnowledge = () => {
      const message = this.createChatBotMessage("GrabPay, one of Malaysia’s leading e-wallet providers, offers you the convenience of paying for everyday services like bills, groceries, food, rides services, prepaid reloads, and more – all within one app. You will also earn GrabRewards points for every transaction you make with GrabPay!")
      this.setChatbotMessage(message);
    }

    grabFoodKnowledge = () => {
      const message = this.createChatBotMessage("GrabFood is Southeast Asia’s fastest growing food delivery service, serving customers delightful meals from street food to restaurant dining.")
      this.setChatbotMessage(message);
    }

    grabMartKnowledge = () => {
      const message = this.createChatBotMessage("GrabMart is an on-demand everyday goods delivery service. The delivery process is the same as GrabFood but instead of delivering food from restaurants, you will now deliver everyday goods from stores. You can now receive orders from pharmacies, convenience stores, book shop and many others.")
      this.setChatbotMessage(message);
    }

///////////////////////////////////////////////////////

/////////////////////// tng ///////////////////////////

    tngKnowledge = () => {
      const message = this.createChatBotMessage("Touch 'n Go eWallet is a Malaysian digital wallet and online payment platform, established in Kuala Lumpur, Malaysia, in July 2017 as a joint venture between Touch 'n Go and Ant Financial. It allows users to make payments at over 280,000 merchant touch points via QR code; pay for tolls, street parking, payment on e-hailing, car-sharing apps or taxis via RFID or PayDirect; pay bills; top-up mobile prepaid; pay for purchases on e-commerce websites or apps; order food delivery; perform peer-to-peer money transfers; renew car insurance and purchase unique insurance plans; and purchase movie, bus, trains, and airline tickets.")
      this.setChatbotMessage(message);
    }
   

//////////////// error////////////////

    error2Handler = () => {
      const message = this.createChatBotMessage("Please start your sentence with what or how")
      this.setChatbotMessage(message);
    }

    errorHandler = () => {
      const message = this.createChatBotMessage("Sorry, I don't have an answer for that.")
      this.setChatbotMessage(message);
    }
  
/////////////////////////////////////////
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
  