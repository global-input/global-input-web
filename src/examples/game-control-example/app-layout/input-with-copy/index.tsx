import React, { useState, useRef, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import InputWithLabel from "../input-with-label";


const stopTimer = (timerHandler: any) => {
  if (timerHandler.current) {
    clearTimeout(timerHandler.current);
    timerHandler.current = null;
  }
}

interface Props {
  id?: string;
  type?: string;
  label?: string;
  readOnly?: boolean;
  onChange?: (value: string, id?: string) => void;
  help?: string;
  value?: string;
  onCopied?: () => void;
}


const InputWithCopy = (props: Props) => {
  const [message, setMessage] = useState<string | null>('');
  const timerHandler = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    return () => {
      stopTimer(timerHandler);
    }
  }, []);



  const onCopy = () => {
    if (!props.value) {
      return;
    }
    navigator.clipboard.writeText(props.value);
    if (props.onCopied) {
      props.onCopied();
    }
    setMessage(`"${props.label}" is copied into your clipboard`);
    stopTimer(timerHandler);
    timerHandler.current = setTimeout(() => {
      setMessage(null);
    }, 2000);

  };

  const renderMessage = () => {
    if (message) {
      return (<div style={styles.message}>{message}</div>);
    }
    else {
      return null;
    }

  };

  const disabled = !!message;
  const buttonStyle = disabled ? styles.button.disabled : styles.button.enabled;

  return (
    <div style={styles.content}>
      <div style={styles.row}>

        <InputWithLabel {...props} />
        <button disabled={disabled} style={buttonStyle} onClick={onCopy}>Copy</button>
      </div>
      {renderMessage()}
    </div>
  );
}





const styles = {
  content: {
    display: "flex",
    flexDirection: 'column' as 'column',
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%"
  },
  row: {
    display: "flex",
    flexDirection: "row" as 'row',
    alignItems: "flex-end",
    justifyContent: "flex-start",
    width: "100%",
  },
  button: {
    enabled: {
      backgroundColor: "#5291CD",
      borderRadius: 5,
      color: "white",
      padding: 5,
      fontSize: 10,
      marginLeft:3
    },
    disabled: {
      padding: 5,
      backgroundColor: "#888888",
      color: "white",
      borderRadius: 5,
      fontSize: 10,
      marginLeft:3
    }
  },
  message: {
    fontSize: 10,
    color: "#888888"

  }


};

export default InputWithCopy;