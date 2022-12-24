
const _mdMaps = [
    { htmlSelector: "h6", mdMarker:"######",  mdTemplate: "###### {{val}}", htmlTemplate: "<h6>{{val}}</h6>" },
    { htmlSelector: "h5", mdMarker:"#####",  mdTemplate: "##### {{val}}", htmlTemplate: "<h5>{{val}}</h5>" },
    { htmlSelector: "h4",  mdMarker:"####", mdTemplate: "#### {{val}}", htmlTemplate: "<h4>{{val}}</h4>" },
    { htmlSelector: "h3", mdMarker:"###",  mdTemplate: "### {{val}}", htmlTemplate: "<h3>{{val}}</h3>" },
    { htmlSelector: "h2",  mdMarker:"##", mdTemplate: "## {{val}}", htmlTemplate: "<h2>{{val}}</h2>" },
    { htmlSelector: "h1", mdMarker:"#", mdTemplate: "# {{val}}", htmlTemplate: "<h1>{{val}}</h1>" },
    { htmlSelector: "b", mdMarker:"*",  mdTemplate: "**{{val}}**", htmlTemplate: "<b>{{val}}</b>" },
    { htmlSelector: "i", mdMarker:"**",  mdTemplate: "*{{val}}*", htmlTemplate: "<em>{{val}}</em>" }
]

export default  _mdMaps ;