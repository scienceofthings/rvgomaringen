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
    partialRootPath = EXT:rvgomaringen/Resources/Private/Custom/Partials
    layoutRootPath = EXT:rvgomaringen/Resources/Private/Custom/Layouts

    file.stdWrap.cObject = CASE
    file.stdWrap.cObject {
        key.data = pagelayout

    ## Layout Varianten in Templates
    pagets__12col = TEXT
    pagets__12col.value = EXT:rvgomaringen/Resources/Private/Custom/Templates/bootstrap-12col.html

    pagets__84col = TEXT
    pagets__84col.value = EXT:rvgomaringen/Resources/Private/Custom/Templates/bootstrap-8-4col.html

    pagets__1col_grid = TEXT
    pagets__1col_grid.value = EXT:rvgomaringen/Resources/Private/Custom/Templates/bootstrap-1col-grid.html

    pagets__66col = TEXT
    pagets__66col.value = EXT:rvgomaringen/Resources/Private/Custom/Templates/bootstrap-6-6col.html

    pagets__teaser84col = TEXT
    pagets__teaser84col.value = EXT:rvgomaringen/Resources/Private/Custom/Templates/bootstrap-teaser-and-8-4col.html

    default < .pagets__12col
    }

    variables {
        col2 < styles.content.get
        col2.select.where = colPos=0
        col2.stdWrap.ifEmpty.stdWrap.wrap = &nbsp;

        col3 < styles.content.get
        col3.select.where = colPos=1

        teaser < styles.content.get
        teaser.select.where = colPos=3

        headerimage < styles.content.get
        headerimage.select.where = colPos=2
        headerimage.slide = -1
    }
}

 
page.config{
      metaCharset = utf-8
      additionalHeaders = Content-Type:text/html;charset=utf-8
}

page.includeCSS {
    file1 = EXT:rvgomaringen/Resources/Public/Css/colorbox/colorbox.css
    file2 = EXT:rvgomaringen/Resources/Public/Css/default.css
}

page.includeJSFooter {

    10 = https://code.jquery.com/jquery-3.2.1.slim.min.js
    10.external = 1
    10.integrity = sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN

    20 = https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js
    20.external = 1
    20.integrity = sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q

    30 = EXT:rvgomaringen/Resources/Public/bootstrap337dist/js/bootstrap.js

}


