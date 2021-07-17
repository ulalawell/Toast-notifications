function clickButton(type, textMessage) {
    let divContainer = document.querySelector('.container');
    let divMessage = document.createElement('div');
    let spanMessage = document.createElement('span');
    let imgIcon = document.createElement('img');
    let imgCross = document.createElement('img');

    switch (type) {
        case 'success':
            imgIcon.src = "images/success.png";
            divMessage.className = "container-message " + type;
            break;
        case 'warning':
            imgIcon.src = "images/warning.png";
            divMessage.className = "container-message " + type;
            break;
        case 'info':
            imgIcon.src = "images/info.png";
            divMessage.className = "container-message " + type;
            break;
        case 'error':
            imgIcon.src = "images/error.png";
            divMessage.className = "container-message " + type;
            break;
        default:
            alert("Oh no, something went wrong");
    }

    imgCross.src = "images/cross.png";
    imgIcon.className = "container-message-icon";
    imgCross.className = "container-message-cross";
    imgCross.onclick = function () {
        divContainer.removeChild(divMessage);
    };
    spanMessage.textContent = textMessage;

    divContainer.appendChild(divMessage);
    divMessage.appendChild(imgIcon);
    divMessage.appendChild(spanMessage);
    divMessage.appendChild(imgCross);
    divContainer.appendChild(divMessage);

    setTimeout(() => divContainer.removeChild(divMessage), 5000);
}

document.addEventListener("DOMContentLoaded", () => {
    let divContainer = document.createElement('div');
    divContainer.className = "container";
    document.body.appendChild(divContainer);
})