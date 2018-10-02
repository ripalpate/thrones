
const printToDom = (stringToPrint) => {
    const selectedDiv = document.getElementById('characters');
    selectedDiv.innerHTML = stringToPrint;
};

export {printToDom};