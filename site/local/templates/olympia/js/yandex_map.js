ymaps.ready(init);
 
function init(){     
 
    var myMap;
 
    myMap = new ymaps.Map("map", {
        center: [57.976636998922174,56.187308122684485],
        zoom: 17,
        controls: []
    });
 
    myMap.behaviors.disable('scrollZoom');
 
    myMap.controls.add("zoomControl", {
        position: {top: 15, left: 15}
    });
 
    var myPlacemark = new ymaps.Placemark([57.9764369989,56.1872191226] , {},
        { iconLayout: 'default#image',
          iconImageHref: 'static/img/marker.svg',
          iconImageSize: [27, 38],
          iconImageOffset: [-20, -47] });     
 
    myMap.geoObjects.add(myPlacemark);
 
}