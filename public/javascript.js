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

let append = (parent, element, index) => {
  document.getElementsByClassName(`${parent}`)[index].appendChild(element);
}

httpGetAsync("/data", (resp) => {

    let wrapper = document.createElement("div");
    wrapper.className="wrapper";
    document.body.appendChild(wrapper);

  JSON.parse(resp).map((person, index) => {
    let section = document.createElement("div");
    let quote = document.createElement("h3");
    let birthday = document.createElement("p");
    let photo = document.createElement("img");
    let link = document.createElement("a");
    
    section.className="section";
    quote.innerHTML = `${person.quote} -${person.name}`
    birthday.innerHTML = `${person.name} was born on ${person.birthday}`
    photo.src = `${person.image_url}`
    link.innerHTML = `Learn more about ${person.name}`
    link.href = `https://en.wikipedia.org/wiki/${person.name}`
    link.target = '_blank'

    document.querySelector(".wrapper").appendChild(section);
    append("section", photo, index);
    append("section", quote, index);
    append("section", birthday, index);
    append("section", link, index);
  })
})