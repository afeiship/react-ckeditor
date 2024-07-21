import ReactCkeditor from '@jswork/react-ckeditor/src';
import '@jswork/react-ckeditor/src/style.scss';
import {useState} from "react";

function App() {
  const [value, setValue] = useState(`<p>Hello React Ckeditor!</p>`);
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
