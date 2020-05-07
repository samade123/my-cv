
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
window.Vue = require('vue');

Vue.use(Vuesax, {
  // options here
})

//pull in all vue components
require('./components');

var architect = require('projecthub').Tools.Architect;
window.Architect = new architect();
var parse = require('url-parse');

if(!window.Site){
	console.warn("Site Object Not Detected! - Injecting test object")
	window.Site = require("./testing/site");
}

window.Images = require("./testing/images")

if(Site.architect){
    // console.log("Architect", JSON.stringify(Site.architect));
    Architect.buildStructure(Site.architect);
}

//instantiate page vue
var app = new Vue({
    el: 'main',
    data:{
        site:window.Site,
        lang:window.Site.lang ? window.Site.lang.website : {},
        architect: Site.architect ? Architect.getStartingBlock() : {},
    },
    methods:{
    },
    mounted(){
    }
});
