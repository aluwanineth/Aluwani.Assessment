var objectTypeCssSelector = '#dropDownObject';
var objectTypeDefaultText = 'Please select ......';

var objectType = [
    {
        "value": 1,
        "text": "XML"
    },
    {
        "value": 2,
        "text": "JSON"
    }
];


$().ready(function () {

    // Set default text
   // $(objectTypeCssSelector).append($('<option>').text(objectTypeDefaultText).attr('value', -1));

    // Populate province select
    $.each(objectType, function (number, obj) {
        $(objectTypeCssSelector).append($('<option>').text(obj.text).attr('value', obj.value));
        $(objectTypeCssSelector).selectpicker('refresh');
    });


});