# healthjiva
Caregivers use healthjiva to track, symptoms, medications, food, activity of people with chronic conditions. This information turns into actionable data for medical teams.
# creating react native application with expo and running it locally
npx create-expo-app --template blank
npm run android
npm run ios
npm run web
# To generate apk file with expo we have to install latest android and setup emulator to run it refer the below link for same
https://reactnative.dev/docs/set-up-your-environment
# create account at expo.dev to run our builds and get the apk file
# build the apk file with below command
npm install --global expo-cli eas-cli
eas build --profile production --platform android
