/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/





axios.get('https://api.github.com/users/Jobsy')
  .then(function (response) {
    // handle success
    // return {response[data]}
    // console.log(response.data.name);
    // console.log(response.data);

    // console.log(domElementCreator(response.data));
    return (domElementCreator(response.data))

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });



function domElementCreator(domElements) {
  
  debugger


  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const img = document.createElement("img");
  const h3 = document.createElement("h3");
  const a = document.createElement("a");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");
  const p5 = document.createElement("p");
  const p6 = document.createElement("p");

  img.src = domElements.avatar_url;
  h3.textContext = domElements.name;
  a.href = domElements.html_url;
  p1.textContext = domElements.login;
  p2.textContext = domElements.location;
  p4.textContext = domElements.followers;
  p5.textContext = domElements.following;
  p6.textContext = domElements.bio;
  p3.textContext = "Profile: ";

  div1.classList.add("card");
  div2.classList.add("card-info");
  h3.classList.add("name");
  p1.classList.add("username");

  div1.appendChild(img);
  div1.appendChild(div2);
  div2.appendChild(h3);
  div2.appendChild(p1);
  div2.appendChild(p2);
  div2.appendChild(p3);
  p3.appendChild(a);
  div2.appendChild(p4);
  div2.appendChild(p5);
  div2.appendChild(p6);

  return div1;
  
}