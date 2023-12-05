import Tiptap from './helpers/editor.jsx';
import { useState } from 'react';
import { useCurrentEditor } from '@tiptap/react'


const AdminTaskSubmit = () => {
 

  return (
    <div className="admin-task-submit mt-20">

      <div className="editor-wrapper">
        <Tiptap />
      </div>
      {/* <EditorJSONPreview/> */}
      
    </div>
  );
};



export default AdminTaskSubmit;
