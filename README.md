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
  ```
2. import js
  ```js
  import ReactCkeditor from '@jswork/react-ckeditor';
  import '@jswork/react-ckeditor/dist/style.scss';
  import {useEffect, useState} from "react";

  function App() {
    const [value, setValue] = useState(`<p>Hello React Ckeditor!</p>`);

    useEffect(() => {
      setTimeout(() => {
        console.log('1s later update')
        setValue(`<p>Hello React Ckeditor! Updated!</p>`);
      }, 1000);
    }, []);

    return (
      <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
        <div className="badge badge-warning absolute right-0 top-0 m-4">
          Build Time: {BUILD_TIME}
        </div>
        <ReactCkeditor value={value} onChange={(e) => setValue(e.target.value)}/>
      </div>
    );
  }

  export default App;
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
