const artworkData = [
    {
        img: "giotto.jpg", // Nazwa pliku zdjęcia
        title: "Opłakiwanie",
        author: "Giotto",
        date: "1304-1306",
        location: "Kaplica Scrovegnich, Padwa",
        school: "Protorenesans"
    },
    {
        img: "angelico_zwiastowanie.jpg",
        title: "Zwiastowanie",
        author: "Fra Angelico",
        date: "1 poł XV w.",
        location: "Klasztor San Marco, Florencja",
        school: "Szkoła Florencka"
    },
    {
        img: "masaccio_trojca.jpg",
        title: "Trójca Święta",
        author: "Masaccio",
        date: "1 poł XV w.",
        location: "Santa Maria Novella, Florencja",
        school: "Szkoła Florencka"
    },
    {
        img: "masaccio_grosz.jpg",
        title: "Grosz Czynszowy",
        author: "Masaccio",
        date: "1 poł. XV w.",
        location: "Kaplica Brancaccich, Florencja",
        school: "Szkoła Florencka"
    },
    {
        img: "masaccio_adam_ewa.jpg",
        title: "Adam i Ewa (Wygnanie z Raju)",
        author: "Masaccio",
        date: "1 poł. XV w.",
        location: "Kaplica Brancaccich, Florencja",
        school: "Szkoła Florencka"
    },
    {
        img: "uccello_bitwa.jpg",
        title: "Bitwa pod San Romano I",
        author: "Uccello",
        date: "1435-1436",
        location: "Narodowa Galeria, Londyn",
        school: "Szkoła Florencka"
    },
    {
        img: "ghirlandaio_starzec.jpg",
        title: "Starzec i chłopiec",
        author: "Ghirlandaio",
        date: "ok. 1490",
        location: "Luwr, Paryż",
        school: "Szkoła Florencka"
    },
    {
        img: "verrocchio_chrzest.jpg",
        title: "Chrzest Chrystusa",
        author: "Verrocchio i Leonardo da Vinci",
        date: "ok. 1470-1475",
        location: "Galeria Uffizi, Florencja",
        school: "Szkoła Florencka"
    },
    {
        img: "botticelli_wiosna.jpg",
        title: "Wiosna (Primavera)",
        author: "Sandro Botticelli",
        date: "1482",
        location: "Galeria Uffizi, Florencja",
        school: "Szkoła Florencka"
    },
    {
        img: "botticelli_wenus.jpg",
        title: "Narodziny Wenus",
        author: "Sandro Botticelli",
        date: "ok. 1485",
        location: "Galeria Uffizi, Florencja",
        school: "Szkoła Florencka"
    },
    {
        img: "bellini_procesja.jpg",
        title: "Procesja na placu św. Marka",
        author: "Gentile Bellini",
        date: "1496",
        location: "Galleria Akademii, Wenecja",
        school: "Szkoła Wenecka"
    },
    {
        img: "bellini_madonna.jpg",
        title: "Madonna z Dzieciątkiem",
        author: "Giovanni Bellini",
        date: "1480-90",
        location: "Accademia Carrara, Bergamo",
        school: "Szkoła Wenecka"
    },
    {
        img: "giorgione_burza.jpg",
        title: "Burza",
        author: "Giorgione",
        date: "ok. 1506",
        location: "Galeria Akademii, Wenecja",
        school: "Szkoła Wenecka"
    },
    {
        img: "giorgione_koncert.jpg",
        title: "Koncert wiejski",
        author: "Giorgione",
        date: "1509",
        location: "Luwr, Paryż",
        school: "Szkoła Wenecka"
    },
    {
        img: "giorgione_wenus.jpg",
        title: "Śpiąca Wenus",
        author: "Giorgione",
        date: "ok. 1509-1510",
        location: "Galeria w Dreźnie (Zwinger)",
        school: "Szkoła Wenecka"
    },
     {
        img: "tycjan_wenus.jpg",
        title: "Wenus z Urbino",
        author: "Tycjan",
        date: "1538",
        location: "Galeria Uffizi, Florencja",
        school: "Szkoła Wenecka"
    },
    {
        img: "tycjan_karol.jpg",
        title: "Karol V po bitwie pod Mühlberg",
        author: "Tycjan",
        date: "1548",
        location: "Prado, Madryt",
        school: "Szkoła Wenecka"
    },
    {
        img: "tycjan_pawel.jpg",
        title: "Portret papieża Pawła III",
        author: "Tycjan",
        date: "1545–1546",
        location: "Museo di Capodimonte, Neapol",
        school: "Szkoła Wenecka"
    },
    {
        img: "tycjan_koronowanie.jpg",
        title: "Cierniem koronowanie",
        author: "Tycjan",
        date: "1570",
        location: "Stara Pinakoteka, Monachium",
        school: "Szkoła Wenecka"
    },
    {
        img: "tycjan_pieta.jpg",
        title: "Pieta",
        author: "Tycjan",
        date: "1570-1576",
        location: "Galeria Akademii, Wenecja",
        school: "Szkoła Wenecka"
    },
    {
        img: "mantegna_chrystus.jpg",
        title: "Martwy Chrystus",
        author: "Andrea Mantegna",
        date: "1475–1478",
        location: "Pinakoteka Brera, Mediolan",
        school: "Szkoła Padewska"
    },
    {
        img: "mantegna_camera.jpg",
        title: "Camera degli Sposi (Fresk)",
        author: "Andrea Mantegna",
        date: "1465-74",
        location: "Pałac Gonzagów, Mantua",
        school: "Szkoła Padewska"
    },
    {
        img: "piero_chrzest.jpg",
        title: "Chrzest Chrystusa",
        author: "Piero della Francesca",
        date: "lata 50. XV w.",
        location: "National Gallery, Londyn",
        school: "Renesans"
    },
    {
        img: "piero_montefeltro.jpg",
        title: "Portret Federica da Montefeltro",
        author: "Piero della Francesca",
        date: "ok. 1465-70",
        location: "Galeria Uffizi, Florencja",
        school: "Renesans"
    },
    {
        img: "piero_zmartwychwstanie.jpg",
        title: "Zmartwychwstanie",
        author: "Piero della Francesca",
        date: "ok. 1465",
        location: "Museo Civico, Sansepolcro",
        school: "Fresk"
    },
    {
        img: "rafael_slub.jpg",
        title: "Zaślubiny Marii (Sposalizio)",
        author: "Rafael Santi",
        date: "1504",
        location: "Pinakoteka Brera, Mediolan",
        school: "Renesans"
    },
    {
        img: "rafael_ogrodniczka.jpg",
        title: "Piękna Ogrodniczka",
        author: "Rafael Santi",
        date: "ok. 1507-1508",
        location: "Luwr, Paryż",
        school: "Renesans"
    },
     {
        img: "rafael_madonna.jpg",
        title: "Madonna Sykstyńska",
        author: "Rafael Santi",
        date: "ok. 1513–1514",
        location: "Galeria Starych Mistrzów, Drezno",
        school: "Renesans"
    },
    {
        img: "rafael_szkola.jpg",
        title: "Szkoła Ateńska",
        author: "Rafael Santi",
        date: "1509-1511",
        location: "Stanze Watykańskie, Rzym",
        school: "Renesans Rzymski"
    },
    {
        img: "michalaniol_stworzenie.jpg",
        title: "Stworzenie Adama",
        author: "Michał Anioł",
        date: "1511",
        location: "Kaplica Sykstyńska, Rzym",
        school: "Fresk"
    },
    {
        img: "michalaniol_sad.jpg",
        title: "Sąd Ostateczny",
        author: "Michał Anioł",
        date: "1534-1541",
        location: "Kaplica Sykstyńska, Rzym",
        school: "Fresk"
    },
    {
        img: "leonardo_dama.jpg",
        title: "Dama z gronostajem",
        author: "Leonardo da Vinci",
        date: "1483-1490",
        location: "Muzeum Czartoryskich, Kraków",
        school: "Renesans"
    },
     {
        img: "leonardo_wieczerza.jpg",
        title: "Ostatnia Wieczerza",
        author: "Leonardo da Vinci",
        date: "1495-1498",
        location: "Santa Maria delle Grazie, Mediolan",
        school: "Renesans"
    },
    {
        img: "leonardo_madonna.jpg",
        title: "Madonna w grocie",
        author: "Leonardo da Vinci",
        date: "1483-1490",
        location: "Luwr, Paryż",
        school: "Renesans"
    },
    {
        img: "leonardo_monalisa.jpg",
        title: "Mona Lisa",
        author: "Leonardo da Vinci",
        date: "1503-1505",
        location: "Luwr, Paryż",
        school: "Renesans"
    },
     {
        img: "brunelleschi_kopula.jpg",
        title: "Kopuła Katedry",
        author: "Filippo Brunelleschi",
        date: "1420",
        location: "Florencja",
        school: "Architektura"
    },
    {
        img: "brunelleschi_szpital.jpg",
        title: "Szpital Niewiniątek",
        author: "Filippo Brunelleschi",
        date: "1420",
        location: "Florencja",
        school: "Architektura"
    },
    {
        img: "brunelleschi_pitti.jpg",
        title: "Pałac Pitti",
        author: "Filippo Brunelleschi",
        date: "2 poł XV w.",
        location: "Florencja",
        school: "Architektura"
    },
    {
        img: "bramante_tempietto.jpg",
        title: "Tempietto",
        author: "Donato Bramante",
        date: "1502",
        location: "Rzym",
        school: "Architektura"
    },
    {
        img: "palladio_rotonda.jpg",
        title: "Willa Rotonda",
        author: "Andrea Palladio",
        date: "2 poł. XVI w.",
        location: "Vicenza k. Wenecji",
        school: "Architektura"
    },
    {
        img: "michalaniol_biblioteka.jpg",
        title: "Biblioteka Laurenziana",
        author: "Michał Anioł",
        date: "1524-1534",
        location: "Florencja",
        school: "Architektura"
    },
    {
        img: "michalaniol_kopula.jpg",
        title: "Kopuła bazyliki św. Piotra",
        author: "Michał Anioł",
        date: "1 poł XVI w.",
        location: "Rzym",
        school: "Architektura"
    },
    {
        img: "ghiberti_izaak.jpg",
        title: "Ofiara Izaaka (Drzwi Raju)",
        author: "Lorenzo Ghiberti",
        date: "1401",
        location: "Muzeum Bargello, Florencja",
        school: "Rzeźba (Brąz)"
    },
    {
        img: "donatello_dawid.jpg",
        title: "Dawid (Brąz)",
        author: "Donatello",
        date: "1430",
        location: "Muzeum Bargello, Florencja",
        school: "Rzeźba (Brąz)"
    },
    {
        img: "verrocchio_dawid.jpg",
        title: "Dawid (Brąz)",
        author: "Verrocchio",
        date: "1475",
        location: "Muzeum Bargello, Florencja",
        school: "Rzeźba (Brąz)"
    },
    {
        img: "donatello_gattamelata.jpg",
        title: "Pomnik Gattamelaty",
        author: "Donatello",
        date: "1450",
        location: "Padwa",
        school: "Rzeźba (Konny)"
    },
    {
        img: "verrocchio_colleoni.jpg",
        title: "Pomnik Colleoniego",
        author: "Verrocchio",
        date: "1450",
        location: "Wenecja",
        school: "Rzeźba (Konny)"
    },
    {
        img: "michalaniol_pieta.jpg",
        title: "Pietà Watykańska",
        author: "Michał Anioł",
        date: "1497–1500",
        location: "Bazylika św. Piotra, Watykan",
        school: "Rzeźba (Marmur)"
    },
    {
        img: "michalaniol_dawid.jpg",
        title: "Dawid",
        author: "Michał Anioł",
        date: "1501-1504",
        location: "Galleria dell'Accademia, Florencja",
        school: "Rzeźba (Marmur)"
    },
    {
        img: "michalaniol_mojzesz.jpg",
        title: "Mojżesz",
        author: "Michał Anioł",
        date: "1513–1516",
        location: "Bazylika św. Piotra w Okowach, Rzym",
        school: "Rzeźba (Marmur)"
    },
    {
        img: "michalaniol_wawrzyniec.jpg",
        title: "Nagrobek Wawrzyńca Medyceusza",
        author: "Michał Anioł",
        date: "1520–1535",
        location: "San Lorenzo, Florencja",
        school: "Rzeźba (Marmur)"
    },
    {
        img: "michalaniol_julian.jpg",
        title: "Nagrobek Juliusza Medyceusza",
        author: "Michał Anioł",
        date: "1520–1535",
        location: "San Lorenzo, Florencja",
        school: "Rzeźba (Marmur)"
    },
    {
        img: "michalaniol_rondanini.jpg",
        title: "Pietà Rondanini",
        author: "Michał Anioł",
        date: "1564",
        location: "Castello Sforzesco, Mediolan",
        school: "Rzeźba (Marmur)"
    }
];