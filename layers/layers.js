var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Area_1 = new ol.format.GeoJSON();
var features_Area_1 = format_Area_1.readFeatures(json_Area_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_1.addFeatures(features_Area_1);
var lyr_Area_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Area_1, 
                style: style_Area_1,
                popuplayertitle: 'Area',
                interactive: false,
    title: 'Area<br />\
    <img src="styles/legend/Area_1_0.png" /> Mer<br />\
    <img src="styles/legend/Area_1_1.png" /> Terre<br />' });
var format_Building_2 = new ol.format.GeoJSON();
var features_Building_2 = format_Building_2.readFeatures(json_Building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building_2.addFeatures(features_Building_2);
var lyr_Building_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building_2, 
                style: style_Building_2,
                popuplayertitle: 'Building',
                interactive: false,
                title: '<img src="styles/legend/Building_2.png" /> Building'
            });
var format_Roadssite_3 = new ol.format.GeoJSON();
var features_Roadssite_3 = format_Roadssite_3.readFeatures(json_Roadssite_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roadssite_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roadssite_3.addFeatures(features_Roadssite_3);
var lyr_Roadssite_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roadssite_3, 
                style: style_Roadssite_3,
                popuplayertitle: 'Roads site',
                interactive: false,
                title: '<img src="styles/legend/Roadssite_3.png" /> Roads site'
            });
var format_LCSFacilities_4 = new ol.format.GeoJSON();
var features_LCSFacilities_4 = format_LCSFacilities_4.readFeatures(json_LCSFacilities_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LCSFacilities_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LCSFacilities_4.addFeatures(features_LCSFacilities_4);
var lyr_LCSFacilities_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LCSFacilities_4, 
                style: style_LCSFacilities_4,
                popuplayertitle: 'LCS Facilities',
                interactive: true,
                title: '<img src="styles/legend/LCSFacilities_4.png" /> LCS Facilities'
            });
var format_PaintCabin_5 = new ol.format.GeoJSON();
var features_PaintCabin_5 = format_PaintCabin_5.readFeatures(json_PaintCabin_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PaintCabin_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaintCabin_5.addFeatures(features_PaintCabin_5);
var lyr_PaintCabin_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaintCabin_5, 
                style: style_PaintCabin_5,
                popuplayertitle: 'Paint Cabin',
                interactive: true,
                title: '<img src="styles/legend/PaintCabin_5.png" /> Paint Cabin'
            });
var format_Pompier_6 = new ol.format.GeoJSON();
var features_Pompier_6 = format_Pompier_6.readFeatures(json_Pompier_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pompier_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pompier_6.addFeatures(features_Pompier_6);
var lyr_Pompier_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pompier_6, 
                style: style_Pompier_6,
                popuplayertitle: 'Pompier',
                interactive: true,
                title: '<img src="styles/legend/Pompier_6.png" /> Pompier'
            });
var format_Nef_7 = new ol.format.GeoJSON();
var features_Nef_7 = format_Nef_7.readFeatures(json_Nef_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nef_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nef_7.addFeatures(features_Nef_7);
var lyr_Nef_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nef_7, 
                style: style_Nef_7,
                popuplayertitle: 'Nef',
                interactive: true,
                title: '<img src="styles/legend/Nef_7.png" /> Nef'
            });
var format_Zonedetravailterre_8 = new ol.format.GeoJSON();
var features_Zonedetravailterre_8 = format_Zonedetravailterre_8.readFeatures(json_Zonedetravailterre_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonedetravailterre_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonedetravailterre_8.addFeatures(features_Zonedetravailterre_8);
var lyr_Zonedetravailterre_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonedetravailterre_8, 
                style: style_Zonedetravailterre_8,
                popuplayertitle: 'Zone de travail à terre',
                interactive: true,
                title: '<img src="styles/legend/Zonedetravailterre_8.png" /> Zone de travail à terre'
            });
var format_Nomdezones_9 = new ol.format.GeoJSON();
var features_Nomdezones_9 = format_Nomdezones_9.readFeatures(json_Nomdezones_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nomdezones_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nomdezones_9.addFeatures(features_Nomdezones_9);
var lyr_Nomdezones_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nomdezones_9, 
                style: style_Nomdezones_9,
                popuplayertitle: 'Nom de zones',
                interactive: true,
                title: '<img src="styles/legend/Nomdezones_9.png" /> Nom de zones'
            });
var format_Zonedetravailflot_10 = new ol.format.GeoJSON();
var features_Zonedetravailflot_10 = format_Zonedetravailflot_10.readFeatures(json_Zonedetravailflot_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonedetravailflot_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonedetravailflot_10.addFeatures(features_Zonedetravailflot_10);
var lyr_Zonedetravailflot_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonedetravailflot_10, 
                style: style_Zonedetravailflot_10,
                popuplayertitle: 'Zone de travail à flot',
                interactive: true,
    title: 'Zone de travail à flot<br />\
    <img src="styles/legend/Zonedetravailflot_10_0.png" /> MarinaVieux Port<br />\
    <img src="styles/legend/Zonedetravailflot_10_1.png" /> Quais industriels - Port de La Ciotat<br />' });
