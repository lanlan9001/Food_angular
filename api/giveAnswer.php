<?php

$arr = array(
  array("foodName" => "  冬瓜排骨"),
  array( "foodName" =>" 西芹小炒肉"),
  array("foodName" => "  红菜头汤"),
  array("foodName" => "  海蟹蒸蛋"),
  array("foodName" => "  西红柿炒鸡蛋"),
  array("foodName" => "  清蒸鲈鱼"),
  array("foodName" => "  麻婆大侠"),
  array("foodName" => "  煎饼果子"),
  array("foodName" => "  酸辣粉"),
  array("foodName" => "  担担面"),
  array("foodName" => "  炒河粉"),
  array("foodName" => "  火锅"),
  array("foodName" => "  烧烤"),
  array("foodName" => "  凉粉儿"),
  array("foodName" => "  包子"),
  array("foodName" => "  土豆丝"),
  array("foodName" => "  蛋炒饭")

);

$foodName = [];
foreach($arr as $key=>$value){
    $foodName[] = $value['foodName'];
}

$answer = array_rand($foodName,1);

echo $foodName[$answer];

?>