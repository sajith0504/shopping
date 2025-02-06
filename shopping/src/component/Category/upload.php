<?php
// Set the upload directory
$uploadDirectory = 'uploads/';

// Check if a file is uploaded
if ($_FILES['file']['name']) {
    $fileName = basename($_FILES['file']['name']);
    $filePath = $uploadDirectory . $fileName;

    // Check if the file is an image (you can customize this check)
    if (getimagesize($_FILES['file']['tmp_name']) !== false) {
        if (move_uploaded_file($_FILES['file']['tmp_name'], $filePath)) {
            echo json_encode(["message" => "File uploaded successfully", "file" => $fileName]);
        } else {
            echo json_encode(["message" => "Error uploading file"]);
        }
    } else {
        echo json_encode(["message" => "Invalid file type"]);
    }
} else {
    echo json_encode(["message" => "No file uploaded"]);
}
?>
