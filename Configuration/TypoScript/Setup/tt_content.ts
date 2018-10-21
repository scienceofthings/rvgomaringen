# Allow iframes in content elements
lib.parseFunc_RTE.allowTags := addToList(object,param,embed,iframe)

tt_content.uploads.20 {
    renderObj.15.file {
        import = fileadmin/default/templates/images/icons/
        wrap = |.png
    }
# modify linktext of uploads element from filename to description
    renderObj.20.data = file:current:description // file:current:name
    renderObj.30 >

#display file size with labels
        itemRendering.30.bytes.labels = " | kB| MB| GB"
}

#Systemordner fuer Benutzer
tt_content.login.20.hiddenFields.pid.value = 2

