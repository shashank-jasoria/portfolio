"use client";

export default function Loader() {
  return (
    <>
      <div className="loaders-container">
        <div className="container">
          <div className="box"></div>
        </div>
      </div>

      <style jsx>{`
        .loaders-container {
          padding: 20px;
          margin: 0 auto;
          width: 700px;
          text-align: center;
          font-size: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .container {
          position: relative;
          display: inline-block;
          box-sizing: border-box;
          padding: 30px;
          width: 25%;
          height: 140px;
        }

        .box {
          position: relative;
          box-sizing: border-box;
          border: 4px solid black;
          width: 80px;
          height: 80px;
          animation: spin 3s linear infinite,
                     profile 8s ease-in-out infinite;
        }

        .box::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          box-sizing: border-box;
          border: 4px solid black;
          width: 60px;
          height: 60px;
          animation: pulse 1.5s ease infinite,
                     profile 8s ease-in-out infinite;
        }

        @keyframes pulse {
          50% {
            border-width: 30px;
          }
        }

        @keyframes profile {
          0% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
        }

        @keyframes spin {
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}