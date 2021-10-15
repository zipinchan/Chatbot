//The message parser controls what happens when the user sends a message.

//import { isCompositeComponent } from "react-dom/test-utils";

//You have to implement this yourself. The beauty of this is that you can make the message parsing as complex or as simple as you'd like.

//The only method that the message parser needs to implement is the "parse" method. This method is called inside the chatbot when it receives a message from the user.

//The final piece of the puzzle is the actionprovider. We'll take a look at that next. It will handle bot actions. It will come as no surprise then, that the actionprovider is given to the messageparser, so that the messageparser can invoke the correct actions after the message is parsed.



var whatsappKnowledge = [
  { message: "WhatsApp uses your phone’s cellular or Wi-Fi connection to facilitate messaging and voice calling to nearly anyone on the planet, alone or in a group and is especially nice for families and small collaborative workgroups. The app lets you make calls, send and receive messages, and share documents, photos, and videos." }
];

var helloWorldHandler = [
  { message: "Hi, I'm nerdybot!" }
];

var tngReloadHandler = [
  { message: "1. Click on “+ Reload eWallet” from your home screen." },
  { message: "2. Enter the amount to reload and click \"reload ewallet\"." },
  { message: "3. Click on credit / Debit card or FPX Online Banking to reload." },
  { message: "4. For credit/ debit card, click on new credit/ debit card and fill in the details required." },
  { message: "5. For FPX Online Banking, choose your bank and you will be directed to your bank account." },
];

var tngTransHisHandler = [
  { message: "1. Click on \"Transaction History\" from your screen in your Grab app." },
  { message: "2. Click on the date to check the transaction history of a specific period of time." },
  { message: "3. Click on \"filter\" to see a specific type of transaction only. " }
];

var tngTransferHandler = [
  { message: "1. Click on \"Transfer\" from your home screen." },
  { message: "2. Enter a new contact number or choose from the contact list below to transfer money to someone." },
  { message: "3. Enter the amount to transfer" },
  { message: "4. Fill in the information under \"transfer for\" for your own reference." },
  { message: "5. Click \"Confirm Transfer\"" }
];

var tngSignupHandler = [
  { message: "1. Click on \"Sign Up\" or \"Register\" or \"Create Account\" from your home screen." },
  { message: "2. Enter your phone number.  " },
  { message: "3. Enter the OTP from your message." },
  { message: "4. Set your own 6-digit pin to be used for payments and security question/answer." },
  { message: "5. Enter your personal details and you're done." },
];

var errorHandler = [
  { message: "Sorry, I don't have an answer for that." },
  { message: "Do you want to search Google for more answers?"},
];

var browseIntHandler = [
  { message: "1. Go into your web browser (eg. Google Chrome, Safari (iPhone), Firefox)" },
  { message: "2. Your cursor should be in the text entry field at the top of the window." },
  { message: "3. Type in the URL of the webpage that you want to visit or your search term."},
  { message: "4. Press return to go to the web page or to search."}
];

var deleteAppleHandler = [
  { message: "From your phone page, select the App icon:" },
  { message: "1. Tap and hold the App that you want to delete" },
  { message: "2. Wait until the pop-up menu display" },
  { message: "3. Click ‘Remove App’ to delete / uninstall the App" }
];

var deleteAndroidHandler = [
  { message: "From your phone page, select the App icon:" },
  { message: "1. Tap and hold the App that you want to delete" },
  { message: "2. Wait until the pop-up menu display " },
  { message: "3. Click ‘Uninstall’ to delete / uninstall the App" }
];

var appErrorHandler = [
  { message: "Please specify if you are using an Apple or Android phone." }
]

var dataAppleHandler = [
  { message: "1. Go to settings app." },
  { message: "2. Go to \"Mobile Data\"." },
  { message: "3. Toggle the button at \"Mobile Data\" by tapping on it." },
  { message: "4. Green button indicates that it is enabled. Grey button indicates that it is disabled." },
]

var dataAndroidHandler = [
  { message: "1. Swipe down from the top of your screen with finger." },
  { message: "2. Tap on Mobile Data to on or off. " }
]

var updateAppleHandler = [
  { message: "1. Open the App Store" },
  { message: "2. Tap your profile icon at the top of the screen" },
  { message: "3. Scroll to see pending updates and release notes" },
  { message: "4. Tap Update next to an app to update only that app, or tap Update All * If it didn’t appear “UPDATE” button, the app is the latest version" },
]

