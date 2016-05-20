<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>On Successful submittal of Registration Form</title>
    <style>
        div {
            width: 600px;
            margin: 200px auto 0;
            color: green;
            font-weight: bold;
            font-size: 40px;
        }
    </style>
</head>
<body>
    <div>
        <p>Welcome <?php echo $_POST["username"];?>,</p>
        <p>Thank you for registering with us.</p>
    </div>
</body>
</html>