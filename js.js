import  JMark  from "./js/JMark/JMark.js";
import  {JMarkEditorConfig}  from "./js/JMark/JMarkEditor.js";

var jmark = new JMark();

var jmarkConfig = new JMarkEditorConfig("editor1");
var editor = jmark.addEditor("#textAreaMD", jmarkConfig);

editor.addHtmlOutput("#output")
console.log(jmark.getEditor("editor1"))
