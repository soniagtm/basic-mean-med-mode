function findMean(N) {
    let sum = 0;
    let mean = 0;

    document.getElementById("inputlist").innerHTML = "<br>";

    for (var i = 0; i < N; i++) {
        let number = prompt("กรอกตัวเลขที่ " + parseInt(i + 1))
        document.getElementById("inputlist").innerHTML += "ตัวเลขที่ " + parseInt(i + 1) + ": " + number + "<br>"
        sum += parseFloat(number)
    }

    mean = sum / N

    return mean.toFixed(2);
}


function findMedian(N) {
    let numbers = [];
    let median = 0;

    document.getElementById("inputlist").innerHTML = "<br>";

    for (var i = 0; i < N; i++) {
        let number = prompt("กรอกตัวเลขที่ " + parseInt(i + 1))
        document.getElementById("inputlist").innerHTML += "ตัวเลขที่ " + parseInt(i + 1) + ": " + number + "<br>"
        numbers[i] = parseFloat(number)
    }

    let sortedArray = numbers.sort((a, b) => a - b)
    let halfIndex = Math.floor(sortedArray.length / 2)

    median = (sortedArray.length % 2) ? (sortedArray[Math.floor(sortedArray.length / 2)]) : ((sortedArray[halfIndex - 1] + sortedArray[halfIndex]) / 2)

    return median;
}


function findMode(N) {
    let modes = [];
    let count = [];
    let numbers = [];
    let currentNum = 0;
    let maxCount = 0;
    let numFound = 0;

    document.getElementById("inputlist").innerHTML = "<br>";

    for (var i = 0; i < N; i++) {
        numFound = 0;
        let number = prompt("กรอกตัวเลขที่ " + parseInt(i + 1))
        document.getElementById("inputlist").innerHTML += "ตัวเลขที่ " + parseInt(i + 1) + ": " + number + "<br>"
        for (var j = 0; j < i; j++) {
            if (parseFloat(number) === numbers[j]) {
                count[j]++;
                numFound = 1
                if (count[j] > maxCount) {
                    maxCount = count[j]
                }
                break;
            }
        }
        if (numFound !== 1) {
            numbers[i] = parseFloat(number)
            count[i] = 1
        }
    }

    for (i in count) {
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxCount) {
                modes.push(numbers[i]);
            }
        }
    }

    return modes;
}


function findResult(type, N) {
    let typeName = " ";
    let result = 0;
    let modeArray = [];
    let inputID = ["meanInput", "medianInput", "modeInput"];

    document.getElementById(`${inputID[type-1]}`).value = "";
    document.getElementById("panel").style.display = "block";

    if (type === 1) {
        typeName = "Mean"
        result = findMean(N)
    } else if (type === 2) {
        typeName = "Median"
        result = findMedian(N)
    } else {
        modeArray = findMode(N)
    }

    if (type === 1 || type === 2) {
        document.getElementById("result").innerHTML = typeName + " : " + result + "<br>"
    } else {
        if (modeArray.length > 0) {
            document.getElementById("result").innerHTML = "Modes" + " : " + modeArray + "<br>"
        } else {
            document.getElementById("result").innerHTML = "Modes" + " : " + "None" + "<br>"
        }


    }

}