var format_Liftingequipment_11 = new ol.format.GeoJSON();
var features_Liftingequipment_11 = format_Liftingequipment_11.readFeatures(json_Liftingequipment_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Liftingequipment_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Liftingequipment_11.addFeatures(features_Liftingequipment_11);
var lyr_Liftingequipment_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Liftingequipment_11, 
                style: style_Liftingequipment_11,
                popuplayertitle: 'Lifting equipment',
                interactive: true,
                title: '<img src="styles/legend/Liftingequipment_11.png" /> Lifting equipment'
            });
var group_ZonesdeTravail = new ol.layer.Group({
                                layers: [lyr_LCSFacilities_4,lyr_PaintCabin_5,lyr_Pompier_6,lyr_Nef_7,lyr_Zonedetravailterre_8,lyr_Nomdezones_9,lyr_Zonedetravailflot_10,lyr_Liftingequipment_11,],
                                fold: 'open',
                                title: 'Zones de Travail'});
var group_0Fonddecarte = new ol.layer.Group({
                                layers: [lyr_ESRISatellite_0,lyr_Area_1,lyr_Building_2,lyr_Roadssite_3,],
                                fold: 'close',
                                title: '0- Fond de carte'});

lyr_ESRISatellite_0.setVisible(true);lyr_Area_1.setVisible(true);lyr_Building_2.setVisible(true);lyr_Roadssite_3.setVisible(true);lyr_LCSFacilities_4.setVisible(true);lyr_PaintCabin_5.setVisible(true);lyr_Pompier_6.setVisible(true);lyr_Nef_7.setVisible(true);lyr_Zonedetravailterre_8.setVisible(true);lyr_Nomdezones_9.setVisible(true);lyr_Zonedetravailflot_10.setVisible(true);lyr_Liftingequipment_11.setVisible(true);
var layersList = [group_0Fonddecarte,group_ZonesdeTravail];
lyr_Area_1.set('fieldAliases', {'id': 'id', 'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', });
lyr_Building_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_Roadssite_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_LCSFacilities_4.set('fieldAliases', {'Zone': 'Zone', });
lyr_PaintCabin_5.set('fieldAliases', {'Zone': 'Zone', });
lyr_Pompier_6.set('fieldAliases', {'Text': 'Text', 'Url': 'Url', });
lyr_Nef_7.set('fieldAliases', {'Zone': 'Zone', });
lyr_Zonedetravailterre_8.set('fieldAliases', {'Url': 'Url', 'Zone': 'Zone', });
lyr_Nomdezones_9.set('fieldAliases', {'Url': 'Url', 'Zone': 'Zone', });
lyr_Zonedetravailflot_10.set('fieldAliases', {'id': 'id', 'Zone': 'Zone', 'Url': 'Url', });
lyr_Liftingequipment_11.set('fieldAliases', {'Text': 'Text', });
lyr_Area_1.set('fieldImages', {'id': 'TextEdit', 'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', });
lyr_Building_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Roadssite_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_LCSFacilities_4.set('fieldImages', {'Zone': 'TextEdit', });
lyr_PaintCabin_5.set('fieldImages', {'Zone': 'TextEdit', });
lyr_Pompier_6.set('fieldImages', {'Text': 'TextEdit', 'Url': 'TextEdit', });
lyr_Nef_7.set('fieldImages', {'Zone': 'TextEdit', });
lyr_Zonedetravailterre_8.set('fieldImages', {'Url': 'TextEdit', 'Zone': 'TextEdit', });
lyr_Nomdezones_9.set('fieldImages', {'Url': 'TextEdit', 'Zone': 'TextEdit', });
lyr_Zonedetravailflot_10.set('fieldImages', {'id': 'TextEdit', 'Zone': 'TextEdit', 'Url': 'TextEdit', });
lyr_Liftingequipment_11.set('fieldImages', {'Text': 'TextEdit', });
lyr_Area_1.set('fieldLabels', {'id': 'no label', 'insee': 'no label', 'nom': 'no label', 'wikipedia': 'no label', 'surf_ha': 'no label', });
lyr_Building_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_Roadssite_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_LCSFacilities_4.set('fieldLabels', {'Zone': 'no label', });
lyr_PaintCabin_5.set('fieldLabels', {'Zone': 'no label', });
lyr_Pompier_6.set('fieldLabels', {'Text': 'no label', 'Url': 'no label', });
lyr_Nef_7.set('fieldLabels', {'Zone': 'no label', });
lyr_Zonedetravailterre_8.set('fieldLabels', {'Url': 'no label', 'Zone': 'no label', });
lyr_Nomdezones_9.set('fieldLabels', {'Url': 'no label', 'Zone': 'no label', });
lyr_Zonedetravailflot_10.set('fieldLabels', {'id': 'no label', 'Zone': 'no label', 'Url': 'no label', });
lyr_Liftingequipment_11.set('fieldLabels', {'Text': 'no label', });
lyr_Liftingequipment_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});