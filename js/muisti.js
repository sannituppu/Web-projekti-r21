const kuvat = [
    './pictures/sanasto/akku.jpg',
    './pictures/sanasto/diodi.jpg',
    './pictures/sanasto/emolevy.jpg',
    './pictures/sanasto/fototransistori.jpg',
    './pictures/sanasto/grafiikkakortti.jpg',
    './pictures/sanasto/hdmi-kaapeli.jpg',
    './pictures/sanasto/hiiri.jpg',
    './pictures/sanasto/ilmajaahdytin.jpg',
    './pictures/sanasto/kannettava_tietokone.jpg',
    './pictures/sanasto/kiintolevy.jpg',
    './pictures/sanasto/kondensaattori.jpg',
    './pictures/sanasto/led.jpg',
    './pictures/sanasto/mikropiiri.jpg',
    './pictures/sanasto/nappaimisto.jpg',
    './pictures/sanasto/naytto.jpg',
    './pictures/sanasto/prosessori.jpg',
    './pictures/sanasto/satunnaiskayttomuisti.jpg',
    './pictures/sanasto/ssd.jpg',
    './pictures/sanasto/transistori.jpg',
    './pictures/sanasto/usb-kaapeli.jpg',
    './pictures/sanasto/vastus.jpg'
];

let kaannetyt = [];

function sekoita(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function luoPeli(kuvat) {
    const sekoitaKuvat = sekoita(kuvat);
    const valitutKuvat = sekoitaKuvat.slice(0, 4);
    const pelinKuvat = [...valitutKuvat, ...valitutKuvat];
    const sekoitaParit = sekoita(pelinKuvat);
    
    const Peli = document.querySelector('.muistipeli');
    
    sekoitaParit.forEach((kuvaUrl, index) => {
        const kortti = document.createElement('div');
        kortti.classList.add('kortti');
        kortti.dataset.id = index;
        
        const kuva = document.createElement('img');
        kuva.src = kuvaUrl;
        kortti.appendChild(kuva);
        
        kortti.addEventListener('click', () => {
            flipkortti(kortti, kuva);
        });
        
        Peli.appendChild(kortti);
    });
}


function flipkortti(kortti, kuva) {
    if (kaannetyt.length < 2 && !kaannetyt.includes(kortti)) {
        kortti.classList.add('kaannetty');
        kuva.style.visibility = 'visible';
        kaannetyt.push(kortti);

        if (kaannetyt.length === 2) {
            setTimeout(tarkistaPari, 1000);
        }
    }
}

function tarkistaPari() {
    const [kortti1, kortti2] = kaannetyt;
    const kuva1 = kortti1.querySelector('img');
    const kuva2 = kortti2.querySelector('img');

    if (kuva1.src === kuva2.src) {
        kaannetyt = [];
    } else {
        setTimeout(() => {
            kortti1.classList.remove('kaannetty');
            kortti2.classList.remove('kaannetty');
            kuva1.style.visibility = 'hidden';
            kuva2.style.visibility = 'hidden';
            kaannetyt = [];
        }, 1000);
    }
}

window.onload = () => {
    luoPeli(kuvat);
};

const nappi = document.getElementById('nappi');
nappi.addEventListener('click', uusiPeli);

function uusiPeli() {
    kaannetyt = [];
    
    const kaikkiKortit = document.querySelectorAll('.kortti');
    kaikkiKortit.forEach(kortti => {
        kortti.classList.remove('kaannetty');
        const kuva = kortti.querySelector('img');
        kuva.style.visibility = 'hidden';
    });
    
    const Peli = document.querySelector('.muistipeli');
    Peli.innerHTML = '';
    
    luoPeli(kuvat);
}