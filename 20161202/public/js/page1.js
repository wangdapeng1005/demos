window.onload = function() {
    var button = document.querySelector('button')
    // button.addEventListener('click', traggleImg)
}

function traggleImg () {
    var img = document.querySelector('img')
    if (img.style.getPropertyValue('block') === 'block') {
        img.style.display = 'none'
    } else {
        img.style.display = 'block'
    }
}