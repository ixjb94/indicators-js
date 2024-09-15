### About
Fastest Technical Indicators written in JavaScript    

- Zero Dependencies    
- No Internal Function Calls    
- Lightweight: +100 Indicators only ~30kb    

### Supports
Browser, ES6, CommonJS, NodeJS, Bun, Svelte, React, Angular, etc.

### Installation
```
npm install @ixjb94/indicators-js
```

### Examples
NodeJS, Bun, React, Svelte, Angular, etc.
```js
import { ema } from "@ixjb94/indicators-js"
// or
const { ema } = require("@ixjb94/indicators-js")

const source = [1,2,3,4,5]
const result = ema(source, 3)
```

Browser
```js
<script src="./node_modules/@ixjb94/indicators-js/dist/index.umd.js"></script>
<script>
    const { ema } = window.indicators
    const result = ema([1,2,3,4,5], 3)
    console.log(result)
</script>
```

Vite Vanilla: same as Svelte, React, etc.


### Indicators
✅ = Available and fastest    
❌ = Indicator is not available    
🔄 = Developing...    
Compared to:    
node-talib, tulipnode, technicalindicators, pandas_ta

| Identifier      | Indicator Name                        | @ixjb94/indicators-js |
| --------------- | ------------------------------------- | ------------------ |
| ad              | Accumulation/Distribution Line        | ✅                  |
| adosc           | Accumulation/Distribution Oscillator  | ✅                  |
| adx             | Average Directional Movement Index    | ✅                  |
| adxr            | Average Directional Movement Rating   | ✅                  |
| ao              | Awesome Oscillator                    | ✅                  |
| apo             | Absolute Price Oscillator             | ✅                  |
| aroon           | Aroon                                 | ✅                  |
| aroonosc        | Aroon Oscillator                      | ✅                  |
| atr             | Average True Range                    | ✅                  |
| avgprice        | Average Price                         | ✅                  |
| bbands          | Bollinger Bands                       | ✅                  |
| bop             | Balance of Power                      | ✅                  |
| cci             | Commodity Channel Index               | ✅                  |
| cmo             | Chande Momentum Oscillator            | ✅                  |
| crossany        | Crossany                              | ✅                  |
| crossover       | Crossover                             | ✅                  |
| crossunder      | Crossunder                            | ✅                  |
| crossOverNumber | Crossover a number                    | ✅                  |
| crossUnderNumber| Crossunder a number                   | ✅                  |
| cvi             | Chaikins Volatility                   | ✅                  |
| decay           | Linear Decay                          | ✅                  |
| dema            | Double Exponential Moving Average     | ✅                  |
| di              | Directional Indicator                 | ✅                  |
| dm              | Directional Movement                  | ✅                  |
| dpo             | Detrended Price Oscillator            | ✅                  |
| dx              | Directional Movement Index            | ✅                  |
| edecay          | Exponential Decay                     | ✅                  |
| ema             | Exponential Moving Average            | ✅                  |
| emv             | Ease of Movement                      | ✅                  |
| fisher          | Fisher Transform                      | ✅                  |
| fosc            | Forecast Oscillator                   | ✅                  |
| hma             | Hull Moving Average                   | ✅                  |
| kama            | Kaufman Adaptive Moving Average       | ✅                  |
| kvo             | Klinger Volume Oscillator             | ✅                  |
| lag             | Lag                                   | ✅                  |
| linreg          | Linear Regression                     | ✅                  |
| linregintercept | Linear Regression Intercept           | ✅                  |
| linregslope     | Linear Regression Slope               | ✅                  |
| macd            | Moving Average Convergence/Divergence | ✅                  |
| marketfi        | Market Facilitation Index             | ✅                  |
| mass            | Mass Index                            | ✅                  |
| max             | Maximum In Period                     | ✅                  |
| md              | Mean Deviation Over Period            | ✅                  |
| medprice        | Median Price                          | ✅                  |
| mfi             | Money Flow Index                      | ✅                  |
| min             | Minimum In Period                     | ✅                  |
| mom             | Momentum                              | ✅                  |
| natr            | Normalized Average True Range         | ✅                  |
| nvi             | Negative Volume Index                 | ✅                  |
| obv             | On Balance Volume                     | ✅                  |
| ppo             | Percentage Price Oscillator           | ✅                  |
| psar            | Parabolic SAR                         | ✅                  |
| pvi             | Positive Volume Index                 | ✅                  |
| qstick          | Qstick                                | ✅                  |
| roc             | Rate of Change                        | ✅                  |
| rocr            | Rate of Change Ratio                  | ✅                  |
| rsi             | Relative Strength Index               | ✅                  |
| sma             | Simple Moving Average                 | ✅                  |
| stddev          | Standard Deviation Over Period        | ✅                  |
| stderr          | Standard Error Over Period            | ✅                  |
| stoch           | Stochastic Oscillator                 | ✅                  |
| stochrsi        | Stochastic RSI                        | ✅                  |
| sum             | Sum Over Period                       | ✅                  |
| tema            | Triple Exponential Moving Average     | ✅                  |
| tr              | True Range                            | ✅                  |
| trima           | Triangular Moving Average             | ✅                  |
| trix            | Trix                                  | ✅                  |
| tsf             | Time Series Forecast                  | ✅                  |
| typprice        | Typical Price                         | ✅                  |
| ultosc          | Ultimate Oscillator                   | ✅                  |
| var             | Variance Over Period                  | ✅                  |
| vhf             | Vertical Horizontal Filter            | ✅                  |
| vidya           | Variable Index Dynamic Average        | ✅                  |
| volatility      | Annualized Historical Volatility      | ✅                  |
| vosc            | Volume Oscillator                     | ✅                  |
| vwma            | Volume Weighted Moving Average        | ✅                  |
| wad             | Williams Accumulation/Distribution    | ✅                  |
| wcprice         | Weighted Close Price                  | ✅                  |
| wilders         | Wilders Smoothing                     | ✅                  |
| willr           | Williams %R                           | ✅                  |
| wma             | Weighted Moving Average               | ✅                  |
| zlema           | Zero-Lag Exponential Moving Average   | ✅                  |
| abands          |                                       | ✅                  |
| alma            | Arnaud Legoux Moving Average          | ✅                  |
| ce              | Chandelier Exit                       | ✅                  |
| cmf             | Chaikin money flow                    | ✅                  |
| dc              | Donchian Channels                     | ✅🔄               |
| fi              | Force index                           | ✅                  |
| kc              | Keltner Channels                      | ✅                  |
| kst             | Know Sure Thing                       | ✅                  |
| pbands          |                                       | ✅                  |
| pfe             | Polarized Fractal Efficiency          | ✅                  |
| posc            |                                       | ✅                  |
| rmi             | Relative Momentum Index               | ✅                  |
| rmta            | Recursive Moving Trend Average        | ✅                  |
| rvi             | Relative Vigor Index                  | ✅                  |
| smi             | Stochastic Momentum Index             | ✅                  |
| tsi             | True Strength Index                   | ✅                  |
| vwap            | Volume-Weighted Average Price         | ✅                  |