export function getStoredContextData() {
    const storedContextData = sessionStorage.getItem('contextData');
    
    return storedContextData ? JSON.parse(storedContextData) : null;
  }

  export function getStoredContextJd() {
    const storedContextJd = sessionStorage.getItem('contextJd');
    
    return storedContextJd ? JSON.parse(storedContextJd) : null;
  }