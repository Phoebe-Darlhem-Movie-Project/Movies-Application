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

        const row = document.createElement("tr");
        row.setAttribute("id", `movie-row-${movie.id}`);
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

    //practice
    fetch(movieAPIURL).then(response => {
        return response.json();
    }).then(data => {
        // Work with JSON data here
        console.log(data[1].title);
        let movieTitle = document.getElementById("title").value;
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].id);
            if (movieTitle == data[i].title){

            }else{

            }
        }

    }).catch(err => {
        // Do something for an error here
    });
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=', {
                APPID: omdbAPI
            })
        // .then((success) => { success.json() } )
        .then((movies) => { console.log(movies) } )
        .catch((error)=>{ console.log(error)});
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
                response.json().then(getMovie)
                console.log(response);
            })

    })

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
//     })

    // fetch(movieAPIURL + "/20", {method: 'DELETE'}).then(function (response) {
    //     console.log(response);
    //
    // })

})