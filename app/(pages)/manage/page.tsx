const BallForm = () => {
    return (
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="selectedBall">
          Select Ball:
        </label>
        <select id="selectedBall" name="selectedBall" className="w-full p-2 mb-4 border rounded">
          <option value="ball1">Ball 1</option>
          <option value="ball2">Ball 2</option>
          {/* Add more options as needed */}
        </select>
  
        <div className="flex -mx-2 mb-4 rounded-2xl items-center  pt-2 bg-yellow-600">
          {/* First Line */}
          <div className="w-1/2 px-2 mb-4 items-center ">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ball1">
              Ball 1:
            </label>
            <input
              id="ball1"
              name="ball1"
              type="text"
              maxLength={2 ?? undefined} 
              className="w-12 p-2 border rounded-full h-12 text-center"
              autoFocus
            />
          </div>

          <div className="w-1/2 px-2 mb-4 items-center ">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ball2">
              Ball 2:
            </label>
            <input
              id="ball2"
              name="ball2"
              type="text"
              maxLength={2 ?? undefined} 
              className="w-12 p-2 border rounded-full h-12 text-center"
              autoFocus
            />
          </div>
          <div className="w-1/2 px-2 mb-4 items-center ">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ball1">
              Ball 3:
            </label>
            <input
              id="ball3"
              name="ball3"
              type="text"
              maxLength={2 ?? undefined} 
              className="w-12 p-2 border rounded-full h-12 text-center"
              //autoFocus
            />
          </div>
          <div className="w-1/2 px-2 mb-4 items-center ">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ball1">
              Ball 4:
            </label>
            <input
              id="ball4"
              name="ball4"
              type="text"
              maxLength={2 ?? undefined} 
              className="w-12 p-2 border rounded-full h-12 text-center"
              //autoFocus
            />
          </div>
          <div className="w-1/2 px-2 mb-4 items-center ">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ball1">
              Ball 5:
            </label>
            <input
              id="ball5"
              name="ball4"
              type="text"
              maxLength={2 ?? undefined} 
              className="w-12 p-2 border rounded-full h-12 text-center"
              //autoFocus
            />
          </div>

        </div>


        {/* ball6-7 */}

        <div className="flex flex-wrap  -mx-2 mb-4 bg-red-100 rounded-2xl justify-center items-center pt-2">
          {/* First Line */}
          <div className="w-1/2 px-2 mb-4 items-center ">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ball1">
              Ball 6:
            </label>
            <input
              id="ball6"
              name="ball6"
              type="text"
              maxLength={2 ?? undefined} 
              className="w-12 p-2 border rounded-full h-12 text-center"
              autoFocus
            />
          </div>

          <div className="w-1/2 px-2 mb-4 items-center ">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ball1">
              Ball 7:
            </label>
            <input
              id="ball7"
              name="ball7"
              type="text"
              maxLength={2 ?? undefined} 
              className="w-12 p-2 border rounded-full h-12 text-center"
              autoFocus
            />
          </div>
          
          </div>



            {/* ball 8 to 12 */}

        <div className="flex flex-wrapd -mx-2 mb-4 rounded-2xl pt-2 bg-red-200">
         
          <div className="w-1/2 px-2 mb-4 items-center ">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ball1">
              Ball 8:
            </label>
            <input
              id="ball8"
              name="ball8"
              type="text"
              maxLength={2 ?? undefined} 
              className="w-12 p-2 border rounded-full h-12 text-center"
              autoFocus
            />
          </div>

          <div className="w-1/2 px-2 mb-4 items-center ">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ball1">
              Ball 9:
            </label>
            <input
              id="ball9"
              name="ball9"
              type="text"
              maxLength={2 ?? undefined} 
              className="w-12 p-2 border rounded-full h-12 text-center"
              autoFocus
            />
          </div>
          
          <div className="w-1/2 px-2 mb-4 items-center ">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ball1">
              Ball 10:
            </label>
            <input
              id="ball10"
              name="ball10"
              type="text"
              maxLength={2 ?? undefined} 
              className="w-12 p-2 border rounded-full h-12 text-center"
              //autoFocus
            />
          </div>
          <div className="w-1/2 px-2 mb-4 items-center ">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ball1">
              Ball 11:
            </label>
            <input
              id="ball11"
              name="ball11"
              type="text"
              maxLength={2 ?? undefined} 
              className="w-12 p-2 border rounded-full h-12 text-center"
              //autoFocus
            />
          </div>
          <div className="w-1/2 px-2 mb-4 items-center ">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ball1">
              Ball 12:
            </label>
            <input
              id="ball2"
              name="ball12"
              type="text"
              maxLength={2 ?? undefined} 
              className="w-12 p-2 border rounded-full h-12 text-center"
              //autoFocus
            />
          </div>

        </div>

        <div className="w-full flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Submit
        </button>

        </div>
      </div>
    );
  };
  
  export default BallForm;