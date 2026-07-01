(function() {
    // Initialize EmailJS properly with only the public key (as a string)
    emailjs.init("_4mfIBVN8-eVLp5TB"); // Public key goes here directly
})();

const feedbackMessage = document.getElementById('feedback-message');

function ShowFeedback(message, feedbackType){
    
    document.getElementById('feedback-container').style.display = 'flex';

    feedbackMessage.innerHTML = message;

    if(feedbackType === "error"){
        feedbackMessage.style.color = "red";
    }

    setTimeout(()=>{document.getElementById('feedback-container').style.display = 'none';}, 3000)
}

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        console.log('Test');
        emailjs.sendForm('service_twueqwa', 'template_et7pq2j', this)
            .then(() => {
                ShowFeedback('Thank you for your message.<br> I will send my response to the email you provided.', 'success');
                this.reset(); // Clear the form after success
            }, (error) => {
                ShowFeedback('Sorry for the inconvenience. Kindly try again.','error');
                alert('FAILED...', error);
            });
    });
}

document.getElementById('close-feedback-modal').addEventListener(onclick,()=>{
    feedbackMessage.style.direction = 'none';
})

window.addEventListener('scroll', () => {
    let navigationPosition = document.getElementById('navigation-container').offsetHeight;
    let heroPosition = document.getElementById('hero').offsetHeight;
    let aboutMe = document.getElementById('about-me-container').offsetHeight;
    let project = document.getElementById('project-container').offsetHeight;
    let contact = document.getElementById('contact-container').offsetHeight;

    /*
    if (window.scrollY > navigationPosition) {
        document.getElementById('navigation-container').style.backgroundColor = 'var(--primary-background-color)'; //
    } else {
        document.getElementById('navigation-container').style.backgroundColor = 'transparent';
    }*/

    if (window.scrollY < heroPosition - navigationPosition) {
        document.getElementById('home').style.borderBottom = '4px solid var(--color-secondary)';
    } else {
        document.getElementById('home').style.borderBottom = '4px solid var(--primary-background-color)';
    }

    if (window.scrollY < heroPosition + project && window.scrollY > heroPosition - navigationPosition) {
        document.getElementById('projects').style.borderBottom = '4px solid var(--color-secondary)';
    } else {
        document.getElementById('projects').style.borderBottom = '4px solid var(--primary-background-color)';
    }

    if (window.scrollY > heroPosition + project + navigationPosition && window.scrollY < aboutMe + heroPosition + project - navigationPosition) {
        document.getElementById('about-me').style.borderBottom = '4px solid var(--color-secondary)';
    } else {
        document.getElementById('about-me').style.borderBottom = '4px solid var(--primary-background-color)';
    }

    if (window.scrollY > aboutMe + heroPosition + project - navigationPosition - 200) {
        document.getElementById('contact').style.borderBottom = '4px solid var(--color-secondary)';
    } else {
        document.getElementById('contact').style.borderBottom = '4px solid var(--primary-background-color)';
    }
})

   
