
function Form (){
    return(
        <form class="max-w-md mx-auto p-8">
            <h1 className="text-2xl font-bold text-blue-400 px-4">REGESTRATION FORM</h1>
  <fieldset class="border border-gray-300 rounded-2xl p-8 mt-10 shadow-xl">
    <legend class="text-lg font-semibold text-gray-700 px-2 text-center">Personal Information</legend>
    
    <div class="mb-4">
      <label for="first name" class="block text-sm font-medium text-gray-600 mb-1">First Name</label>
      <input type="text" id="first name" name="first name" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="enter first name" required />
    </div>
    <div class="mb-4">
    <label for="name" class="block text-sm font-medium text-gray-600 mb-1">Last Name</label>
    <input type="text" id="last name" name="name" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="enter last name" required />
    </div>
    <div class="mb-4">
    <label for="name" class="block text-sm font-medium text-gray-600 mb-1"></label>
    <input type="text" id="last name" name="name" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="enter last name" required />
    </div>


    <div class="mb-4">
      <label for="email" class="block text-sm font-medium text-gray-600 mb-1">Email</label>
      <input type="email" id="email" name="email" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="enter email" required />
    </div>

    <button type="submit" class="mt-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300">
      Submit
    </button>
  </fieldset>
</form>

    );

}
export default Form