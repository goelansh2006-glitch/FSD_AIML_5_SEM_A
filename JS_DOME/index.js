const data=[
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAT7B9yc6eyHGJg9ElVo5lVfTja6qw6TY-qFhbF0-GKw&s=10",price:"525/-"},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEmnsjWZw-SapWpOxx4gn3UT8KO9RR97gx13tJAQL4-A&s=10",price:"495/-"},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU1EaKIyTCHGs-T8uuOg-oAFDYS6EhNifLpGISDTAkqw&s",price:"600/-"}
]

function Book(props){

const child=document.createElement("div");
child.setAttribute("class","card");
const image=document.createElement("img");
image.setAttribute("src",props.image);
image.setAttribute("width","105px");
image.setAttribute("height","155px");
image.style.margin="auto";

const h2=document.createElement("h2");
h2.innerText="Price: "+props.price;
child.appendChild(image);
child.appendChild(h2);

return child;
}

const booklist=document.createElement("div");
booklist.setAttribute("Class","booklist");

const parent=document.getElementById("root");
for(i of data){
    booklist.appendChild(Book(i));
}
parent.appendChild(booklist);