$(document).ready(function (){
const movieAPIURL = 'https://reminiscent-marshy-galliform.glitch.me/movies';

const getMovie = function(movie){

    var headerContent =
        '<tr><th>' + 'Name' +'</th>'+
        '<th>'+ 'Year' + '</th>'+
        '<th>'+ 'Genre' + '</th>'+
        '<th>'+ 'Rating' + '</th>'+
        '<th>'+ 'Delete' + '</th> </tr>'
    $('.table').append(headerContent)

    for (var i = 0; i < movie.length; i++) {

            var content =
                  `
                  <tr><td>${movie[i].title}</td>
                  <td>${movie[i].year}</td>
                  <td>${movie[i].genre}</td>
                  <td>${movie[i].rating}</td>
                  <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td></tr>
                `;
            $('.table').append(content)

    }

    console.log(movie);
}

//get movie from JSON
fetch(movieAPIURL).then(function (response) {
   response.json().then(getMovie)
})

// shortcuts for the html input fields

// let info = {
//     addBtn:$(".btn_add"),
//     delBtn:$(".btn_del"),
//     editBtn:$(".btn_edit"),
//     addInput:$("#searchMovie_1"),
//     delInput:$("#searchMovie_2"),
//     editInput:$("#searchMovie_3"),
//     searchString: $(".userInput").val()
// }



// user input events

// info.searchString.keypress(function(e){
// 	console.log(e);
// 	if(e.keyCode == 13) {
// 		info.addBtn.click();
// 	}
// })

//Get Movie from user

//     // Movie Class: Represents a Movie
//     class Movie {
//         constructor(name, year, genre, rating) {
//             this.name = name;
//             this.year = year;
//             this.genre = genre;
//             this.rating = rating;
//         }
//     }
//
//
//
// info.addBtn.click(function(){
//
// console.log("Am working");
//
//
//
//
// })
//
//  const movieObj = {
//     "title": "2023 Reloaded",
//      "year": "2021",
//      "genre": "action",
//      "rating": "5",
//  };
//     console.log(movieObj);
//
//
//     const updateBooks = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(movieObj),
//     };
//
//     fetch(movieAPIURL , updateBooks).then(function (response){
//     console.log(response);
// })


//ADDING MOVIE

    $(".btn").click(function(e) {
        e.preventDefault()

        var movieData = {};
        var formData = $(".movie").serializeArray();
        // console.log(formData);

        $.each(formData, function() {
            if (movieData[this.name]) {
                if (!movieData[this.name].push) {
                    movieData[this.name] = [movieData[this.name]];
                }
                movieData[this.name].push(this.value || '');
            } else {
                movieData[this.name] = this.value || '';
            }

        });
        console.log(movieData);

        const updateMoviesToDB = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(movieData),
        };

            fetch(movieAPIURL , updateMoviesToDB).then(function (response) {
                console.log(response);
            })

    })

//DELETING MOVIE
    $(".delete").click(function(e) {
        e.preventDefault()

    })
})