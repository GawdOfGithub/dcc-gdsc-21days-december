import "./styles/editor.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faStrikethrough,
  faCode,
  faListUl,
  faListOl,
  faQuoteRight,
  faUndo,
  faRedo,
  faMinus,
  faSlash,
  faTextSlash,
  faEraser,
  faDroplet,
  faParagraph,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import PropTypes from "prop-types";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { useState } from "react";

const Dropdown = ({ options, onSelect }) => {
  return (
    <select onChange={(e) => onSelect(options[e.target.value])}>
      {options.map((option, index) => (
        <option key={index} value={index}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};

const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  const headingLevels = [1, 2, 3, 4, 5, 6].map((level) => ({
    label: `H${level}`,
    action: () => editor.chain().focus().toggleHeading({ level }).run(),
  }));

  return (
    <div className="menu-bar">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <FontAwesomeIcon icon={faBold} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <FontAwesomeIcon icon={faItalic} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        <FontAwesomeIcon icon={faStrikethrough} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={editor.isActive("code") ? "is-active" : ""}
      >
        <FontAwesomeIcon icon={faCode} />
      </button>
      <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        <FontAwesomeIcon icon={faTextSlash} />
      </button>
      <button onClick={() => editor.chain().focus().clearNodes().run()}>
        <FontAwesomeIcon icon={faEraser} />
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      >
        <FontAwesomeIcon icon={faParagraph} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        <FontAwesomeIcon icon={faListUl} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        <FontAwesomeIcon icon={faListOl} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
      >
        <FontAwesomeIcon icon={faFileCode} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        <FontAwesomeIcon icon={faQuoteRight} />
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <FontAwesomeIcon icon={faMinus} /> {/* Replace with appropriate icon */}
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        <FontAwesomeIcon icon={faSlash} /> {/* Replace with appropriate icon */}
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        <FontAwesomeIcon icon={faUndo} />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        <FontAwesomeIcon icon={faRedo} />
      </button>
      <button
        onClick={() => editor.chain().focus().setColor("#958DF1").run()}
        className={
          editor.isActive("textStyle", { color: "#958DF1" }) ? "is-active" : ""
        }
      >
        <FontAwesomeIcon icon={faDroplet} />
      </button>
      <Dropdown
        options={headingLevels}
        onSelect={(option) => option.action()}
      />
    </div>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
];

const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`;

const Tiptap = () => {

  const handleContentChange = () => {
    if (props.onContentChange && editor) {
      props.onContentChange(editor.getHTML());
    }
  };
  
  return (
    <EditorProvider
      slotBefore={<MenuBar />}
      extensions={extensions}
      content={content}
    >
    {/* {content} */}
    </EditorProvider>
  );
};



export default Tiptap;
