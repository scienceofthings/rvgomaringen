#frames for content
tt_content.stdWrap.innerWrap.cObject{
    44 =< tt_content.stdWrap.innerWrap.cObject.default
    44.20.10.value = col-md-2
    45 =< tt_content.stdWrap.innerWrap.cObject.default
    45.20.10.value = col-md-3
    46 =< tt_content.stdWrap.innerWrap.cObject.default
    46.20.10.value = col-md-4 col-sm-6
    47 =< tt_content.stdWrap.innerWrap.cObject.default
    47.20.10.value = col-md-6
    48 =< tt_content.stdWrap.innerWrap.cObject.default
    48.20.10.value = col-md-12 clearfix
}




tt_content.textmedia.settings.responsive_image_rendering.layoutKey = srcset


tt_content.textmedia {
    settings {
        responsive_image_rendering {
            layoutKey = srcset

            sourceCollection {
                large {
                    dataKey = desktop
                    width = 1140m
                    srcset = 1140w
                    sizes = (min-width: 1140px) 1140px
                }

                medium {
                    dataKey = table
                    width = 940m
                    srcset = 940w
                    sizes = (min-width: 940px) 940px
                }

                small {
                    dataKey = tablet-small
                    width = 720m
                    srcset = 720w
                    sizes = 100vw
                }

            }
        }
    }
}

