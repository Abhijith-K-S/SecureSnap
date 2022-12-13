window.onload = function () {
    var button_full = document.getElementById("button_full")
    button_full.addEventListener("click", takeFullScreenshot)

    var button_custom = document.getElementById("button_custom")
    button_custom.addEventListener("click", takeCustomScreeshot)
}

function takeFullScreenshot() {
    chrome.tabs.captureVisibleTab(null, { format: "png" }, function (dataUrl) {
        var link = document.createElement("a")
        link.download = "screenshot.png"
        link.href = dataUrl
        link.click()
    })
}

function takeCustomScreeshot() {
    chrome.tabs.captureVisibleTab(null, { format: "png" }, function (dataUrl) {
        chrome.tabs.create({ url: dataUrl }, function (tab) {
            var canvas = document.createElement("canvas")
            canvas.width = window.width
            canvas.height = window.height
            document.body.appendChild(canvas)

            // var canvas = document.getElementById("canvas")

            // // Create an image element and set its source to the screenshot
            // var img = document.createElement("img")
            // img.src = dataUrl

            // // Wait for the image to load and then draw it onto the canvas
            // img.onload = function () {
            //     canvas.getContext("2d").drawImage(img, 0, 0)

            //     // Get a reference to the canvas element and the 2D rendering context
            //     var canvas = document.getElementById("myCanvas")
            //     var ctx = canvas.getContext("2d")

            //     // Flag to track whether the user is currently dragging the mouse
            //     var isDragging = false

            //     // Variables to track the starting and current position of the mouse
            //     var startX
            //     var startY
            //     var currentX
            //     var currentY

            //     // Listen for the mousedown event on the canvas
            //     canvas.addEventListener("mousedown", function (event) {
            //         // Set the isDragging flag to true and record the starting position of the mouse
            //         isDragging = true
            //         startX = event.clientX - canvas.offsetLeft
            //         startY = event.clientY - canvas.offsetTop
            //     })

            //     // Listen for the mousemove event on the canvas
            //     canvas.addEventListener("mousemove", function (event) {
            //         if (isDragging) {
            //             // If the user is dragging the mouse, clear the canvas and redraw the selection area
            //             ctx.clearRect(0, 0, canvas.width, canvas.height)
            //             currentX = event.clientX - canvas.offsetLeft
            //             currentY = event.clientY - canvas.offsetTop
            //             drawSelectionArea(startX, startY, currentX, currentY)
            //         }
            //     })

            //     // Listen for the mouseup event on the canvas
            //     canvas.addEventListener("mouseup", function (event) {
            //         // Set the isDragging flag to false
            //         isDragging = false
            //     })

            //     // Function to draw the selection area on the canvas
            //     function drawSelectionArea() {
            //         context.drawImage(null, startX, startY, currentX - startX, currentY - startY)
            // }
        })
    })
}
