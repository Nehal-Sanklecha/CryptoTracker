# CryptoTracker

Install the project on your local machine by 
* git clone https://github.com/Nehal-Sanklecha/CryptoTracker.git

React Native Setup Environment on a local machine:
https://reactnative.dev/docs/environment-setup

* cd CryptoTracker/CryptoTracker
* npm install
* cd ios
* pod install
* cd ..

* To run on ios * 
npx react-native run-ios

* To run on android * 
npx react-native run-android

In this project:

React-Query is used :
Hooks for fetching, caching and updating asynchronous data in React

Functional components, React Navigation

Redux and redux persist is used for App state management


About Project:
It's a cryptocurrency tracker. Data fetched from Messari.io exposed API
https://messari.io/api/docs#operation/Get%20all%20Assets%20V2

For free license, they provide only 20 currencies data in their API.
Images for those currencies is locally stored.
Data is refreshed in every 1 minute using react-query.
User can add any number of currency in his list to track.
User can delete any tracked cryptoCurrency from his list by right swipt gesture on the selected row.
User can select and add multiple cryptocurrencies at a time to add in his list.
User can unselect any selected currency from the list and that cryptoCurrency will be removed from his list.

