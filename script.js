document.addEventListener('DOMContentLoaded', function() {
    
    // Elements
    const stage1 = document.getElementById('etapa-1');
    const stage2 = document.getElementById('etapa-2');
    const stage3 = document.getElementById('etapa-3');
    const stage4 = document.getElementById('etapa-4');

    const leadForm = document.getElementById('lead-form');
    const quizForm = document.getElementById('quiz-form');
    const nameInput = document.getElementById('nome');
    const resultTitle = document.getElementById('result-title');
    const progressBar = document.getElementById('progress-bar');

    let userName = '';

    // Smooth Scroll for Hero Button
    document.querySelector('.btn-cta').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#cadastro').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });

    // Handle Landing Page Form Submit
    leadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple Validation
        if(nameInput.value.trim() === '') {
            alert('Por favor, preencha seu nome.');
            return;
        }

        userName = nameInput.value.split(' ')[0]; // Get first name
        
        // Transition 1 -> 2
        stage1.classList.remove('active');
        stage1.classList.add('hidden');
        
        stage2.classList.remove('hidden');
        stage2.classList.add('active');
        
        // Scroll to top
        window.scrollTo(0, 0);
    });

    // Handle Quiz Submit
    quizForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Transition 2 -> 3
        stage2.classList.remove('active');
        stage2.classList.add('hidden');
        
        stage3.classList.remove('hidden');
        stage3.classList.add('active'); // Flex display handled in CSS by just removing hidden if class is fullscreen-center
        
        // Start Analysis
        startAnalysis();
    });

    function startAnalysis() {
        let width = 0;
        const interval = setInterval(function() {
            if (width >= 100) {
                clearInterval(interval);
                finishAnalysis();
            } else {
                width++;
                progressBar.style.width = width + '%';
            }
        }, 30); // 30ms * 100 = 3000ms = 3 seconds
    }

    function finishAnalysis() {
        setTimeout(function() {
            // Transition 3 -> 4
            stage3.classList.remove('active');
            stage3.classList.add('hidden');
            
            stage4.classList.remove('hidden');
            stage4.classList.add('active');

            // Set Name
            resultTitle.innerText = `Parabéns, ${userName}!`;

            window.scrollTo(0, 0);
        }, 500);
    }
});
