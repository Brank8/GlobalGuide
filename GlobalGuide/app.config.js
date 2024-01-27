export default {
  "expo": {
    "name": "GlobalGuide",
    "slug": "GlobalGuide",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "usesAppleSignIn": true,
      "bundleIdentifier": "com.banjoza.globalguide",
      "googleServicesFile": "./GoogleService-Info.plist",
      "config": {
        googleSignIn: {
          // Your iOS client ID from GoogleService-Info.plist
          clientId: "1076596954735-omthr1l92svgqnoops96dkq43u9lp94s.apps.googleusercontent.com",
        },
      },
      "infoPlist": {
        "CFBundleURLTypes": [
          {
            "CFBundleURLSchemes": [
              "com.googleusercontent.apps.1076596954735-a431rrjd93ihat9sq5grodi6if8npoph"
            ]
          }
        ]
      }
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.banjoza.globalguide",
      "googleServicesFile": "./google-services.json",  
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": [
      "expo-apple-authentication",
      "@react-native-google-signin/google-signin"
    ],
    "extra": {
      "eas": {
        "projectId": "bf95e0c0-5897-4eb6-830c-57679ab178c5"
      }
    },
    "scheme": "com.banjoza.globalguide"
  }
}
