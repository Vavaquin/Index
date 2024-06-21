document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".gallery");

    // Array de URLs das imagens externas
    const imagesList = [
        "https://cdnb.artstation.com/p/assets/images/images/076/964/351/large/vavaquin-skyl1111l-test-export.jpg?1718226075",
        "https://cdna.artstation.com/p/assets/images/images/076/964/286/original/vavaquin-sla1-export.gif?1718225968",
        "https://cdnb.artstation.com/p/assets/images/images/076/885/673/large/vavaquin-luar.jpg?1718056060",
        "https://cdna.artstation.com/p/assets/images/images/076/882/406/large/vavaquin-bx-to-the-bone-pararararam.jpg?1718050542",
        "https://cdna.artstation.com/p/assets/images/images/076/882/366/large/vavaquin-sapor2-export.jpg?1718050472",
        "https://cdna.artstation.com/p/assets/images/images/076/881/852/large/vavaquin-fror-export.jpg?1718049632",
        "https://cdnb.artstation.com/p/assets/images/images/076/881/753/large/vavaquin-raposar-export.jpg?1718049471"
        
        // Adicione mais URLs conforme necessário
    ];

    // Função para exibir as imagens na galeria
    function displayImages(images) {
        images.forEach(imageUrl => {
            const imgElement = document.createElement("img");
            imgElement.src = imageUrl;
            imgElement.alt = "Imagem"; // Defina um texto alternativo adequado
            imgElement.classList.add("gallery-image"); // Adiciona uma classe para estilização CSS
            gallery.appendChild(imgElement);
        });
    }

    // Chama a função para exibir as imagens
    displayImages(imagesList);
});
