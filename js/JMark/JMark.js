import  JMarkMaps  from "./JMaps.js"
import  JMarkEditor  from "./JMarkEditor.js"

class JMark {
    constructor() {
        this.jmarkEditors = []
        this.jmarkOutputs = []
    }

    addEditor(selector, config) {
        var newEditor = new JMarkEditor(selector, config);
        jmarkEditors.push(newEditor);
    }

    addHtmlOutput(selector, config) {

    }
}

export default JMark 