var updateAndroidHandler = [
  { message: "1 Open the App Store" },
  { message: "2. Tap your profile icon at the top" },
  { message: "3. Click \"Manage apps and device\"" },
  { message: "4. Click “See recent updates” " },
  { message: "5. Tap on “Update available”" },
]

var organizeAppleHandler = [
  { message: "1. Tap and hold the app until the icons start to jiggle, then move it on top of another app or folder OR Tap and hold the app, and then tap “Edit Home Screen” in the menu that appears." },
  { message: "2. When you’re done organizing, swipe up from the bottom (iPhone X or later) or press the Home button (iPhone 8 orSE2) to make the apps stop jiggling." },
]

var organizeAndroidHandler = [
  { message: "1. Touch and hold an app " },
  { message: "2. Drag that app on top of another or existing folder and lift your finger" },
]

var locationAppleHandler = [
  { message: "1. Go to settings." },
  { message: "2. Click on \"Privacy\"." },
  { message: "3. Tap at \"Location Services\" to enable or disable it." },
]

var locationAndroidHandler = [
  { message: "1. Go to settings." },
  { message: "2. Click on \"Location\". " },
  { message: "3. Tap on Location to enable or disable it. " },
]

var lAppleSettingsHandler = [
  { message: "1. Go to settings." },
  { message: "2. Click on \"Privacy\"." },
  { message: "3. Scroll down the list to disable location services for a specific app." },
]

var lAndroidSettingsHandler = [
  { message: "1. Go to settings." },
  { message: "2. Go to App management." },
  { message: "3. Click on \"Location\" 3. Scroll down the list to set the location services of a specific app." },
]

var waRegisterHandler = [
  { message: "1. Tap \"Agree and Continue\"" },
  { message: "2. Enter your country code and phone number" },
  { message: "3. Tap OK" },
  { message: "4. Enter the code receive from SMS" },
  { message: "5. Follow the prompts until complete" },
]

var waStartChatHandler = [
  { message: "1. Tap on the icon at the bottom right on Android phone and top right on Apple phone." },
  { message: "2. Tap on the contact to begin a chat." },
]

var waStartVideoHandler = [
  { message: "1. Tap on the contact you want to start a video call with." },
  { message: "2. Look for the Video icon at the top right in Whatsapp." },
]

var scanQrHandler = [   
  { message: "1. Open the QR Code reader on your phone." },
  { message: "2. Hold your device over a QR Code so that it's clearly visible within your smartphone's screen. Two things can happen when you correctly hold your smartphone over a QR Code.  *The phone automatically scans the code.  * On some readers, you have to press a button to snap a picture, not unlike the button on your smartphone camera." },
  { message: "3. If necessary, press the button." },
  { message: "4. You're directed to the page from the QR code. " },
]

var gooAccHandler = [
  { message: "1. Go to the Google account Sign In page." },
  { message: "2. Click Create account." },
  { message: "3. Enter your name." },
  { message: "4. In the \"Username\" field, enter a username." },
  { message: "5. Enter and confirm your password." },
  { message: "6. Click Next. Optional: Add and verify a phone number for your account." },
  { message: "7. Add your birthday." },
  { message: "8. Select your gender." },
  { message: "9. Click Next.  \n" },
  { message: "10. Click I agree (which means you agree to the terms mentioned above)" },
  { message: "11. You're done!" },
]

var switchOnHandler = [
  { message: "It's usually a single button located along the top or right edge of the phone. Press and hold the power button. Wait for your phone to turn on. If you have a security code, you will need to enter it before you can access your phone." },
]

var clearHistHandler = [
  { message: "1. Click \"History\" in the Chrome app." },
  { message: "2. Click \"Clear browsing data\"" },
  { message: "3. Click \"Clear data\"." },
]

var bookmarkHandler = [
  { message: "1. Click on the three dots in vertical at the top right of the Chrome app. " },
  { message: "2. Click the star icon to bookmark the current page." },
  { message: "3. Once the star is filled with colour, it indicates that the page is bookmarked." },
  { message: "4. Click on \"Bookmarks\" to view the bookmarks list." },
]

