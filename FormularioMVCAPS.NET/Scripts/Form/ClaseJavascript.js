
$(".alert").hide();


$( "#btn-SendForm" ).click(function() {
    $.post("http://localhost:51268/Home/SavePerson", FillObjectPerson()).done(
        function (response) { 
            $.each(JSON.parse(response), function( index, value ) {
               gridOptions.rowData.push({
                   "Nombre": value.Name, "Apellido": value.LastName, "NoDocumento": value.Document, "FechaNacimiento": value.BirthDate, "E-mail": value.Email, "Profecion":value.Profetion
                  });
            });  
            $(".alert-success").show();

            gridOptions.api.setRowData(gridOptions.rowData);
        }
    );
});



function FillObjectPerson() {
    return {
        Name: $("#txt-name").val(),
        LastName: $("#txt-lastName").val(),
        Document: $("#txt-DocumentNumber").val(),
        Email: $("#txt-Email").val(),
        Profetion: $("#txt-Profetion").val(),
        BirthDate: $("#txt-BirthDate").val()
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