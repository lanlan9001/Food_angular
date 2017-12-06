<?php
$arr = array(
  array(
  "foodImage"=>"uploads/food1.jpg",
  "foodName" => "冬瓜排骨",
  "function" => "美容养颜，补钙。",
  "prohibit" =>"肾病患者，糖尿病患者应该少食或不食。",
  "material"=>"冬瓜、排骨、葱、蒜、生姜",
  "cook"=>array(
   "first"=>"第一步：排骨开水煮10分钟，沸捞出",
   "second"=>"第二步：将冬瓜成块",
   "third"=>"第三步：将冬瓜、排骨、姜末、蒜末、葱末放入锅内，倒入水；水：食材 = 5：1",
  )
  ,
  "store"=>"0"
),
 array(
   "foodImage"=>"uploads/food4.jpg",
   "foodName" => "西芹小炒肉",
   "function" =>"清肠利便、解毒消肿、促进血液循环。",
   "prohibit" =>"贫血者要少食。",
     "material"=>"带叶西芹、五花肉、葱蒜苗、蒜、生姜",
      "cook"=>array(
        "first"=>"第一步：将西芹洗净切成段，叶子一起",
        "second"=>"第二步：将五花肉切成片",
        "third"=>"第三步：将葱蒜苗切成段",
        "fourth"=>"第四步：锅热起来，用葱蒜爆锅",
        "fiveth"=>"第五步：放入五花肉煸炒",
        "sixth"=>"第六步：放入西芹，炒出香味盛盘"
       ),
   "store"=>"1"
 )
,
array(
"foodImage"=>"uploads/food2.jpg",
"foodName" => "红菜头汤",
 "function" =>  "有助抗氧化和通便排毒作用， 常喝有降低胆固醇，消脂排除宿便等功效",
  "prohibit" => "不详",
  "material"=>"红菜头、枸杞、葱、蒜、生姜",
 "cook"=>array(
   "first"=>"第一步：排骨开水煮10分钟，沸捞出",
   "second"=>"第二步：将冬瓜成块",
   "third"=>"第三步：将冬瓜、排骨、姜末、蒜末、葱末放入锅内，倒入水；水：食材 = 5：1",
  ),
"store"=>"0"
),
array(
"foodImage"=>"uploads/food3.jpg",
"foodName" => "海蟹蒸蛋",
 "function" =>"补充多种矿物元素，美容养颜，补钙。",
  "prohibit" =>"海鲜属寒性，胃寒者要少吃。",
  "material"=>"海蟹、鸡蛋、葱、蒜、生姜",
   "cook"=>array(
     "first"=>"第一步：排骨开水煮10分钟，沸捞出",
     "second"=>"第二步：将冬瓜成块",
     "third"=>"第三步：将冬瓜、排骨、姜末、蒜末、葱末放入锅内，倒入水；水：食材 = 5：1",
    ),
 "store"=>"0"

)

);
echo json_encode($arr);
?>