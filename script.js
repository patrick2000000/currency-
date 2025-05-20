document.getElementById('convertBtn').addEventListener('click', function() {
  // Get user input
  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;

  // Define exchange rates (from RWF as base currency for simplicity)
  const exchangeRates = {
    RWF: {
      UGX: 2.3,    // Example rate: 1 RWF = 2.3 UGX
      TZS: 1.5,    // Example rate: 1 RWF = 1.5 TZS
      BIF: 1.8,    // Example rate: 1 RWF = 1.8 BIF
      CDF: 1.6,    // Example rate: 1 RWF = 1.6 CDF
      KES: 0.1,    // Example rate: 1 RWF = 0.1 KES
      RWF: 1,      // 1 RWF to RWF
    },
    UGX: {
      RWF: 0.43,   // Example rate: 1 UGX = 0.43 RWF
      TZS: 0.65,   // Example rate: 1 UGX = 0.65 TZS
      BIF: 0.78,   // Example rate: 1 UGX = 0.78 BIF
      CDF: 0.70,   // Example rate: 1 UGX = 0.70 CDF
      KES: 0.04,   // Example rate: 1 UGX = 0.04 KES
      UGX: 1,      // 1 UGX to UGX
    },
    TZS: {
      RWF: 0.67,   // Example rate: 1 TZS = 0.67 RWF
      UGX: 1.54,   // Example rate: 1 TZS = 1.54 UGX
      BIF: 1.2,    // Example rate: 1 TZS = 1.2 BIF
      CDF: 1.08,   // Example rate: 1 TZS = 1.08 CDF
      KES: 0.06,   // Example rate: 1 TZS = 0.06 KES
      TZS: 1,      // 1 TZS to TZS
    },
    BIF: {
      RWF: 0.56,   // Example rate: 1 BIF = 0.56 RWF
      UGX: 1.28,   // Example rate: 1 BIF = 1.28 UGX
      TZS: 0.83,   // Example rate: 1 BIF = 0.83 TZS
      CDF: 0.90,   // Example rate: 1 BIF = 0.90 CDF
      KES: 0.05,   // Example rate: 1 BIF = 0.05 KES
      BIF: 1,      // 1 BIF to BIF
    },
    CDF: {
      RWF: 0.63,   // Example rate: 1 CDF = 0.63 RWF
      UGX: 1.43,   // Example rate: 1 CDF = 1.43 UGX
      TZS: 0.93,   // Example rate: 1 CDF = 0.93 TZS
      BIF: 1.1,    // Example rate: 1 CDF = 1.1 BIF
      KES: 0.07,   // Example rate: 1 CDF = 0.07 KES
      CDF: 1,      // 1 CDF to CDF
    },
    KES: {
      RWF: 10.5,   // Example rate: 1 KES = 10.5 RWF
      UGX: 25.0,   // Example rate: 1 KES = 25.0 UGX
      TZS: 16.0,   // Example rate: 1 KES = 16.0 TZS
      BIF: 20.0,   // Example rate: 1 KES = 20.0 BIF
      CDF: 14.0,   // Example rate: 1 KES = 14.0 CDF
      KES: 1,      // 1 KES to KES
    }
  };

  // Check if the user entered a valid amount
  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount.');
    return;
  }

  // Perform the currency conversion
  const result = amount * exchangeRates[fromCurrency][toCurrency];

  // Display the result
  document.getElementById('result').innerText = 
    `${amount} ${fromCurrency} is equal to ${result.toFixed(2)} ${toCurrency}`;
});
