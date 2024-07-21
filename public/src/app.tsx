import React from 'react';
import ReactCkeditor from '../../src/main';
import WeiboCkeditorUploadAdpater from '@jswork/weibo-ckeditor-upload-adpater';

// https://ckeditor.com/docs/ckeditor5/latest/api/module_code-block_codeblock-CodeBlockConfig.html#member-languages
export default class App extends React.Component {
  state = {
    value: `
      <h1>初始化内容</h1>
    `
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        value: `
          <h4>安装插件</h4><ol><li><code>eslint</code> 自带了</li><li><code>prettier</code>需要安装</li></ol>设置格式化时使用 prettier</figcaption></figure><h4>各种 hit 提示去除</h4><blockquote><p>点击提示，右键，Hide all user viso…</p></blockquote>
        `
      });
    }, 1000);
  }

  handleChange = (e) => {
    const { value } = e.target;
    console.log('✅ value: ', value);
    this.setState({ value });
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
