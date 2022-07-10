import backgroundImage from "./images/background.svg";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  color: white;
  background-color: rgb(97, 136, 204);
  @media and (min-width: 600px) and (max-width: 800) {
    background-color: white;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  width: 100%;
`;

export const Row = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    width: 500px;
  }
  @media only screen and (min-width: 1024px) {
    width: 700px;
  }
`;

export const PageTitle = styled.div`
  margin-top: 100px;
  font-size: 65px;
  font-weight: 900;
  line-height: 65px;

  @media only screen and (max-width: 1258px) {
    font-size: 40px;
    line-height: 40px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  margin-top: 50px;
  font-size: 26px;
  margin-bottom: 15px;
`;

export const Line = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
`;

/*
    return (
        <div style={styles.container.get()}>

            {renderTitle(title)}
            {renderContent(items, children)}
        </div>
    );
};
const renderTitle = title => {
    if (title) {
        return (<div style={styles.title}>{title}</div>);
    }
    else {
        return null;
    }
}
const renderContent = (items, children) => {
    if (items) {
        return items.map(renderItem);
    }
    else if (children) {
        return children;
    }
    else {
        return null;
    }
}


const renderItem = (content, index) => (<div style={styles.item} key={index}>{content}</div>);


const styles = {
    container: {
        get: styleMatchingScreenSize,
        default: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            marginRight: 30,
            marginLeft: 30,
        },
        mobile: {
            marginRight: 0,
            marginLeft: 0,
            marginBottom: 50
        },
        screen1245: {
            marginRight: 60,
            marginLeft: 60,

        },


    },
    title: {
        fontSize: 26,
        marginBottom: 15
    },
    item: {
        fontSize: 15,
        marginBottom: 10
    }
};
export default VerticalList;
*/
