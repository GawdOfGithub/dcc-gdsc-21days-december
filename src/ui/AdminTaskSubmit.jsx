import Tiptap from './helpers/editor.jsx';
import { useState } from 'react';
import { useCurrentEditor } from '@tiptap/react'

const { editor } = useCurrentEditor()

const AdminTaskSubmit = () => {
const [domain, setDomain] = useState("Web");
const [day, setDay] = useState();
const [title, setTitle] = useState();

const handleClick = (e) => {
  const data = {
    domain,
    day,
    title,
    description : editor.getHTML()
  };
  
  console.log(data);
};

  return (
    <div className="admin-task-submit flex gap-5 mt-10 flex-col">

      <div className="editor-wrapper">
        <Tiptap />
      </div>

      <div className=" text-gray-950 w-96 flex flex-col items-center">
      <div className="grid gap-3 w-full">
      <div className="dropdown dropdown-hover">
      
        <button tabIndex={0} role="button" className="btn w-full">
          {domain}
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-zinc-700 rounded-box w-52"
        >
          <li>
            <a onClick={() => setDomain("Web")}>Web</a>
          </li>
          <li>
            <a onClick={() => setDomain("Mobile")}>Mobile</a>
          </li>
          <li>
            <a onClick={() => setDomain("ML")}>ML</a>
          </li>
        </ul>
      </div>
      <div>
        <input
          type="text"
          value={title}
          placeholder="Enter Title"
          className="input bg-slate-50 input-bordered w-full "
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          value={day}
          placeholder="Enter Day Number (1-21)"
          className="input bg-slate-50 input-bordered w-full "
          onChange={(e) => {
            setDay(e.target.value);
          }}
        />
      </div>
      <button className="btn" onClick={handleClick}>Submit</button>
      </div>
      </div>
    </div>
  );
};


// const EditorJSONPreview = () => {

//   return (
//     <pre>
//       {JSON.stringify(editor.getHTML(), null, 2)}
//     </pre>
//   )
// }


export default AdminTaskSubmit;
