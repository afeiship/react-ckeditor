import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CLASS_NAME = 'react-ckeditor';

export default class ReactCkeditor extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Default value.
     */
    value: PropTypes.string,
    /**
     * The change handler.
     */
    onChange: PropTypes.func,
    /**
     * The image upload adapter.
     */
    imageUploadAdapter: PropTypes.func,
    /**
     * The adpater options.
     */
    adapterOptions: PropTypes.object
  };

  static defaultProps = {
    onChange: noop,
    imageUploadAdapter: noop
  };

  get html() {
    return this.editor ? this.editor.data.get() : null;
  }

  set html(inValue) {
    this.editor && this.editor.data.set(inValue);
  }
  componentDidMount() {
    const { value } = this.props;
    ClassicEditor.create(this.root).then((editor) => {
      this.editor = editor;
      this.html = value;
      this.attacheEvents();
    });
  }

  shouldComponentUpdate(inProps) {
    const { value } = inProps;
    if (value !== this.html) {
      this.html = value;
    }
    return true;
  }

  onDataChange() {
    const { onChange } = this.props;
    this.editor.model.document.on('change:data', (inEvent) => {
      onChange({
        target: {
          value: this.html
        }
      });
    });
  }

  onImageUpload() {
    const { imageUploadAdapter, adapterOptions } = this.props;
    this.editor.plugins.get('FileRepository').createUploadAdapter = (
      loader
    ) => {
      return new imageUploadAdapter(loader, adapterOptions);
    };
  }

  attacheEvents() {
    this.onDataChange();
    this.onImageUpload();
  }

  render() {
    const {
      className,
      value,
      adapterOptions,
      imageUploadAdapter,
      ...props
    } = this.props;

    return (
      <div
        ref={(root) => (this.root = root)}
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}
      />
    );
  }
}
