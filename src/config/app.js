 requirejs.config({
     baseUrl: 'app/',
     paths: {
         text: '../vendor/require/text',
         json: '../vendor/require/json',
         jquery: '../vendor/jquery/jquery.min',
         moment: '../vendor/moment/moment.min',
         crossroads: '../vendor/crossroads/crossroads.min',
         hasher: '../vendor/hasher/hasher.min',
         signals: '../vendor/signals/signals.min',
     }

 });

 require(['main']);
