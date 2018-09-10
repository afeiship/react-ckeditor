import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import CkeditorImageUploadAdapter from 'ckeditor-image-upload-adapter';

// https://ckeditor.com/docs/ckeditor5/latest/api/module_upload_filerepository-UploadAdapter.html


export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    imageUploadAdapter: PropTypes.func
  };

  static defaultProps = {
    value: null,
    onChange: noop,
    imageUploadAdapter: noop
  };
  /*===properties end===*/

  get html() {
    return this.editor ? this.editor.data.get() : null;
  }

  set html(inValue) {
    this.editor && this.editor.data.set(inValue);
  }

  componentDidMount() {
    const { imageUploadAdapter, value, onChange } = this.props;
    ClassicEditor.create(this.root).then(editor => {
      this.editor = editor;
      this.attacheEvents();
      this.html = value;
      editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return new imageUploadAdapter(loader);
      };
    });
  }

  onDataChange() {
    const { onChange } = this.props;
    const editor = this.editor;
    editor.model.document.on('change:data', (inEvent) => {
      onChange({
        target: {
          value: this.html
        }
      })
    });
  }

  onImageUpload() {
    const editor = this.editor;
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return new imageAdapter(loader);
    };
  }

  attacheEvents() {
    this.onDataChange();
    this.onImageUpload();
  }

  render() {
    const { className, value, imageUploadAdapter, ...props } = this.props;
    return (
      <div ref={root => this.root = root} className={classNames('react-ckeditor', className)} {...props} />
    );
  }
}
