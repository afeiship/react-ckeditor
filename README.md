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
| Name               | Type   | Required | Default | Description                           |
| ------------------ | ------ | -------- | ------- | ------------------------------------- |
| className          | string | false    | -       | The extended className for component. |
| value              | string | false    | ''      | Default value.                        |
| onChange           | func   | false    | noop    | The change handler.                   |
| imageUploadAdapter | func   | false    | noop    | The image upload adapter.             |
| adapterOptions     | object | false    | -       | The adpater options.                  |


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
  import WeiboCkeditorUploadAdpater from '@jswork/weibo-ckeditor-upload-adpater';

  import './assets/style.scss';

  class UploadAdapter {
    constructor(inLoader, inOptions) {
      this.loader = inLoader;
      this.options = inOptions;
    }

    upload() {
      // console.log(this.loader);
      // this.loader.file.then(console.log)
      return new Promise((resolve) => {
        resolve({
          default:
            'https://tva1.sinaimg.cn/large/0082zybpgy1gbzotavk93j30a204cwfm.jpg'
        });
      });
    }
  }

  class App extends React.Component {
    state = {
      value: `
        <h2>TITLTEasdlfjlsafd</h2>
        <blockquote>
          <p>asdflkjsadf</p>
          <p>asdfjasdf</p>
          <p>asdfsadf</p>
        </blockquote>
        <ul>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
          <li>item4</li>
        </ul>
      `
    };

    handleChange = (e) => {
      console.log(e.target.value);
    };

    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-ckeditor">
          <ReactCkeditor
            value={this.state.value}
            onChange={this.handleChange}
            imageUploadAdapter={WeiboCkeditorUploadAdpater}
          />
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
