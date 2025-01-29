var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenTopoMap_1 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_vmap_historyczna_2 = new ol.format.GeoJSON();
var features_vmap_historyczna_2 = format_vmap_historyczna_2.readFeatures(json_vmap_historyczna_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vmap_historyczna_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vmap_historyczna_2.addFeatures(features_vmap_historyczna_2);
var lyr_vmap_historyczna_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vmap_historyczna_2, 
                style: style_vmap_historyczna_2,
                popuplayertitle: 'vmap_historyczna',
                interactive: false,
    title: 'vmap_historyczna<br />\
    <img src="styles/legend/vmap_historyczna_2_0.png" /> -90 - -60<br />\
    <img src="styles/legend/vmap_historyczna_2_1.png" /> -60 - -20<br />\
    <img src="styles/legend/vmap_historyczna_2_2.png" /> -20 - 0<br />\
    <img src="styles/legend/vmap_historyczna_2_3.png" /> 0 - 20<br />\
    <img src="styles/legend/vmap_historyczna_2_4.png" /> 20 - 60<br />\
    <img src="styles/legend/vmap_historyczna_2_5.png" /> 60 - 100<br />'
        });
var format_sentinel_vmap_3 = new ol.format.GeoJSON();
var features_sentinel_vmap_3 = format_sentinel_vmap_3.readFeatures(json_sentinel_vmap_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sentinel_vmap_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sentinel_vmap_3.addFeatures(features_sentinel_vmap_3);
var lyr_sentinel_vmap_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sentinel_vmap_3, 
                style: style_sentinel_vmap_3,
                popuplayertitle: 'sentinel_vmap',
                interactive: false,
    title: 'sentinel_vmap<br />\
    <img src="styles/legend/sentinel_vmap_3_0.png" /> -84 - -60<br />\
    <img src="styles/legend/sentinel_vmap_3_1.png" /> -60 - -20<br />\
    <img src="styles/legend/sentinel_vmap_3_2.png" /> -20 - 0<br />\
    <img src="styles/legend/sentinel_vmap_3_3.png" /> 0 - 20<br />\
    <img src="styles/legend/sentinel_vmap_3_4.png" /> 20 - 35<br />'
        });
var format_union_4 = new ol.format.GeoJSON();
var features_union_4 = format_union_4.readFeatures(json_union_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_union_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_union_4.addFeatures(features_union_4);
var lyr_union_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_union_4, 
                style: style_union_4,
                popuplayertitle: 'union',
                interactive: false,
                title: '<img src="styles/legend/union_4.png" /> union'
            });
var format_intersect_5 = new ol.format.GeoJSON();
var features_intersect_5 = format_intersect_5.readFeatures(json_intersect_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_intersect_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_intersect_5.addFeatures(features_intersect_5);
var lyr_intersect_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_intersect_5, 
                style: style_intersect_5,
                popuplayertitle: 'intersect',
                interactive: false,
                title: '<img src="styles/legend/intersect_5.png" /> intersect'
            });
var format_histo_6 = new ol.format.GeoJSON();
var features_histo_6 = format_histo_6.readFeatures(json_histo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_histo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_histo_6.addFeatures(features_histo_6);
var lyr_histo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_histo_6, 
                style: style_histo_6,
                popuplayertitle: 'histo',
                interactive: false,
                title: '<img src="styles/legend/histo_6.png" /> histo'
            });
var format_vmap_7 = new ol.format.GeoJSON();
var features_vmap_7 = format_vmap_7.readFeatures(json_vmap_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vmap_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vmap_7.addFeatures(features_vmap_7);
var lyr_vmap_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vmap_7, 
                style: style_vmap_7,
                popuplayertitle: 'vmap',
                interactive: false,
                title: '<img src="styles/legend/vmap_7.png" /> vmap'
            });
var format_senti_8 = new ol.format.GeoJSON();
var features_senti_8 = format_senti_8.readFeatures(json_senti_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_senti_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_senti_8.addFeatures(features_senti_8);
var lyr_senti_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_senti_8, 
                style: style_senti_8,
                popuplayertitle: 'senti',
                interactive: false,
                title: '<img src="styles/legend/senti_8.png" /> senti'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenTopoMap_1.setVisible(true);lyr_vmap_historyczna_2.setVisible(true);lyr_sentinel_vmap_3.setVisible(true);lyr_union_4.setVisible(true);lyr_intersect_5.setVisible(true);lyr_histo_6.setVisible(true);lyr_vmap_7.setVisible(true);lyr_senti_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenTopoMap_1,lyr_vmap_historyczna_2,lyr_sentinel_vmap_3,lyr_union_4,lyr_intersect_5,lyr_histo_6,lyr_vmap_7,lyr_senti_8];
