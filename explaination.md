# darkmode challenge

Problem
- the problem states to toggle a switch between light mode and dark mode
- Bonus functionalities that have been added here is to persist the theme color even is site is refreshed or closed


Possible solutions
- Styled-components library can be used to wrap the divs and use js-css to create 2 js files
- wrap required divs under "Themeprovider" and "GlobalStyle"
- Not using the solution since it would cause us to change scss files

Preferred Solution
- Use " React.Children.map" in the parent component "common/App.js" to pass props "mode and setMode" to children component
- Use ternery operator in "components/App.js" to change div class to dark or light according to mode set
- Use React router to create additional component and check if dark theme persist in all pages.( BONUS functionality)
- Use localstorage to persist the theme choice incase browser is refreshed or closed ( Bonus functionality)

Modified Files

    Common/containers/App.js
    component/App.js
    routes/index.js,routes/SecondRoute

### Demo
- ![Demo](https://drive.google.com/file/d/1hNohadfV5GFUK8BDImlnE61l-ZR_aDVR/view?usp=sharing)

# Rocket Challenge


Problem
- The problem states to stop the rocket from launching
- The implicit problem demands stopping of rerendering of LaunchPad component. To view the result the rerender should not increase in console

Possible solutions
- PureCoomponents can be used instead of Components, But it doesnt work with functional components, in this case "LaunchPad.js". It can handle "ComponentShouldUpdate" for you. 
- Here all components will have to be refactored to PureComponents. Not feasible

Preferred Solution

- Use React.memo i.e memoizing the result. Before the next render, if the new props are the same, React reuses the memoized result skipping the next rendering
- used for functional component like "LaunchPad.js"

Modified Files

    Launchpad/components/launchpad.js

### Demo
    
![Here the counter value stays 0 ](https://drive.google.com/file/d/1i5ak-qYSsUNm2z_NF4GNxVa7rWdaDCQe/view?usp=sharing)

# Spotify api

Problem
- here the problem demands to handle api calls. This is done using axios library. The endpoints of **new-releases**, **featured-playlists**, **categories**
- BONUS : use loading gif like component incase there is lag of fetching results

Preffered solution
- The solution demands making correct time to make api call
- The place used is "ComponentDidMount" i.e lifecycle method used to make the api call to spotify
- Set state to required fetched data values and the map it as props to components.
- set set simulataneously so that the load of each section is synchronous even if fetching could be done either in (parallel or series)

Modified Files

    Discover/index.js, Discover/api/index.js
    Discover/components/Discover.js

### Demo
![Here the loading animation can be also viewed ](https://drive.google.com/file/d/1oGqZAyTcWf26FnIWBIbmREoDXypBsSwf/view?usp=sharing)