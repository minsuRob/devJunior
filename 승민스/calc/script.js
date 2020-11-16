//html내의 id 값을 기준으로 html 정보를 가져와서 변수안에 담음.
var formulaInput = document.getElementById("formula-input");//1+1
var calcHistDiv = document.getElementById("calc-history");

// "Enter" 클릭시 calculate() 호출하도록 Event 처리
formulaInput.addEventListener("keyup", function(e) {
  if (e.code === "Enter")
    calculate();
});

function calculate () {

  // 입력칸의 문자열이 사칙연산 형식이 맞는지 확인
  var fm = formulaInput.value;
  var formulaRegex = /^\d+(.\d+)?[+\-*/]{1}\d+(.\d+)?$/; // 정규식
  var formulaValid = formulaRegex.test(fm);

  var resultText = "";
  if (formulaValid) {
    // 형식에 맞을 시 식을 계산하고 결과 문자열을 설정
    var answer;
    eval('answer=' + fm); // 1+1 
    resultText = fm + " = "; // 1+1=2
    resultText += (answer % 1 > 0 ? answer.toFixed(2) : answer.toString());
    
    

// calc-history 상자에 넣을 또 다른 상자를 생성하고 내용을 설정한 뒤 삽입
  var resultDiv = document.createElement("DIV");
  resultDiv.appendChild(document.createTextNode(resultText));
  if (!formulaValid)
    resultDiv.classList.add("invalid");
  calcHistDiv.insertBefore(resultDiv, calcHistDiv.firstChild);
  }
  else{
      alert('형식에 맞지 않습니다. 다시 한번 입력해주세요');
  }

  // 입력칸은 빈칸으로
  formulaInput.value = "";
}