
export const logger = {
    log: (message, obj = null) => {
      if (process.env.NODE_ENV !== 'production') {
        if (obj !== null) {
          console.log(message, obj);
        } else {
          console.log(message);
        }
      }
    },
  
    error: (message, error = null) => {
      if (process.env.NODE_ENV !== 'production') {
        if (error) {
          console.error(message, error);
        } else {
          console.error(message);
        }
      } else {
        // For production, send error details to a monitoring service
        console.log("error");        
      }
    },
  };