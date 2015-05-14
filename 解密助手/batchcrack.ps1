param($csvpath)

Import-CSV -Path $csvpath -header "version","product","domain","licence" |ForEach-Object {
    d:\toolkit\crack $_.version $_.product $_.domain $_.licence false
}

pause

