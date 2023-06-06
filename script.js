function checkAnswers() {
    const whiskeySourGlass = document.getElementById('whiskey-sour-glass').value;
    const whiskeySourSugar = document.getElementById('whiskey-sour-sugar').value;
    const whiskeySourLemon = document.getElementById('whiskey-sour-lemon').value;
    const whiskeySourBitter = document.getElementById('whiskey-sour-bitter').value;
    const whiskeySourLiqueur = document.getElementById('whiskey-sour-liqueur').value;
    const whiskeySourLiqueur2 = document.getElementById('whiskey-sour-liqueur2').value;
    const whiskeySourWhiskey = document.getElementById('whiskey-sour-whiskey').value;
    const whiskeySourSoda = document.getElementById('whiskey-sour-soda').value;
    const whiskeySourGarnish = document.getElementById('whiskey-sour-garnish').value;
    const whiskeySourIce = document.getElementById('whiskey-sour-ice').value;
    
    const newYorkSourGlass = document.getElementById('new-york-sour-glass').value;
    const newYorkSourSugar = document.getElementById('new-york-sour-sugar').value;
    const newYorkSourLemon = document.getElementById('new-york-sour-lemon').value;
    const newYorkSourBitter = document.getElementById('new-york-sour-bitter').value;
    const newYorkSourLiqueur = document.getElementById('new-york-sour-liqueur').value;
    const newYorkSourLiqueur2 = document.getElementById('new-york-sour-liqueur2').value;
    const newYorkSourWhiskey = document.getElementById('new-york-sour-whiskey').value;
    const newYorkSourSoda = document.getElementById('new-york-sour-soda').value;
    const newYorkSourGarnish = document.getElementById('new-york-sour-garnish').value;
    const newYorkSourIce = document.getElementById('new-york-sour-ice').value;
    
    const paperPlaneGlass = document.getElementById('paper-plane-glass').value;
    const paperPlaneSugar = document.getElementById('paper-plane-sugar').value;
    const paperPlaneLemon = document.getElementById('paper-plane-lemon').value;
    const paperPlaneBitter = document.getElementById('paper-plane-bitter').value;
    const paperPlaneLiqueur = document.getElementById('paper-plane-liqueur').value;
    const paperPlaneLiqueur2 = document.getElementById('paper-plane-liqueur2').value;
    const paperPlaneWhiskey = document.getElementById('paper-plane-whiskey').value;
    const paperPlaneSoda = document.getElementById('paper-plane-soda').value;
    const paperPlaneGarnish = document.getElementById('paper-plane-garnish').value;
    const paperPlaneIce = document.getElementById('paper-plane-ice').value;
    
    let score = 0;
    let result = '';
  
    // Check Whiskey Sour answers
    if (whiskeySourGlass === 'coppa' && whiskeySourSugar === 'si' && whiskeySourLemon === 'si' && whiskeySourBitter === '' && whiskeySourLiqueur === '' && whiskeySourLiqueur2 === '' && whiskeySourWhiskey === 'original' && whiskeySourSoda === '' && whiskeySourGarnish === '' && whiskeySourIce === 'shake') {
      score += 1;
    }
  
    // Check New York Sour answers
    if (newYorkSourGlass === 'tumbler-basso' && newYorkSourSugar === 'si' && newYorkSourLemon === 'si' && newYorkSourBitter === '' && newYorkSourLiqueur === 'vino' && newYorkSourLiqueur2 === '' && newYorkSourWhiskey === 'original' && newYorkSourSoda === '' && newYorkSourGarnish === '' && newYorkSourIce === 'shake') {
      score += 1;
    }
  
    // Check Paper Plane answers
    if (paperPlaneGlass === 'coppa' && paperPlaneSugar === '' && paperPlaneLemon === 'si' && paperPlaneBitter === '' && paperPlaneLiqueur === 'aperol' && paperPlaneLiqueur2 === 'amaro-nonino' && paperPlaneWhiskey === 'original' && paperPlaneSoda === '' && paperPlaneGarnish === '' && paperPlaneIce === 'shake') {
      score += 1;
    }
  
    // Generate result message
    if (score === 3) {
      result = 'Complimenti! Hai risposto correttamente a tutte le domande!';
    } else if (score === 2) {
      result = 'Hai risposto correttamente a 2 domande su 3. Continua a migliorare!';
    } else if (score === 1) {
      result = 'Hai risposto correttamente a 1 domanda su 3. Puoi fare di meglio!';
    } else {
      result = 'Hai risposto correttamente a 0 domande su 3. Riprova!';
    }
  
    // Display result
    document.getElementById('results').innerHTML = result;
  } 