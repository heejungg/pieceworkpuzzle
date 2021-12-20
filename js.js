let nowIndex = 1;
 
 
 const imageslider = document.querySelector('#imageslider');

 const bottomBtn01 = document.querySelector('#imgTo1');
 const bottomBtn02 = document.querySelector('#imgTo2');
 const bottomBtn03 = document.querySelector('#imgTo3');
 const bottomBtn04 = document.querySelector('#imgTo4');

 const leftArrow = document.querySelector('#leftArrow');
 const rightArrow = document.querySelector('#rightArrow');

 bottomBtn01.addEventListener('click',moveA);
 bottomBtn02.addEventListener('click',moveB);
 bottomBtn03.addEventListener('click',moveC);
 bottomBtn04.addEventListener('click',moveD);

 leftArrow.addEventListener('click',moveleft);
 rightArrow.addEventListener('click',moveright);

function moveA()
{
    imageslider.style.transform = 'translate(0px)';
    nowIndex = 1;
}


 
function moveB()
{
    imageslider.style.transform ='translate(-1440px)';
    nowIndex = 2;
}

function moveC()
{
    imageslider.style.transform = 'translate(-2880px)';
    nowIndex = 3;
}

function moveD()
{
    imageslider.style.transform = 'translate(-4320px)';
    nowIndex = 4;
}

function moveleft()
{ 
    if(nowIndex == 1)
    {
      nowIndex ==1;
    }
    else
    {
      nowIndex --;
    }
}

function moveright()
{
     if(nowIndex == 4)
    {
         nowIndex =4;
    }
    else{
        nowIndex ++;
    }
}

function moveSlider(index)
{
 switch(index)
 {
    case 1:
        moveA();
    break;
    case 2:
        moveB();
    break;
    case 3:
        moveC();
    break;
    case 4:
        moveD();
    break;
  }
}

