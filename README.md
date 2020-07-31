# Kai's Super Snazzy Notes

I made a note board! I styled it after Google Keep (the central note creation bar, the modal popping up) since I tend to use that a lot and I like it. Part of me was tempted to add authentication and user boards to make it as much like Keep as possible, but the other part of me is tired (so I didn't). I did add resizable notes, which is cooler than Google Keep. So now this can be like a message board, instead of a personal note board, I guess. This project took so very long but I think the product is pretty sweet. I added 2 extra components than the "required" ones--a note page, which basically keeps a list of all the notes, passes along data & functions, and a editing modal. The note-page is definitely not necessary but I think it helps keep my note file much cleaner. I love modulation.

[deployed url](kai-cs52-notes.surge.sh)

## What Worked Well
Adding in resizable worked quite well. It took me a bit to figure out how the library worked, but once I got that implementing it with firebase was really simple. It's nice that draggable-react and resizable-react are compatible. 

Once I figured out how to implement/where to implement my modal, it was an easy component to right. I originally wanted to put it in note_page.js but couldn't figure out how to update the props so that the correct title/content was showing. I think you would just use componentDidMount, but I wasn't aware of that while writing it. Putting it in note works just fine. I didn't make sure that you couldn't open two at the same time, but I made the background translucent and you can close the modal without saving so...it's fine. 

Styling ended up being pretty easy. I (obviously) didn't go too hard on it, and it is very basic. For a bit I couldn't figure out why, when deleting a note, the other notes moved, but then I realized I needed to make my note position absolute. That pretty much explains my one and only styling issue. 

## What Didn't
I didn't name all my props the same thing, which caused a lot of heartache and anger on my end (whoops). Basically, I was trying to reference props (in note) from note_page using the name from index...not my greatest move. I didn't even end up changing it because by the point I realized it felt like more work to cmd + f and replace the names in both note and note_page. I know better now. 

Figuring out realtime database was kind of annoying, since I just used firestore last term and am used to referencing everything through that. Luckily they're similar, so adding in the DB wasn't that hard for me.

Immutable.js does not make it easy to used/update nested maps. I originally figured out how to use an immutable map for position, but when I added in firebase and needed to translate from JSON I just could not figure it out. I'm sure there are ways, but I just decided to abandon ship and use a regular JS map to hold position (and later, size).

## Screenshots
