var size = 0;
var placement = 'point';
function categories_Zonedetravailflot_10(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'MarinaVieux Port':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(30,85,203,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7.827999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Quais industriels - Port de La Ciotat':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(47,108,158,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7.827999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Zonedetravailflot_10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Zone");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Zonedetravailflot_10(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
