let nav = 0; //which motnh we are on
let clicked = null; //day we click on
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : []; //array of events: events ot empty array if it doean't exist
console.log(events);


const calendar = document.getElementById('calendar');
const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput'); //event title is name of the Teams
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; 

const hourEventInput = document.getElementById('hourEventInput'); //time of the event
const sportEventInput = document.getElementById('sportEventInput'); //tipe of sport
const cityEvent = document.getElementById('cityEvent'); //name Home Team
const locationEvent = document.getElementById('locationEvent'); //Name Away Team
const lastEvent = document.getElementById('lastEvent'); //Origin Competition



function openModal(event, dateOrId) {
  clicked = dateOrId;
  let eventForDay;

  console.log(dateOrId)

  if(event.target.classList.contains('event')){
    event.stopPropagation(); // this prevents that openModal is called again for the day
    eventForDay = events.find(e => e.id === dateOrId);
    console.log(eventForDay);

  }


  if (eventForDay) {
    document.getElementById('eventText').innerText = eventForDay.title;
    document.getElementById('time').innerText = eventForDay.date;
    document.getElementById('sport').innerText = eventForDay.sport;
    document.getElementById('city').innerText = eventForDay.city;
    document.getElementById('location').innerText = eventForDay.location;
    document.getElementById('last').innerText = eventForDay.last;
    document.getElementById('timeUTC').innerText = eventForDay.timeUTC;

    deleteEventModal.style.display = 'block';
  } else {
    newEventModal.style.display = 'block';
  }

  backDrop.style.display = 'block';
}

function load() { //
  const dt = new Date(); //date object


  if (nav !== 0) { //if we are on the next or before month
    dt.setMonth(new Date().getMonth() + nav);
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();


  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate(); //month is in array starting with january=0, how many days are in the current month, 0 is the last day of the previous month (-1, second to last day of the previous month)

  const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  const paddingDays = weekdays.indexOf(dateString.split(', ')[0]); //padding days empty days before the month start with weekdays

   document.getElementById('monthDisplay').innerText =
    `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`;



  calendar.innerHTML = ''; //clean the calendar days before getting new ones

  for(let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement('div');
    daySquare.classList.add('day');


    const dayString = (i-paddingDays) + '/' +  (month +1) + '/' + year

    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;
      const eventsForDay = events.filter(e => e.date === dayString);

      if (i - paddingDays === day && nav === 0) {
        daySquare.id = 'currentDay';
      }
      
      eventsForDay.forEach(ev => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event'); 
        eventDiv.innerText = ev.title;
        eventDiv.innerText = ev.sport;
        eventDiv.innerText = ev.city;
        eventDiv.innerText = ev.location;
        eventDiv.innerText = ev.last;
        eventDiv.innerText = ev.timeUTC;
        eventDiv.id = ev.id; //random number that identifies the events
        eventDiv.addEventListener('click', ($event) => openModal($event, ev.id));
        daySquare.appendChild(eventDiv);

      })
      daySquare.addEventListener('click', ($event) => openModal($event, dayString));
    } else {
      daySquare.classList.add('padding');
    }

    calendar.appendChild(daySquare);
  }
}

function closeModal() {
  eventTitleInput.classList.remove('error');
  newEventModal.style.display = 'none';
  deleteEventModal.style.display = 'none';
  backDrop.style.display = 'none';
  eventTitleInput.value = '';
  sportEventInput.value = '';
  cityEvent.value = '';
  locationEvent.value = '';
  lastEvent.value = '';
  hourEventInput.value = '';
  clicked = null;
  load();
}



function saveEvent() {

  if (eventTitleInput.value) {
    eventTitleInput.classList.remove('error');

    events.push({
      date: clicked,
      title: eventTitleInput.value,
      sport: sportEventInput.value,
      city: cityEvent.value,
      location: locationEvent.value,
      last: lastEvent.value,
      timeUTC: hourEventInput.value, //this is the value shown
      id: clicked + hourEventInput.value + Math.random(), //to make sure it's always a random number as id

    });

    localStorage.setItem('events', JSON.stringify(events));
    closeModal();
  } else {
    eventTitleInput.classList.add('error');
  }
}

function deleteEvent( ) {
  events = events.filter(e => e.id !== clicked);
  localStorage.setItem('events', JSON.stringify(events));
  closeModal();
  }

function deleteAllEvent() { //delete all the events newly created, not the ones from json
  localStorage.clear();
  location.reload();
  //console.log(events);
}

function initButtons() { //button for the next and back button
  document.getElementById('nextButton').addEventListener('click', () => {
    nav++;
    load();
  });

  document.getElementById('backButton').addEventListener('click', () => {
    nav--;
    load();
  });

  function showEvent() {
    location.replace('/index1.html');
    
  }

  document.getElementById('allEvents').addEventListener('click', () => {
    window.location.href="index.html";
  });

  document.getElementById('deleteAllEvents').addEventListener('click', deleteAllEvent);

  document.getElementById('saveButton').addEventListener('click', saveEvent);
  document.getElementById('cancelButton').addEventListener('click', closeModal);
  document.getElementById('deleteButton').addEventListener('click', deleteEvent);
  document.getElementById('closeButton').addEventListener('click', closeModal);

}

initButtons();
load();

//load the json file with the events

/*
function initialiseCalendar() {
  fetch("sportData.json").then(response => response.json()).then(jsonEvents => {
    jsonEvents.data.forEach(event => { saveJsonEvent(event)
      
    })
    

  })

}

initialiseCalendar();



function saveJsonEvent(event) { //save the event of the json
  const dateEvent = event.dateVenue.split('-'); //get the date
  const dateEvent1 = dateEvent[2].replace(/(^|-)0+/g, "$1") + '/' + dateEvent[1].replace(/(^|-)0+/g, "$1") + '/' + dateEvent[0]; //transform the date in the right format (take off the 0)

  if(events.find(e => e.date === dateEvent1 && e.timeUTC === event.timeVenueUTC && e.location === event.awayTeam.name)) {
    return;
  }

  events.push({
    date: dateEvent1,
    title: event.awayTeam.officialName,
    timeUTC: event.timeVenueUTC,
    sport: event.status,
    city: event.stadium ? event.stadium : '',
    location: event.awayTeam.name,
    last: event.originCompetitionName,
    id: dateEvent1 + event.timeVenueUTC + Math.random(),
  });

  localStorage.setItem('events', JSON.stringify(events));

}
*/

/* if some fields are empty the event are not inserted
  events.push({
    date: dateEvent1,
    title:  event.homeTeam.name + '  vs.  ' + event.awayTeam.name,
    timeUTC: event.timeVenueUTC,
    sport: event.status,
    city: event.homeTeam.officialName, 
    //event.stadium ? event.stadium : '',
    location: event.awayTeam.officialName,
    last: event.originCompetitionName,
    id: dateEvent1 + event.timeVenueUTC + Math.random(),
  });
  */
