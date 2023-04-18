class GetWordController {
  index({ request, view }) {
    const query = request.input("word");
    const orderedWords = query.split(" ");
    const unorderedWords = orderedWords.reverse();

    return view.render("word", {
      title: "Con controller",
      unorderedWords,
      orderedWords,
    });
  }
}

module.exports = GetWordController;
