async function recupData()
{
    // creer un compte sur : https://app.currencyapi.com/latest
    // récupérer son API
    // mettre la valeur dans la variable apiKey
      const apiKey ='cur_live_rSpHCCcFKh9al6EKQueZk51tvyyjqK1r7MAf8An4';
    const response = await fetch('https://api.currencyapi.com/v3/latest?apikey='+apiKey,
);
    console.log(await response.json());
}

recupData();