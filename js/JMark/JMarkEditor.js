
class JMarkEditor {
    constructor(selector, config) {
        this.configuration = config;
    }
}
const jMarkEditorConfigName = 'JMarkEditorConfig';
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