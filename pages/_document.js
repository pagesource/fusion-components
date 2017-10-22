import { extractCritical } from 'emotion/server';
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
// import './styles.css';

export default class MyDocument extends Document {
  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids;
    }
  }

  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  render() {
    return (<html lang="en">
      <Head>
        <title>Fusion Component Library</title>
        <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </html>);
  }
}
