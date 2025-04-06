
document.querySelector('.tabs-title.active').addEventListener('click', function() {
    document.querySelector('.akali').style.display = 'block';

    document.querySelectorAll('.anivia, .draven, .garen, .katarina').forEach(function(element) {
        element.style.display = 'none';
    });
});

document.querySelector('.tabs-title.first').addEventListener('click', function() {
    document.querySelector('.anivia').style.display = 'block';

    document.querySelectorAll('.akali, .draven, .garen, .katarina').forEach(function(element) {
        element.style.display = 'none';
    });
});

document.querySelector('.tabs-title.second').addEventListener('click', function() {
    document.querySelector('.draven').style.display = 'block';

    document.querySelectorAll('.akali, .anivia, .garen, .katarina').forEach(function(element) {
        element.style.display = 'none';
    });
});

document.querySelector('.tabs-title.third').addEventListener('click', function() {
    document.querySelector('.garen').style.display = 'block';

    document.querySelectorAll('.akali, .anivia, .draven, .katarina').forEach(function(element) {
        element.style.display = 'none';
    });
});

document.querySelector('.tabs-title.fourth').addEventListener('click', function() {
    document.querySelector('.katarina').style.display = 'block';

    document.querySelectorAll('.akali, .anivia, .draven, .garen').forEach(function(element) {
        element.style.display = 'none';
    });
});
