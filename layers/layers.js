var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_bhrnkvshpfile_1 = new ol.format.GeoJSON();
var features_bhrnkvshpfile_1 = format_bhrnkvshpfile_1.readFeatures(json_bhrnkvshpfile_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bhrnkvshpfile_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bhrnkvshpfile_1.addFeatures(features_bhrnkvshpfile_1);
var lyr_bhrnkvshpfile_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bhrnkvshpfile_1, 
                style: style_bhrnkvshpfile_1,
                popuplayertitle: 'bhrnkvshpfile',
                interactive: true,
                title: '<img src="styles/legend/bhrnkvshpfile_1.png" /> bhrnkvshpfile'
            });
var format_geologybharanickavu_2 = new ol.format.GeoJSON();
var features_geologybharanickavu_2 = format_geologybharanickavu_2.readFeatures(json_geologybharanickavu_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geologybharanickavu_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geologybharanickavu_2.addFeatures(features_geologybharanickavu_2);
var lyr_geologybharanickavu_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geologybharanickavu_2, 
                style: style_geologybharanickavu_2,
                popuplayertitle: 'geologybharanickavu',
                interactive: true,
                title: '<img src="styles/legend/geologybharanickavu_2.png" /> geologybharanickavu'
            });
var format_roadbharani_3 = new ol.format.GeoJSON();
var features_roadbharani_3 = format_roadbharani_3.readFeatures(json_roadbharani_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roadbharani_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roadbharani_3.addFeatures(features_roadbharani_3);
var lyr_roadbharani_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roadbharani_3, 
                style: style_roadbharani_3,
                popuplayertitle: 'roadbharani',
                interactive: true,
                title: '<img src="styles/legend/roadbharani_3.png" /> roadbharani'
            });
var format_geomorphologybharanickavu_4 = new ol.format.GeoJSON();
var features_geomorphologybharanickavu_4 = format_geomorphologybharanickavu_4.readFeatures(json_geomorphologybharanickavu_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geomorphologybharanickavu_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geomorphologybharanickavu_4.addFeatures(features_geomorphologybharanickavu_4);
var lyr_geomorphologybharanickavu_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geomorphologybharanickavu_4, 
                style: style_geomorphologybharanickavu_4,
                popuplayertitle: 'geomorphologybharanickavu',
                interactive: true,
    title: 'geomorphologybharanickavu<br />\
    <img src="styles/legend/geomorphologybharanickavu_4_0.png" /> Coastal Plain<br />\
    <img src="styles/legend/geomorphologybharanickavu_4_1.png" /> Lower Plateau (Lateritic) - Dissected<br />\
    <img src="styles/legend/geomorphologybharanickavu_4_2.png" /> Mud flat(Coastal Plain)<br />\
    <img src="styles/legend/geomorphologybharanickavu_4_3.png" /> Swale(Coastal Plain)<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_bhrnkvshpfile_1.setVisible(true);lyr_geologybharanickavu_2.setVisible(true);lyr_roadbharani_3.setVisible(true);lyr_geomorphologybharanickavu_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_bhrnkvshpfile_1,lyr_geologybharanickavu_2,lyr_roadbharani_3,lyr_geomorphologybharanickavu_4];
lyr_bhrnkvshpfile_1.set('fieldAliases', {'id': 'id', 'polygon': 'polygon', });
lyr_geologybharanickavu_2.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_roadbharani_3.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_geomorphologybharanickavu_4.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_bhrnkvshpfile_1.set('fieldImages', {'id': '', 'polygon': '', });
lyr_geologybharanickavu_2.set('fieldImages', {'ROCK_GROUP': '', 'NAME': '', });
lyr_roadbharani_3.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_geomorphologybharanickavu_4.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_bhrnkvshpfile_1.set('fieldLabels', {'id': 'no label', 'polygon': 'no label', });
lyr_geologybharanickavu_2.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_roadbharani_3.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_geomorphologybharanickavu_4.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_geomorphologybharanickavu_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});