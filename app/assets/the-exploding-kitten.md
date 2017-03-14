
<br>
<br>
<div class='text-center'>
  <Image src='http://i.giphy.com/7VIrrel4MWJGM.gif' width='80%'/>
</div>
<br>

**The Exploding Kitten** is an online version of popular card game **Exploding Kitten** developed by Elan Lee, Shane Small, and Matthew Inman.

****
#### How to Play
This game allows player to play with the a virtual player. Each player take turn to to play their cards. The player can play as many cards as he/she wish but he/she must end the turn by drawing a card from the drawing pile. The player who got the exploding kitten will lose.

There are several magic cards that help player to avoid getting the exploding kitten:
* Defuse - Defuse the bomb before it is exploded.
* See The Future - See the top three cards in the drawing pile.
* Attack - Skip the turn and the next player must play 2 turns.
* Skip - Skip the turn.
* Favor - Demand a card from the other player.
* Shuffle - Shuffle the drawing pile.
* Draw From Bottom - Draw from the bottom of the pile.


<div class='text-center'>
  <Image src='http://i.imgur.com/B6WWq9H.png' width='80%' />
</div>

****
#### The Development
I fell in love with this cards game ever since it was introduced to me by my friend a year back. I never fail to share how exciting the game are to my friends in the party or gathering. However, not many people are good at it at the start. So I decided to built an online version of the game to help my fellow friend in the training to become a "Exploding Kitten" master.


##### **The Approach**
I employed **Object-Oriented Programming** methodology in the development. Each card in the pile is an object, inherits unique property from it's parent class. This unique property when be rendered when the card is played. This approach allows me to encapsulate specific method to an object and hence made my code cleaner and readable.


##### **The Virtual Player**
The virtual player aims to model a real-life player's decision making process in the game. It was challenging due to the numerous scenarios available. I have tried different methodology and ultimately settled down with the **Probabilistic Decision Tree** model.

With probabilistic decision tree model, each card is assigned with a score based on different scenario. After the assessment, the card with the highest score will be played. To ensure volatility of the virtual player, I added some randomness to each score assigned.    

##### **The Graphic**
<div class='text-center'>
<img src='http://i.imgur.com/xX4Dbdu.png' width='80%' />
</div>


<br>
<br>
<div class='text-center'>
  <Image src='http://i.imgur.com/Cnkc8nT.png'  style="width:200px"/>
</div>
<br>
</Grid.Column>
