//VARIABLES SECTION
var queryURL;
var numberOfRecordsToRetrieve=5;
var searchTerm;
var startYear;
//optional
var endYear;
//optional

//HARDCODED VARIABLES FOR SEARCH QUERY
var searchTerm = "donald trump";
var beginDate = "20120101"; //yyyy/mm/dd
var endDate = "20120101"; //yyyy/mm/dd
var APIkey = "25tUIdgZ3wnJkAJZSEnIN6hzCrwmdUNE";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIkey +
"&q=" + searchTerm + "&begin_date=" + beginDate + "&end_date=" + endDate;


//FUNCTIONS SECTION

// submitButton.onClick(submit ajax);

// clearButton.onClick(reset form);

// pull values to variables from form (preventDefault);

// ajax(get method)-query;

// updateDisplay(responseFromAjax)
function updateDisplay(response, numberOfRecordsToRetrieve){

for (var i = 0; i < numberOfRecordsToRetrieve; i++){
    var newArticle = $('<div>').addClass('clickOpenArticle');
    var newNumber = $('<span>');
    newNumber.text(i+1);
    var newTitle = $('<div>');
    newTitle.text(response[i].headline.main);
    var newAuthor = $('<div>');
    newAuthor.text(response[i].byline.original);
    var newLink = $('<a>');
    newLink.attr('href',response[i].web_url);

    newArticle.append(newNumber);
    newArticle.append(newTitle);
    newArticle.append(newAuthor);
    newArticle.append(newLink);
    $('#parentDiv').append(newArticle);
};
}

function getArticles(){
    $.ajax({
    url:queryURL,
    method: "GET"
    }).then(function(response) {
    var results = response.response.docs
    updateDisplay(results, numberOfRecordsToRetrieve);
    })
};


// PROGRAM SECTION

//for adding event listener to loaded html element
$(document).ready(function(){
getArticles();

});