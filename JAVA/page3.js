
function caloriesNeededFemale(we, he, ag, value) {
  let cal = (655.1 + (4.35 * we) + (4.7 * he) - (4.7 * ag)) * value;
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
  let ans = caloriesNeededFemale(w, h, a, value);
  console.log(ans);
  let aidan = checkDiet(ans);
  console.log(aidan);
  localStorage.setItem('aidan', aidan);
  
});



