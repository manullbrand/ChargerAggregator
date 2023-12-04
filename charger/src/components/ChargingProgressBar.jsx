import { useEffect } from "react";

export default function ChargingProgressBar() {
  useEffect(() => {
    document.addEventListener("keydown", function () {
      const progress = document.getElementById("progress");
      const progressText = document.getElementById("progress-text");

      let currentProgress = 0;

      function updateProgress() {
        currentProgress += 1;

        progress.style.background = `conic-gradient(transparent ${
          currentProgress * 3.6
        }deg, #E9FDF7 0deg)`;
        progressText.innerText = `${currentProgress}%`;

        if (currentProgress < 100) {
          setTimeout(() => {
            requestAnimationFrame(updateProgress);
          }, 100);
        }
      }

      updateProgress();
    });
  }, []);

  
  return (
    <>
      <style type="text/css">{`
      .progress-container {
        width: 275px;
        height: 275px;
      }

      .progress {
        background-color: #e9fdf7;
        border-radius: 50%;
        height: 100%;
        width: 100%;
        z-index: 1;
      }

      .progress::before {
        border-radius: 50%;
        content: "";
        position: absolute;
      }

      .progress-border {
        border-radius: 50%;
        height: 89%;
        width: 89%;
        border: 15px dashed #00513A;
        z-index: 0;
      }

      .progress-text {
        color: #00513a;
        z-index: 2;
      }
      `}</style>

      <div class="align-items-center d-flex justify-content-center mt-5 position-relative progress-container">
        <div
          class="align-items-center d-flex justify-content-center position-relative progress"
          id="progress"
        ></div>
        <div
          class="position-absolute progress-border"
          id="progress-border"
        ></div>
        <h2 class=" m-0 position-absolute progress-text" id="progress-text">
          0%
        </h2>
      </div>
    </>
  );
}