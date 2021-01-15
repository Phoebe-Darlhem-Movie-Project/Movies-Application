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

})