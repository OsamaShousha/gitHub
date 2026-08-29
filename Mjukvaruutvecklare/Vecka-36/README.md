Arv i CSS betyder att vissa CSS-egenskaper automatiskt går från en förälder till dess barn. (color, font-family, )
.hero {
    background-color: antiquewhite;
    color: black;
    padding: 2rem;
    margin: 1rem;
    font-family: sans-serif;
}
här är hero som (header section)  är föräldern, elementen inuti är barn som ärva color och font-family från föräldern