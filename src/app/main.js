define(['jquery', 'moment', 'helpers/projectInfo', 'crossroads', 'hasher', 'text!templates/doublebutton.html', 'json!helpers/projectInfo.json'],
function($, moment, projectInfo, crossroads, hasher, doublebutton, pi) {

    $('#root').text(pi.name + ' ' + moment().format('DD/MM/YYYY'));

    $(doublebutton).insertAfter("#root");

    function about() {
        console.log('about');
    }
    function home() {
        console.log('home');
    }

    crossroads.addRoute('/about', about);
    crossroads.addRoute('/home', home);
    //setup hasher
    function parseHash(newHash, oldHash){
      crossroads.parse(newHash);
    }
    hasher.initialized.add(parseHash); //parse initial hash
    hasher.changed.add(parseHash); //parse hash changes
    hasher.init(); //start listening for history change

 });

/*
<div id="btnTest">
    <div class="ui buttons">
      <button class="ui button">Cancel</button>
      <div class="or"></div>
      <button class="ui positive button">Finish</button>
    </div>
</div>
*/
