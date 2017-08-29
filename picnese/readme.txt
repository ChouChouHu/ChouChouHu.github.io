



2017/0



member 頁面 include 了兩個 js 套件
1. select2
2. scroll-up-bar

include 的順序需要為 jquery -> jquery.min -> scroll-up -> select2 -> （置尾）<script>$("#topbar").scrollupbar();</script>


有一些 table 的欄位在手機不會顯示
他們有一個 class 叫 desktop