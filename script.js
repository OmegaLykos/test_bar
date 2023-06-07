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

    const wildIrishRoseGlass = document.getElementById('wild-irish-rose-glass').value;
    const wildIrishRoseSugar = document.getElementById('wild-irish-rose-sugar').value;
    const wildIrishRoseLemon = document.getElementById('wild-irish-rose-lemon').value;
    const wildIrishRoseBitter = document.getElementById('wild-irish-rose-bitter').value;
    const wildIrishRoseLiqueur = document.getElementById('wild-irish-rose-liqueur').value;
    const wildIrishRoseLiqueur2 = document.getElementById('wild-irish-rose-liqueur2').value;
    const wildIrishRoseWhiskey = document.getElementById('wild-irish-rose-whiskey').value;
    const wildIrishRoseSoda = document.getElementById('wild-irish-rose-soda').value;
    const wildIrishRoseGarnish = document.getElementById('wild-irish-rose-garnish').value;
    const wildIrishRoseIce = document.getElementById('wild-irish-rose-ice').value;

    const cameronsKickGlass = document.getElementById('camerons-kick-glass').value;
    const cameronsKickSugar = document.getElementById('camerons-kick-sugar').value;
    const cameronsKickLemon = document.getElementById('camerons-kick-lemon').value;
    const cameronsKickBitter = document.getElementById('camerons-kick-bitter').value;
    const cameronsKickLiqueur = document.getElementById('camerons-kick-liqueur').value;
    const cameronsKickLiqueur2 = document.getElementById('camerons-kick-liqueur2').value;
    const cameronsKickWhiskey = document.getElementById('camerons-kick-whiskey').value;
    const cameronsKickSoda = document.getElementById('camerons-kick-soda').value;
    const cameronsKickGarnish = document.getElementById('camerons-kick-garnish').value;
    const cameronsKickIce = document.getElementById('camerons-kick-ice').value;

    const jamesonGingerLimeGlass = document.getElementById('jameson-ginger-lime-glass').value;
    const jamesonGingerLimeSugar = document.getElementById('jameson-ginger-lime-sugar').value;
    const jamesonGingerLimeLemon = document.getElementById('jameson-ginger-lime-lemon').value;
    const jamesonGingerLimeBitter = document.getElementById('jameson-ginger-lime-bitter').value;
    const jamesonGingerLimeLiqueur = document.getElementById('jameson-ginger-lime-liqueur').value;
    const jamesonGingerLimeLiqueur2 = document.getElementById('jameson-ginger-lime-liqueur2').value;
    const jamesonGingerLimeWhiskey = document.getElementById('jameson-ginger-lime-whiskey').value;
    const jamesonGingerLimeSoda = document.getElementById('jameson-ginger-lime-soda').value;
    const jamesonGingerLimeGarnish = document.getElementById('jameson-ginger-lime-garnish').value;
    const jamesonGingerLimeIce = document.getElementById('jameson-ginger-lime-ice').value;

    const dublinSpiderGlass = document.getElementById('dublin-spider-glass').value;
    const dublinSpiderSugar = document.getElementById('dublin-spider-sugar').value;
    const dublinSpiderLemon = document.getElementById('dublin-spider-lemon').value;
    const dublinSpiderBitter = document.getElementById('dublin-spider-bitter').value;
    const dublinSpiderLiqueur = document.getElementById('dublin-spider-liqueur').value;
    const dublinSpiderLiqueur2 = document.getElementById('dublin-spider-liqueur2').value;
    const dublinSpiderWhiskey = document.getElementById('dublin-spider-whiskey').value;
    const dublinSpiderSoda = document.getElementById('dublin-spider-soda').value;
    const dublinSpiderGarnish = document.getElementById('dublin-spider-garnish').value;
    const dublinSpiderIce = document.getElementById('dublin-spider-ice').value;

    const manhattanGlass = document.getElementById('manhattan-glass').value;
    const manhattanSugar = document.getElementById('manhattan-sugar').value;
    const manhattanLemon = document.getElementById('manhattan-lemon').value;
    const manhattanBitter = document.getElementById('manhattan-bitter').value;
    const manhattanLiqueur = document.getElementById('manhattan-liqueur').value;
    const manhattanLiqueur2 = document.getElementById('manhattan-liqueur2').value;
    const manhattanWhiskey = document.getElementById('manhattan-whiskey').value;
    const manhattanSoda = document.getElementById('manhattan-soda').value;
    const manhattanGarnish = document.getElementById('manhattan-garnish').value;
    const manhattanIce = document.getElementById('manhattan-ice').value;

    const weeskiCocktailGlass = document.getElementById('weeski-cocktail-glass').value;
    const weeskiCocktailSugar = document.getElementById('weeski-cocktail-sugar').value;
    const weeskiCocktailLemon = document.getElementById('weeski-cocktail-lemon').value;
    const weeskiCocktailBitter = document.getElementById('weeski-cocktail-bitter').value;
    const weeskiCocktailLiqueur = document.getElementById('weeski-cocktail-liqueur').value;
    const weeskiCocktailLiqueur2 = document.getElementById('weeski-cocktail-liqueur2').value;
    const weeskiCocktailWhiskey = document.getElementById('weeski-cocktail-whiskey').value;
    const weeskiCocktailSoda = document.getElementById('weeski-cocktail-soda').value;
    const weeskiCocktailGarnish = document.getElementById('weeski-cocktail-garnish').value;
    const weeskiCocktailIce = document.getElementById('weeski-cocktail-ice').value;

    const tipperaryGlass = document.getElementById('tipperary-glass').value;
    const tipperarySugar = document.getElementById('tipperary-sugar').value;
    const tipperaryLemon = document.getElementById('tipperary-lemon').value;
    const tipperaryBitter = document.getElementById('tipperary-bitter').value;
    const tipperaryLiqueur = document.getElementById('tipperary-liqueur').value;
    const tipperaryLiqueur2 = document.getElementById('tipperary-liqueur2').value;
    const tipperaryWhiskey = document.getElementById('tipperary-whiskey').value;
    const tipperarySoda = document.getElementById('tipperary-soda').value;
    const tipperaryGarnish = document.getElementById('tipperary-garnish').value;
    const tipperaryIce = document.getElementById('tipperary-ice').value;

    const oldFashionedGlass = document.getElementById('old-fashioned-glass').value;
    const oldFashionedSugar = document.getElementById('old-fashioned-sugar').value;
    const oldFashionedLemon = document.getElementById('old-fashioned-lemon').value;
    const oldFashionedBitter = document.getElementById('old-fashioned-bitter').value;
    const oldFashionedLiqueur = document.getElementById('old-fashioned-liqueur').value;
    const oldFashionedLiqueur2 = document.getElementById('old-fashioned-liqueur2').value;
    const oldFashionedWhiskey = document.getElementById('old-fashioned-whiskey').value;
    const oldFashionedSoda = document.getElementById('old-fashioned-soda').value;
    const oldFashionedGarnish = document.getElementById('old-fashioned-garnish').value;
    const oldFashionedIce = document.getElementById('old-fashioned-ice').value;

    const boulevardierGlass = document.getElementById('boulevardier-glass').value;
    const boulevardierSugar = document.getElementById('boulevardier-sugar').value;
    const boulevardierLemon = document.getElementById('boulevardier-lemon').value;
    const boulevardierBitter = document.getElementById('boulevardier-bitter').value;
    const boulevardierLiqueur = document.getElementById('boulevardier-liqueur').value;
    const boulevardierLiqueur2 = document.getElementById('boulevardier-liqueur2').value;
    const boulevardierWhiskey = document.getElementById('boulevardier-whiskey').value;
    const boulevardierSoda = document.getElementById('boulevardier-soda').value;
    const boulevardierGarnish = document.getElementById('boulevardier-garnish').value;
    const boulevardierIce = document.getElementById('boulevardier-ice').value;

    const godfatherGlass = document.getElementById('godfather-glass').value;
    const godfatherSugar = document.getElementById('godfather-sugar').value;
    const godfatherLemon = document.getElementById('godfather-lemon').value;
    const godfatherBitter = document.getElementById('godfather-bitter').value;
    const godfatherLiqueur = document.getElementById('godfather-liqueur').value;
    const godfatherLiqueur2 = document.getElementById('godfather-liqueur2').value;
    const godfatherWhiskey = document.getElementById('godfather-whiskey').value;
    const godfatherSoda = document.getElementById('godfather-soda').value;
    const godfatherGarnish = document.getElementById('godfather-garnish').value;
    const godfatherIce = document.getElementById('godfather-ice').value;

    const wesGlass = document.getElementById('wes-glass').value;
    const wesSugar = document.getElementById('wes-sugar').value;
    const wesLemon = document.getElementById('wes-lemon').value;
    const wesBitter = document.getElementById('wes-bitter').value;
    const wesLiqueur = document.getElementById('wes-liqueur').value;
    const wesLiqueur2 = document.getElementById('wes-liqueur2').value;
    const wesWhiskey = document.getElementById('wes-whiskey').value;
    const wesSoda = document.getElementById('wes-soda').value;
    const wesGarnish = document.getElementById('wes-garnish').value;
    const wesIce = document.getElementById('wes-ice').value;

    const ronanGlass = document.getElementById('ronan-glass').value;
    const ronanSugar = document.getElementById('ronan-sugar').value;
    const ronanLemon = document.getElementById('ronan-lemon').value;
    const ronanBitter = document.getElementById('ronan-bitter').value;
    const ronanLiqueur = document.getElementById('ronan-liqueur').value;
    const ronanLiqueur2 = document.getElementById('ronan-liqueur2').value;
    const ronanWhiskey = document.getElementById('ronan-whiskey').value;
    const ronanSoda = document.getElementById('ronan-soda').value;
    const ronanGarnish = document.getElementById('ronan-garnish').value;
    const ronanIce = document.getElementById('ronan-ice').value;
    
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

    // Check Wild Irish Rose answers
    if (wildIrishRoseGlass === 'coppa' && wildIrishRoseSugar === 'si-e-granatina' && wildIrishRoseLemon === 'si' && wildIrishRoseBitter === '' && wildIrishRoseLiqueur === '' && wildIrishRoseLiqueur2 === '' && wildIrishRoseWhiskey === 'original' && wildIrishRoseSoda === '' && wildIrishRoseGarnish === '' && wildIrishRoseIce === 'shake') {
      score += 1;
    }

    // Check Camerons Kick answers
    if (cameronsKickGlass === 'coppa' && cameronsKickSugar === 'orzata' && cameronsKickLemon === 'si' && cameronsKickBitter === '' && cameronsKickLiqueur === '' && cameronsKickLiqueur2 === '' && cameronsKickWhiskey === 'original' && cameronsKickSoda === '' && cameronsKickGarnish === '' && cameronsKickIce === 'shake') {
      score += 1;
    }

    // Check Jameson Ginger Lime answers
    if (jamesonGingerLimeGlass === 'tumbler-alto' && jamesonGingerLimeSugar === '' && jamesonGingerLimeLemon === '' && jamesonGingerLimeBitter === '' && jamesonGingerLimeLiqueur === '' && jamesonGingerLimeLiqueur2 === '' && jamesonGingerLimeWhiskey === 'original' && jamesonGingerLimeSoda === 'ginger-ale' && jamesonGingerLimeGarnish === 'lime' && jamesonGingerLimeIce === 'build') {
      score += 1;
    }

    // Check Dublin Spider answers
    if (dublinSpiderGlass === 'tumbler-alto' && dublinSpiderSugar === '' && dublinSpiderLemon === '' && dublinSpiderBitter === 'angostura' && dublinSpiderLiqueur === '' && dublinSpiderLiqueur2 === '' && dublinSpiderWhiskey === 'original' && dublinSpiderSoda === '' && dublinSpiderGarnish === '' && dublinSpiderIce === 'build') {
      score += 1;
    }

    // Check Manhattan answers
    if (manhattanGlass === 'coppa' && manhattanSugar === '' && manhattanLemon === '' && manhattanBitter === 'angostura' && manhattanLiqueur === 'vermouth-rosso' && manhattanLiqueur2 === '' && manhattanWhiskey === 'bb' && manhattanSoda === '' && manhattanGarnish === '' && manhattanIce === 'meg') {
      score += 1;
    }

    // Check Weeski Cocktail answers
    if (weeskiCocktailGlass === 'coppa' && weeskiCocktailSugar === '' && weeskiCocktailLemon === '' && weeskiCocktailBitter === 'orange' && weeskiCocktailLiqueur === 'vermouth-bianco' && weeskiCocktailLiqueur2 === 'triple-sec' && weeskiCocktailWhiskey === 'bb' && weeskiCocktailSoda === '' && weeskiCocktailGarnish === '' && weeskiCocktailIce === 'meg') {
      score += 1;
    }

    // Check Tipperary answers
    if (tipperaryGlass === 'coppa' && tipperarySugar === '' && tipperaryLemon === '' && tipperaryBitter === '' && tipperaryLiqueur === 'vermouth-rosso' && tipperaryLiqueur2 === '' && tipperaryWhiskey === 'bb' && tipperarySoda === '' && tipperaryGarnish === '' && tipperaryIce === 'meg') {
      score += 1;
    }

    // Check Old Fashioned answers
    if (oldFashionedGlass === 'tumbler-basso' && oldFashionedSugar === 'si' && oldFashionedLemon === '' && oldFashionedBitter === 'angostura' && oldFashionedLiqueur === '' && oldFashionedLiqueur2 === '' && oldFashionedWhiskey === 'bb' && oldFashionedSoda === '' && oldFashionedGarnish === '' && oldFashionedIce === 'build') {
      score += 1;
    }

    // Check Boulevardier answers
    if (boulevardierGlass === 'tumbler-basso' && boulevardierSugar === '' && boulevardierLemon === '' && boulevardierBitter === 'campari' && boulevardierLiqueur === 'vermouth' && boulevardierLiqueur2 === '' && boulevardierWhiskey === 'bb' && boulevardierSoda === '' && boulevardierGarnish === '' && boulevardierIce === 'build') {
      score += 1;
    }

    // Check Godfather answers
    if (godfatherGlass === 'tumbler-basso' && godfatherSugar === '' && godfatherLemon === '' && godfatherBitter === '' && godfatherLiqueur === 'amaretto-disaronno' && godfatherLiqueur2 === '' && godfatherWhiskey === 'bb' && godfatherSoda === '' && godfatherGarnish === '' && godfatherIce === 'build') {
      score += 1;
    }

    // Check Wes answers
    if (wesGlass === 'tumbler-alto' && wesSugar === '' && wesLemon === '' && wesBitter === '' && wesLiqueur === '' && wesLiqueur2 === '' && wesWhiskey === 'bb' && wesSoda === 'soda' && wesGarnish === '' && wesIce === 'build') {
      score += 1;
    }

    // Check Ronan answers
    if (ronanGlass === 'tumbler-alto' && ronanSugar === 'si' && ronanLemon === 'si' && ronanBitter === '' && ronanLiqueur === '' && ronanLiqueur2 === '' && ronanWhiskey === 'bb' && ronanSoda === 'soda' && ronanGarnish === '' && ronanIce === 'build') {
      score += 1;
    }
  
    // Generate result message
    if (score === 15) {
      result = 'Complimenti! Hai risposto correttamente a tutte le domande!';
    } else if (score === 14) {
      result = 'Hai risposto correttamente a 14 domanda su 15. Puoi fare di meglio!';
    } else if (score === 13) {
      result = 'Hai risposto correttamente a 13 domanda su 15. Puoi fare di meglio!';
    } else if (score === 12) {
      result = 'Hai risposto correttamente a 12 domanda su 15. Puoi fare di meglio!';
    } else if (score === 11) {
      result = 'Hai risposto correttamente a 11 domanda su 15. Puoi fare di meglio!';
    } else if (score === 10) {
      result = 'Hai risposto correttamente a 10 domanda su 15. Puoi fare di meglio!';
    } else if (score === 9) {
      result = 'Hai risposto correttamente a 9 domanda su 15. Puoi fare di meglio!';
    } else if (score === 8) {
      result = 'Hai risposto correttamente a 8 domanda su 15. Puoi fare di meglio!';
    } else if (score === 7) {
      result = 'Hai risposto correttamente a 7 domanda su 15. Puoi fare di meglio!';
    } else if (score === 6) {
      result = 'Hai risposto correttamente a 6 domanda su 15. Puoi fare di meglio!';
    } else if (score === 5) {
      result = 'Hai risposto correttamente a 5 domanda su 15. Puoi fare di meglio!';
    } else if (score === 4) {
      result = 'Hai risposto correttamente a 4 domanda su 15. Puoi fare di meglio!';
    } else if (score === 3) {
      result = 'Hai risposto correttamente a 3 domanda su 15. Puoi fare di meglio!';
    } else if (score === 2) {
      result = 'Hai risposto correttamente a 2 domande su 15. Continua a migliorare!';
    } else if (score === 1) {
      result = 'Hai risposto correttamente a 1 domanda su 15. Puoi fare di meglio!';
    } else {
      result = 'Hai risposto correttamente a 0 domande su 15. Riprova!';
    }
  
    // Display result
    document.getElementById('results').innerHTML = result;
  } 