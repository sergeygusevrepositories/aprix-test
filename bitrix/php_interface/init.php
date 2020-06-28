<?php

function pre($array){
    echo '<pre>';
    print_r($array);
    echo '</pre>';
    return;
}

# Подключаем пользовательские классы.

CModule::AddAutoloadClasses(
'', // не указываем имя модуля
    array(
        'Tools' => '/local/classes/Tools.php',
    )
);
