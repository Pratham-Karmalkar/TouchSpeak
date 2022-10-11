var txtInput = document.querySelector('#txtInput');
var voiceList = document.querySelector('#voiceList');
var btnSpeak = document.querySelector('#btnSpeak');
var synth = window.speechSynthesis;
var voices = [];


//emergency
var emergencyButton = document.querySelector('#emergencyBtn')
emergencyButton.addEventListener('click',()=>{
    var toSpeak = new SpeechSynthesisUtterance("There is an emergency, I need urgent help");
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth.speak(toSpeak);
})


//help/assistance
var assistButton = document.querySelector('#helpBtn')
assistButton.addEventListener('click',()=>{
    var toSpeak = new SpeechSynthesisUtterance("Can I get some help with this task");
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth.speak(toSpeak);
})


//do not understand
var noUnderstandButton = document.querySelector('#noUnderstandBtn')
noUnderstandButton.addEventListener('click',()=>{
    var toSpeak = new SpeechSynthesisUtterance("I didn't understand what you said, can you please repeat");
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth.speak(toSpeak);
})


//greet
var greetButton = document.querySelector('#greetBtn')
greetButton.addEventListener('click',()=>{
    var toSpeak = new SpeechSynthesisUtterance("Hello, nice to meet you");
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth.speak(toSpeak);
})

//bye
var byeButton = document.querySelector('#byeBtn')
byeButton.addEventListener('click',()=>{
    var toSpeak = new SpeechSynthesisUtterance("Goodbye, nice meeting you");
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth.speak(toSpeak);
})


//yes
var yesButton = document.querySelector('#yesBtn')
yesButton.addEventListener('click',()=>{
    var toSpeak = new SpeechSynthesisUtterance("YES");
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth.speak(toSpeak);
})

//no
var noButton = document.querySelector('#noBtn')
noButton.addEventListener('click',()=>{
    var toSpeak = new SpeechSynthesisUtterance("NO");
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth.speak(toSpeak);
})


//name
var nameButton = document.querySelector('#nameBtn')
nameButton.addEventListener('click',()=>{
    var toSpeak = new SpeechSynthesisUtterance("What is your name?");
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth.speak(toSpeak);
})

//name
var goodButton = document.querySelector('#everyThingGoodBtn')
goodButton.addEventListener('click',()=>{
    var toSpeak = new SpeechSynthesisUtterance("Is everything good?");
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth.speak(toSpeak);
})



PopulateVoices();
if(speechSynthesis !== undefined){
    speechSynthesis.onvoiceschanged = PopulateVoices;
}

btnSpeak.addEventListener('click', ()=> {
    var toSpeak = new SpeechSynthesisUtterance(txtInput.value);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth.speak(toSpeak);
});

function PopulateVoices(){
    voices = synth.getVoices();
    var selectedIndex = voiceList.selectedIndex < 0 ? 4 : voiceList.selectedIndex;
    voiceList.innerHTML = '';
    voices.forEach((voice)=>{
        var listItem = document.createElement('option');
        listItem.textContent = voice.name;
        listItem.setAttribute('data-lang', voice.lang);
        listItem.setAttribute('data-name', voice.name);
        voiceList.appendChild(listItem);
    });

    voiceList.selectedIndex = selectedIndex;
}