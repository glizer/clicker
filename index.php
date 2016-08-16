<?php
$current_points = 123;
$actions = array(
    0 => array(
        'id' => 145,
        'title' => 'Test 1',
        'rest_time' => 0,
        'recovery_time' => 15,
        'points' => 10,
    ),

    1 => array(
        'id' => 146,
        'title' => 'Test 2',
        'rest_time' => 428,
        'recovery_time' => 660,
        'points' => 20,
    ),

    2 => array(
        'id' => 147,
        'title' => 'Test 3',
        'rest_time' => 0,
        'recovery_time' => 480,
        'points' => 30,
    ),

    3 => array(
        'id' => 148,
        'title' => 'Test 4',
        'rest_time' => 10,
        'recovery_time' => 5,
        'points' => 1,
    ),
);
include 'template.html';
?>