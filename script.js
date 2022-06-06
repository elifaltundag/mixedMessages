// RANDOM FACT GENERATOR FUNCTIONS

// Choose a random verb
function chooseVerb() {
    const verbs = ['is', 'is not', 'can', 'cannot'];
    const chosenVerb = verbs[Math.floor(Math.random() * verbs.length)];
    return chosenVerb;
}


// Choose the possible situations depending on the chosen verb: helper function
function chooseSituation(vrb) {
    let possibleSituations = [];

    const isSits = [
        'a speech fluency disorder',
        'different for every stutterer',
        'based on yet to be discovered neurophysioloical reasons',
    ];

    const isNotSits = [
        'a disease',
        'a habit',
        'anyone\'s fault',
        'psychological'
    ];
    
    const canSits = [
        'be taken under control',
        'be genetic',
        'be progressional',
        'be accompanied by secondary behaviors',
    ];

    const cannotSits = [
        'be treated 100% after adolescence',
        'be treated by singing',
        'be treated by reading outloud',
        'be learned'
    ];
    

    // Assign the corresponding situations
    switch (vrb) {
        case 'is':
            possibleSituations = isSits;
            break;
        
        case 'is not':
            possibleSituations = isNotSits;
            break;

        case 'can':
            possibleSituations = canSits;
            break;
        
        case 'cannot':
            possibleSituations = cannotSits;
            break;

        default:
            possibleSituations = [];
            break;
    }
    let chosenSituation = possibleSituations[Math.floor(Math.random() * possibleSituations.length)];
    return chosenSituation;
}

// Choose a random advice
function chooseAdvice() {
    const advices = [
        'their words or sentences were not completed',
        'people kept eye contact',
        'others just had just a little more patience listening to them',
        'people did not make suggestions like "take a deep breath", "calm down", "talk slowly"'
    ];

    const chosenAdvice = advices[Math.floor(Math.random() * advices.length)];
    return chosenAdvice;
}

// Get the first sentence among static messages randomly
function getStaticMessage() {
    const staticMessages = [
        "Stuttering has many parameters affecting its manifestation.",
        "There is not a consensus on what stuttering is or is not.",
        "1% of the population is assummed to be stutterers."
    ];
    let staticMessage = staticMessages[Math.floor(Math.random() * staticMessages.length)]

    return staticMessage;
}

// Get a randomized message based on a template
function getRandomizedMessage() {
    let verb = chooseVerb()
      , situation = chooseSituation(verb)
      , advice = chooseAdvice()
      , randomMessage = `Researches so far has shown us that stuttering ${verb} ${situation}. Stutterers would appreciate if ${advice} during a conversation.`;

      return randomMessage;
}

// Get the message element in the DOM
let randomFact = document.getElementById('fact-text'); 

// Generate and display the message
function displayMessage() {    
    let message = getStaticMessage() + " " + getRandomizedMessage();
    randomFact.textContent = message;  
    randomFact.style.display = "inline-block";
}

// Add event listener to the "Get a random fact" button
let generatorButton = document.getElementById('fact-generator');
generatorButton.addEventListener('click', displayMessage);