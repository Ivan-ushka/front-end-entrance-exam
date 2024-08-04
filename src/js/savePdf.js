document.getElementById('downloadBtn').addEventListener('click', () => {
    const firstSection = document.querySelector(".first-section");
    const secondSection = document.querySelector(".second-section");
    const thirdSection = document.querySelector(".third-section");

    const opt = {
        margin: 0.001,
        filename: 'resume.pdf',
        image: {type: 'jpeg', quality: 1.5},
        html2canvas: {scale: 2},
        jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait'}
    };

    const pdfContent = document.createElement('div');
    pdfContent.appendChild(firstSection.cloneNode(true));
    pdfContent.appendChild(secondSection.cloneNode(true));
    pdfContent.appendChild(thirdSection.cloneNode(true));


    html2pdf().from(pdfContent).set(opt).save();
});
