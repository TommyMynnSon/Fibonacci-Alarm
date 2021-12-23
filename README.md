# Fibonacci Alarm

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![image](https://user-images.githubusercontent.com/28680171/147181930-1783f6d7-af67-4246-9253-fbd0aa07bc38.png)

## GitHub Pages Deployment Link 
https://tommymynnson.github.io/Fibonacci-Alarm/

## How to Get Started Locally

- Clone the repository.
- Run `npm install` in the root directory.
- Run `npm start` in the root directory.
- Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Validation of Functionality

Alarms are displayed in the Chrome DevTools Console. You will receive the first alarm seen below as soon as you visit the application because the first fibonacci number is 0.
![image](https://user-images.githubusercontent.com/28680171/147181995-e97c6405-8ed3-4e3a-8d28-ba2c25a12d82.png)
<br></br>
Since waiting for hours to see alarms based on the rising fibonacci sequence is unrealistic, you can remove `shouldAlarmTrigger(currentDateAndTime, currentFibonacciNumbers)` in the `if` statement below and replace it with `true` in TimeUntilNextAlarm.jsx to have alarms go off instantaneously.
![image](https://user-images.githubusercontent.com/28680171/147182499-00c39563-c104-442f-8519-fcbc756a496c.png)
<br></br>
If instead, you want to see the application treat fibonacci numbers as durations based on seconds and not hours, please uncomment the lines of code you see commented and comment lines of code you see not-commented below from useCurrentFibonacciNumbers.js and TimeUntilNextAlarm.jsx.
![image](https://user-images.githubusercontent.com/28680171/147182879-ca2ed88a-5e94-4dc3-8c7a-7f4445154e81.png)
![image](https://user-images.githubusercontent.com/28680171/147182897-e1f7e102-f39f-4594-9441-d30e0176fe50.png)



## Dependencies

- Aside from the default dependencies listed in the package.json file of a fresh Create React App, `"moment": "^2.29.1"` was used heavily in this application for working with `Date` objects.
- Node v16.13.1 was used.
