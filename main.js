const statusMap = {
    'On-Duty': 'statusOn',
    'Available': 'statusAvail',
    'Traffic Stop': 'statusTraffic',
    'Busy': 'statusBusy',
    'Off-Duty': 'statusOff',
    'Panic Alarm': 'statusPanic',
};

const statusButtons = Object.values(statusMap).map((status) =>
    document.getElementById(status)
);

const statusCurrent = document.getElementById('statusCurrent');
const callCurrent = document.getElementById('callCurrent');

let currentStatus = 'Not Set';
let currentCall = '';
let currentCallNumber = 'Call Number' + ' ' + 1234;
let currentDept = 'Police';


function updateStatusButtons() {
    statusButtons.forEach((button) => (button.style.backgroundColor = ''));
    if (currentDept === 'Police' && statusMap.hasOwnProperty(currentStatus)) {
        const buttonId = statusMap[currentStatus];
        const button = document.getElementById(buttonId);
        button.style.backgroundColor =
            currentStatus === 'Panic Alarm' ? 'red' : 'darkgreen';
        button.style.transition = 'background-color 0.3s ease-in-out';
    } else if (currentDept === 'Sheriff' && statusMap.hasOwnProperty(currentStatus)) {
        const buttonId = statusMap[currentStatus];
        const button = document.getElementById(buttonId);
        button.style.backgroundColor =
            currentStatus === 'Panic Alarm' ? 'red' : 'green';
        button.style.transition = 'background-color 0.3s ease-in-out';
    }
}

function changeStatus(statusText) {
    statusCurrent.textContent = statusText;
    currentStatus = statusText;
    updateStatusButtons();
    if (currentStatus === 'Panic Alarm') {
        mainBody.classList.add('panicBackground')
    } else mainBody.classList.remove('panicBackground')
    console.log(currentStatus)
}

updateStatusButtons();

changeDept = (activeDept) => {
    deptSelect = document.getElementById('deptSelect')
    mainBody = document.getElementById('mainBody')

    if (activeDept === 'Police') {
        mainBody.classList.remove('sheriffBackground')
        mainBody.classList.remove('stateBackground')
        document.getElementById("deptLogo").src = "../images/LSPDlogo.webp";
        document.title = 'Los Santos Police Dept MDT'
        currentDept = 'Police'

    } else if (activeDept === 'Sheriff') {
        mainBody.classList.add('sheriffBackground')
        mainBody.classList.remove('stateBackground')
        document.getElementById("deptLogo").src = "../images/bcsoLogo.png";
        document.title = 'Blaine County Sheriffs Office MDT'
        currentDept = 'Sheriff'
    } else {
        mainBody.classList.add('stateBackground')
        document.getElementById("deptLogo").src = "../images/sasp.png";
        document.title = 'San Andreas State Police MDT'
        currentDept = 'State Police'
    }
}

const clearNote = document.getElementById('clearNote')
const saveNote = document.getElementById('saveNote');
const sendNote = document.getElementById('sendNote')
const textarea = document.getElementById('myTextarea');

saveNote.addEventListener('click', () => {
    const text = textarea.value;
    const filename = `${currentCallNumber}.txt`;

    if (textarea.value === '') {
        alert('Error: Scratchpad empty. File not downloaded')
    } else {
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
});

clearNote.addEventListener('click', () => {
    textarea.value = ''
})

const openPopup = (popupType) => {
    document.getElementById(popupType).style.display = "flex";
    if (currentDept === 'Sheriff') {
        document.getElementById('vehiclePopupContent').style.backgroundImage = 'linear-gradient(to bottom, #37653d, #316038, #2b5b32, #24562d, #1e5128)';
    } else if (currentDept === 'State Police') {
        document.getElementById('vehiclePopupContent').style.backgroundImage = 'linear-gradient(to top, #877078, #7e6870, #756168, #6d5960, #645258)';
    } else {
        document.getElementById('vehiclePopupContent').style.backgroundImage = 'linear-gradient(to top, #2c7bf4, #0081e8, #0084d9, #0085c7, #0085b5, #0c7ea7, #177799, #20708b, #1c627d, #18546f, #154761, #113a53)';
    }
};

const closePopup = (popupType) => {
    document.getElementById(popupType).style.display = "none";
}