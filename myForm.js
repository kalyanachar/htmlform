function getReportType(sel)
{
	this.reportType =sel.value;
	$('#lstReport').html('');
    if(this.reportType ==1) {
    	$('#lstReport').append('<option value="10">School Report Name 10</option>');
        $('#lstReport').append('<option value="11">School Report Name 11</option>');
        $('#lstReport').append('<option value="12">School Report Name 12</option>');
    }
    else if(this.reportType ==2) {
    	$('#lstReport').append('<option value="20">Enrolment Report Name 20</option>');
        $('#lstReport').append('<option value="21">Enrolment Report Name 21</option>');
        $('#lstReport').append('<option value="22">Enrolment Report Name 22</option>');
    }
    else {
    	$('#lstReport').append('<option value="1">Comparative Report Name 1</option>');
        $('#lstReport').append('<option value="2">Comparative Report Name 2</option>');
        $('#lstReport').append('<option value="3">Comparative Report Name 3</option>');
    }
}


function getReportList(sel) {
  this.reportList =sel.value;
  if(this.reportList ==2) {
  	  $("#ageGroup").hide();
  	   $("#ddlGender").removeAttr("disabled");
  }
  else if(this.reportList ==10) {
  	 $("#ageGroup").show();
  	 $("#ddlGender").removeAttr("disabled");
  }
  else {
  	  $("#ageGroup").show();
  	  $("#ddlGender").prop('disabled', true);
  }

};