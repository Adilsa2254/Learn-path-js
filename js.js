const lessonForm = document.getElementById('lessonForm');
const lessonInput = document.getElementById('lessonInput');
const lessonList = document.getElementById('lessonList');
const totalCount = document.getElementById('totalCount');
const completedCount = document.getElementById('completedCount');
const pendingCount = document.getElementById('pendingCount');

let lessons = [];

function renderLessons() {
    lessonList.innerHTML = '';

    if (lessons.length === 0) {
        const empty = document.createElement('p');
        empty.className = 'empty-state';
        empty.textContent = 'Belum ada pelajaran. Tambahkan materi yang ingin kamu lacak.';
        lessonList.appendChild(empty);
    } else {
        lessons.forEach((lesson, index) => {
            const item = document.createElement('div');
            item.className = 'lesson-item';

            const title = document.createElement('p');
            title.textContent = lesson.text;
            if (lesson.done) title.classList.add('completed');

            const actions = document.createElement('div');
            actions.className = 'lesson-actions';

            const toggleButton = document.createElement('button');
            toggleButton.textContent = lesson.done ? 'Belum' : 'Selesai';
            toggleButton.addEventListener('click', () => toggleLesson(index));

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Hapus';
            removeButton.addEventListener('click', () => removeLesson(index));

            actions.appendChild(toggleButton);
            actions.appendChild(removeButton);
            item.appendChild(title);
            item.appendChild(actions);
            lessonList.appendChild(item);
        });
    }

    updateStats();
}

function updateStats() {
    const total = lessons.length;
    const completed = lessons.filter(item => item.done).length;
    const pending = total - completed;

    totalCount.textContent = total;
    completedCount.textContent = completed;
    pendingCount.textContent = pending;
}

function addLesson(text) {
    if (!text.trim()) return;

    lessons.push({ text: text.trim(), done: false });
    lessonInput.value = '';
    renderLessons();
}

function toggleLesson(index) {
    lessons[index].done = !lessons[index].done;
    renderLessons();
}

function removeLesson(index) {
    lessons.splice(index, 1);
    renderLessons();
}

lessonForm?.addEventListener('submit', event => {
    event.preventDefault();
    addLesson(lessonInput.value);
});

renderLessons();
