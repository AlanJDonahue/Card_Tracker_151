const checkboxes = document.querySelectorAll('input[type="checkbox"]');

function save() {
    for (const checkbox of checkboxes) {
        checkbox.addEventListener('change', () => {
            localStorage.setItem(checkbox.id, checkbox.checked)
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    for (const checkbox of checkboxes) {
        if (localStorage.getItem(checkbox.id) === 'true') {
            checkbox.checked = true;
        }
    }
})

save();