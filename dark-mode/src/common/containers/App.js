import React, {useState} from 'react';
/*
localstorage is used to persist the theme mode
React.Children.map is used to pass props to all the children componet
mode and setmode are used to initialize a state and set state
*/
export default function App({ children }) {
  let localMode = localStorage.getItem('appMode')
  if(!localMode){
    localMode = false
  } else{
    localMode = localMode === 'true' ? true : false
  }

  const [mode, setMode] = useState(localMode)

  const changeMode = () => {
    setMode(!mode);
    localStorage.setItem('appMode', new String(!mode))
  }
  
  const childrenWithProps = React.Children.map(
    children,
    (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          mode: mode, 
          setMode: changeMode
        });
      }
      return child;
    }
  )
  
  return childrenWithProps;
}