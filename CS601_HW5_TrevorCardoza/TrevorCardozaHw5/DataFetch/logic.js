document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('myButton');
    var resultContainer = document.getElementById('resultContainer');
    var errorContainer = document.getElementById('errorContainer');

    button.addEventListener('click', function() {
        fetch("/DataFetch/DegreesEarned.json")
        .then(function(response) {
            if (response.ok) {
            return response.json();
            } else {
            throw new Error('Error: ' + response.status);
            }
        })
        .then(function(data) {
            displayResult(data);
        })
        .catch(function(error) {
            displayError(error);
        });
    });

    function displayResult(data) {
        resultContainer.innerHTML = '';

        var heading = document.createElement('h2');
        heading.textContent = 'Data Result:';
        resultContainer.appendChild(heading);

        data.forEach(function(degree) {
            var degreeDiv = document.createElement('div');
            degreeDiv.classList.add('degree');

            var school = document.createElement('p');
            school.classList.add('school');
            school.textContent = 'School: ' + degree.school;
            degreeDiv.appendChild(school);

            var program = document.createElement('p');
            program.classList.add('program');
            program.textContent = 'Program/Major: ' + degree.program;
            degreeDiv.appendChild(program);

            var type = document.createElement('p');
            type.classList.add('type');
            type.textContent = 'Type: ' + degree.type;
            degreeDiv.appendChild(type);

            var year = document.createElement('p');
            year.classList.add('year');
            year.textContent = 'Year: ' + degree.year;
            degreeDiv.appendChild(year);

            resultContainer.appendChild(degreeDiv);
        });
    }
    function displayError(error) {
        errorContainer.innerHTML = '';
        var errorMessage = document.createElement('p');
        errorMessage.classList.add('errorMessage');
        errorMessage.textContent = 'An error occurred: ' + error.message;
        errorContainer.appendChild(errorMessage);
    }
});
