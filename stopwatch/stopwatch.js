const timeDiv = document.querySelectorAll('span');
const stopElement = document.getElementById('stop');
const startElement = document.getElementById('start');
const resetElement = document.getElementById('reset');

const stopWatch = {
    minutes: 0,
    hours: 0,
    seconds: 0,

    button_map: function(){
        stopElement.addEventListener("click", () => 
        { 
            this.stopWatch();
        });

        startElement.addEventListener("click", () => 
        { 
            this.startWatch();
        });

        resetElement.addEventListener("click", () => 
        { 
            this.reset();
        });
    },

    updateDisplay: function(){
        timeDiv[0].textContent = ('0' + this.hours).slice(-2);
        timeDiv[1].textContent = ('0' + this.minutes).slice(-2);
        timeDiv[2].textContent = ('0' + this.seconds).slice(-2);
    },

    count: function(){

        if(this.seconds > 59){
            this.seconds = 0;
            this.minutes += 1;
        }
        if(this.minutes > 59){
            this.minutes = 0;
            this.hours += 1;
        }
        if(this.hours > 24){
            this.reset();
        }

        this.seconds += 1;

        this.updateDisplay();
    },

    reset: function(){
        this.minutes = 0;
        this.seconds = 0;
        this.hours = 0;
        this.updateDisplay();
        this.stopWatch();
    },

    startWatch: function(){
        if(!this.interval)
        {
            this.interval = true;
            this.timer = setInterval(() =>{
                this.count() }, 1000);
        }
    },
    
    stopWatch: function(){
        clearInterval(this.timer);
        this.interval = false;
    }
};

const watch = Object.create(stopWatch);
watch.updateDisplay();
watch.button_map();
