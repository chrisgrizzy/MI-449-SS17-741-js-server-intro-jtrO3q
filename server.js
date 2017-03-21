// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<h1>Welcome to the Simple Web Server</h1>' +
      '<img src= https://media.tenor.co/images/eee0f6a9ca116592a30d18c0a35855ee/raw>' +
      '<a href = />Homepage</a>'
    )
  } else if (request.url === '/random-joke') {
    var jokes = [
      'Knock, knock! Who’s there? Opportunity! That is impossible. Opportunity doesn’t come knocking twice!',
      'Knock knock. Who’s there? An extraterrestrial. Extraterrestrial who? What – how many extra-terrestrials do you know?',
      'Knock knock. Whos there? Beats. Beats who? Beats me'
    ]
    var randomNumber = Math.floor(Math.random() * (jokes.length))
    var displayJoke = jokes[randomNumber]
    response.end(
      '<p>' + displayJoke + '</p>' +
      '<h1>Random Joke </h1>' +
      '<button id="jokeButton">New Joke</button>' +
      '<a href = />Homepage</a>' +
      '<div id="jokeDisplay"   </div>'
    )
  } else if (request.url === '/cuteness') {
    response.end(
      '<h1>Cuteness</h1>' +
      '<img src="https://s-media-cache-ak0.pinimg.com/originals/13/d7/12/13d7122b0852302f74a52efff10b2687.jpg">' +
      '<a href = />Homepage</a>'
    )
  } else if (request.url === '/cuteness') {
    response.end(
      '<h1>Cuteness</h1>' +
      '<img src="https://s-media-cache-ak0.pinimg.com/originals/13/d7/12/13d7122b0852302f74a52efff10b2687.jpg">'
    )
  } else {
    response.end(
      '<h1>You Attempted to Visit URL</h1>' + '<h1>' + request.url + '</h1>' +
      '<a href = />Homepage</a>' +
      '<img src="https://www.tnooz.com/wp-content/uploads/2013/12/404-error-pages-17.png">'
    )
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
