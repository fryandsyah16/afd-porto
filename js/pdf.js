function showModal(pdfFile) {  
    const canvas = document.getElementById('pdfCanvas');  
    const context = canvas.getContext('2d');  
  
    // Mengatur PDF.js  
    pdfjsLib.getDocument(pdfFile).promise.then(pdf => {  
        pdf.getPage(1).then(page => {  
            const viewport = page.getViewport({ scale: 1 });  
            canvas.height = viewport.height;  
            canvas.width = viewport.width;  
  
            const renderContext = {  
                canvasContext: context,  
                viewport: viewport  
            };  
            page.render(renderContext);  
        });  
    });  
  
    document.getElementById("certificateModal").style.display = "block";  
} 