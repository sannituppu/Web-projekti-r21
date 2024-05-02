const kuvakortit = [
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

const sanakortit = [
    'Akku',
    'Diodi',
    'Emolevy',
    'Fototransistori',
    'grafiikkakortti',
    'HDMI-kaapeli',
    'Hiiri',
    'CPU Ilmajäähdytin',
    'Kannettava tietokone',
    'Kiintolevy',
    'Kondensaattori',
    'LED',
    'Mikropiiri',
    'Näppäimistö',
    'Näyttö',
    'Prosessori',
    'Satunnaiskäyttömuisti',
    'SSD',
    'Transistori',
    'USB-kaapeli',
    'Vastus'
]

const parit = [];

for(let i = 0; i < kuvakortit.length; i++) {
    parit.push({
        kuva: kuvakortit[i],
        sana: sanakortit[i]
    })
}