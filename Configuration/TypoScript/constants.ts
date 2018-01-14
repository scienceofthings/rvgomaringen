<INCLUDE_TYPOSCRIPT: source="DIR: ./Constants" extensions="ts">

## Konstanten RV Gomaringen
# customcategory=jwmusterprojekt8=jweiland.net Musterprojekt
# customsubcategory=layout=Layout
# customsubcategory=meta=Angaben zur Meta-Navigation
# customsubcategory=menu=Einstellungen für Navigation
# customsubcategory=content=Seiten-IDs
# customsubcategory=basic=Grundeinstellungen

jwmusterprojekt8 {
  # cat = jwmusterprojekt8/menu/a; type = boolean; label = Sprachmenü anzeigen
  showLang = 1

  # cat = jwmusterprojekt8/menu/b; type = options [Horizontale Navigation (Standard)=0,Vertikale Navigation=1, Horizontale und vertikale Navigation=2]; label = Art der Navigation:Wählen Sie den Stil der Navigation aus
  menuType = 0

  # cat = jwmusterprojekt8/menu/c; type = options [Gradient=gradient,Clean=clean,Border=border,Simple=simple]; label = Farbvariante Navigation:Für die Navigation stehen vier verschiedene Farbvarianten zur Verfügung
  colorscheme = clean

  # cat = jwmusterprojekt8/content/a; type = int+; label = LLL:EXT:jwmusterprojekt8/Resources/Private/Language/locallang.xlf:jwmusterprojekt8.rootId
  rootId = 1

  # cat = jwmusterprojekt8/content/b; type = string; label = Page IDs News-Storage:Kommaseparierte Liste von IDs der Seiten, auf der News-Artikel gespeichert sind (Standardwert, kann in den Plugins überschrieben werden)
  newsStartingPoints = 20

  # cat = jwmusterprojekt8/content/c; type = string; label = Page ID News-Dateilseite:ID der Seite mit der News-Detailansicht (Standardwert, kann in den Plugins überschrieben werden)
  newsDetailPid = 4

  # cat = jwmusterprojekt8/content/d; type = string; label = Page ID News-Listenseite:ID der Seite mit der News-Listenansicht (Standardwert, kann in den Plugins überschrieben werden)
  newsListPid = 3

  # cat = jwmusterprojekt8/content/e; type = string; label = LLL:EXT:jwmusterprojekt8/Resources/Private/Language/locallang.xlf:jwmusterprojekt8.searchResultId
  searchformPid = 19

  # cat = jwmusterprojekt8/content/f; type = int+; label = Page ID Seite Footer Inhalte:ID der Seite, welche die Inhalte für den Footer enthält
  footerContentUid = 17

  # cat = jwmusterprojekt8/content/g; type = int+; label = Page ID Ordner Meta-Navigation:ID des Ordners, der die Seiten für die Meta-Navigation enthält
  metaMenuUid = 2

  # cat = jwmusterprojekt8/basic/a; type = string; label = LLL:EXT:jwmusterprojekt8/Resources/Private/Language/locallang.xlf:jwmusterprojekt8.logo
  logoFile = EXT:jwmusterprojekt8/Resources/Public/Images/jweiland_logo.png

  # cat = jwmusterprojekt8/basic/b; type = string; label = LLL:EXT:jwmusterprojekt8/Resources/Private/Language/locallang.xlf:jwmusterprojekt8.companyname
  companyName = Musterfirma

  # cat = jwmusterprojekt8/basic/c; type = int+; label = LLL:EXT:jwmusterprojekt8/Resources/Private/Language/locallang.xlf:jwmusterprojekt8.bgImageWidth
  bgImageWidth = 1600
  # cat = jwmusterprojekt8/basic/d; type = int+; label = LLL:EXT:jwmusterprojekt8/Resources/Private/Language/locallang.xlf:jwmusterprojekt8.bgImageHeight
  bgImageHeight = 300

  # cat = jwmusterprojekt8/basic/e; type = boolean; label = LLL:EXT:jwmusterprojekt8/Resources/Private/Language/locallang.xlf:jwmusterprojekt8.compressCss
  compressCss = 1

  # cat = jwmusterprojekt8/basic/f; type = boolean; label = LLL:EXT:jwmusterprojekt8/Resources/Private/Language/locallang.xlf:jwmusterprojekt8.concatenateCss
  concatenateCss = 1

  # cat = jwmusterprojekt8/basic/g; type = boolean; label = LLL:EXT:jwmusterprojekt8/Resources/Private/Language/locallang.xlf:jwmusterprojekt8.compressJs
  compressJs = 1

  # cat = jwmusterprojekt8/basic/h; type = boolean; label = LLL:EXT:jwmusterprojekt8/Resources/Private/Language/locallang.xlf:jwmusterprojekt8.concatenateJs
  concatenateJs = 1
}
