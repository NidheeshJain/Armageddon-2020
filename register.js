window.scrollTo({
    top: 0,
    left: 0,
})
let pageStatus = null
var progress = null
var animationInterval = 33
document.onreadystatechange = () => {
    // console.log('hi');
    if (document.readyState === "complete")
        pageStatus = "complete"
}

function updateProgress() {
    //console.log(progress)
    if (pageStatus === "complete") {
        // setTimeout(() => {
        //     document.querySelector('.loader').innerHTML = 100
        // document.querySelector('.loader').style.display = "none"
        // document.querySelector('.loader').style.zIndex = "-1"
        // document.querySelector('#wrapper').style.opacity = "1"
        // document.querySelector('#wrapper').style.display = "flex"

        // }, 5000)
        document.querySelector('#loader-text').innerHTML = `Loading... 100 %`
        setTimeout(() => {
            document.querySelector('#loader-text').style.display = "none"
            document.querySelector('#loader-text').style.zIndex = "-1"
            document.querySelector('.loader').style.height = "0"
            document.querySelector('.loader').style.width = "0"
            document.querySelector('.wrapper').style.opacity = "1"
            document.querySelector('.wrapper').style.display = "flex"
        }, 600)
    }
    else {
        if (progress == null) {
            progress = 1;
        }

        progress = progress + 1;
        if (progress >= 0 && progress <= 30) {
            animationInterval += 1;
            document.querySelector('#loader-text').innerHTML = `Loading ${progress} %`;
        }
        else if (progress > 30 && progress <= 60) {
            animationInterval += 2;
            document.querySelector('#loader-text').innerHTML = `Loading ${progress} %`;
        }
        else if (progress > 60 && progress <= 80) {
            animationInterval += 4;
            document.querySelector('#loader-text').innerHTML = `Loading ${progress} %`;
        }
        else if (progress > 80 && progress <= 90) {
            animationInterval += 8;
            document.querySelector('#loader-text').innerHTML = `Loading ${progress} %`;
        }
        else if (progress > 90 && progress <= 95) {
            animationInterval += 100;
            document.querySelector('#loader-text').innerHTML = `Loading ${progress} %`;
        }
        else if (progress > 95 && progress <= 99) {
            animationInterval += 180;
            document.querySelector('#loader-text').innerHTML = `Loading ${progress} %`;
        }
        else if (progress >= 100) {
            document.querySelector('#loader-text').innerHTML = `Loading 99 %`;
        }
        setTimeout(updateProgress, animationInterval);
    }
}
var intervalObject_1 = setInterval(function () {
    //console.log('hi')
    var element = document.querySelector("body");
    if (element != undefined) {
        clearInterval(intervalObject_1);
        updateProgress();
    }
}, 1);