var grabPayHandler = [
  { message: "1. Click \"Payment\" located at bottom middle." },
  { message: "2. Click \"Scan to Pay\" and scan the QR code of the merchant." },
  { message: "3. Enter the amount to pay." },
  { message: "4. Swipe the green bar to confirm paying." },
]

var grabReloadHandler = [
  { message: "1. Click \"Payment\" located at the bottom middle of the Grab app." },
  { message: "2. Click \"Top Up\" located at the middle of the Grab app in your screen." },
  { message: "3. Choose the top-up methods you want from the list." },
  { message: "4. Add new card for card payment or select your bank for online banking method." },
  { message: "5. Enter the amount to be reloaded into your Grab wallet and click \"Next\"." },
  { message: "6. Check for the minimum amount to be reloaded." },
  { message: "7. You're done!" },
]

var grabTransferHandler = [
  { message: "1. Click \"Payment\" located at bottom middle." },
  { message: "2. Click \"Send\" to transfer money to another person." },
  { message: "3. Search for the contact from the list or enter the mobile number in the search bar at the top." },
  { message: "4. Enter the amount to transfer and leave a note if you want." },
  { message: "5. Swipe the green bar at the bottom to confirm transferring the money to the person at the top of the screen." },
  { message: "6. You're done!" },
]

var grabReceiveHandler = [
  { message: "1. Click \"Payment\" located at the bottom middle of the Grab app." },
  { message: "2. Click \"Receive\" to transfer money to another person." },
  { message: "3. Ask the sender to scan your QR code if he/she is infront of you." },
  { message: "4. If not, click the link below to send the QR code via Whatsapp or any other apps." },
]

var grabOrderHandler = [
  { message: "1. Click \"Food\" from your screen in the Grab app." },
  { message: "2. Search for the restaurants you want to order from." },
  { message: "3. To search with filters (halal / non-halal etc.), tap on the search bar at the top of the screen." },
  { message: "4. Scroll down to find the type of cuisine you want." },
  { message: "5. Click into the restaurant." },
  { message: "6. Look through the menu and click on the food you want." },
  { message: "7. Add on any instructions under special instructions." },
  { message: "8. Press \"Add to Basket\" at the bottom of the screen." },
  { message: "8. After done adding all the food you want by repeating steps 6-8, click on the basket at the bottom of your screen." },
  { message: "9. Click on the address under \"Deliver to\" and add in your address at the search bar on top." },
  { message: "10. Tap on \"Contactless Delivery\" to change it to Self-Pick up or do nothing to choose Contactless Delivery." },
  { message: "11. Confirm the order summary." },
  { message: "12. Tick the Cutlery tick box if you need cutleries." },
  { message: "13. Under payment details, click on the left side \"cash\" icon to change payment method." },
  { message: "14. To add a new card, click \"Add Payment Methods\"." },
  { message: "15. Confirm the total payment and click \"Place Order\"." },
  { message: "16. Once your order is received, you can just sit back and relax for the delivery to come to you!" },
]

var grabRideHandler = [
  { message: "1. Click \"Car\" from your screen in the Grab app." },
  { message: "2. Type in your starting and ending locations." },
  { message: "3. Choose your vehicle option." },
  { message: "4. Tap on the cash icon to change payment method." },
  { message: "5. Tap on \"Promo\" if you have a promo code." },
  { message: "6. Click on \"Book\" at the bottom of your screen to book." },
  { message: "7. Once a driver is found, you're done!" },
  { message: "8. You can keep track of your driver in real-time on your screen!" },
]

var grabMartHandler = [
  { message: "1. Click \"Mart\" from your screen in the Grab app." },
  { message: "2. Type in the search bar located at the top of the screen for the items you want or scroll down to shop." },
  { message: "3. Click on the items you want to buy and click \"Add to Basket\"." },
  { message: "4. Repeat steps 2-3 to continue adding items into your cart." },
  { message: "5. Click on basket at the bottom of your screen and confirm the details." },
  { message: "6. After confirmation, click \"Place Order\" to proceed payment." },
]

var qrKnowledge  = [
  { message: "Short for Quick Response, QR codes are a type of barcode easily readable with digital devices like smartphones. They store information as a series of pixels in a square grid that can be read in two directions — top to bottom and right to left — unlike standard barcodes that can only be read top to bottom." },
]

