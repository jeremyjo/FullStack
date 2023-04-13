const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    console.log("change");
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseXML);
    }
}

xhr.open('GET', '/data/team.xml');
xhr.send();
xhr.onerror = (e) => {console.log(e.message)}