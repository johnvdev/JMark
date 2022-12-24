import JMarkMDCompiler from "./JMarkCompiler.js";
import  JMarkMaps  from "./JMarkCompiler.js"

const jMarkEditorConfigName = 'JMarkEditorConfig';

class JMarkEditor {
    constructor(querySelector, config) {
        this.configuration = config;

        this.htmlOutputs = [];

        //build out editor based off of configuration
        this.name = config.editorName;
        this.querySelector = querySelector;
        this.context = document.querySelector(querySelector);
        this.compiler = new JMarkMDCompiler();
        attachEditorHandler(this);
    }

    addHtmlOutput(querySelector){
        this.htmlOutputs.push(document.querySelector(querySelector));
    }
}

function attachEditorHandler(editor){
    editor.context.addEventListener("keyup", (event) => {
        if (event.isComposing || event.keyCode === 229) {
          return;
        }
    
        var renderedHTML = editor.compiler.compileHTML(editor.context.value)
        injectHTMLOutputs(  editor.htmlOutputs, renderedHTML);
      });
}  

function injectHTMLOutputs(outputs, html){
    for (let i = 0; i < outputs.length; i++) {
        outputs[i].innerHTML = html;
      }
}

class JMarkEditorConfig {
    constructor(name) {
        if (name === '' || name === undefined) {
            throw 'Editor name is not specified in the editor configuration.'
        }
        this.editorName = name;
    }
}

export default JMarkEditor
export {jMarkEditorConfigName, JMarkEditorConfig}