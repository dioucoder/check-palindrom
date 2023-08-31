const form = document.querySelector('form'),
    btnSubmit = document.querySelector('button'),
    input = document.querySelector('#wordTestInput');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (input.value.trim() === "") {
        swal("Champ requis !", "Hey l'ami ! entrer quelques choses ☻", "warning");
        e.preventDefault();
    } else {
        let wordReversed = input.value.split('').reverse().join('').toLowerCase(),
            initialWord = input.value.toLowerCase();

        if (initialWord === wordReversed) {
            swal("Oui", `*— ${input.value} —*   est un palindrom `, "success");
        } else {
            swal("Non", `*— ${input.value} —*   n'est un palindrom`, "error");
        }
    }

});