/**
 * Animated attributes
 */
var rectPath = bonsai.Path.rect(150, 150, 150, 150).attr({fillColor: 'red',strokeColor: 'green', strokeWidth: 5,});

stage.addChild(rectPath);

rectPath.animate('1s', { x: 300 });
