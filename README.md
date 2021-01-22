Version 1.3.0

# React-Native project starter

## Development Environment
* Xcode - 12.3 (12C33)
* CocoaPods - 1.10.1,
* Node - 14.15.4
* npm - 6.14.10
* Android Studio - 4.1.1

## ENV Setup
'.env' file can be used to change project name, id and version.
After change rebuild the project.

'ANDROID_APP_ID' and 'IOS_BUNDLE_ID' should not be changed for internal ReactPoland projects

'..._ID_SUFFIX' keys should be use to specify project product name (for internal ReactPoland projects)

## Firebase
Firebase enabled by default with given services - analytics, crashlytics and performance monitor.
They work only on release builds - as set inside 'serviceprovider' folder.

### Steps after app id change

1. Clean all builds / cache / projects (./gradlew clean)
2. Rebuild app and sync gradle (on Android)
3. Firebase: 
If you want to change app id remember to create a new firebase app with that id and update Google files ('GoogleService-Info.plist' and 'google-services.json') inside your project. If you don't need firebase services during the development process - you can make that change only when you will work on distribution process.
4. When you run android from terminal remember to specify your suffix id to automaticly open app - `react-native run-android --appIdSuffix 'HERE_SUFFIX_WITHOUT_DOT'`

