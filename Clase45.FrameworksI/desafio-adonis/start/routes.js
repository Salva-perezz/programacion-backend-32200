"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("sin-controller", async ({ request, view }) => {
  const query = await request.input("word");
  const orderedWords = query.split(" ");
  const unorderedWords = orderedWords.reverse();

  return view.render("word", {
    title: "Sin controller",
    unorderedWords,
    orderedWords,
  });
});
Route.get("con-controller", "GetWordController.index");
