// IMAGE PREVIEW
 
const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
 
imageInput.addEventListener("change", function () {
 
    const file = this.files[0];
 
    if (file) {
 
        const reader = new FileReader();
 
        reader.onload = function (event) {
 
            preview.innerHTML =
                `<img src="${event.target.result}" alt="Ocean Image">`;
 
        };
 
        reader.readAsDataURL(file);
    }
});
 
 
// AI POLLUTION ANALYSIS
// This is a frontend demonstration.
// A real AI model can be connected later.
 
function analyzeImage() {
 
    const result = document.getElementById("result");
 
    if (!imageInput.files.length) {
 
        result.innerHTML =
            "⚠️ Please upload an ocean image first.";
 
        result.style.color = "red";
 
        return;
    }
 
 
    result.style.color = "#078dbb";
 
    result.innerHTML =
        "🤖 AI is analyzing the image...";
 
    setTimeout(function () {
 
        const pollutionLevels = [
            "Low Pollution",
            "Moderate Pollution",
            "High Pollution"
        ];
 
        const randomLevel =
            pollutionLevels[
                Math.floor(Math.random() * pollutionLevels.length)
            ];
 
        if (randomLevel === "Low Pollution") {
 
            result.innerHTML =
                "✅ Analysis Complete: Low Pollution Detected.";
 
        }
 
        else if (randomLevel === "Moderate Pollution") {
 
            result.innerHTML =
                "⚠️ Analysis Complete: Moderate Pollution Detected.";
 
        }
 
        else {
 
            result.innerHTML =
                "🚨 Analysis Complete: High Pollution Detected.";
 
        }
 
    }, 2000);
}
 