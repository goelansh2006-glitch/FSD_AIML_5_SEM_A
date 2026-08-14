const data=[
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAT7B9yc6eyHGJg9ElVo5lVfTja6qw6TY-qFhbF0-GKw&s=10",price:"5525/-"},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrplFjIMpW9trdBm6nFne3TscojAk-yiRpDtaedJzZLA&s",price:"5495/-"},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU1EaKIyTCHGs-T8uuOg-oAFDYS6EhNifLpGISDTAkqw&s",price:"3600/-"},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0xTn9s9YAtYjbqD4XqYKIQIzAL4gc5qU_Jvz4xJphqg&s=10",price:"6000/-"},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEmnsjWZw-SapWpOxx4gn3UT8KO9RR97gx13tJAQL4-A&s=10",price:"7500/-"},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrV_2zSXFgztRpCgRkDy4Qo5NPIpdmStvBWxEdHK299w&s=10",price:"1200/-"}
]
function Book(props){
    const image=React.createElement("img",
        {src:props.image,
            width:"105px",
            height:"155px"});
    const h2=React.createElement("h2",{style: {color:"red"}},"Price: ₹"+props.price);
    const child=React.createElement("div",{className:"card"},[image,h2]);
    return child;
}
const bookdata = data.map((i)=>{
    return React.createElement("div",{className:"booklist"},Book(i));
});
const parent=document.getElementById("root");
ReactDOM.render(bookdata, parent);