var gooKnowledge = [
  { message: "Google is a search engine that enables users to locate information on the web." },
]

var intKnowledge = [
  { message: "The Internet is a vast network that connects computers all over the world. Through the Internet, people can share information and communicate from anywhere with an Internet connection." },
]

var appKnowledge = [
  { message: "An app, which is short for \"application,\" is a type of software that can be installed and run on a computer, tablet, smartphone or other electronic devices. Simply put, an app is a type of software that allows you to perform specific tasks. For example, Whatsapp, Facebook, Grab etc." },
]

var safetyHandler = [
  { message: "" },
  { message: "" },
  { message: "" },
  { message: "" },
]

var simKnowledge = [
  { message: "SIM cards are small cards that contain a chip that holds a unique identification number, phone number and other data that links to the consumer" },
]

var mobileDataKnowledge = [
  { message: "Mobile data is what allows your phone to get online when you're away from WiFi" },
]

var appStoreKnowledge = [
  { message: "App stores typically take the form of an online store, where users can browse through these different app categories, view information about each app such as reviews or ratings, and acquire the app." },
]

var playStoreKnowledge = [
  { message: "It allows users to browse and download applications developed with the Android software development kit (SDK) and published through Google." },
]

var airplaneKnowledge = [
  { message: "Airplane Mode disables a device’s cellular radio, Wi-Fi, and Bluetooth—all the wireless transmission functions." },
]

var wifiKnowledge = [
  { message: "WiFi is commonly used for local area networking of devices and Internet access, allowing nearby digital devices to exchange data by radio waves." },
]

var bluetoothKnowledge = [
  { message: "Bluetooth is a short-range wireless technology standard used for exchanging data between fixed and mobile devices over short distances." },
]

var locationKnowledge = [
  { message: "Location Services uses GPS and Bluetooth (where they're available), along with crowd-sourced Wi-Fi hotspots and cellular towers to determine the approximate location of your device." },
]

var grabPayKnowledge = [
  { message: "GrabPay, one of Malaysia’s leading e-wallet providers, offers you the convenience of paying for everyday services like bills, groceries, food, rides services, prepaid reloads, and more – all within one app. You will also earn GrabRewards points for every transaction you make with GrabPay!" },
]

var grabFoodKnowledge = [
  { message: "GrabFood is Southeast Asia’s fastest growing food delivery service, serving customers delightful meals from street food to restaurant dining." },
]

var grabTransferKnowledge = [
  { message: "Grab transfer is a method for you to transfer funds between your contacts in the Grab app, using your Grab wallet." },
]

var grabMartKnowledge = [
  { message: "GrabMart is an on-demand everyday goods delivery service. The delivery process is the same as GrabFood but instead of delivering food from restaurants, you will now deliver everyday goods from stores. You can now receive orders from pharmacies, convenience stores, book shop and many others." },
]

var grabKnowledge = [
  { message: "Grab is an easy to use on-demand car and taxi service that you can use to hail licensed taxis or business driving services in Malaysia, Philippines, India, Thailand, Singapore, Vietnam, and Indonesia." },
]

var tngKnowledge = [
  { message: "Touch 'n Go eWallet is a Malaysian digital wallet and online payment platform, established in Kuala Lumpur, Malaysia, in July 2017 as a joint venture between Touch 'n Go and Ant Financial. It allows users to make payments at over 280,000 merchant touch points via QR code; pay for tolls, street parking, payment on e-hailing, car-sharing apps or taxis via RFID or PayDirect; pay bills; top-up mobile prepaid; pay for purchases on e-commerce websites or apps; order food delivery; perform peer-to-peer money transfers; renew car insurance and purchase unique insurance plans; and purchase movie, bus, trains, and airline tickets." },
]

var error2Handler = [
  { message: "Please start your sentence with what or how" },
]

class MessageParser {
    constructor(actionProvider,state) {
      this.actionProvider = actionProvider;
      this.state=state;
    }
    
