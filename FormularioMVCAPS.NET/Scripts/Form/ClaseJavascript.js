
//$(".alert").hide();


$("#btn-SendForm").click(function () {
    $(".alert-success").hide();
    if (validateForm()) {
        $(".alert-warning").hide();
        $.post("http://localhost:51268/Home/SavePerson", FillObjectPerson()).done(
            function (response) {
                $.each(JSON.parse(response), function (index, value) {
                    gridOptions.rowData.push({
                        "Nombre": value.Name, "Apellido": value.LastName, "NoDocumento": value.Document, "FechaNacimiento": value.BirthDate, "E-mail": value.Email, "Profecion": value.Profetion
                    });
                });
                $(".alert-success").show();
                clearData();
                gridOptions.api.setRowData(gridOptions.rowData);
            }
        );
    }
    else {
        $(".alert-warng").show();
    }

});

function validateForm() {
    if ($("#txt-name").val().length > undefined && $("#txt-lastName").val().length > 0 && $("#txt-DocumentNumber").val().length > 0 && $("#txt-Email").val().length > 0
        && $("#txt-Profetion").val().length > 0 && $("#txt-BirthDate").val().length > 0 && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($("#txt-Email").val())
        && $("#txt-DocumentNum").val().length >= 9) {
        return true;
    }
    return false;
}

function clearData() {
    $("#txt-name").val("");
    $("#txt-lastName").val("");
    $("#txt-DocumentNumber").val("");
    $("#txt-Email").val("");
    $("#txt-Profetion").val("");
    $("#txt-BirthDate").val("");
}

function FillObjectPerson() {
    return {
        Na: $("#txt-name").val(),
        Last: $("#txt-lastName").val(),
        Documnt: $("#txt-DocumentNumber").val(),
        Emal: $("#txt-Email").val(),
        Pron: $("#txt-Profetion").val(),
        BirthD: $("#txt-BirthDate").val()
    };
}

// specify the columns
var columnDefs = [
    { headerName: "Nombre", field: "Nombre" },
    { headerName: "Apellido", field: "Apellido" },
    { headerName: "No Documento", field: "NoDocumento" },
    { headerName: "Fecha Nacimiento", field: "FechaNacimiento" },
    { headerName: "E-mail", field: "E-mail" },
    { headerName: "Profeción", field: "Profecion" }

];

// specify the data
var rowData = [];

// let the grid know which columns and what data to use
var gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData
};

// lookup the container we want the Grid to use
var eGridDiv = document.querySelector('#myGrid');

// create the grid passing in the div to use together with the columns & data we want to use
new agGrid.Grid(eGridDiv, gridOptions);