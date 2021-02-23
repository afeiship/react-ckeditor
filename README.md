# react-ckeditor
> CKEditor component for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ckeditor
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | object | false    | null    | The changed value.                    |
| onChange  | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@jswork/react-ckeditor/dist/style.css";

  // or use sass
  @import "~@jswork/react-ckeditor/dist/style.scss";

  // customize your styles:
  $react-ckeditor-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactCkeditor from '@jswork/react-ckeditor';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-ckeditor">
          <ReactCkeditor className="mb-5 has-text-white" />
          <button className="button is-primary is-fullwidth">Start~</button>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-ckeditor/


## license
Code released under [the MIT license](https://github.com/afeiship/react-ckeditor/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ckeditor
[version-url]: https://npmjs.org/package/@jswork/react-ckeditor

[license-image]: https://img.shields.io/npm/l/@jswork/react-ckeditor
[license-url]: https://github.com/afeiship/react-ckeditor/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ckeditor
[size-url]: https://github.com/afeiship/react-ckeditor/blob/master/dist/react-ckeditor.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ckeditor
[download-url]: https://www.npmjs.com/package/@jswork/react-ckeditor
