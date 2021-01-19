$(document).ready(function (){
const movieAPIURL = 'https://reminiscent-marshy-galliform.glitch.me/movies';

const getMovie = function(movie){

    var headerContent =
        '<tr><th>' + 'Poster' +'</th>'+
        '<th>' + 'Name' +'</th>'+
        '<th>'+ 'Year' + '</th>'+
        '<th>'+ 'Genre' + '</th>'+
        '<th>'+ 'Rating' + '</th>'+
        '<th>'+ 'Delete' + '</th> </tr>'
    $('.table').append(headerContent)

    for (var i = 0; i < movie.length; i++) {

        const row = document.createElement("tr");
        row.setAttribute("id", `movie-row-${movie.id}`);
            var content =
                  `
                  <tr><a href="${movie[i].poster}"><td><img class="image img-thumbnail" src="${movie[i].poster}" alt=""></td></a>
                  <td>${movie[i].title}</td>
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

    //practice search movie
    // fetch(movieAPIURL).then(response => {
    //     return response.json();
    // }).then(data => {
    //     // Work with JSON data here
    //     console.log(data[1].title);
    //     let movieTitle = document.getElementById("title").value;
    //     for (var i = 0; i < data.length; i++) {
    //         console.log(data[i].id);
    //         if (movieTitle == data[i].title){
    //
    //         }else{
    //
    //         }
    //     }
    //
    // }).catch(err => {
    //     // Do something for an error here
    // });
    //OMDB API Call
    $('#movie-form').submit(function (event){
        event.preventDefault()

        let movie =$('#title').val()
        let url = 'http://www.omdbapi.com/?apikey='+omdbAPI;

        $.ajax({
            method: 'GET',
            url: url+'&t='+movie,
            success:function (data){
                console.log(data);
                var movieData = {
                    'poster':`${data.Poster}`,
                    'title':`${ data.Title}`,
                    'year': `${ data.Released}`,
                    'genre': `${ data.Genre}`,
                    'rating': `${ data.imdbRating}`
                };
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
                console.log(data);
            }
        })


    })
// shortcuts for the html input fields

let info = {
    addBtn:$(".btn_add"),
    delBtn:$(".btn_del"),
    editBtn:$(".btn_edit"),
    addInput:$("#searchMovie_1"),
    delInput:$("#searchMovie_2"),
    editInput:$("#searchMovie_3")
}

let uiValue = {
    name:$("#name").val(),
    year:$("#year").val(),
    genre:$("#genre").val(),
    rating:$("#rating").val()
}

console.log(`Name:${uiValue.name}<br>Year:${uiValue.year}<br>Genre:${uiValue.genre}<br>Rating:${uiValue.rating}`)


// user input events


//ADDING MOVIE

    // $(".btn").click(function(e) {
    //     e.preventDefault()
    //
    //     var movieData = {};
    //     var formData = $(".movie").serializeArray();
    //     // console.log(formData);
    //
    //     $.each(formData, function() {
    //         if (movieData[this.name]) {
    //             if (!movieData[this.name].push) {
    //                 movieData[this.name] = [movieData[this.name]];
    //             }
    //             movieData[this.name].push(this.value || '');
    //         } else {
    //             movieData[this.name] = this.value || '';
    //         }
    //
    //     });
    //     console.log(movieData);
    //
    //     const updateMoviesToDB = {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(movieData),
    //     };
    //
    //         fetch(movieAPIURL , updateMoviesToDB).then(function (response) {
    //
    //             console.log(response);
    //         })
    //
    // })

//DELETING MOVIE
//     $(".delete").click(function(e) {
//         e.preventDefault()
//
//         let movieID
//
//         fetch(movieAPIURL + "/5", {method: 'DELETE'}).then(function (response) {
//             console.log(response);
//
//         })
//     })
//
// //UPDATING MOVIES
//     $(".btn").click(function(e) {
//         e.preventDefault()
//
//         let movieID
//         const patchMethod = {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({dream: "Put our string in here"})
//         };
//
//         fetch(movieAPIURL + "/2", options).then(function (response) {
//             console.log(response);
//
//         })
//
//


    // fetch(movieAPIURL + "/20", {method: 'DELETE'}).then(function (response) {
    //     console.log(response);
    //
    // })

})