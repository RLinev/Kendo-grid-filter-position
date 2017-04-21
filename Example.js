$.fn.arrangeGridFilters = function () {
    var that = this;
    var header = this.data('kendoGrid').thead[0];
    var filter = $(header).children('.k-filter-row');
    if (filter.children().length > 0) {
        $(".k-filter-row .k-dropdown-operator").css("right", '0px');

        var rows = filter.children();
        for (var i = 0; i < rows.length; i++) {
            var items = rows[i].children;
            if (items.length > 0) {
                $(items[0].children).attr("style", "padding-right:35px");
            }
        }
    }
    return this;
}
