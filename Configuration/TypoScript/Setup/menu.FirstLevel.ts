lib.menufirstlevel = HMENU
lib.menufirstlevel {
    special = list
    special.value = {$pidOfRV}, {$pidOfBikepark}, {$pidOfTSW}
    1 = TMENU
    1 {
        noBlur = 1
        wrap =  <ul class="topbar pull-right hidden-sm hidden-xs">|</ul>

        NO = 1
        NO.allWrap = <li> |</li>
        NO.ATagBeforeWrap = 1

        ACT = 1
        ACT.doNotShowLink = 1

        SPC = 1
        SPC.allWrap = <hr/>
        SPC.doNotShowLink = 1
     }
}
