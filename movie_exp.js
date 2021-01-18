console.log("am working");

const movApi = "https://silent-subsequent-parka.glitch.me";

const movies = "/movies";

const list = document.querySelector("#movie-list")

const row = document.createElement('tr');

const mQuery = {
    title: document.querySelector("#title"),
    year: document.querySelector("#year"),
//    genre: document.querySelector("#genre"),
//    rating: document.querySelector("#rating"),
}

const mValue = {
        title: document.querySelector("#title").value,
        year: document.querySelector("#year").value,
//        genre: document.querySelector("#genre").value,
//        rating: document.querySelector("#rating").value
}

///READ ONLY

// A method to get all the list of the movies
// "GET" /movies

//========= original
//fetch(`${movApi}${movies}`).then(response => {
//    response.json().then(movie => console.log(movie))
//})
//===============

fetch(`${movApi}${movies}`).then(response => {
    response.json().then(movie => {
        console.log(movie);
        
        movie.forEach(mov => {
            const list = document.querySelector("#movie-list")

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${mov.title}</td>
                <td>${mov.year}</td>
                <td>${mov.genre}</td>
                <td>${mov.rating}</td>
                <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
            `   ;

            list.appendChild(row);

            
            
        })
        

      
    })
})


      

// A method to view a specific movie name
// "GET"   /movies/{id}



// const oneMov = "/68";

//fetch(`${movApi}${movies}${oneMov}`).then(response => {
//    response.json().then(movie => {
//        console.log(movie);
//        
//            const list = document.querySelector("#movie-list")
//
//            const row = document.createElement('tr');
//            row.innerHTML = `
//                <td>${movie.title}</td>
//                <td>${movie.year}</td>
//                <td>${movie.genre}</td>
//                <td>${movie.rating}</td>
//                <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
//            `   ;
//
//            list.appendChild(row);
//      
//    })
//})






///MOD

// A method to create a new movie list name
// "POST" /movies

// Sending a request to create a post of (addMovie)

//

//
//fetch(`${movApi}${movies}`, options).then(response => console.log(response))
//





// A method to delete a movie from the list
// "DELETE" /movies/{title}


// A method to modify existing post
// "PUT or PATCH"   one is to replace the whole object and the other just part
// of it. /movies/{title}

document.querySelector("#movie-form").addEventListener("keypress", function(e) {
   if( e.keyCode === 13) {
       console.log("KEY EVENT FOR TITLE")
       const options = {
           method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
           body:JSON.stringify(mValue)
       };
       fetch(`${movApi}${movies}`, options).then(response => {

       })
   }
})





