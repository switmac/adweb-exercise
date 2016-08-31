angular.module('app')
    .filter('wordlimit', WordLimitFilter);

function WordLimitFilter() {
    return function (input) {
        //split on the 25th word
        var limitArray = input.split(" ", 25);
        var wordLimit = "";

        for (word in limitArray) {
            wordLimit += " " + limitArray[word];
        }

        if (input.split(" ").length > limitArray.length) {
            wordLimit += "...";
        }

        return wordLimit.trim();
    }
}