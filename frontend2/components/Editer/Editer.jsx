import React, { useRef } from 'react';
import { Editor as EditerTinyMce } from '@tinymce/tinymce-react';


export default function Editer({initialVal = "", onChangeFunc}) {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      let val = editorRef.current.getContent();
      onChangeFunc(val)
      console.log('Content was updated:', val)
    }
  };

  return (
  <>
    <EditerTinyMce
      onInit={(evt, editor) => editorRef.current = editor}
      onEditorChange={log}
      initialValue={initialVal}
      init={{
      height: 500,
      menubar: false,
      plugins: [
        "print","preview","paste","importcss","searchreplace","autolink","autosave","save","directionality","code","visualblocks","visualchars","fullscreen","image","link","media","codesample","table","charmap","hr","pagebreak","nonbreaking","anchor","toc","insertdatetime","advlist","lists","wordcount","imagetools","textpattern","noneditable","help","charmap","quickbars","emoticons"
      ],
      toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview | insertfile image media template link anchor codesample | ltr rtl',
      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
      image_caption: true,
      quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
      noneditable_noneditable_class: 'mceNonEditable',
      contextmenu: 'link image imagetools table',
      statusbar: false,
      }}
    />
  </>)
}
