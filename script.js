const question_sections= document.querySelectorAll('.question-section');

question_sections.forEach(question_section => {
    const icon= question_section.querySelector('.icon');
    const answer= question_section.querySelector('.answer');

    question_section.addEventListener('click',()=>{
        icon.classList.toggle('active');
        answer.classList.toggle('active');
    })
})