
# DIRECTIONS
After logging in use the code "pleasehirewilliam". Login to see the admin side of things with email: ryan@gmail.com  password: password


##What is it?
VOQUE is web app that solves the problem of inefficiency with your average karaoke request system.

##Who has this problem?
Anyone who has ever performed karaoke at a local bar has dealt with the frustration of sifting through beer-soaked song books the size of 10 Bibles to try to find songs to sing. Then they have to track down the paper and writing utensils needed to submit a song request.

On the other side Karaoke DJs have to constantly update these huge song lists with new songs, and that requires printing out and tons of paper and assembling huge song list books. This is insanely time consuming and wasteful.

##How does this project solve this problem?
VOQUE makes this process more efficient by allowing Karaoke DJs to upload their song lists to our database. Karaoke singers access these song lists from their smart phones and make song requests. The Karaoke DJ can then view incoming requests and not have to deal with anymore paper.

##What APIs were used?
The Musixmatch API is used to pull lyrics from requested songs.

##What tech was used?
- ReactJS on the front end styled using SCSS.
- Uses Musixmatch API with Axios to pull in lyrics for requested songs.
- Uses Multer to handle file uploads
- Node.js on the back end with an Express server and PostgreSQL database.
