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


//greet
var greetButton = document.querySelector('#greetBtn')
greetButton.addEventListener('click',()=>{
    var toSpeak = new SpeechSynthesisUtterance("Hi,Welcome to McDonald's how may I help you today");
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
var elseButton = document.querySelector('#elseBtn')
elseButton.addEventListener('click',()=>{
    var toSpeak = new SpeechSynthesisUtterance("Would you like anything else from the menu?");
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth.speak(toSpeak);
})

//bye
var mealButton = document.querySelector('#mealBtn')
mealButton.addEventListener('click',()=>{
    var toSpeak = new SpeechSynthesisUtterance("Would you like to make it a meal");
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
var nicDayButton = document.querySelector('#niceDayBtn')
nicDayButton.addEventListener('click',()=>{
    var toSpeak = new SpeechSynthesisUtterance("Here is your reciept, Thank you for ordering from McDonald's, Have a nice day.");
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
    var toSpeak = new SpeechSynthesisUtterance("Your  order is displayed here, would that be all?");
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