import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

// function App() {

//   const [amount, setAmount] = useState(0);
//   const [from, setFrom] = useState("usd");
//   const [to, setTo] = useState("inr");
//   const [convertedAmount, setConvertedAmount] = useState(0);

//   const currencyInfo = useCurrencyInfo(from)

//   const options = Object.keys(currencyInfo)
//   // console.log(options)

//   const swap = () =>{
//     setFrom(to)
//     setTo(from)
//     setConvertedAmount(amount)
//     setAmount(convertedAmount)
//   }

//   const convert = () => {
//     setConvertedAmount(amount * currencyInfo[to])
//   }
//   return (
  
//     <div
//   className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat relative"
//   style={{
//     backgroundImage: `url("/images/bg.jpg")`,
//     filter: "blur(8px)", // Blurs the background image
//     opacity: 0.7,        // Adjusts the opacity of the background
//     position: "absolute", // Ensures it stays behind the overlay
//   }}
// >
//   <div className="absolute inset-0 bg-black/30"></div> {/* Semi-transparent overlay */}
//   <div className="relative z-10 text-white">
//     <h1 className="text-4xl font-bold">Currency Calculator</h1>
//     <p className="text-lg">Calculate your currency with ease.</p>
//   </div>
//         <div className="w-full">
//             <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//                 <form
//                     onSubmit={(e) => {
//                         e.preventDefault();
//                         convert()
                       
//                     }}
//                 >
//                     <div className="w-full mb-1">
//                         <InputBox
//                             label="From"
//                             amount={amount}
//                             currencyOptions={options}
//                             onCurrencyChange={(currency) => setFrom(currency)}
//                             selectCurrency={from}
//                             onAmountChange={(amount) => setAmount(amount)}
//                         />
//                     </div>
//                     <div className="relative w-full h-0.5">
//                         <button
//                             type="button"
//                             className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                             onClick={swap}
//                         >
//                             swap
//                         </button>
//                     </div>
//                     <div className="w-full mt-1 mb-4">
//                         <InputBox
//                             label="To"
//                             amount={convertedAmount}
//                             currencyOptions={options}
//                             onCurrencyChange={(currency) => setTo(currency)}
//                             selectCurrency={to}
//                             amountDisable
//                         />
//                     </div>
//                     <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
//                         Convert {from.toUpperCase()} to {to.toUpperCase()}
//                     </button>
//                 </form>
//             </div>
//         </div>
//     </div>
    
// );
// }

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="relative w-full h-screen">
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("/images/bg.jpg")`,
          filter: "blur(7px)",
          opacity: 0.9,
          position: 'absolute'
        }}
      ></div>

      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex justify-center items-center">
        <div className="w-full max-w-md mx-auto border border-gray-200 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <h1 className="text-4xl text-white text-b mb-5 text-center shadow-sm ">
            Currency Calculator
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-4">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-gray-200 rounded-md bg-blue-600 text-white px-5 py-0.5"
                onClick={swap}
              >
                SWAP
              </button>
            </div>
            <div className="w-full mt-4 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;



