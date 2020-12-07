import React from 'react';
import { Link } from 'react-router-dom';

import { withResponsiveComponent } from '../../../app-layout/screen-media';
import { TopHeaderSection } from '../../../page-header';
import { styles } from './styles';
import { PageFooter } from '../../../page-footer';

const _Page = props => (
  <div style={styles.container} id="topContent">
    <TopHeaderSection selected={props.selected} />
    <div style={styles.content}>
      {props.children}

    </div>
    <PageFooter />
  </div>);
export const Page = withResponsiveComponent(_Page, { scrollTo: "topContent" });



export const P = props => (<div style={styles.card.paragraph.get()}>{props.children}</div>);
export const Title = props => (<div style={styles.card.title.get()}>{props.children}</div>);


export const Code = props => (
  <div style={styles.card.codeContainer}>
    <pre style={styles.card.code}>{props.children}</pre>
  </div>
);





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

export const TextLink = props => (<Link to={props.to} style={styles.card.link}>{props.children}</Link>);
export const A = props => (<a href={props.href} style={styles.card.link} target="__blank">{props.children}</a>);

export const Concept = props => (<span style={styles.card.concept}>{props.children}</span>);

const _FirstSection = props => (
  <div style={styles.firstSection}>
    <div style={styles.card.container.get()}>
      {props.children}
    </div>
  </div>
);
export const FirstSection = withResponsiveComponent(_FirstSection);


const _NextSection = props => (
  <div style={styles.nextSection}>
    <div style={styles.card.container.get()}>
      {props.children}
    </div>
  </div>
);
export const NextSection = withResponsiveComponent(_NextSection);
