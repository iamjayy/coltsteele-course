var movies = [
  {
    title: "mollys game",
    rating: "4/5",
    hasWatched: true
  },
  {
    title: "uncut gems",
    rating: "5/5",
    hasWatched: false
  },
  {
    title: "end game",
    rating: "5/5",
    hasWatched: true
  }
];

moviesDB();

function moviesDB() {
  for (var i = 0; i < movies.length; i++) {
    if (movies[i].hasWatched === true) {
      console.log(
        "You have watched " +
          '"' +
          movies[i].title +
          '" ' +
          "- " +
          movies[i].rating
      );
    } else {
      console.log(
        "You have not seen " +
          '"' +
          movies[i].title +
          '" ' +
          "- " +
          movies[i].rating
      );
    }
  }
}

/* movies.forEach(function(movie) {
  var result = "you have ";
  if (movie.hasWatched) {
    result += 'watched ";';
  } else {
    result += "not seen ";
  }
  result += '"' + movie.title + '" -';
  result += movie.rating + " stars";
  console.log(result);
}); */
