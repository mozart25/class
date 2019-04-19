const thisIsButton = document.getElementsByClassName('login-btn')[0];

thisIsButton.addEventListener('click', function() {
  const id = document.getElementById('id').value;
  const password = document.getElementById('password').value;
  
  if (!id && !password) {
    alert('아이디랑 비밀번호 두개를 잃어버리다니!!');
    return;
  } else if (!id) {
    alert('아이디 입력 안한거 알어?!');
    return;
  } else if (!password) {
    alert('비밀번호 까먹었음?!');
    return;
  }  

  alert('로그인 성공!!');
});

const thisIsPw = document.getElementById('password');
const thisIsCode = document.getElementById('code');

thisIsPw.addEventListener('keydown', function(e) {
  thisIsCode.innerHTML = e.keyCode;
});

const thisIsRePw = document.getElementById('re-password');
thisIsRePw.addEventListener('keyup', function() {
  const password = document.getElementById('password').value;
  const rePassword = document.getElementById('re-password').value; 
  if (password != rePassword) {
    alert('비밀번호가 일치하지 않습니다.');

  } else {
    alert(' ');

  }
});