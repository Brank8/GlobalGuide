export default {
  "expo": {
    updates: {
      url: "https://u.expo.dev/71841339-d7f8-4ce6-a302-e0191ff9ea94"
    },
    "privacy": "unlisted",
    "runtimeVersion": "1.0.1",
    "name": "GlobalGuide",
    "slug": "globalguide",
    "version": "1.0.1",
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
      "infoPlist": {
        "CFBundleURLTypes": [
          {
            "CFBundleURLSchemes": [
              "com.googleusercontent.apps.989750258747-tvpria9dp3e4m2ganife5ru162d3tepc"
            ]
          }
        ]
      }
    },
    "android": {
      "versionCode": 2,
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
        "projectId": "71841339-d7f8-4ce6-a302-e0191ff9ea94"
      }
    },
    "scheme": "com.banjoza.globalguide"
  }
}
