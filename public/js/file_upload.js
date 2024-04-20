// JavaScript file handling
document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('file-upload');
    fileInput.addEventListener('change', handleFileUpload);
});

function handleFileUpload(event) {
    const file = event.target.files[0];
    const chunkSize = 1024 * 1024; // size of each chunk (1MB)
    let start = 0;

    while (start < file.size) {
        uploadChunk(file.slice(start, start + chunkSize));
        start += chunkSize;
    }
}

function uploadChunk(chunk) {
    const formData = new FormData();
    formData.append('file', chunk);

    // Make a request to the server
    fetch('', {
        method: 'POST',
        body: formData,
    });
}
