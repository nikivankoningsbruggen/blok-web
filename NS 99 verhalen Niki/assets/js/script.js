/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/


// Filter

var filterbutton = document.querySelector('aside form a');
var filtercontent = document.querySelector('aside form fieldset');


function filteraddedclass() {
    filtercontent.classList.toggle('open');
}

filterbutton.addEventListener('click', filteraddedclass);


// Like

var likebutton = document.querySelector('.like');
var like = document.querySelector('.like > img');

function imgaddedclasslike () {
    like.classList.toggle('fill');
}

likebutton.addEventListener('click', imgaddedclasslike); 



// Bookmark + feedback

var bookmarkbutton = document.querySelector('.bookmark');
var bookmark = document.querySelector('.bookmark > img');
var bookmarkSaved = document.querySelector('.bookmark1');

function imgaddedclassbookmark () {
    bookmark.src = "./assets/images/bookmarkfill.svg";
    bookmarkSaved.classList.add("bookmarksaved");
}

bookmarkbutton.addEventListener('click', imgaddedclassbookmark); 



