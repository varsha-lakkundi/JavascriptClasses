window.onload = () => {
    let headers = document.querySelectorAll('body p');
    // '...' spread operator
    headers = [...headers];
    console.log(headers);

    for (let i=0; i < headers.length; i++) {
        headers[i].addEventListener('mouseover' , () => {
            headers[i].style.color = 'orange';
            headers[i].innerHTML = 'Hello Folks!'
            headers[i].classList = 'animate';
        })
    }
}