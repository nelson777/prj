require(['jquery', 'moment', 'helpers/projectInfo', 'crossroads', 'hasher', 'signals'],
function($, moment, projectInfo, crossroads, hasher, signals) {

    $('#root').text(projectInfo.name + ' ' + moment().format('DD/MM/YYYY'));

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
