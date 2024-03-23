import './App.css';

function App() {
  return (
    <>
      <div className=' w-full'>
        <h1 className=' text-3xl text-center font-bold text-slate-700 font-san mt-5'>
          A Car Manufacturer is planning to build a new vehicle
        </h1>
        <div className=' p-5 pl-0 md:pl-48 w-auto'>

          <div className=' flex  justify-around mt-8 md:w-full w-96 '>

            <div className=' flex flex-col  justify-center align-middle '>
              <h1 className=' md:text-2xl  text-center bg-sky-400 md:w-10 w-6 rounded-full md:h-10 h-6 md:ml-12 ml-7 text-white font-bold'>1</h1>
              <h4 className=' textF '>Market Research</h4>
              <i className="fa fa-long-arrow-down text-center md:text-4xl text-2xl md:mt-3  text-slate-400" aria-hidden="true"></i>


            </div>

            <div className=' flex flex-col  justify-center'>
              <h1 className=' md:text-2xl  text-center bg-sky-400 w-6 md:w-10 rounded-full h-6 md:h-10 md:ml-5 ml-3 text-white font-bold'>2</h1>
              <h4 className=' textF'>Planning</h4>
              <i className="fa fa-long-arrow-down text-center md:text-4xl text-2xl md:mt-3 mt-1 text-slate-400" aria-hidden="true"></i>

            </div>

            <div className=' flex flex-col  justify-center'>
              <h1 className=' md:text-2xl  text-center bg-sky-400 w-6 md:w-10 rounded-full h-6 md:h-10 md:ml-5 ml-3 text-white font-bold'>3</h1>
              <h4 className=' textF'>Desiging</h4>
              <i className="fa fa-long-arrow-down text-center md:text-4xl text-2xl md:mt-3 mt-1 text-slate-400" aria-hidden="true"></i>

            </div>

            <div className=' flex flex-col  justify-center'>
              <h1 className=' md:text-2xl  text-center bg-sky-400 w-6 md:w-10 rounded-full h-6 md:h-10 md:ml-10 ml-6 text-white font-bold'>4</h1>
              <h4 className=' textF'>Manifacturing</h4>
              <i className="fa fa-long-arrow-down text-center md:text-4xl text-2xl md:mt-3 mt-1 text-slate-400" aria-hidden="true"></i>

            </div>

            <div className=' flex flex-col  justify-center'>
              <h1 className=' md:text-2xl  text-center bg-sky-400 w-6 md:w-10 rounded-full h-6 md:h-10  md:ml-12 ml-6 text-white font-bold'>5</h1>
              <h4 className=' textF'>Sales/Marketing</h4>
              <i className="fa fa-long-arrow-down text-center md:text-4xl text-2xl md:mt-3 mt-1 text-slate-400" aria-hidden="true"></i>

            </div>

          </div>
        </div>


        <div className=' flex   md:justify-around relative md:bottom-9 bottom-5 md:m-5 m-1 pl-0 md:ml-[15%] w-80 md:w-[80%] '>
          <div className=' flex justify-around  bg-slate-100 md:h-28 h-10 w-24  md:w-52   box'>
            <div className='  textF first  md:p-2 p-1 m-1  '>External</div>
            <div className=' text-xl second textF  md:p-2 p-0  '>Internal</div>
          </div>

          <div className=' flex justify-around  bg-slate-100 md:h-28 h-10 w-32  md:w-52  box'>
            <div className=' text-xl first textF  md:p-2 p-0 m-1 '>PRD</div>
            <div className=' text-xl textF second  md:p-2 p-0'>Specs</div>
          </div>


          <div className=' flex justify-around  bg-slate-100 md:h-28 h-10 w-32  md:w-52  box'>
            <div className=' text-xl textF first  md:p-2 p-0 m-1 '>Hardware</div>
            <div className=' text-xl textF second  md:p-2 p-0 '>Software</div>
          </div>


          <div className=' flex justify-around  bg-slate-100 md:h-28 h-10 w-32  md:w-52  box'>
            <div className=' text-xl textF first  md:p-2 p-0  m-1'>Material</div>
            <div className=' text-xl textF second  md:p-2 p-0 '>Production</div>
          </div>


          <div className=' flex justify-around  bg-slate-100 md:h-28 h-10 w-32  md:w-52  box '>
            <div className=' text-xl textF first  md:p-2 p-0   m-1'>Online</div>
            <div className=' text-xl textF second  md:p-2 p-0 '>Dealership</div>
          </div>



        </div>
        <div className=' md:ml-64 ml-10 relative md:bottom-20 bottom-6'>
          <i className="fa fa-long-arrow-down text-center md:text-4xl text-lg md:mt-3  text-slate-400" aria-hidden="true"></i>
        </div>
        <div className=' flex justify-around  align-middle bg-slate-300 md:h-28 pt-2 pb-1  md:w-52 box md:ml-40 ml-2 w-20 h-10 relative md:bottom-20 bottom-6'>
          <div className=' text-xl textF first  md:p-2 pl-1 pr-1 '>B2B</div>
          <div className=' text-xl textF second  md:p-2 pl-1 pr-1  '>B2B</div>
        </div>

        <div className=' md:ml-52 ml-6 relative md:bottom-20 bottom-10'>
          <i className="fa fa-long-arrow-down text-center text-xl md:text-4xl mt-3 text-slate-400" aria-hidden="true"></i>
        </div>

        <div className=' flex justify-around  bg-slate-100 md:h-28 h-9 md:w-[40%] w-48 box md:ml-10 ml-2 relative md:bottom-20 bottom-10'>
          <div className=' md:text-xl text-sm textF first  md:p-2 pl-1 pr-1   '>Online</div>
          <div className=' md:text-xl textF second  md:p-2 pl-1 pr-1 '>Interview</div>
          <div className=' md:text-xl textF first  md:p-2 pl-1 pr-1 '>Public Data</div>
          <div className=' md:text-xl textF second  md:p-2 pl-1 pr-1  '>Health</div>
        </div>
        <div className=' bg-slate-200 md:w-96 md:h-52 md:ml-[65%] relative md:bottom-60 bottom-40 hover p-3 '>
          <div className=' flex w-full justify-around md:p-3 md:pl-9 md:pr-9' >
            <span className=' text-xs'>0</span>
            <span className=' text-xs'>5000</span>
            <span className=' text-xs'>10000</span>

          </div>
          <div className=' '>
            <div className=' flex lines'>
              <h6 className=' text-xs md:mr-7 mr-3 fn'>Positive </h6>
              <div className=' md:w-64  bg-teal-500 h-6 color1 '></div>
              <h6 className=' text-xs ml-2 fn'>13453</h6>
            </div>
            <div className=' flex mt-1 mb-1 lines'>
              <h6 className=' text-xs md:mr-5 mr-2 fn'>Negative</h6>
              <div className=' md:w-52  bg-teal-500 h-6  color2' ></div>
              <h6 className=' text-xs ml-2 fn'>11987</h6>
            </div>
            <div className=' flex lines'>
              <h6 className=' text-xs md:mr-2 mr-1 fn'>Comments</h6>
              <div className=' md:w-40 bg-teal-500 h-6 color3 '></div>
              <h6 className=' text-xs ml-2 fn'>10984</h6>
            </div>

          </div>
          <div className=' para relative top-2'>
            <p>Total Review</p>
            <p>Positive Review</p>
            <p>Negative Review</p>
            <p>Comments</p>

          </div>

        </div>


      </div>
    </>
  );
}

export default App;
