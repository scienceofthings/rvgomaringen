[{$pidOfRV} in tree.rootLineIds]
lib.header = IMAGE
lib.header{
    file = EXT:rvgomaringen/Resources/Public/Images/Header/headerRvBg.png
    altText = Logo RV Gomaringen
    stdWrap.typolink.parameter = {$pidOfRV}
    params = class="img-responsive img-content"
}
[END]

[{$pidOfTSW} in tree.rootLineIds]
lib.header = IMAGE
lib.header{
    file = EXT:rvgomaringen/Resources/Public/Images/Header/headerTswBg.png
    altText = Logo Team Steinlach Wiesaz
    stdWrap.typolink.parameter = {$pidOfTSW}
    params = class="img-responsive img-content"
}
[END]

[{$pidOfBikepark} in tree.rootLineIds]
lib.header = IMAGE
lib.header{
    file = EXT:rvgomaringen/Resources/Public/Images/Header/headerBikeparkBg.png
    altText = Logo Bikepark Gomaringen
    stdWrap.typolink.parameter = {$pidOfBikepark}
    params = class="img-responsive img-content"
}
[END]