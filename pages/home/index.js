const tagUlCards = document.getElementById('devCards');
console.log(tagUlCards);

async function createCard(){
    const devs1 = await getUsers(`${baseUrl}?results=10`);
    const devs2 = devs1.results;
    devs2.forEach(dev => {
        let newDev = dev;
        let devReady = makeCard(newDev);
        tagUlCards.insertAdjacentHTML("beforeend", devReady);
        // tagUlCards.appendChild(devReady);
    });
};

createCard();

function makeCard(dev){
    // const li = document.createElement('li');
    // li.classList.add('card');

    // const figDev = document.createElement('figure');
    // figDev.classList.add('img-card');

    // const imgDev = document.createElement('img');
    // imgDev.setAttribute('src', `${dev.picture.large}`)
    // imgDev.setAttribute('alt', `Foto de ${dev.name.first} ${dev.name.last}`);

    // const btnLike = document.createElement('button');
    // btnLike.setAttribute('id', `${dev.login.uuid}`);
    // btnLike.classList = 'btn-card btn-like';

    // const devDetails = document.createElement('div');
    // devDetails.classList.add('devs-details');

    // const devName = document.createElement('h2');
    // devName.classList.add('dev-name');
    // devName.innerText = `${dev.name.first} ${dev.name.last}`;

    // const devAdress = document.createElement('p');
    // devAdress.classList.add('dev-address');
    // devAdress.innerText = `${dev.location.street.number} ${dev.location.street.name}`;

    // const devAge = document.createElement('p');
    // devAge.classList.add('dev-age');
    // devAge.innerText = `${dev.dob.age}`;

    // const btnsDev = document.createElement('div');
    // btnsDev.classList.add('btns-card');

    // const btnMail = document.createElement('button');
    // btnMail.classList = ('btn-card btn-mail');

    // const btnTel = document.createElement('button');
    // btnTel.classList = ('btn-card btn-tel');

    // btnsDev.append(btnMail, btnTel);
    // devDetails.append(devName, devAdress, devAge, btnsDev);
    // figDev.append(imgDev, btnLike);
    // li.append(figDev, devDetails);

    // return li;
    return `
        <li id=${dev.login.uuid} class="card">
            <figure class="img-card">
                <img src=${dev.picture.large} alt=Foto de ${dev.name.first} ${dev.name.last}>
                <button class="btn-card btn-like"></button>
            </figure>
            <div class="devs-details">
                <h2 class="dev-name">${dev.name.first} ${dev.name.last}</h2>
                <p class="dev-address">${dev.location.street.number} ${dev.location.street.name}</p>
                <p class="dev-age">${dev.dob.age}</p>
                <div class="btns-card">
                    <button class="btn-card btn-mail"></button>
                    <button class="btn-card btn-tel"></button>
                </div>
            </div>
        </li>        
    `;
};