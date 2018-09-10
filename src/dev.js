import './dev.scss';
import ReactCkeditor from './main';

/*===example start===*/

// install: npm install afeiship/react-ckeditor --save
// import : import ReactCkeditor from 'react-ckeditor'


class UploadAdapter {

  constructor(inLoader, inOptions) {
    this.loader = inLoader;
    this.options = inOptions;
  }

  upload() {
    return new Promise(resolve => {
      resolve({
        default: 'http://placeholder.qiniudn.com/80x80'
      })
    })
  }

}

class App extends React.Component{
  state = {
    value:'<h2>TITLTEasdlfjlsafd</h2><p>asdflkjsadf</p><p>&nbsp;</p><p>asdfjasdf</p><p>&nbsp;</p><p>asdfsadf</p>'
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = e =>{
    console.log(e.target.value);
  };

  render(){
    return (
      <div className="hello-react-ckeditor">
        <ReactCkeditor value={this.state.value} onChange={this._onChange} imageUploadAdapter={UploadAdapter} ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
