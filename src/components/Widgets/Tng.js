import React from 'react';
import "./Phone.css";

var tngReloadHandler = [
    { message: "1. Click on “+ Reload eWallet” from your home screen." },
    { message: "2. Enter the amount to reload and click \"reload ewallet\"." },
    { message: "3. Click on credit / Debit card or FPX Online Banking to reload." },
    { message: "4. For credit/ debit card, click on new credit/ debit card and fill in the details required." },
    { message: "5. For FPX Online Banking, choose your bank and you will be directed to your bank account." },
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


const Install = (props) => {
    const options = [
      { text: "How to reload Touch n Go ",
      handler: () => props.actionProvider.handler(tngReloadHandler), 
      id: 1,
        },

      { text: "How to transfer in Touch n Go ",
      handler: () => props.actionProvider.handler(tngTransferHandler),
      id: 2,
        },

      { text: "How to sign up Touch n Go ",
      handler: () => props.actionProvider.handler(tngSignupHandler),
      id: 3,
        },
    ];

    const optionsMarkup = options.map((option) => (
        <button
          className="learning-option-button"
          key={option.id}
          onClick={option.handler}
        >
          {option.text}
        </button>
      ));

      return <div className="learning-options-container">{optionsMarkup}</div>;
    };

    export default Install;
