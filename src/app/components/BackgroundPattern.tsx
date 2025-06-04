export const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 top-10 lgtop-20 pointer-events-none" style={{ zIndex: 0 }}>
      {/* Main gradient background - Light Mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] via-[#8EDBD7]/20 to-[#8EDBD7]/30 dark:from-[#0d2230] dark:via-[#173a52] dark:to-[#255676]"></div>

      {/* Large decorative circles - Light Mode */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-[#8EDBD7]/30 to-[#6BC5C1]/20 blur-3xl dark:from-[#255676]/40 dark:to-[#3a7ca0]/30"></div>
      <div className="absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-gradient-to-r from-[#8EDBD7]/25 to-[#6BC5C1]/15 blur-2xl dark:from-[#255676]/30 dark:to-[#3a7ca0]/20"></div>
      <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-[#8EDBD7]/15 border border-[#6BC5C1]/25 dark:bg-[#255676]/20 dark:border-[#3a7ca0]/30"></div>

      {/* Geometric shapes - Light Mode */}
      <div className="absolute top-32 right-32 h-12 w-12 rotate-45 bg-[#6BC5C1]/50 rounded-sm shadow-lg dark:bg-[#3a7ca0]/60"></div>
      <div className="absolute top-60 left-40 h-8 w-8 rounded-full bg-[#6BC5C1]/40 shadow-md dark:bg-[#3a7ca0]/50"></div>
      <div className="absolute bottom-40 right-20 h-16 w-16 rotate-12 bg-gradient-to-br from-[#8EDBD7]/40 to-[#6BC5C1]/30 rounded-lg shadow-lg dark:from-[#255676]/50 dark:to-[#3a7ca0]/40"></div>
      <div className="absolute top-1/2 right-1/3 h-6 w-6 rotate-45 bg-[#6BC5C1]/60 rounded-sm dark:bg-[#3a7ca0]/70"></div>
      <div className="absolute top-80 left-1/3 h-10 w-10 rounded-full bg-[#6BC5C1]/40 border-2 border-[#8EDBD7]/25 dark:bg-[#3a7ca0]/50 dark:border-[#255676]/30"></div>

      {/* Triangular shapes - Light Mode */}
      <div
        className="absolute top-40 right-1/2 w-0 h-0 dark:hidden"
        style={{
          borderLeft: "20px solid transparent",
          borderRight: "20px solid transparent",
          borderBottom: "30px solid rgba(107, 197, 193, 0.3)",
        }}
      ></div>
      <div
        className="absolute bottom-60 left-1/4 w-0 h-0 rotate-180 dark:hidden"
        style={{
          borderLeft: "15px solid transparent",
          borderRight: "15px solid transparent",
          borderBottom: "25px solid rgba(107, 197, 193, 0.25)",
        }}
      ></div>

      {/* Dark mode triangular shapes */}
      <div
        className="absolute top-40 right-1/2 w-0 h-0 hidden dark:block"
        style={{
          borderLeft: "20px solid transparent",
          borderRight: "20px solid transparent",
          borderBottom: "30px solid rgba(58, 124, 160, 0.4)",
        }}
      ></div>
      <div
        className="absolute bottom-60 left-1/4 w-0 h-0 rotate-180 hidden dark:block"
        style={{
          borderLeft: "15px solid transparent",
          borderRight: "15px solid transparent",
          borderBottom: "25px solid rgba(58, 124, 160, 0.35)",
        }}
      ></div>

      {/* Subtle dot pattern - Light Mode */}
      <div className="absolute inset-0 opacity-60 dark:opacity-20">
        <div
          className="h-full w-full dark:hidden"
          style={{
            backgroundImage: "radial-gradient(circle, #6BC5C1 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div
          className="h-full w-full hidden dark:block"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Animated floating elements - Light Mode */}
      <div
        className="absolute top-1/4 left-20 h-4 w-4 rounded-full bg-[#6BC5C1]/50 animate-bounce dark:bg-[#3a7ca0]/60"
        style={{ animationDuration: "3s" }}
      ></div>
      <div
        className="absolute top-2/3 right-40 h-6 w-6 rounded-full bg-[#6BC5C1]/40 animate-pulse dark:bg-[#3a7ca0]/50"
        style={{ animationDuration: "4s" }}
      ></div>
      <div
        className="absolute bottom-1/3 left-1/2 h-3 w-3 rotate-45 bg-[#6BC5C1]/60 animate-spin rounded-sm dark:bg-[#3a7ca0]/70"
        style={{ animationDuration: "12s" }}
      ></div>

      {/* Subtle lines - Light Mode */}
      <div className="absolute top-0 left-1/4 h-full w-px bg-gradient-to-b from-transparent via-[#6BC5C1]/25 to-transparent dark:via-[#3a7ca0]/30"></div>
      <div className="absolute top-1/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#6BC5C1]/20 to-transparent dark:via-[#3a7ca0]/25"></div>

      {/* Corner decorative elements - Light Mode */}
      <div className="absolute top-8 left-8 h-20 w-20 border-l-2 border-t-2 border-[#6BC5C1]/35 rounded-tl-lg dark:border-[#3a7ca0]/40"></div>
      <div className="absolute bottom-8 right-8 h-20 w-20 border-r-2 border-b-2 border-[#6BC5C1]/35 rounded-br-lg dark:border-[#3a7ca0]/40"></div>

      {/* Large central decorative circle - Light Mode */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full border-2 border-[#6BC5C1]/15 bg-[#8EDBD7]/5 dark:border-[#3a7ca0]/20 dark:bg-[#255676]/10"></div>
    </div>
  )
}
