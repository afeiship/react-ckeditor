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
   * The adapter options.
   */
  adapterOptions?: any;
} & HTMLAttributes<HTMLDivElement>;

interface ReactCkeditorState {
  value: string;
}

export default class ReactCkeditor extends Component<ReactCkeditorProps, ReactCkeditorState> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    value: '',
    options: {},
    onChange: noop,
    imageUploadAdapter: noop,
  };

  private editor: any = null;
  private root: HTMLDivElement | null;

  state = {
    value: this.props.value || '',
  };

  get editorRoot() {
    return this.editor?.ui.view.element;
  }

  get editorValue() {
    return this.editor?.getData() || '';
  }

  set editorValue(value) {
    const { onChange } = this.props;
    if (this.editorValue === value) return;
    this.editor?.setData(value);
    this.setState({ value });
    onChange?.({ target: { value } });
  }

  componentDidMount() {
    const { options, value, className } = this.props;
    const classes = classNames(CLASS_NAME, className);
    ClassicEditor.create(this.root, { initialData: value, ...options }).then((editor) => {
      this.editor = editor;
      this.editorRoot.classList.add(classes);
      this.onImageUpload();
    });
  }

  componentDidUpdate(previosProps: ReactCkeditorProps) {
    const { value } = this.props;
    if (value && value !== previosProps.value) {
      this.editorValue = value;
    }
  }

  componentWillUnmount() {
    this.editor?.destroy();
  }

  onImageUpload() {
    const { imageUploadAdapter, adapterOptions } = this.props;
    const plugins = this.editor.plugins;
    const fileRepo = plugins.get('FileRepository');
    fileRepo.createUploadAdapter = (loader) => new imageUploadAdapter(loader, adapterOptions);
  }

  render() {
    const { className, value, onChange, options, adapterOptions, imageUploadAdapter, ...props } =
      this.props;

    return (
      <div
        ref={(root) => (this.root = root)}
        data-component={CLASS_NAME}
        className={classNames(`${CLASS_NAME}__root`)}
        {...props}
      />
    );
  }
}
