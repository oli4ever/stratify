// import clsx from "clsx";
// import { Marker } from "./Marker.jsx";

// const Button = ({
//   icon,
//   children,
//   href,
//   containerClassName,
//   onClick,
//   markerFill = "#3A86FF", // Default Stratify blue
//   variant = "primary",
// }) => {
//   const Inner = () => (
//     <>
//       <span
//         className={clsx(
//           "relative flex items-center min-h-[60px] px-6 rounded-2xl overflow-hidden transition-all duration-300 group",
//           variant === "primary"
//             ? "g4 inner-before group-hover:before:opacity-100" // Primary button styles
//             : clsx(
//                 "bg-transparent border-2 border-p3", // Outline base styles
//                 "inner-before group-hover:before:opacity-20", // Subtler hover effect
//                 "group-hover:border-p1 group-hover:bg-p3/10" // Hover enhancements
//               )
//         )}
//       >
//         {/* Marker for both variants with different opacity */}
//         <span
//           className={clsx(
//             "absolute -left-[1px] transition-opacity duration-300",
//             variant === "primary"
//               ? "opacity-100"
//               : "opacity-0 group-hover:opacity-70"
//           )}
//         >
//           <Marker markerFill={markerFill} />
//         </span>

//         {icon && (
//           <img
//             src={icon}
//             alt=""
//             className={clsx(
//               "size-8 mr-4 object-contain z-10 transition-all duration-300",
//               variant === "primary"
//                 ? "group-hover:brightness-125"
//                 : "filter brightness-150 group-hover:brightness-100 group-hover:scale-110"
//             )}
//           />
//         )}

//         <span
//           className={clsx(
//             "relative z-2 font-space-grotesk font-semibold tracking-wide transition-colors duration-300",
//             variant === "primary" ? "text-p1" : "text-p3 group-hover:text-p1" // Text color change on hover
//           )}
//         >
//           {children}
//         </span>
//       </span>

//       {/* Glow effect for both variants */}
//       <span
//         className={clsx(
//           "glow-before glow-after",
//           variant === "outline" && "opacity-0 group-hover:opacity-60" // Softer glow for outline
//         )}
//       />
//     </>
//   );

//   return href ? (
//     <a
//       className={clsx(
//         "relative p-0.5 rounded-2xl group transition-all duration-300",
//         variant === "primary"
//           ? "g5 shadow-500 hover:shadow-[0_0_20px_rgba(58,134,255,0.5)]"
//           : clsx(
//               "border border-p3/30 bg-s1/10", // Subtle initial border
//               "hover:border-p1/50 hover:shadow-[0_0_15px_rgba(58,134,255,0.3)]", // Enhanced hover
//               "backdrop-blur-sm" // Frosted glass effect
//             ),
//         containerClassName
//       )}
//       href={href}
//     >
//       <Inner />
//     </a>
//   ) : (
//     <button
//       className={clsx(
//         "relative p-0.5 rounded-2xl group transition-all duration-300",
//         variant === "primary"
//           ? "g5 shadow-500 hover:shadow-[0_0_20px_rgba(58,134,255,0.5)]"
//           : clsx(
//               "border border-p3/30 bg-s1/10",
//               "hover:border-p1/50 hover:shadow-[0_0_15px_rgba(58,134,255,0.3)]",
//               "backdrop-blur-sm"
//             ),
//         containerClassName
//       )}
//       onClick={onClick}
//     >
//       <Inner />
//     </button>
//   );
// };

// export default Button;

import clsx from "clsx";
import { Marker } from "./Marker.jsx";

const Button = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  markerFill = "#3A86FF", // Default Stratify blue
}) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-6 rounded-2xl overflow-hidden transition-all duration-300 group g4 inner-before group-hover:before:opacity-100">
        {/* Always visible marker */}
        <span className="absolute -left-[1px] opacity-100">
          <Marker markerFill={markerFill} />
        </span>

        {icon && (
          <img
            src={icon}
            alt=""
            className="size-8 mr-4 object-contain z-10 transition-all duration-300 group-hover:brightness-125"
          />
        )}

        <span className="relative z-2 font-space-grotesk font-semibold tracking-wide text-p1 group-hover:text-p3 transition-colors duration-300">
          {children}
        </span>
      </span>

      {/* Strong glow effect */}
      <span className="glow-before glow-after" />
    </>
  );

  return href ? (
    <a
      className={clsx(
        "relative p-0.5 rounded-2xl group transition-all duration-300 g5 shadow-500 hover:shadow-[0_0_20px_rgba(58,134,255,0.5)]",
        containerClassName
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 rounded-2xl group transition-all duration-300 g5 shadow-500 hover:shadow-[0_0_20px_rgba(58,134,255,0.5)]",
        containerClassName
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

export default Button;
