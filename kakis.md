
<div class='text-center'>
  <img src='http://i.imgur.com/kC9VHIx.jpg' style='width:100%' />
  <strong>Find your strength, find your passion, find your kakis</strong>
</div>

<br>
<br>
<strong>Kakis</strong> is a social web application allowing sport enthusiast to find sport buddies who share the similar interest.
<br>



****
#### The Development
##### **User Stories**

* Guest are able to view all the events.
* Guest are able to view all the user profile.
* Registered user are able to create/cancel events.
* Registered user are able to join/withdraw events.
* Registered user are able to update their profile.
* Registered user are able to chat with other users.

##### **Database Model**
<div class='text-center'>
  <img src='http://i.imgur.com/mNH2oSt.png' />
</div>


The application consist of 5 main models namely User, Event, Category, Chat and Message.

##### **The "Participation" Model**


To facilitate the many to many relationship between **user** and their **participated events**, I created an additional model named **"Participation"**. In this model, the attendance of the user to a particular event are represented as a single participation. This allow the User and Event model to stay lean at the same time resulting in a cleaner database.

To ensure each user can only participate an event once, validations were set up to check the uniqueness of index between user and event.


##### **The Real Time Update**

**Socket.io** was implemented in this application to provide instant update when messages were sent. The channel was setup base on chat-box id. As each chat-box are only available between the two users, this successfully privatize the message to only the targeted recipient.  


##### **The Interface**
The UI design philosophy:
* Sporty
* Clean
* Customizable


###### **Homepage**
<hr>
<div class='text-center'>
  <img src='http://i.imgur.com/N6sN2fb.jpg' style='width:100%'/>
</div>
<br>

######  **Events**
  <hr>
<div class='text-center'>
  <img src='http://i.imgur.com/ldANNMy.png' style='width:100%' />
</div>
<br>

######  **Event Page**
  <hr>
<div class='text-center'>
  <img src='http://i.imgur.com/IyXy52sr.png' style='width:100%' />
</div>
<br>

######  **User Profile**
  <hr>
<div class='text-center'>
  <img src='http://i.imgur.com/DyCLGgR.png' style='width:100%' />
</div>
<br>

######  **Chat**
  <hr>
<div class='text-center'>
  <img src='http://i.imgur.com/vORrGLv.png' style='width:100%' />
</div>
<br>