    parse(message) {
      /*  console.log(message) */
        
      const lowerCaseMessage = message.toLowerCase()

      if ((lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("your name") || lowerCaseMessage.includes("who are you")) && !lowerCaseMessage.includes("history")) {
        this.actionProvider.handler(helloWorldHandler);
        //window.open("https://towardsdatascience.com/build-a-simple-chatbot-with-python-and-google-search-c000aa3f73f0");
        }
      
      else if(lowerCaseMessage.includes("how") || lowerCaseMessage.includes("steps") || lowerCaseMessage.includes("step")){

/////////////////////// tng /////////////////////////

         if (lowerCaseMessage.includes("touch n go") || lowerCaseMessage.includes("touchngo") || lowerCaseMessage.includes("tng") || lowerCaseMessage.includes("touch 'n go")){

          if (lowerCaseMessage.includes("reload") || lowerCaseMessage.includes("topup") || lowerCaseMessage.includes("top up")){
            this.actionProvider.handler(tngReloadHandler);
            }

            else if (lowerCaseMessage.includes("transfer")){

              if (lowerCaseMessage.includes("history") || lowerCaseMessage.includes("past")){
                this.actionProvider.handler(tngTransHisHandler);
              }

              else {
              this.actionProvider.handler(tngTransferHandler);
              }
            }
            
          else if (lowerCaseMessage.includes("signup") || lowerCaseMessage.includes("sign up") || (lowerCaseMessage.includes("create") && lowerCaseMessage.includes("account")) ){
          this.actionProvider.handler(tngSignupHandler);
          }

          else {
            this.actionProvider.handler(errorHandler);
          }
        }
////////////////////////////////////////////////////////////////

        else if ((lowerCaseMessage.includes("browse") || lowerCaseMessage.includes("search")) && lowerCaseMessage.includes("internet")){
          this.actionProvider.handler(browseIntHandler);
        }

        //////////////// app /////////////////
        

        else if ((lowerCaseMessage.includes("app") || lowerCaseMessage.includes("application") || lowerCaseMessage.includes("applications")) && (lowerCaseMessage.includes("delete") || lowerCaseMessage.includes("remove") || lowerCaseMessage.includes("uninstall"))){ //need to exclude "chrome/history"
          if (lowerCaseMessage.includes("apple")) {
            this.actionProvider.handler(deleteAppleHandler);
        }

          else if (lowerCaseMessage.includes("android")) {
            this.actionProvider.handler(deleteAndroidHandler);
          }

          else {
            this.actionProvider.handler(appErrorHandler);
          }

        }

        else if (lowerCaseMessage.includes("data") || lowerCaseMessage.includes("cellular")) {
          if (lowerCaseMessage.includes("apple")){
            this.actionProvider.handler(dataAppleHandler);
          }

          else if (lowerCaseMessage.includes("android")){
            this.actionProvider.handler(dataAndroidHandler);
          }

          else {
            this.actionProvider.handler(appErrorHandler);
          }
        }

        else if (lowerCaseMessage.includes("update") && (lowerCaseMessage.includes("app") || lowerCaseMessage.includes("application") || lowerCaseMessage.includes("applications"))) {
          if (lowerCaseMessage.includes("apple")){
            this.actionProvider.handler(updateAppleHandler);
          }

          else if (lowerCaseMessage.includes("android")){
            this.actionProvider.handler(updateAndroidHandler);
          }

          else {
            this.actionProvider.handler(appErrorHandler);
          }
        }

        else if (lowerCaseMessage.includes("organize") && (lowerCaseMessage.includes("app") || lowerCaseMessage.includes("application") || lowerCaseMessage.includes("applications"))) {
          if (lowerCaseMessage.includes("apple")){
            this.actionProvider.handler(organizeAppleHandler);
          }

          else if (lowerCaseMessage.includes("android")){
            this.actionProvider.handler(organizeAndroidHandler);
          }

          else {
            this.actionProvider.handler(appErrorHandler);
          }
        }

        else if (lowerCaseMessage.includes("location services") || lowerCaseMessage.includes("location service") || lowerCaseMessage.includes("location")) {
          if (lowerCaseMessage.includes("apple")){
            this.actionProvider.handler(locationAppleHandler);
          }

          else if (lowerCaseMessage.includes("android")){
            this.actionProvider.handler(locationAndroidHandler);
          }

          else {
            this.actionProvider.handler(appErrorHandler);
          }
        }

        else if (lowerCaseMessage.includes("location") && (lowerCaseMessage.includes("app") || lowerCaseMessage.includes("application") || lowerCaseMessage.includes("applications"))) {
          if (lowerCaseMessage.includes("apple")){
            this.actionProvider.handler(lAppleSettingsHandler);
          }

          else if (lowerCaseMessage.includes("android")){
            this.actionProvider.handler(lAndroidSettingsHandler);
          }

          else {
            this.actionProvider.handler(appErrorHandler);
          }
        }
        
        else if ((lowerCaseMessage.includes("app") || lowerCaseMessage.includes("application")) && (lowerCaseMessage.includes("download") || lowerCaseMessage.includes("install"))) { //includes the word "app"
          this.actionProvider.phoneHandler();
        }

        /////////////////////////////////////////////////////

        ////////////////////// whatsapp ///////////////////

        else if (lowerCaseMessage.includes("whatsapp") || lowerCaseMessage.includes("whats app") || lowerCaseMessage.includes("whatsapps")) {

         if ((lowerCaseMessage.includes("register") || lowerCaseMessage.includes("create")) && lowerCaseMessage.includes("account")) {
          this.actionProvider.handler(waRegisterHandler);
        }

        else if ((lowerCaseMessage.includes("start") || lowerCaseMessage.includes("new") || lowerCaseMessage.includes("create")) && lowerCaseMessage.includes("chat")){
          this.actionProvider.handler(waStartChatHandler);
        }

        else if (lowerCaseMessage.includes("video") && lowerCaseMessage.includes("call")){ //whatsapp call not video
          this.actionProvider.handler(waStartVideoHandler);
        }

        else {
          this.actionProvider.handler(errorHandler);
        }
      }

        ////////////////////////////////////////////////////

        else if(lowerCaseMessage.includes("qr") && lowerCaseMessage.includes("scan")){
          this.actionProvider.handler(scanQrHandler);
        }

        else if (lowerCaseMessage.includes("account") && (lowerCaseMessage.includes("create") || lowerCaseMessage.includes("signup") || lowerCaseMessage.includes("sign up")) && lowerCaseMessage.includes("google")){
            this.actionProvider.handler(gooAccHandler);
        }

        else if ((lowerCaseMessage.includes("switchon") || lowerCaseMessage.includes("switch on") || lowerCaseMessage.includes("turn on") || lowerCaseMessage.includes("turnon")) && lowerCaseMessage.includes("phone")){
          this.actionProvider.handler(switchOnHandler);
        }

        ///////////////// chrome ////////////////

        else if (lowerCaseMessage.includes("chrome")) {
          if (lowerCaseMessage.includes("history") && (lowerCaseMessage.includes("clear") || lowerCaseMessage.includes("remove") || lowerCaseMessage.includes("delete"))){
            this.actionProvider.handler(clearHistHandler);
          }

          else if (lowerCaseMessage.includes("bookmark") || lowerCaseMessage.includes("star")) {
            this.actionProvider.handler(bookmarkHandler);
          }

          else {
            this.actionProvider.handler(errorHandler);
          }

        }

        /////////////////////////////////////////

        /////////////////////// grab /////////////////////////

        else if (lowerCaseMessage.includes("grab")){
          if (lowerCaseMessage.includes("pay")){
            this.actionProvider.handler(grabPayHandler);
          }

          else if (lowerCaseMessage.includes("reload") || lowerCaseMessage.includes("topup") || lowerCaseMessage.includes("top up")){
            this.actionProvider.handler(grabReloadHandler);
          }

          else if (lowerCaseMessage.includes("transfer")){
            this.actionProvider.handler(grabTransferHandler);
          }

          else if (lowerCaseMessage.includes("receive")){
            this.actionProvider.handler(grabReceiveHandler);
          }
          
          else if (lowerCaseMessage.includes("order") || lowerCaseMessage.includes("food")){
            this.actionProvider.handler(grabOrderHandler);
          }

          else if (lowerCaseMessage.includes("ride")){
            this.actionProvider.handler(grabRideHandler);
          }

          else if (lowerCaseMessage.includes("mart")){
            this.actionProvider.handler(grabMartHandler);
          }

          else {
            this.actionProvider.handler(errorHandler);
          }
        } ///grab

        //////////////////////////////////////////////

        else {
          this.actionProvider.handler(errorHandler);
          //this.actionProvider.googleHandler();
          //<button onClick={window.open(lowerCaseMessage)}>  </button>
          //window.open('https://www.google.com/search?q=' + lowerCaseMessage);
          }
          
      } //first if
////////////////////////////////////////////////////////// knowledge based /////////////////////////////////////////////////////////////////////////////////////
      else if (lowerCaseMessage.includes("what")) {
        if (lowerCaseMessage.includes("qr")) {
          this.actionProvider.handler(qrKnowledge);
        }

        else if (lowerCaseMessage.includes("google") && !lowerCaseMessage.includes("store")) {
          this.actionProvider.handler(gooKnowledge);
        }

        else if (lowerCaseMessage.includes("internet")) {
          this.actionProvider.handler(intKnowledge);
        }

        else if (lowerCaseMessage.includes("whatsapp") || lowerCaseMessage.includes("whats app") || lowerCaseMessage.includes("whatsapps")){
          // this.actionProvider.whatsappKnowledge();
          this.actionProvider.handler(whatsappKnowledge);
        }
  
      /////////////////////////tng////////////////////////////

        else if ((lowerCaseMessage.includes("app") || lowerCaseMessage.includes("application") || lowerCaseMessage.includes("apps") || lowerCaseMessage.includes("applications")) && !lowerCaseMessage.includes("store")) {
          this.actionProvider.handler(appKnowledge);
        }

        else if ((lowerCaseMessage.includes("tips") || lowerCaseMessage.includes("tip")) && lowerCaseMessage.includes("safety")){
          this.actionProvider.safetyHandler();
        }

        else if (lowerCaseMessage.includes("sim")){
          this.actionProvider.handler(simKnowledge);
        }

        else if (lowerCaseMessage.includes("mobile data") || lowerCaseMessage.includes("data") || lowerCaseMessage.includes("cellular")) {
          this.actionProvider.handler(mobileDataKnowledge);
        }

        else if (lowerCaseMessage.includes("store") && (lowerCaseMessage.includes("app") || lowerCaseMessage.includes("application") || lowerCaseMessage.includes("apps") || lowerCaseMessage.includes("applications"))) { //includes the word "app"
          this.actionProvider.handler(appStoreKnowledge);
        }

        else if (lowerCaseMessage.includes("playstore") || lowerCaseMessage.includes("play store") || lowerCaseMessage.includes("google store")) { //includes the word "google"
          this.actionProvider.handler(playStoreKnowledge);
        }

        else if (lowerCaseMessage.includes("airplane")) {
          this.actionProvider.handler(airplaneKnowledge);
        }

        else if (lowerCaseMessage.includes("wifi") || lowerCaseMessage.includes("wi fi") || lowerCaseMessage.includes("wi-fi")){
          this.actionProvider.handler(wifiKnowledge);
        }

        else if (lowerCaseMessage.includes("bluetooth")){
          this.actionProvider.handler(bluetoothKnowledge);
        }

        else if (lowerCaseMessage.includes("location")){
          this.actionProvider.handler(locationKnowledge);
        }

        //////////////////// grab //////////////////////////
        else if (lowerCaseMessage.includes("grab")){
          if (lowerCaseMessage.includes("pay") || lowerCaseMessage.includes("wallet")){
            this.actionProvider.handler(grabPayKnowledge);
          }

          else if (lowerCaseMessage.includes("food")){
            this.actionProvider.handler(grabFoodKnowledge);
          }
          
          else if (lowerCaseMessage.includes("transfer")){
            this.actionProvider.handler(grabTransferKnowledge);
          }

          else if (lowerCaseMessage.includes("mart")){
            this.actionProvider.handler(grabMartKnowledge);
          }

          else {
            this.actionProvider.handler(grabKnowledge);
          }

          } // end grab

    ////////////////////////////////////////////////////////

      else if (lowerCaseMessage.includes("touchngo") || lowerCaseMessage.includes("tng") || lowerCaseMessage.includes("touch n go") || lowerCaseMessage.includes("touch 'n go")){
        this.actionProvider.handler(tngKnowledge);
      }


  ////////////////////////////////////////////////////////////////
        else {
          this.actionProvider.handler(errorHandler);
        }
        
        
      } //what

      else {
        this.actionProvider.handler(error2Handler);
      } //else

    } //parse
  }
    
    
    export default MessageParser;

  //  new MessageParser(actionProvider,state)