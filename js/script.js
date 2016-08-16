var buttons = document.getElementsByClassName('j_button'),
    disabledClass = 'disabled',
    scoreClass = 'scores';


for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.onclick = function() {
        var score = document.getElementsByClassName(scoreClass),
            points = Number(this.getAttribute('data-points')),
            count = Number(score[0].innerHTML);

        if (!this.classList.contains(disabledClass) && count > points) {
            var id = this.getAttribute('data-id'),
                time = this.getAttribute('data-recovery');

            count += points;
            score[0].innerHTML = count;
            setTimer(time, this);
            getRequest(id);
        }
    };
}

function setTimer(time, element) {
    element.classList.add(disabledClass);
    var timer = document.createElement('span');
    timer.classList = 'timer';
    timer.innerHTML = time;
    timer.setAttribute('data-time', time);
    element.appendChild(timer);

    countdown(element);
}

function removeTimer(element) {
    element.classList.remove(disabledClass);

    var obj = element.querySelectorAll('.timer')[0];
    element.removeChild(obj);
}

function timeFormat(second) {
    return Math.floor(second / 60) + ':' + second % 60;
}

function countdown(element){
    var obj = element.querySelectorAll('.timer')[0],
        time = obj.getAttribute('data-time');
    time -= 1;
    obj.setAttribute('data-time', time);
    obj.innerHTML = timeFormat(time);

    if(time==0) {
        removeTimer(element);
    } else {
        setTimeout(function () {
            countdown(element);
        }, 1000);
    }
}

function getRequest(id) {
    var request = new XMLHttpRequest();
    request.open('POST', '/post', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send({id: id});
}


