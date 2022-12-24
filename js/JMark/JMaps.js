
const _mdMaps = [
    { htmlSelector: "p", mdTemplate: "{{val}}", htmlTemplate: "<p>{{val}}</p>"},
    { htmlSelector: "h1", mdTemplate: "# {{val}}", htmlTemplate: "<h1>{{val}}</h1>" },
    { htmlSelector: "h2", mdTemplate: "## {{val}}", htmlTemplate: "<h2>{{val}}</h2>" },
    { htmlSelector: "h3", mdTemplate: "## {{val}}", htmlTemplate: "<h3>{{val}}</h3>" },
    { htmlSelector: "h4", mdTemplate: "## {{val}}", htmlTemplate: "<h4>{{val}}</h4>" },
    { htmlSelector: "h5", mdTemplate: "## {{val}}", htmlTemplate: "<h5>{{val}}</h5>" },
    { htmlSelector: "h6", mdTemplate: "## {{val}}", htmlTemplate: "<h6>{{val}}</h6>" },
    { htmlSelector: "b", mdTemplate: "**{{val}}**", htmlTemplate: "<b>{{val}}</b>" },
    { htmlSelector: "i", mdTemplate: "*{{val}}*", htmlTemplate: "<em>{{val}}</em>" }
]

export default  _mdMaps ;