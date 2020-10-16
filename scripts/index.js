// Leonardo Narita (SP3022498)

function hideList(list) {
    var page = document.getElementById(list)

    if(page.style.display !== 'none')
        page.style.display = 'none';
    else
        page.style.display = 'block';
}
