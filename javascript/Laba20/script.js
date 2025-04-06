
const teamSpeeds = [5, 8, 13]; 
const backlog = [3, 10, 6]; 
const deadline = new Date('2025-04-23');

function Deadline(teamSpeeds, backlog, deadline) {
    const today = new Date();
    
    let dailyTeamSpeed = 0;
    for (let i = 0; i < teamSpeeds.length; i++) {
        dailyTeamSpeed += teamSpeeds[i];
    }

    let totalBacklogPoints = 0;
    for (let i = 0; i < backlog.length; i++) {
        totalBacklogPoints += backlog[i];
    }

    let daysNeeded = Math.ceil(totalBacklogPoints / dailyTeamSpeed);


    let timeDiff = deadline.getTime() - today.getTime();
    let daysUntilDeadline = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    if (daysNeeded <= daysUntilDeadline) {
        let daysSpare = daysUntilDeadline - daysNeeded;
        console.log(`Всі задачі будуть успішно виконані за ${daysSpare} днів до дедлайну`);
    } else {
        let extraDays = daysNeeded - daysUntilDeadline;
        let extraHours = extraDays * 8;
        console.log(`Команді розробників доведеться витратити додатково ${extraHours} годин після дедлайну, щоб виконати всі завдання`);
    }
}

Deadline(teamSpeeds, backlog, deadline);
