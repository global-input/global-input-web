
import React from 'react';
import { Link } from 'react-router-dom';
import { TopHeaderSection } from '../../top-header-section';
import { styles } from './styles';
import PageFooter from '../page-footer';

export const P = ({ children }) => (<div style={styles.card.paragraph.get()}>{children}</div>);
export const Title = ({ children }) => (<div style={styles.card.title.get()}>{children}</div>);
export const TitleCenter = ({ children }) => (<div style={styles.titleCenter}>{children}</div>);

export const VerticalOnMobile = ({ children }) => (
  <div style={styles.rowColumn.get()}>{children}</div>
);

export const Code = props => (<pre style={styles.card.code}>{props.children}</pre>);



export class ListLinks extends React.Component {

  render() {
    return (<ul>
      {this.props.items.map(this.renderItem.bind(this))}
    </ul>);
  }
  renderItem(item, index) {
    if (item.path) {
      return (
        <li style={styles.card.item} key={index}>
          <Link to={item.path} style={styles.card.link}>{item.linkText}</Link>
        </li>
      );
    }
    else if (item.href) {
      return (

        <li style={styles.card.item} key={index}>
          <a href={item.href} style={styles.card.link} target="__blank">{item.linkText}</a>
        </li>
      );
    }
    else {
      return (<li style={styles.card.item} key={index}>
        Missing links
      </li>);
    }
  }
}

export const PageLink = props => (<Link to={props.to} style={styles.card.link}>{props.children}</Link>);


export const A = props => (<a href={props.href} style={styles.card.link} target="__blank">{props.children}</a>);

export const Concept = props => (<span style={styles.card.concept}>{props.children}</span>);


export const Page = ({ selected, children, scWidth }) => (
  <div style={styles.container.get()} id="topContent">

    <TopHeaderSection selected={selected} />


    <div style={styles.card.container.get()}>
      {children}

    </div>
    <PageFooter />
  </div>);



export const PageContainer = ({ children }) => (
  <div style={styles.pageContainer.get()}>
    {children}
  </div>
);
