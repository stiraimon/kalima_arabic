import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TinyMCEEditor = ({ value, placeholder, onChange }) => {
  const handleEditorChange = (newValue) => {
    if (onChange) {
      onChange(newValue);
    }
  };
  console.log('tiny:', import.meta.env.VITE_TINYMCE_API_KEY )

  return (
    <Editor
      apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
      initialValue={value}
      init={{
        height: 300,
        menubar: false,
        forced_root_block: '',
        directionality: 'rtl', 
        entity_encoding: 'raw', 
        content_style: 'white-space: pre-wrap;', 
        valid_elements: '*[*]', 
        placeholder: placeholder || 'Введите текст здесь...',
        plugins: ['code', 'lists', 'directionality'],
        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
        setup: (editor) => {
          editor.on('keydown', (event) => {
            if (event.key === 'Tab') {
              event.preventDefault();
              editor.execCommand('mceInsertContent', false, '&nbsp;&nbsp;&nbsp;&nbsp;'); // Таб = 4 пробела
            }
          });
          editor.on('GetContent', (e) => {
            e.content = e.content.replace(/ /g, '&nbsp;'); 
          });
        },
      }}
      onEditorChange={handleEditorChange}
    />
  );
};

export default TinyMCEEditor;
