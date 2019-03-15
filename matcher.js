/*** Improvements I'd do if I had time:
 * 1)  Move this into separate objects
 * 2)  Load the objects via constructor (ie, dependency injection)
 * 3)  Unit test getLocaleHTML (mocking out the other pieces)
 *
 */

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

function getLocaleHTML(searchString) {
  // search string regex (note that it's based on the beginning of the string)
  var regex = new RegExp("^" + escapeRegExp(searchString), "i");
  var result = "<ul>"; // beginnings of result HTML (default to blank)

  if (searchString == "") {
    // return a blank result if the search string is blank
    return result + "</ul>";
  }

  for (var key in LANGUAGE_BY_LOCALE) {
    // if the regex pattern matches the beginning of the property string
    if (LANGUAGE_BY_LOCALE[key].match(regex)) {
      // add the locale to the result string
      result += "<li>" + LANGUAGE_BY_LOCALE[key] + "</li>";
    }
  }

  // return the final result
  return result + "</ul>";
}

function findLocales() {
  var matchesElement = document.getElementById("matches");
  matchesElement.innerHTML = getLocaleHTML(
    document.getElementById("locale").value
  );
}