let finalObj = {
    team_name: null,
    game_id: null,
    team_members: []
}
function closeModal(id) {
    document.getElementsByClassName('modalWrapper')[id].style.display = "none";
}
function openPaymentModal() {
    document.getElementById('paymentModalWrapper').style.display = "flex";
}
function inputRenderer(event, value) {
    event.preventDefault()
    let form = document.querySelector('.form')
    const squadName = form.elements.squadName.value
    const gameId = form.elements.selectGame.value
    let flexOuter = document.querySelector('.flex-outer')
    let prevInputs = [...document.getElementsByClassName('member-name-username'), ...document.getElementsByClassName('member-phone-email')]
    if (prevInputs) {
        prevInputs.map(input => {
            //console.log(input)
            flexOuter.removeChild(input)
        })
    }
    for (let i = 1; i <= value; ++i) {
        flexOuter.innerHTML += `<ul class="flex-inner member-name-username">
        <li class="input-1">
            <input type="text" class="myInput member-name " placeholder="Name Member ${i}">
        </li>
        <li class="input-3">
            <input type="text" class="myInput member-username" placeholder="Username ${i}">
        </li>
    </ul>`
    }
    for (let i = 1; i <= value; ++i) {
        flexOuter.innerHTML += `<ul class="flex-inner member-phone-email">
        <li class="input-1">
            <input type="number" class="myInput member-phone " placeholder="Phone Number ${i}">
        </li>
        <li class="input-3">
            <input type="email" class="myInput member-email" placeholder="Mail ID ${i}">
        </li>
    </ul>`
    }
    document.getElementsByClassName('squad-name')[0].value = squadName
    document.getElementsByClassName('selectGame')[0].value = gameId
}
function submitForm(event) {
    event.preventDefault()
    const squadName = document.querySelector('.squad-name')
    const gameId = document.querySelector('.selectGame')
    finalObj.team_name = squadName.value
    finalObj.game_id = gameId.value
    const names = document.getElementsByClassName('member-name'
    )
    const usernames = document.getElementsByClassName('member-username')
    const phones = document.getElementsByClassName('member-phone')
    const emails = document.getElementsByClassName('member-email')
    for (let i = 0; i < names.length; ++i) {
        // console.log(names[i].value, emails[i].value, phones[i].value, usernames[i].value)
        finalObj.team_members.push({
            name: names[i].value,
            email_id: emails[i].value,
            college: "insert_any_top10_nirf_college",
            whatsapp_no: phones[i].value,
            username: usernames[i].value
        })
    }
    //console.log(form.elements[0].value)
    //console.log(form)
    // console.log(JSON.stringify(finalObj))

    document.getElementById('form-status').style.display = "flex"
    document.getElementById('status-img').innerHTML = `
    <img src="assets/ui/loader.png">
    `
    document.getElementById('status-msg').innerHTML = `
        Sending...
    `
    document.getElementById("status-msg").scrollIntoView()
    fetch('https://www.bits-apogee.org/arma/register_team', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(finalObj)
    }).then(response => {
        var responseData = response.json();
        if (response.ok) {
            document.getElementById('status-img').innerHTML = `
    <img src="assets/ui/tick.png">
    `
            document.getElementById('form-status').style.borderColor = `#00B9FF`
            document.getElementById('status-msg').innerHTML = `
        Successful
    `

            Promise.resolve(responseData).then(function (value) {
                var responseJSON = value;// "Success"
                document.getElementById('team_name_payment').value = document.getElementById('team_name').value;
                document.getElementById('paymentModalMessage').innerHTML = `Your Team ID is ${responseJSON.team_id} <br/><br/> <i>After getting the success message from gateway, <br/>Please Refresh this page and check your payment status.</i>`;
                openPaymentModal();
            }, function (value) {
                // not called
            });
                
        }
        else if (response.status == 412 || response.status == 400) {
            Promise.resolve(responseData).then(function (value) {
                var responseJSON = value;// "Success"
                document.getElementById('responseErrorModalMessage').innerText = responseJSON.message;
                document.getElementById('form-status').style.display = "none"
                document.getElementById('status-img').innerHTML = `
    <img src="assets/ui/loader.png">
    `
                document.getElementById('status-msg').innerHTML = `
        Sending...
    `
                document.getElementsByClassName('modalWrapper')[0].style.display = "flex";
            }, function (value) {
                // not called
            });

        }
        else {
            document.getElementById('status-img').innerHTML = document.getElementById('status-img').innerHTML = `
            <img src="assets/ui/criss-cross.png">
            `
            document.getElementById('form-status').style.borderColor = `red`
            document.getElementById('status-msg').innerHTML = `
        Unsuccessful
    `
        }
        //console.log(response.json())

        finalObj = {
            team_name: null,
            game_id: null,
            team_members: []
        }
        //form.elements.map(element => element.value = '')
    })
        .catch(error => {
            console.log(error)
            document.getElementById('status-img').innerHTML = `
    <img src="assets/ui/criss-cross.png">
    `
            document.getElementById('status-msg').innerHTML = `
        An error occured
    `
            document.getElementById('form-status').style.borderColor = `red`
        })
}

async function checkStatus() {
    event.preventDefault()
    document.getElementById('form-status-check').style.display = "flex"
    document.getElementById('status-img-check').innerHTML = `
    <img src="assets/ui/loader.png">
    `
    document.getElementById('status-msg-check').innerHTML = `
        Sending...
    `
    document.getElementById("status-msg-check").scrollIntoView()
    //console.log("checking status")
    const request = {
        name_or_id: document.querySelector('.squad-name2').value,
        email_id: document.querySelector('.squad-mail').value
    }
    //console.log(request)
    fetch('https://www.bits-apogee.org/arma/check_status/', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    }).then(response=> {
        document.getElementById('form-status-check').style.display = "none"
        const promise = Promise.resolve(response.json())
        if(response.ok) {
            promise.then(value => {
                //console.log(value)
                document.getElementsByClassName("modalWrapper")[1].style.display = "flex"
                if(value.paid) {
                    document.querySelector('.paymentStatus').innerHTML = "Your payment is successful"
                }
                else {
                    document.querySelector('.paymentStatus').innerHTML = "Your payment is pending"
                }
                document.querySelector(".team-name-data").innerHTML = value.team_name
                document.querySelector(".team-game-data").innerHTML = value.game
                document.querySelector(".team-id-data").innerHTML = value.team_id
            })
        }
        else {
            promise.then(value => {
                document.getElementsByClassName("modalWrapper")[0].style.display = "flex"
                var responseJSON = value;// "Success"
                document.getElementById('responseErrorModalMessage').innerText = responseJSON.message;
            }) 
        }
    })
    .catch(error => {
        console.log(error)
    })

}