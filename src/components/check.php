<?php
$login = filter_var(
    trim($_POST['login']),
    FILTER_SANITIZE_STRING
);
$pass = filter_var(
    trim($_POST['password']),
    FILTER_SANITIZE_STRING
);
$firstName = filter_var(
    trim($_POST['firstName']),
    FILTER_SANITIZE_STRING
);
$lastName = filter_var(
    trim($_POST['lastName']),
    FILTER_SANITIZE_STRING
);
$email = filter_var(
    trim($_POST['email']),
    FILTER_SANITIZE_STRING
);
$phone = filter_var(
    trim($_POST['phone']),
    FILTER_SANITIZE_STRING
);

if (mb_strlen($login) < 5 || mb_strlen($login) > 100) {
    echo "<script>alert('Недопустимая длина логина');</script>";
    exit();
} else if (mb_strlen($pass) < 2 || mb_strlen($pass) > 32) {
    echo "<script>alert('Недопустимая длина логина');</script>";
    exit();
} else if (mb_strlen($firstName) < 5 || mb_strlen($firstName) > 50) {
    echo "<script>alert('Недопустимая длина логина');</script>";
    exit();
} else if (mb_strlen($lastName) < 5 || mb_strlen($lastName) > 50) {
    echo "<script>alert('Недопустимая длина логина');</script>";
    exit();
} else if (mb_strlen($email) < 5 || mb_strlen($email) > 254) {
    echo "<script>alert('Недопустимая длина логина');</script>";
    exit();
} else if (mb_strlen($phone) < 5 || mb_strlen($phone) > 20) {
    echo "<script>alert('Недопустимая длина логина');</script>";
    exit();
}

$mysql = new mysqli('localhost', 'root', '', 'register_bd');
$mysql->query("INSERT INTO `users` (`login`, `pass`, `name`, `surname`, `email`, `tel`)
VALUES('$login', '$pass', '$firstName', '$lastName', '$email', '$phone')");
$mysql->close();
?>