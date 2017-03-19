<div class='text-center'>
  <img src='http://i.imgur.com/LJqK81o.jpg' style='width:100%' />
</div>
<br>

Inspire by daily household fixture needs, **Handy** aims to connect client with the handyman base on region and skills. However, it is expandable to other professional freelancer as well.

**Handy** come with several in-built features to assign the client from request of quotation to ensure the job is done. One of such feature is the real-time negotiation and update of job scope and price.  

In addition, the in-built booking system allows freelancer to manage their booking at ease by avoiding overlap appointments.

#### The Development
****
##### **The Team**

This application is a collaborative project for a developer team of 4, namely ZhaoLong, Andrew Thien, Sharona and myself <a href='https://medium.com/@yishenglee/handy-the-best-hands-for-your-job-2ecfe187098b#.1g50c0pg3'> (check out our post-mortem here)</a>. Each group member was assigned a major feature to work on and supervising the other team member on their feature.

##### **Database Model**
<div class='text-center'>
  <img src='http://i.imgur.com/k7SNQmf.png' style='width:80%' />
</div>

##### **Booking & Calendar**

Understanding that freelancer might only available on a few days in a week, we implemented <a href='https://github.com/seejohnrun/ice_cube'><strong>IceCube</strong></a> to handle the reoccurrence schedule. The schedule will be appear on the their profile page for client to make the enquiry.

When the client and freelancer finalize the job scope, the freelancer are able to accept the job. At this stage, a booking will be generated for this enquiry. This booking will show on both client and freelancer profile.

##### **Real Time Negotiation & Update**

The negotiation and update is done over in the enquiry. On the client side, they are able to update the job scope. An message will be sent whenever the client make a changes to the job scope. However, the freelancer will finalize the deal by accepting the job request.

<div class='text-center'>
  <img src='https://media.giphy.com/media/4nLSPhq4gSkVi/giphy.gif' style='width:60%' />
</div>
<br>

We employed rails in-build **Action Cable** for the real-time update. Despite it is conceptuality very similar to **Socket.io**, we find it quite difficult to integrate as compared to the later, especially the post deployment configurations that need to be done on the server side.


##### **The Interface**

<div class='text-center'>
  <img src='http://i.imgur.com/VvbTjVX.png' style='width:100%' />
</div>
<br>


<div class='text-center'>
  <img src='http://i.imgur.com/Ma58etT.png' style='width:100%' />
</div>
<br>

<div class='text-center'>
  <img src='http://i.imgur.com/lw6Os5s.png' style='width:100%' />
</div>
<br>
