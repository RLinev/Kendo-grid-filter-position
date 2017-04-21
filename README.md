# Kendo-grid-filter-position
Re-align the default kendo column grid removing the second "X"

Define the following prop to your grid:
  - .Filterable(z => z.Mode(GridFilterMode.Row).Extra(false))

For every grids column that you want to enable the filter add the following code to enable/disable the functionality:
  - .Filterable(z => z.Cell(cell => cell.SuggestionOperator(FilterType.Contains)) (Setting the default filtering operator to     contains)
  
  - .Filterable(false)
  
  
Make you grid prity with the following code:

$(document).ready(function(){
   $('#YourGridNameHere').arrangeGridFilters()
});
