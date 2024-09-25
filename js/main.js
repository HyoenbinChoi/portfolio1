document.querySelectorAll('a[href^="#"], li[href^="#"').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth', // 부드러운 스크롤
      block: 'start' // 스크롤할 위치 (start: 상단에 맞춤)
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const aside = document.querySelector('main > aside');
  const section0 = document.querySelector('#section0');

  // section0에 마우스를 올리면 aside를 숨김 (hidden 클래스 추가)
  section0.addEventListener('mouseover', function () {
    aside.classList.add('hidden');
  });

  // section0에서 마우스를 벗어나면 aside를 다시 보임 (hidden 클래스 제거)
  section0.addEventListener('mouseout', function () {
    aside.classList.remove('hidden');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const asideBack = document.querySelector('.asideBack');
  const section0 = document.querySelector('#section0');

  section0.addEventListener('mouseover', function () {
    asideBack.classList.add('hidden');
  });

  section0.addEventListener('mouseout', function () {
    asideBack.classList.remove('hidden');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const rightTopMenus = document.querySelectorAll('main > aside > nav > ul > li');  // 여러 li 선택
  const menuWrapper = document.querySelector('main > aside > nav > ul'); 

  // 모든 li에 대해 mouseover와 mouseout 이벤트 추가
  rightTopMenus.forEach(function (menu) {
    menu.addEventListener('mouseover', function () {
      menuWrapper.classList.add('wrapperHeight');
    });

    menu.addEventListener('mouseout', function () {
      menuWrapper.classList.remove('wrapperHeight');
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const rightTopMenus = document.querySelectorAll('main > aside > nav > ul > li');  // 여러 li 선택
  const wrapperWrapper = document.querySelector('.asideBack'); 

  // 모든 li에 대해 mouseover와 mouseout 이벤트 추가
  rightTopMenus.forEach(function (menu) {
    menu.addEventListener('mouseover', function () {
      wrapperWrapper.classList.add('wrapperHeight');
    });

    menu.addEventListener('mouseout', function () {
      wrapperWrapper.classList.remove('wrapperHeight');
    });
  });
});


(function () {
  const spanEl = document.querySelector('header div div span')
  const txt = ['HYEONBIN CHOI', 'ISTP', 'MULTIMEDIA CREATOR', 'SCRIPTER', 'DEVELOPER']
  let index = 0;
  let currentTxt = txt[index].split('')

  function writeTxt() {
    spanEl.textContent += currentTxt.shift()
    // 배열요소를 앞에서부터 하나씩 출력
    // shift() : 배열 맨 앞 요소를 추출하고 추출한 요소를 원본 배열에서 삭제

    if (currentTxt.length !== 0) { // length 길이 ==같다 !==같지않다
      //아직 출력할 게 남아있다.
      setTimeout(writeTxt, Math.floor(Math.random() * 100))
    } else {
      // 배열에 있는 모든 요소들이 모전부 출력됨 => 지우는 함수 실행
      currentTxt = spanEl.textContent.split('')

      setTimeout(deleteTxt, 3000) // deteTxt 함수를 3초 후에 실행해줘
    }
  }
  writeTxt()

  function deleteTxt() {
    currentTxt.pop()
    // pop() : 배열 요소를 끝에서부터

    spanEl.textContent = currentTxt.join('')

    if (currentTxt.length !== 0) {
      setTimeout(deleteTxt, Math.floor(Math.random() * 100))
    } else {
      // 다음 문장으로 넘어가기
      index = (index + 1) % txt.length
      currentTxt = txt[index].split('')
      writeTxt()
    }
  }
})()

