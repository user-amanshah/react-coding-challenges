import React, {useState} from 'react';

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