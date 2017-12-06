<?php

$arr = array(
  array("foodName" => "   冬瓜排骨"),
  array( "foodName" => "       西芹小炒肉"),
  array("foodName" => "      红菜头汤"),
  array("foodName" => "   海蟹蒸蛋"),
  array("foodName" => "  西红柿炒鸡蛋"),
  array("foodName" => "  清蒸鲈鱼"),
  array("foodName" => "  麻婆大侠"),
  array("foodName" => "     煎饼果子"),
  array("foodName" => "酸辣粉"),
  array("foodName" => "担担面"),
  array("foodName" => "炒河粉"),
  array("foodName" => "火锅"),
  array("foodName" => "烧烤"),
  array("foodName" => "凉粉儿"),
  array("foodName" => "包子"),
  array("foodName" => "土豆丝"),
  array("foodName" => "蛋炒饭"),
  array("foodName" => "鱼香茄条"),
  array("foodName" => "腊肉饭"),
  array("foodName" => "小米粥"),
  array("foodName" => "地三鲜"),
  array("foodName" => "饺子"),
  array("foodName" => "打卤面"),
  array("foodName" => "清蒸鱼"),
  array("foodName" => "排骨豆角"),
  array("foodName" => "大米饭"),
  array("foodName" => "西葫芦炒肉"),
  array("foodName" => "黄焖鸡米饭"),
  array("foodName" => "海带鱼"),
  array("foodName" => "吃鸡"),
  array("foodName" => "鸡翅"),
  array("foodName" => "农家小炒肉"),
  array("foodName" => "蒜香排骨"),
  array("foodName" => "馅饼"),
  array("foodName" => "砂锅面"),
  array("foodName" => "土豆粉儿"),
  array("foodName" => "打卤面"),
  array("foodName" => "热汤面"),
  array("foodName" => "打包饭"),
  array("foodName" => "锅包肉")
);

$foodName = [];
foreach($arr as $key=>$value){
    $foodName[] = $value['foodName'];
}

echo json_encode($foodName);


?>