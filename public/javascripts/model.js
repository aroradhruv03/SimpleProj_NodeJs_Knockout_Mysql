$(document).ready(function() {

    var d = new Date();
    var n = d.getTime();

    alert(n);

    alert("hello");


    //var viewModel =
    //{ firstName: ko.observable("Bert")
    //    , lastName: ko.observable("Laa")
    //    , capitalizeLastName: function() {
    //    var currentVal = this.lastName();        // Read the current value
    //    this.lastName(currentVal.toUpperCase()); }
    //};
    //
    //viewModel.fullName = ko.dependentObservable(function() {
    //    return this.firstName() + " " + this.lastName();
    //}, viewModel);


    //function TaskListViewModel() {
        // Data
        //var self = this;
        //self.firstName= ko.observable("Dhr");
        //self.lastName= ko.observable("Aro");

        var viewModel = {
            firstName: ko.observable("Dhr"),
            lastName: ko.observable("Aror")
        };

        //this.fullName = ko.dependentObservable(function() {
        //    return this.firstName() + " " + this.lastName();
        //});

        viewModel.fullName = ko.dependentObservable(function() {
            return this.firstName() + " " + this.lastName();
        }, viewModel);
        //
        //this.save = function() {
        //    alert("save");
        //
        //};


    viewModel.jsonData = ko.toJSON(viewModel);


        alert(viewModel.jsonData);

    //viewModel.save = function() {
    //    alert("save");
    //    $.ajax("/tasks", {
    //        data: ko.toJSON({ firstName: viewModel.firstName }),
    //        type: "post", contentType: "application/json",
    //        success: function(result) { alert(result) },
    //        error: function(result) { alert(result) }
    //    });
    //};


    //}

    ko.applyBindings(viewModel);
    //ko.applyBindings(new TaskListViewModel());

        // Activates knockout.js
    //ko.applyBindings(viewModel);

    //$.getJSON("/tasks", function(allData) {
    //    var parsed = JSON.parse(allData);
    //    viewModel.firstName(parsed.title);
    //
    //});
});