angular.module('app').filter('filtroLingua', function () {

      return function(lista,lingua){
         if (lingua=="Tutte") {
           return lista;
         }else {
           return lista.filter(function(el){
             return el.lingua == lingua;
           });
         };
      };

})
.filter('filtroSesso', function () {

      return function(lista,sesso){
         if (sesso=="Entrambi") {
           return lista;
         }else {
           return lista.filter(function(el){
             return el.sesso == sesso;
           });
         };
      };

});
