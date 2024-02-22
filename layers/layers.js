var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Land_Capability_Map_1 = new ol.format.GeoJSON();
var features_Land_Capability_Map_1 = format_Land_Capability_Map_1.readFeatures(json_Land_Capability_Map_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Land_Capability_Map_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Land_Capability_Map_1.addFeatures(features_Land_Capability_Map_1);
var lyr_Land_Capability_Map_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Land_Capability_Map_1, 
                style: style_Land_Capability_Map_1,
                popuplayertitle: "Land_Capability_Map",
                interactive: true,
    title: 'Land_Capability_Map<br />\
    <img src="styles/legend/Land_Capability_Map_1_0.png" /> HIGH SUITABLE<br />\
    <img src="styles/legend/Land_Capability_Map_1_1.png" /> LOW SUITABLE<br />\
    <img src="styles/legend/Land_Capability_Map_1_2.png" /> MODERATE SUITABLE<br />\
    <img src="styles/legend/Land_Capability_Map_1_3.png" /> VERY HIGH SUITABLE<br />\
    <img src="styles/legend/Land_Capability_Map_1_4.png" /> VERY LOW SUITABLE<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Land_Capability_Map_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Land_Capability_Map_1];
lyr_Land_Capability_Map_1.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Land_Cap': 'Land_Capability ', });
lyr_Land_Capability_Map_1.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Land_Cap': 'TextEdit', });
lyr_Land_Capability_Map_1.set('fieldLabels', {'Id': 'hidden field', 'gridcode': 'hidden field', 'Land_Cap': 'inline label - always visible', });
lyr_Land_Capability_Map_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});