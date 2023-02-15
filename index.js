function introduction(name) {
    console.log(name)
    const backtick = `Hi, my name is ${name}.`
    return backtick
}
function introductionWithLanguage(name, language) {
    console.log(name, language)
    const backtick = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return backtick
}
function introductionWithLanguageOptional(name, language) {
    console.log(name, language)
    const backtick = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return backtick
}
function introductionWithLanguageOptional(name, language = "JavaScript") {
    const backtick = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return backtick
}

