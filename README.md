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
  import React from 'react';
  import ReactCkeditor from '../../src/main';
  import WeiboCkeditorUploadAdpater from '@jswork/weibo-ckeditor-upload-adpater';

  // https://ckeditor.com/docs/ckeditor5/latest/api/module_code-block_codeblock-CodeBlockConfig.html#member-languages
  export default class App extends React.Component {
    state = {
      value: `
        <h4>安装插件</h4><ol><li><code>eslint</code> 自带了</li><li><code>prettier</code> 需要安装</li></ol><figure class=\"image\"><img src=\"https://tva1.js.work/large/da432263ly1gxuxu9lzxej21ji0rmtem.jpg\"><figcaption>prettier 插件市场安装</figcaption></figure><h4>一般 <code>eslint</code> 使用 auto 即可</h4><figure class=\"image\"><img src=\"https://tva1.js.work/large/da432263ly1gxuxwgcdmoj21j80fetbk.jpg\"><figcaption>eslint 设置</figcaption></figure><h4><code>prettier</code> 可以添加一个格式化时执行</h4><figure class=\"image\"><img src=\"https://tva1.js.work/large/da432263ly1gxuxxauvqgj21ja0n2779.jpg\"><figcaption>设置格式化时使用 prettier</figcaption></figure><h4>各种 hit 提示去除</h4><blockquote><p>点击提示，右键，Hide all user viso…</p></blockquote><figure class=\"image\"><img src=\"https://tva1.js.work/large/da432263gy1hbgqgnzcwwj20vw0qqgoz.jpg\"></figure>
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

  ```

## preview
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
