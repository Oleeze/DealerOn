function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = () => { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

httpGetAsync("/data", (resp) => {
  JSON.parse(resp).map((person, index) => {
    let section = document.createElement("div");
    let quote = document.createElement("h2");
    let birthday = document.createElement("h4");
    let photo = document.createElement("img");
    
    section.className="section";
    quote.innerHTML = `${person.quote} -${person.name}`
    birthday.innerHTML = `${person.name} was born on ${person.birthday}`
    photo.src = `${person.image_url}`

    document.body.appendChild(section);
    document.getElementsByClassName("section")[index].appendChild(photo);
    document.getElementsByClassName("section")[index].appendChild(quote);
    document.getElementsByClassName("section")[index].appendChild(birthday);

  })
})