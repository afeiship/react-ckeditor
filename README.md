# react-ckeditor
> CKEditor component for react.

## installation
```shell
npm install -S @feizheng/react-ckeditor
```

## update
```shell
npm update @feizheng/react-ckeditor
```

## properties
| Name               | Type   | Required | Default | Description                           |
| ------------------ | ------ | -------- | ------- | ------------------------------------- |
| className          | string | false    | -       | The extended className for component. |
| value              | string | false    | -       | Default value.                        |
| onChange           | func   | false    | noop    | The change handler.                   |
| imageUploadAdapter | func   | false    | noop    | The image upload adapter.             |
| adapterOptions     | object | false    | -       | The adpater options.                  |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-ckeditor/dist/style.scss";

  // customize your styles:
  $react-ckeditor-options: ()
  ```
2. import js
  ```js
  import ReactCkeditor from '@feizheng/react-ckeditor';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class UploadAdapter {
    constructor(inLoader, inOptions) {
      this.loader = inLoader;
      this.options = inOptions;
    }

    upload() {
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

    _onChange = (e) => {
      console.log(e.target.value);
    };

    render() {
      return (
        <div className="app-container">
          <ReactCkeditor
            value={this.state.value}
            onChange={this._onChange}
            imageUploadAdapter={UploadAdapter}
          />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-ckeditor/
