document.getElementById('reminder-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;
    const activity = document.getElementById('activity').value;

    if (!time) {
        alert('Please select a time');
        return;
    }

    const reminderTime = new Date();
    reminderTime.setHours(...time.split(':'), 0, 0);

    const now = new Date();
    const timeDifference = reminderTime - now;

    if (timeDifference < 0) {
        reminderTime.setDate(reminderTime.getDate() + 1); // Set for the next day
    }

    setTimeout(() => {
        alert(`Reminder: It's time to ${activity}`);
        playSound();
    }, reminderTime - now);

    document.getElementById('status').textContent = `Reminder set for ${activity} on ${day} at ${time}`;
});

function playSound() {
    const audio = new Audio('https://www.soundjay.com/button/beep-07.wav');
    audio.play();
}
document.getElementById('test-sound').addEventListener('click', function() {
    playSound();
});

