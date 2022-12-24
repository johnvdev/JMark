import  JMarkMaps  from "./JMaps.js"

class JMarkMDCompiler{
    constructor(){
    }

    compileHTML(input){
        var output = '';
        var inputArray = input.split("\n");
        for (let i = 0; i < inputArray.length; i++) {
            var lineInput = inputArray[i];

            //find matchin md map
            var map = JMarkMaps.find(x => lineInput.includes(x.mdMarker))
            if(map){
                output += map.htmlTemplate.replace('{{val}}', lineInput.replace(map.mdMarker, ''));
            }
            
          }
          return output;
    }

    compileMarkDown(){

    }
}

export default JMarkMDCompiler