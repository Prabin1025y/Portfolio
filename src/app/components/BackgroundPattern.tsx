import React from "react";

export const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d2230] via-[#173a52] to-[#255676]"></div>

      {/* Large decorative circles */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-[#255676]/40 to-[#3a7ca0]/30 blur-3xl"></div>
      <div className="absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-gradient-to-r from-[#255676]/30 to-[#3a7ca0]/20 blur-2xl"></div>
      <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-[#255676]/20 border border-[#3a7ca0]/30"></div>

      {/* Geometric shapes */}
      <div className="absolute top-32 right-32 h-12 w-12 rotate-45 bg-[#3a7ca0]/60 rounded-sm shadow-lg"></div>
      <div className="absolute top-60 left-40 h-8 w-8 rounded-full bg-[#3a7ca0]/50 shadow-md"></div>
      <div className="absolute bottom-40 right-20 h-16 w-16 rotate-12 bg-gradient-to-br from-[#255676]/50 to-[#3a7ca0]/40 rounded-lg shadow-lg"></div>
      <div className="absolute top-1/2 right-1/3 h-6 w-6 rotate-45 bg-[#3a7ca0]/70 rounded-sm"></div>
      <div className="absolute top-80 left-1/3 h-10 w-10 rounded-full bg-[#3a7ca0]/50 border-2 border-[#255676]/30"></div>

      {/* Triangular shapes */}
      <div
        className="absolute top-40 right-1/2 w-0 h-0"
        style={{
          borderLeft: "20px solid transparent",
          borderRight: "20px solid transparent",
          borderBottom: "30px solid rgba(58, 124, 160, 0.4)",
        }}
      ></div>
      <div
        className="absolute bottom-60 left-1/4 w-0 h-0 rotate-180"
        style={{
          borderLeft: "15px solid transparent",
          borderRight: "15px solid transparent",
          borderBottom: "25px solid rgba(58, 124, 160, 0.35)",
        }}
      ></div>

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Animated floating elements */}
      <div
        className="absolute top-1/4 left-20 h-4 w-4 rounded-full bg-[#3a7ca0]/60 animate-bounce"
        style={{ animationDuration: "3s" }}
      ></div>
      <div
        className="absolute top-2/3 right-40 h-6 w-6 rounded-full bg-[#3a7ca0]/50 animate-pulse"
        style={{ animationDuration: "4s" }}
      ></div>
      <div
        className="absolute bottom-1/3 left-1/2 h-3 w-3 rotate-45 bg-[#3a7ca0]/70 animate-spin rounded-sm"
        style={{ animationDuration: "12s" }}
      ></div>

      {/* Subtle lines */}
      <div className="absolute top-0 left-1/4 h-full w-px bg-gradient-to-b from-transparent via-[#3a7ca0]/30 to-transparent"></div>
      <div className="absolute top-1/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#3a7ca0]/25 to-transparent"></div>

      {/* Corner decorative elements */}
      <div className="absolute top-8 left-8 h-20 w-20 border-l-2 border-t-2 border-[#3a7ca0]/40 rounded-tl-lg"></div>
      <div className="absolute bottom-8 right-8 h-20 w-20 border-r-2 border-b-2 border-[#3a7ca0]/40 rounded-br-lg"></div>

      {/* Large central decorative circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full border-2 border-[#3a7ca0]/20 bg-[#255676]/10"></div>
    </div>
  );
}; 