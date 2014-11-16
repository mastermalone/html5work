/**
 * @author mastermalone
 */
var SiteUtils = {
	text: "Test Value",
	init: function(textValue){
		if(!textValue){
			textValue = SiteUtils.text;
		}
		console.log("Value of text = ", textValue);
	}
};
SiteUtils.init();
