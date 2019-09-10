function requestSelect(formNode) {
    
    // Find the contact form selection
    var myselect = document.getElementById("requestType").value;
    // Add relevant fields for reservation
    if (myselect == "req-reserve") {
        var reserveSubQuestions = document.createElement('div');
        var reserveSizeOfParty = document.createEleemnt('div');
        var reserveDay = document.createEleemnt('div');
        var reserveTime = document.createEleemnt('div');

        newRow.classList.add('row form-group justify-content-left');
        var selectHTML = "";
        selectHTML = '<select class="custom-select form-control" id="second-layer" required>'
        selectHTML += '<option value="" selected></option>'
        selectHTML += '<option value="reserve-venue">Reserve Entire Venue</option>'
        selectHTML += '<option value="reserve-table">Reserve Table(s)</option></select>'
        newRow.innerHTML = selectHTML;  
        document.getElementById(formNode).appendChild(newRow);
    }
    if (myselect != "req-reserve") {
        var elem = document.getElementById('second-layer');
        elem.parentNode.removeChild(elem);
        return false;
    }
}