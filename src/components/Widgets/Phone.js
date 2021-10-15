import React from 'react';
import "./Phone.css";

var appStoreHandler = [
  { message: '1. Launch the App Store.' },
  { message: '2. Tap the magnifying glass on the bottom right of your screen.' },
  { message: '3. Type in your search query and tap the search button.' },
  { message: '4. Tap the app or game you wish to purchase or download for free.' },
  { message: '5. Tap Get if it is free, or the price of the app if it is paid.' },
  { message: '6. Place your finger on the Home button to activate Touch ID or double-click the side button for Face ID.' },
];

var playStoreHandler = [
  { message: "1. From the home screen, select the Play store Play Store app." },
  { message: "2. Select the Search field. Enter the desired app name, then select a suggestion or the Search key. Select Install." },
  { message: "3. The download icon Downloading icon will appear in the Notification bar while the content is downloading." },
  { message: "4. To access the app after it has downloaded and installed, select Open or find it from your home screen." },
]

var appGalleryHandler = [
  { message: "1. To find it, open the phone’s app drawer and look for the red bag logo. Tap on this and you should be in App Gallery." },
  { message: "2. You’ll land on the Featured page. Search for the app you want by tapping the search bar at the top. Once your app comes up, click its list entry. This should then load up the app page." },
  { message: "3. At the bottom of the display should be a blue “Install” button. Tap this. Wait for the application to install." },
  { message: "4. The blue button should now say “Open”. Tap this and you should be in your newly installed app." },
]



const Phone = (props) => {
    const options = [
      { text: "Apple", 
        handler: () => props.actionProvider.handler(appStoreHandler), 
        id: 1,
        },

      { text: "Samsung", 
        handler: () => props.actionProvider.handler(playStoreHandler), 
        id: 2,
        },

      { text: "Huawei", 
        handler: () => props.actionProvider.handler(appGalleryHandler), 
        id: 3,
        },

      { text: "Xiaomi", 
        handler: () => props.actionProvider.handler(playStoreHandler), 
        id: 4,
        },

      { text: "Oppo", 
        handler: () => props.actionProvider.handler(playStoreHandler), 
        id: 5,
        },

      { text: "Others", 
      handler: () => props.actionProvider.handler(playStoreHandler), 
      id: 6,
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
    
    export default Phone;