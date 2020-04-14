import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


function TextEditor() {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <div>
        <Editor
            editorState={editorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            onEditorStateChange={(eS) => setEditorState(eS)}
        />
    </div>
  );
}

export default TextEditor;