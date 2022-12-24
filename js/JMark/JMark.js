import  JMarkEditor  from "./JMarkEditor.js"

class JMark {
    constructor() {
        this.jmarkEditors = []
        this.jmarkOutputs = []
    }

    addEditor(querySelector, config) {
        var newEditor = new JMarkEditor(querySelector, config);
        this.jmarkEditors.push(newEditor);

        return newEditor;
    }

    getEditor(editorName){
        return this.jmarkEditors.find(x => x.configuration.editorName === editorName)
    }
}

export default JMark 