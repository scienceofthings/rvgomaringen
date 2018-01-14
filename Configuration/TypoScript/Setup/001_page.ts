page = PAGE
page.meta {
    viewport = width=device-width,initial-scale=1
}

page.meta {
    #IE11TileforWindows8.1StartScreen
    msapplication-config = none
    msapplication-TileColor = #ffffff
    msapplication-tooltip = RV Gomaringen
    application-name = RV Gomaringen
    theme-color = #ffffff
}

page.10 = FLUIDTEMPLATE
page.10 {
    partialRootPath = EXT:rvgomaringen/Resources/Private/Partials
    layoutRootPath = EXT:rvgomaringen/Resources/Private/Layouts

    file.stdWrap.cObject = CASE
    file.stdWrap.cObject {
        key.data = pagelayout

    ## Layout Varianten in Templates
        pagets__standard = TEXT
        pagets__standard.value = EXT:rvgomaringen/Resources/Private/Templates/bootstrap-12col.html

    default < .pagets__standard
    }

    variables {
    ##Hauptinhaltsbereich und erste Spalte in Mehrspalter
        col2 < styles.content.get
        col2.select.where = colPos = 0
        col2.stdWrap.ifEmpty.stdWrap.wrap = &nbsp;
    }
}

 
page.config{
      metaCharset = utf-8
      additionalHeaders = Content-Type:text/html;charset=utf-8
}

page.includeCSS {
    10 = EXT:rvgomaringen/Resources/Public/Css/bootstrap.css
}

page.includeJSFooter {

    10 = https://code.jquery.com/jquery-3.2.1.slim.min.js
    10.external = 1
    10.integrity = sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN

    20 = https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js
    20.external = 1
    20.integrity = sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q

    30 = EXT:rvgomaringen/Resources/Public/JavaScript/bootstrap.js

}


