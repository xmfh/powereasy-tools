param($path)

$descriptionPath = $path+"\WebSite\˵��.txt"
$dllFullPath =  $path+"\WebSite\bin\PowerEasy.Foundation.Security.dll"
tf add $descriptionPath
tf add $dllFullPath
tf checkin 