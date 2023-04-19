import noop from '@jswork/noop';
import classNames from 'classnames';
import React, { Component, HTMLAttributes } from 'react';
import ClassicEditor from '@jswork/ckeditor5-build-classic';

const CLASS_NAME = 'react-ckeditor';

export type StandardEvent = {
  target: {
    value: string;
  };
};

export type ReactCkeditorProps = {
  /**
   * The extended className for component.
   */
  className?: string;
  /**
   * Default value.
   */
  value?: string;
  /**
   * The change handler.
   */
  onChange?: (event: StandardEvent) => void;
  /**
   * The editor options.
   */
  options?: any;
  /**
   * The image upload adapter.
   */
  imageUploadAdapter?: any;
  /**
   * The adpater options.
   */
  adapterOptions?: any;
} & HTMLAttributes<HTMLDivElement>;

export default class ReactCkeditor extends Component<ReactCkeditorProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    value: '',
    options: {},
    onChange: noop,
    imageUploadAdapter: noop
  };

  private editor;
  private root;

  get html() {
    return this.editor ? this.editor.getData() : null;
  }

  set html(inValue) {
    this.editor && this.editor.setData(inValue);
  }

  componentDidMount() {
    const { value, options } = this.props;
    ClassicEditor.create(this.root, options).then((editor) => {
      this.editor = editor;
      this.html = value;
      this.attacheEvents();
    });
  }

  shouldComponentUpdate(inProps) {
    const { value } = inProps;
    if (value !== this.html) {
      this.html = value || '';
    }
    return true;
  }

  onDataChange() {
    const { onChange } = this.props;
    this.editor.model.document.on('change:data', () => {
      onChange!({ target: { value: this.html } });
    });
  }

  onImageUpload() {
    const { imageUploadAdapter, adapterOptions } = this.props;
    const plugins = this.editor.plugins;
    const fileRepo = plugins.get('FileRepository');
    fileRepo.createUploadAdapter = (loader) => new imageUploadAdapter(loader, adapterOptions);
  }

  attacheEvents() {
    this.onDataChange();
    this.onImageUpload();
  }

  render() {
    const { className, value, options, adapterOptions, imageUploadAdapter, ...props } = this.props;

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
