$(document).ready(function (){
const movieAPIURL = 'https://reminiscent-marshy-galliform.glitch.me/movies';

const getMovie = function(movie){

    var headerContent =
        '<tr><th>' + 'Name' +'</th>'+
        '<th>'+ 'Year' + '</th>'+
        '<th>'+ 'Genre' + '</th>'+
        '<th>'+ 'Rating' + '</th> </tr>'
    $('#movieList').append(headerContent)

    for (var i = 0; i < movie.length; i++) {

            var content =
               "<tr> <td>" +  movie[i].title +  "</td> " +
                "<td>" +  movie[i].year +  "</td>" +
                "<td>" +  movie[i].genre +  "</td>" +
                "<td>" +  movie[i].rating +  "</td> </tr>"

            $('#movieList').append(content)


        }

    console.log(movie);
}


fetch(movieAPIURL).then(function (response) {
   response.json().then(getMovie)
})

// shortcuts for the html input fields

let info = {
    addBtn:$(".btn_add"), 
    delBtn:$(".btn_del"), 
    editBtn:$(".btn_edit"), 
    addInput:$("#searchMovie_1"), 
    delInput:$("#searchMovie_2"), 
    editInput:$("#searchMovie_3"),
    searchString: $(".userInput").val()
    
}



// user input events

info.searchString.keypress(function(e){
	console.log(e);
	if(e.keyCode == 13) {
		info.addBtn.click();
	}
})



info.addBtn.click(function(){

console.log("Am working");








})















})