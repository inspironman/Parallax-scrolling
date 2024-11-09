function initButtonEffects() {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        button.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);

            switch (this.id) {
                case 'boarding-pass-btn':
                    window.location.href = 'boarding-pass.html';
                    break;
                case 'web-checkin-btn':
                    window.location.href = 'web-checkin.html';
                    break;
                case 'passenger-info-btn':
                    console.log("Opening Passenger Information Form");
                    break;
                case 'safety-regulations-btn':
                    alert("Displaying Safety Regulations...");
                    break;
                default:
                    console.log("Button clicked:", this.id);
                    break;
            }
        });
    });
}
function addFloatingRocks() {
    const skySection = document.querySelector('#home');  
    
    for (let i = 1; i <= 12; i++) {  
        const rock = document.createElement('div');
        rock.className = `rock rock-${i}`;
        rock.style.left = `${Math.random() * 100}%`;
        rock.style.top = `${Math.random() * 50 + 10}%`;
        
        skySection.appendChild(rock);
    }
}

document.addEventListener('DOMContentLoaded', addFloatingRocks);
