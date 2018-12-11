import $ from 'jquery';
import {parseCode} from './code-analyzer';


$(document).ready(function () {
    $('#codeSubmissionButton').click(() => {
        let codeToParse = $('#codePlaceholder').val();
        let params_string= $('#params_place').val();
        let parsedCode = parseCode(codeToParse,params_string);
        document.getElementById('my_table').innerHTML=parsedCode;
        //document.getElementById('for_test').innerText=JSON.stringify(parsedCode,null,2);
        //document.getElementById('for_test').innerText=parsedCode;
    });
});



