import ReactQuill from 'react-quill'
import type { TextEditorType } from '../../../types/textEditor'
import './textEditor.css'
import 'react-quill/dist/quill.snow.css'

// import { HelperText, LabelField } from '../label'
// import dynamic from 'next/dynamic'
// const QuillNoSSRWrapper = dynamic(() => import('react-quill'), { ssr: false })

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'direction',
  'align',
  'link',
  'image',
  'video',
]

export const OstiganTextEditor: React.FC<TextEditorType> = (props) => {
  const {
    value,
    direction = true,
    fontSize = true,
    fontWeight = true,
    fontFamily = false,
    alignText = true,
    attachment = false,
    header = false,
    orderList = true,
    formattingButton = true,
    placeholder,
    error,
    handleChange,
    className,
  } = props

  const modules = {
    toolbar: [
      header ? [{ header: [1, 2] }] : [],
      fontFamily ? [{ font: [] }] : [],
      fontSize ? [{ size: ['small', 'large', 'huge'] }] : [],
      fontWeight && ['bold', 'italic', 'underline'],
      orderList
        ? [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ]
        : [],
      alignText && [
        { align: '' },
        { align: 'center' },
        { align: 'right' },
        { align: 'justify' },
      ],
      direction && [{ direction: 'rtl' }, { direction: 'ltr' }],
      attachment ? ['link', 'image', 'video'] : [],
      formattingButton && ['clean'], // remove formatting button
    ],
    clipboard: {
      matchVisual: false, // toggle to add extra line breaks when pasting HTML:
    },
  }

  return (
    <div className={className}>
      {/* {textFeildLabel ? <LabelField title={textFeildLabel} /> : null} */}
      <div
        className={`bg-trueGray-200 rounded-xl h-full ${
          error ? 'border border-error-default' : ''
        }`}
      >
        <ReactQuill
          theme="snow"
          value={value}
          modules={modules}
          formats={formats}
          placeholder={placeholder}
          className="text-right"
          style={{
            border: 'none',
            minHeight: '220px',
          }}
          onChange={handleChange}
        />
      </div>
      {/* {error ? <HelperText>{helperText}</HelperText> : null} */}
    </div>
  )
}
