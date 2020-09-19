let lang;
lang = 'en';
if (lang === 'ru') {
  console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
} else if (lang === 'en') {
  console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}

switch (lang) {
  case 'ru':
    console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
    break;
  
  case 'en': 
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
  break;

  default: console.log('Не выбран язык');
    break;
}

let week = [lang === 'ru'? ['Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье'] :
 ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday']];

 console.log(week);

 let namePerson = 'Lnztk';

 namePerson === 'Артем' ? console.log('Директор') : namePerson === 'Максим' ? console.log('преподаватель') : console.log('студент');