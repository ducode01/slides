// Load Asciidoctor.js and the reveal.js converter
var asciidoctor = require('@asciidoctor/core')()
var asciidoctorRevealjs = require('@asciidoctor/reveal.js')
asciidoctorRevealjs.register()

var options = { 
    safe: 'safe',
    backend: 'revealjs'
}

asciidoctor.convertFile('index.adoc', options)