lyr_vmap_historyczna_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'procent_se': 'procent_se', 'procent_vm': 'procent_vm', 'GRID_ID': 'GRID_ID', 'historyczn': 'historyczn', 'vmap': 'vmap', 'sentinel': 'sentinel', 'procent__1': 'procent__1', 'procent__2': 'procent__2', });
lyr_sentinel_vmap_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'procent_se': 'procent_se', 'procent_vm': 'procent_vm', 'GRID_ID': 'GRID_ID', 'historyczn': 'historyczn', 'vmap': 'vmap', 'sentinel': 'sentinel', 'procent__1': 'procent__1', 'procent__2': 'procent__2', });
lyr_union_4.set('fieldAliases', {'FID_smooth': 'FID_smooth', 'Id': 'Id', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'FID_Bug194': 'FID_Bug194', 'Id_1': 'Id_1', 'Shape_Leng': 'Shape_Leng', 'FID_vmap19': 'FID_vmap19', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_12': 'ID_12', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_intersect_5.set('fieldAliases', {'FID_smooth': 'FID_smooth', 'Id': 'Id', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'FID_vmap19': 'FID_vmap19', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_1': 'ID_1', 'Shape_Leng': 'Shape_Leng', 'FID_Bug194': 'FID_Bug194', 'Id_12': 'Id_12', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_histo_6.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'wskaznik': 'wskaznik', });
lyr_vmap_7.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'wskaznik': 'wskaznik', });
lyr_senti_8.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'wskaznik': 'wskaznik', });
lyr_vmap_historyczna_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'procent_se': 'TextEdit', 'procent_vm': 'TextEdit', 'GRID_ID': 'TextEdit', 'historyczn': 'TextEdit', 'vmap': 'TextEdit', 'sentinel': 'TextEdit', 'procent__1': 'TextEdit', 'procent__2': 'TextEdit', });
lyr_sentinel_vmap_3.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'procent_se': 'TextEdit', 'procent_vm': 'TextEdit', 'GRID_ID': 'TextEdit', 'historyczn': 'TextEdit', 'vmap': 'TextEdit', 'sentinel': 'TextEdit', 'procent__1': 'TextEdit', 'procent__2': 'TextEdit', });
lyr_union_4.set('fieldImages', {'FID_smooth': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'InPoly_FID': 'TextEdit', 'FID_Bug194': 'TextEdit', 'Id_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'FID_vmap19': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_12': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_intersect_5.set('fieldImages', {'FID_smooth': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'InPoly_FID': 'TextEdit', 'FID_vmap19': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'FID_Bug194': 'TextEdit', 'Id_12': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_histo_6.set('fieldImages', {'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'wskaznik': 'TextEdit', });
lyr_vmap_7.set('fieldImages', {'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'wskaznik': 'TextEdit', });
lyr_senti_8.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'InPoly_FID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'wskaznik': 'TextEdit', });
lyr_vmap_historyczna_2.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'procent_se': 'no label', 'procent_vm': 'no label', 'GRID_ID': 'no label', 'historyczn': 'no label', 'vmap': 'no label', 'sentinel': 'no label', 'procent__1': 'no label', 'procent__2': 'no label', });
lyr_sentinel_vmap_3.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'procent_se': 'no label', 'procent_vm': 'no label', 'GRID_ID': 'no label', 'historyczn': 'no label', 'vmap': 'no label', 'sentinel': 'no label', 'procent__1': 'no label', 'procent__2': 'no label', });
lyr_union_4.set('fieldLabels', {'FID_smooth': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'InPoly_FID': 'no label', 'FID_Bug194': 'no label', 'Id_1': 'no label', 'Shape_Leng': 'no label', 'FID_vmap19': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_12': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_intersect_5.set('fieldLabels', {'FID_smooth': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'InPoly_FID': 'no label', 'FID_vmap19': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_1': 'no label', 'Shape_Leng': 'no label', 'FID_Bug194': 'no label', 'Id_12': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_histo_6.set('fieldLabels', {'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'wskaznik': 'no label', });
lyr_vmap_7.set('fieldLabels', {'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'wskaznik': 'no label', });
lyr_senti_8.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'InPoly_FID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'wskaznik': 'no label', });
lyr_senti_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});