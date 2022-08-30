// scroll to next page
function scrollTo(targetID)                      
{
const targetPage = document.getElementById(targetID)
targetPage.scrollIntoView({behavior: "smooth"})
}

// interactive barriers
const scroller = document.getElementById('Scroll')
const sword = document.getElementsByClassName('secondBarrierBreaker')
const web = document.getElementsByClassName('secondBarrier')
const rope = document.getElementsByClassName('thirdBarrierBreaker')
const water = document.getElementsByClassName('thirdBarrier')
const lever = document.getElementsByClassName('fourthBarrierBreaker')
const trolley = document.getElementsByClassName('fourthBarrierBreaker2')
const scale = document.getElementsByClassName('progress')
const imagesFromTop = document.getElementsByClassName('fromTop')
const imagesFromDown = document.getElementsByClassName('fromDown')
const leftMap = document.getElementsByClassName('leftText')
const rightMap = document.getElementsByClassName('rightText')
dragElement(document.getElementById(('Barrier1')))
let firstBBxMin = 1235, secondBBxMin = 1350, secondBByMin = 120, secondBByMax = 250, thirdBByMax = 70;
let ropeMin = 60, ropeMax = 80, keyMin = 1100, keyMax = 1356;
checkMediaQuery()

function dragElement(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0, position = 0
  if (document.getElementById(elmnt.id)) {
    document.getElementById(elmnt.id).onmousedown = dragMouseDown
  } else {
    elmnt.onmousedown = dragMouseDown
  }

  function dragMouseDown(e) {
    e = e || window.event
    pos3 = e.clientX
    pos4 = e.clientY
    document.onmouseup = closeDragElement
    document.onmousemove = elementDrag
  }

  function elementDrag(e) {
    e = e || window.event
    pos1 = pos3 - e.clientX
    pos2 = pos4 - e.clientY
    pos3 = e.clientX
    pos4 = e.clientY
    position = elmnt.getBoundingClientRect()
    if (elmnt == document.getElementById('Barrier1') && pos2 == 0)
    {
        if (position.left <= keyMin && pos1 < 0 
        || position.left >= keyMax && pos1 > 0 
        || position.left > keyMin && position.left < keyMax) 
        {
            elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px'
            if (position.left <= firstBBxMin)
            {
                document.onmouseup = null
                document.onmousemove = null
                scroller.classList.remove('firstFall')
                scroller.classList.add('secondFall')
                scrollTo('section1')
                dragElement(document.getElementById(('BBsword')))
                scale[0].style.animation = 'progressLoad 4s'
                scale[0].style.animationFillMode = 'forwards'
            }
        }
    }
    if (elmnt == document.getElementById('BBsword'))
    {
        elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
        elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
        sword[0].style.transform = 'rotate(340deg)'
        
        if (position.left > secondBBxMin 
          && position.top > secondBByMin 
          && position.top < secondBByMax)
        {
          document.onmouseup = null
          document.onmousemove = null
          web[0].style.backgroundImage = 'url(images/Barrier2Image-3.png)'
          scroller.classList.remove('secondFall')
          scroller.classList.add('thirdFall')
          scrollTo('section2')
          dragElement(document.getElementById(('BBrope')))
          document.body.style.backgroundColor = 'black'
          imagesFromTop[0].style.animation = 'fromTop 2s'
          imagesFromTop[0].style.animationFillMode = 'forwards'
          imagesFromDown[0].style.animation = 'fromDown 2s'
          imagesFromDown[0].style.animationFillMode = 'forwards'
          imagesFromTop[1].style.animation = 'fromTop 2s'
          imagesFromTop[1].style.animationFillMode = 'forwards'
          imagesFromDown[1].style.animation = 'fromDown 2s'
          imagesFromDown[1].style.animationFillMode = 'forwards'
        }
    }
    if (elmnt == document.getElementById('BBrope'))
    {
        if (position.top <= ropeMin && pos2 < 0 
        || position.top >= ropeMax && pos2 > 0 
        || position.top > ropeMin && position.top < ropeMax) 
        {
          elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
            if (position.top >= thirdBByMax)
            {
              document.onmouseup = null
              document.onmousemove = null
              rope[0].style.top = '0'
              scroller.classList.remove('thirdFall')
              scroller.classList.add('fourthFall')
              water[0].style.animation = 'waterFall 1.1s'
              water[0].style.animationFillMode = 'forwards'
              leftMap[0].style.animation = 'makeTitle 3s'
              leftMap[0].style.animationFillMode = 'forwards'
              rightMap[0].style.animation = 'makeTitle 3s'
              rightMap[0].style.animationFillMode = 'forwards'
              scrollTo('section3')
              dragElement(document.getElementById(('BBsword')))
            }
        }
    }
  }

  function closeDragElement() {
    document.onmouseup = null
    document.onmousemove = null
    if (elmnt == document.getElementById('BBsword'))
    {
        sword[0].style.transform = "rotate(0deg)";
    }
  }
}
function fourthBarrierBroken()
{
  lever[0].style.backgroundImage = 'url(images/Barrier4ImageON.png)'
  trolley[0].style.animation = 'trolleyRide 1.5s'
  trolley[0].style.animationFillMode = 'forwards'
  trolley[0].style.animationTimingFunction = 'linear'
  scroller.classList.remove('fourthFall')
  scroller.classList.add('trolleyRide')
  setTimeout(cutawayAnimation, 2000)
}

// FINAL PART
function cutawayAnimation()
{
  scroller.classList.remove('trolleyRide')
  scroller.classList.add('cutaway')
}

function openContacts()
{
  if(scroller.classList.contains('cutaway'))
  {
    scroller.classList.remove('cutaway')
    scroller.classList.add('openContacts')
    scroller.innerHTML = 
    '<section class="cutawayText">' + 
    '<span>358465295302</span>' + 
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
    '<span>Savon ammattiopisto</span>' + 
    '</br></br></br></br></br>' + 
    '<p>Oleksandr Priadko</br>Web deweloper</p>' +
    '</br></br></br></br>' + 
    'pryadko34@gmail.com, https://github.com/Eilogr, Kuopio' + 
    '</section>'
  }
}

// MEDIA QUERY 
function checkMediaQuery() {
  let p = window.innerWidth / 1496 
  firstBBxMin *=  p
  secondBBxMin *=  p
  secondBByMin *=  p
  secondBByMax  *=  p
  thirdBByMax *= p

  ropeMin *= p
  ropeMax *= p
  keyMin *= p
  keyMax *= p
}
