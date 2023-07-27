# Getting Started with Dashboard app

libraries/ frameworks used - react, redux dev tools, 
ui framework - material ui, 
utility - axios, moment, react-dom, lodash, js-cookies, 
charts - mui/x-charts, recharts

## Live demo [https://nvidia-stock-data.netlify.app]
## Running the project

Clone the project in your local machine and run the following command
### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

**Note: project structure !**
### components -> UI
Reusable UI components such as button, image, spinner, Search Bar, text box contains in this folder

components folder contains all the chart elements that are used in dashboard

### containers
contains all the pages such as dashbaord, login, settings, account, etc..

### store
redux store and reducers

### utils
constants and localization values, util functions and custom hooks(isMobileView)
## Learn More

### Note: How login works

Accessing a dummy login api provided from dummyjson.com and it returns a session token

API curl is as below...
curl 'https://dummyjson.com/auth/login' \
  -H 'authority: dummyjson.com' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: en-US,en;q=0.9' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'dnt: 1' \
  -H 'origin: http://localhost:3000' \
  -H 'pragma: no-cache' \
  -H 'referer: http://localhost:3000/' \
  -H 'sec-ch-ua: "Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: cross-site' \
  -H 'sec-gpc: 1' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36' \
  --data-raw '{"username":"kminchelle","password":"0lelplR"}' \
  --compressed

  in the login form default username and passwords are provided by api are saved.
  after successfull login user will be redirected to the dashboard page

  #### if you clear cache and refresh page you will be redirected to the login
  #### if you change url to dashbard without login you will see same login page

### Note: How redux store persistace kept
When user logged into the dashboard auth data and other chart data are stored in redux store. but if page refresh store gets reset.
to avoid this behaviour persistor added by using redux-persist and redux store stored in the local storage.

### Note: Loading dashboard in web view and mobile view
In app.js you can see Router and page compoenents(Headers, LeftNav, Routes with containers)
Header and left nav renders conditionaly is the screen is mobile view.
only if moblie view Mobile header and menu icon shows

### Note: Dashboard apis and charts and store, select data in components
I used the stock NVDA, so every data on dashboard are related to this stock

on dashboard loading following api dispatches and take 2 parameters(current date and one month back date)

curl 'https://api.polygon.io/v2/aggs/ticker/NVDA/range/1/day/{month-back-date}/{today-date}?apiKey=oqwsl9C0odCpad3e108FfNm79IgukZia' \
  -H 'authority: api.polygon.io' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: en-US,en;q=0.9' \
  -H 'cache-control: no-cache' \
  -H 'dnt: 1' \
  -H 'origin: http://localhost:3000' \
  -H 'pragma: no-cache' \
  -H 'referer: http://localhost:3000/' \
  -H 'sec-ch-ua: "Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: cross-site' \
  -H 'sec-gpc: 1' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36' \
  --compressed

it stores charts data in redux store.

to select store data i am using selectors provided by redux toolkit library
## selectOpenHighValues()
this functions in chartDataReducer will return all the dashboard data related to the charts

#### highValues - high values array for the stock
#### lowValues - low values array for the stock
#### openValues - open values array for the stock 
#### topFiveHighValues - top five high values of the stock
#### maxHigh - max high value
#### maxLow - max low value
#### maxOpen - max open value


### Note: Dark mode
using mui dark theme

In web view you can see dark mode button in left nav
In mobile view you can see dark mode button in the bottom of the dashboard