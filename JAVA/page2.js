
function caloriesNeededMale(we, he, ag, value) {
  let cal = (66 + (6.3* we) + (12.7 * he) - (6.67 * ag)) * value;
  return cal;
}


function checkDiet(local) {
  let calorie;
  const radios = document.getElementsByName('diet');
  let selectedColor;

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      selectedColor = radios[i].value;
      break;
    }
  }

  if (selectedColor === 'cutting') {
    calorie = local - 350;
  } else if (selectedColor === 'bulking') {
    calorie = local + 350;
  } else if (selectedColor === 'maintaining') {
    calorie = local;
  } else {
    console.log('Please select a category');
  }
  console.log(calorie);
  return calorie;
}


const formDetails = document.getElementById('form');
formDetails.addEventListener('submit', async (ev) => {
  ev.preventDefault();
  let w = document.getElementById('weight').value;
  console.log(w);
  let h = document.getElementById('height').value;
  console.log(h);
  let a = document.getElementById('age').value;
  console.log(a);
  const accommodationSelect = document.getElementById('list');
  const value = accommodationSelect.value;
  console.log(value);
  let ans = caloriesNeededMale(w, h, a, value);
  console.log(ans);
  let akash = checkDiet(ans);
  console.log(akash);
  localStorage.setItem('akash', akash);
  
});




