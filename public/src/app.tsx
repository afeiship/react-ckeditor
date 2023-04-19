import React from 'react';
import ReactCkeditor from '../../src/main';
import WeiboCkeditorUploadAdpater from '@jswork/weibo-ckeditor-upload-adpater';

class UploadAdapter {
  private loader;
  private options;

  constructor(inLoader, inOptions) {
    this.loader = inLoader;
    this.options = inOptions;
  }

  upload() {
    // console.log(this.loader);
    // this.loader.file.then(console.log)
    return new Promise((resolve) => {
      resolve({
        default: 'https://tva1.sinaimg.cn/large/0082zybpgy1gbzotavk93j30a204cwfm.jpg'
      });
    });
  }
}

// https://ckeditor.com/docs/ckeditor5/latest/api/module_code-block_codeblock-CodeBlockConfig.html#member-languages
export default class App extends React.Component {
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
      <ReactCkeditor
        value={this.state.value}
        onChange={this.handleChange}
        imageUploadAdapter={WeiboCkeditorUploadAdpater}
        options={{
          image: {
            toolbar: [
              'imageTextAlternative',
              'toggleImageCaption',
              'imageStyle:inline',
              'imageStyle:block',
              'imageStyle:side',
              'linkImage'
            ]
          }
        }}
      />
    );
  }
}
