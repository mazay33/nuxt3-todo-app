<template>
  <div class=" w-full min-h-screen bg-gray-100">
    <section class="text-center pt-5">
      <h1 class="text-4xl text-gray-700">What are we doing today?</h1>
    </section>
    <section class="rounded w-9/12 p-5 max-w-lg mx-auto focus:outline-blue-300 flex items-center justify-center mt-7 bg-white shadow">
      <form @submit.prevent>
        <input class=" rounded py-2 px-4 border-blue-200" placeholder="Add a todo" type="text">
        <button class="rounded border border-blue-200 py-2 px-4 ml-3 hover:bg-blue-200 transition-all duration-200">Add Todo</button>
      </form>
    </section>
  </div>
</template>
